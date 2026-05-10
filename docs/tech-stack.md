# 技術スタック

## フロントエンド

| 分類 | 技術 |
|------|------|
| フレームワーク | React 18 + TypeScript |
| ビルドツール | Vite |
| スタイリング | Tailwind CSS |
| 状態管理 | React useState / useReducer |

## バックエンド

| 分類 | 技術 |
|------|------|
| 言語 | Java 21 (LTS) |
| フレームワーク | Spring Boot 4.0.6 |
| API形式 | REST API |
| ビルドツール | Gradle 8.14 (Kotlin DSL) |

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
