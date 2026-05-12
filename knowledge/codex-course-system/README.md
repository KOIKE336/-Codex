# Codex Course System

購入済み教材を `Codex が読みやすい知識資産` に変えるための、最小構成のワークスペースです。

この手の教材は、1つの長文や動画のまま渡すより、次の3層に分けた方が再利用しやすくなります。

- `raw`: 原本。記事本文、動画URL、文字起こし前の素材
- `processed`: 整形済み知識。文字起こし、章ごとの分割、要約、タグ付け
- `assets`: 実行可能な資産。AGENTS.md、Skill案、チェックリスト、評価基準、プロンプト

## おすすめ運用

1. まず原本を `raw` に入れる
2. 動画は必ず文字起こししてから扱う
3. 章や節ごとに分割して `processed` に置く
4. 各チャンクに `stability` を付ける
5. そこから `assets` に再利用物だけ抽出する
6. 最後に `outputs` にレビュー結果や実運用版を出す

## フォルダの役割

```text
knowledge/codex-course-system/
├── AGENTS.md
├── README.md
├── evaluation-rubric.md
├── initial-assessment.md
├── prompts.md
├── raw/
├── processed/
├── assets/
└── outputs/
```

## まず作ると良いファイル

- `raw/article-full.md`
  - Brain本文の原本
- `raw/video-index.md`
  - 動画ごとのURL、章名、公開日、長さ
- `processed/transcript-xx.md`
  - 動画ごとの文字起こし
- `processed/chunk-xx.md`
  - 節単位に分割した知識
- `assets/skill-candidates.md`
  - Skill化候補
- `assets/agents-rules.md`
  - AGENTS.mdへ移すべき恒久ルール

## チャンクの推奨メタ情報

各 `processed/chunk-xx.md` の冒頭に、最低限これを持たせるのがおすすめです。

```md
---
source_id: article-04-15
source_type: article
chapter: 4
section: 4-15
title: フォルダーを参照して動ける
topic_tags: [folder-design, knowledge-base, codex]
stability: durable
actionability: high
confidence: medium
---
```

`stability` の目安:

- `durable`
  - すぐには腐りにくい原理や運用
- `volatile`
  - UI、価格、モデル名、使用枠、日付、対応機能
- `mixed`
  - 原理は使えるが、具体例の更新が必要

## 資産化で残すべきもの

- 繰り返し使える依頼テンプレ
- AGENTS.md に移せる恒久ルール
- Skill化できる手順
- Automation化できる定期タスク
- 初心者向けチェックリスト
- 陳腐化しやすい主張の監視リスト

## 資産化しない方が良いもの

- 価格や値上げ日時
- 特定時点のモデル名の断定
- 当時のUI手順をそのまま固定した説明
- 検証なしで広げた機能一覧

## 重要な考え方

教材を丸ごと覚えさせるより、次の問いに答えられる形へ分解した方が価値が出ます。

- 何が今でも通用する原理か
- 何が2026年5月時点の一時情報か
- 何を自分の運用ルールへ変換できるか
- 何をSkillやAutomationへ落とせるか
- 何は公式情報で再確認すべきか
