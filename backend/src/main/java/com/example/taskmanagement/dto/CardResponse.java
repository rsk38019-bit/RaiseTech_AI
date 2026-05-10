package com.example.taskmanagement.dto;

import com.example.taskmanagement.entity.Card;

public record CardResponse(Long id, String title, int position) {
    public static CardResponse from(Card card) {
        return new CardResponse(card.getId(), card.getTitle(), card.getPosition());
    }
}
