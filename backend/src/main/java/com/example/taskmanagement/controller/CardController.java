package com.example.taskmanagement.controller;

import com.example.taskmanagement.dto.CardResponse;
import com.example.taskmanagement.entity.Card;
import com.example.taskmanagement.repository.BoardColumnRepository;
import com.example.taskmanagement.repository.CardRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Transactional
public class CardController {

    private final CardRepository cardRepository;
    private final BoardColumnRepository columnRepository;

    public CardController(CardRepository cardRepository, BoardColumnRepository columnRepository) {
        this.cardRepository = cardRepository;
        this.columnRepository = columnRepository;
    }

    @PostMapping("/api/columns/{columnId}/cards")
    public ResponseEntity<CardResponse> createCard(
            @PathVariable Long columnId,
            @RequestBody Map<String, String> body) {
        return columnRepository.findById(columnId).map(column -> {
            Card card = new Card();
            card.setColumn(column);
            card.setTitle(body.get("title"));
            card.setPosition(cardRepository.countByColumnId(columnId));
            return ResponseEntity.ok(CardResponse.from(cardRepository.save(card)));
        }).orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/api/cards/{cardId}")
    public ResponseEntity<CardResponse> updateCard(
            @PathVariable Long cardId,
            @RequestBody Map<String, String> body) {
        return cardRepository.findById(cardId).map(card -> {
            card.setTitle(body.get("title"));
            return ResponseEntity.ok(CardResponse.from(cardRepository.save(card)));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/api/cards/{cardId}")
    public ResponseEntity<Void> deleteCard(@PathVariable Long cardId) {
        if (!cardRepository.existsById(cardId)) {
            return ResponseEntity.notFound().build();
        }
        cardRepository.deleteById(cardId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/cards/{cardId}/move")
    public ResponseEntity<CardResponse> moveCard(
            @PathVariable Long cardId,
            @RequestBody Map<String, Object> body) {
        Long targetColumnId = Long.valueOf(body.get("columnId").toString());
        int targetPosition = Integer.parseInt(body.get("position").toString());

        return cardRepository.findById(cardId).flatMap(card ->
            columnRepository.findById(targetColumnId).map(column -> {
                card.setColumn(column);
                card.setPosition(targetPosition);
                return ResponseEntity.ok(CardResponse.from(cardRepository.save(card)));
            })
        ).orElse(ResponseEntity.notFound().build());
    }
}
