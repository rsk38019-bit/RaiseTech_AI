package com.example.taskmanagement.dto;

import com.example.taskmanagement.entity.Board;
import java.util.List;

public record BoardResponse(Long id, String title, List<ColumnResponse> columns) {
    public static BoardResponse from(Board board) {
        List<ColumnResponse> columns = board.getColumns().stream().map(ColumnResponse::from).toList();
        return new BoardResponse(board.getId(), board.getTitle(), columns);
    }
}
