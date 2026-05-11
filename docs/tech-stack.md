# 技術スタック

## フロントエンド

| 分類 | 技術 | バージョン |
|------|------|-----------|
| フレームワーク | React | 19.2.6 |
| 言語 | TypeScript | 6.0.2 |
| ビルドツール | Vite | 5.4.21 |
| スタイリング | Tailwind CSS | 3.4.19 |
| 状態管理 | React useState / useReducer | − |

## バックエンド

| 分類 | 技術 | バージョン |
|------|------|-----------|
| 言語 | Java | 25 |
| フレームワーク | Spring Boot | 4.0.6 |
| API形式 | REST API | − |
| ビルドツール | Gradle | 8.14 |
| DBマイグレーション | Flyway | − |

## データベース

| 分類 | 技術 |
|------|------|
| RDBMS | PostgreSQL 15 |
| ORM | Spring Data JPA / Hibernate |

## インフラ（AWS）

| 用途 | AWSサービス |
|------|------------|
| フロントエンド配信 | S3 + CloudFront |
| バックエンド実行 | EC2 |
| データベース | RDS (PostgreSQL) |

---

## 制約・前提条件

| 項目 | 内容 |
|------|------|
| フロントエンド実行環境 | Node.js 20 LTS 以上 |
| バックエンド実行環境 | Java 21 以上 |
| パッケージマネージャー | npm または yarn（フロントエンド）、Gradle（バックエンド） |
| DB | PostgreSQL 15 以上 |
| インフラ | AWS（S3 / CloudFront / EC2 / RDS） |
| ライセンス | 学習目的のプライベート利用。OSS ライブラリは各ライセンスに従う |
