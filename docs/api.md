# APIエンドポイント一覧

## ボード

| メソッド | パス | 説明 |
|----------|------|------|
| GET | `/api/boards/{boardId}` | ボード情報（カラム・カード含む）を取得 |

## カード

| メソッド | パス | 説明 |
|----------|------|------|
| POST | `/api/columns/{columnId}/cards` | カードを新規作成 |
| PATCH | `/api/cards/{cardId}` | カードのタイトルを更新 |
| DELETE | `/api/cards/{cardId}` | カードを削除 |
| PATCH | `/api/cards/{cardId}/move` | カードを別カラムへ移動 |
