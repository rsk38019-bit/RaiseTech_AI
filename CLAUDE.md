# TaskManagement - 開発ルール

## ワークフロー

必ず以下の順序で作業を進める：

1. **Issue作成** — 作業内容をGitHub Issueに登録する
2. **ブランチ作成** — Issue番号に紐づいたブランチを作成する
3. **実装** — ブランチ上で作業する
4. **コミット** — Conventional Commits形式でコミットする
5. **PR作成** — mainブランチへのPRを作成する
6. **マージ** — レビュー承認後にマージする

## ブランチ命名規則

```
<type>/#<issue番号>-<説明>
```

### typeの種類

| type | 用途 |
|------|------|
| `feature` | 新機能の追加 |
| `fix` | バグ修正 |
| `docs` | ドキュメントの変更 |
| `refactor` | リファクタリング |
| `test` | テストの追加・修正 |
| `chore` | ビルドやツールの変更 |

### 例

```
feature/#12-add-login
fix/#34-fix-null-pointer
docs/#56-update-readme
```

## コミットメッセージ（Conventional Commits）

```
<type>(<scope>): <説明>
```

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント
- `refactor`: リファクタリング
- `test`: テスト
- `chore`: その他

### 例

```
feat(auth): ログイン機能を追加
fix(task): タスク削除時のNullPointerExceptionを修正
docs(readme): セットアップ手順を更新
```

## PR・マージのルール

- **mainブランチへの直接プッシュ禁止** — 必ずPR経由でマージする
- **PRには必ずレビューを要求する** — 承認なしのマージ禁止
- **PRタイトル** — Conventional Commits形式に従う
- **PRの説明** — 対応するIssue番号を `Closes #<番号>` で明記する

### PRテンプレート（本文の記載内容）

```
## 概要
<!-- 変更内容の説明 -->

## 対応Issue
Closes #<Issue番号>

## 変更内容
- 

## 確認事項
- [ ] 動作確認済み
- [ ] テスト追加・更新済み（該当する場合）
```

## ClaudeCodeへの指示

- 上記ワークフローを必ず遵守する
- 作業開始時にIssueが存在しない場合は、Issue作成を促す
- mainブランチ上で直接コードを変更しない
- ブランチ作成前にIssue番号を確認する
- コミット前にメッセージがConventional Commits形式か確認する
- PR作成時は必ず `Closes #<番号>` を本文に含める
