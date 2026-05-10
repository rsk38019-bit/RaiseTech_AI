package com.example.taskmanagement.dto;

import com.example.taskmanagement.entity.BoardColumn;
import java.util.List;

public record ColumnResponse(Long id, String title, int position, List<CardResponse> cards) {
    public static ColumnResponse from(BoardColumn col) {
        List<CardResponse> cards = col.getCards().stream().map(CardResponse::from).toList();
        return new ColumnResponse(col.getId(), col.getTitle(), col.getPosition(), cards);
    }
}
