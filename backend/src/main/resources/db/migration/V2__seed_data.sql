INSERT INTO boards (title) VALUES ('サンプルボード');

INSERT INTO columns (board_id, title, position) VALUES
    (1, 'TODO',       0),
    (1, 'IN PROGRESS', 1),
    (1, 'DONE',        2);

INSERT INTO cards (column_id, title, position) VALUES
    (1, 'タスク1', 0),
    (1, 'タスク2', 1),
    (2, 'タスク3', 0);
