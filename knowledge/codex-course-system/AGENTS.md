# Course Ingestion Agent

このフォルダ内で作業するときは、購入済み教材を `再利用可能な知識資産` に変換することを最優先にしてください。

## Primary Goals

- 原本を壊さず保持する
- 教材を `原理` `手順` `テンプレ` `検証事項` に分解する
- Codex で再利用しやすい粒度へ落とす
- 陳腐化しやすい主張を明示する

## Source Handling

- `raw` は原本として扱い、要約や上書きはしない
- 動画はそのまま評価せず、原則として文字起こし後に扱う
- 章や節をまたぐ場合でも、出典が追えるよう source_id を付ける
- 私的利用前提の購入済み教材として扱い、外部公開前提の書き換えはしない

## Transformation Rules

- まず `何が書かれているか` を整理する
- 次に `何が今でも使えるか` を分ける
- 次に `何を AGENTS.md / Skill / Automation / prompt に変換できるか` を抽出する
- 最後に `何を公式情報で再確認すべきか` を列挙する

## Stability Rules

次の内容は原則 `volatile` として扱うこと。

- 価格、割引、値上げ日時
- モデル名、既定モデルの推奨
- UIの位置や設定名
- 対応プラグイン一覧
- 使用量、速度、プラン制限
- 「現時点で一択」などの断定表現

次の内容は原則 `durable` として扱うこと。

- フォルダ設計
- 文字起こし優先の考え方
- AGENTS.md の役割分担
- プロンプト設計の型
- 運用フローの分解
- ナレッジ蓄積の考え方

## Output Preferences

出力は次のどれかに揃えてください。

- 要約
  - 3つから7つの要点
- 資産化
  - `AGENTS rule` `Skill candidate` `Automation candidate` `Checklist` `Prompt`
- 評価
  - rubric に沿った採点と、改善余地、陳腐化リスク

## Evaluation Rules

- 良い点だけでなく、運用上の弱点も明記する
- 断定ではなく、根拠の種類を示す
- 事実確認していない製品主張には `official-doc revalidation required` を付ける
- `初心者向けには強いが、中上級者には冗長` のような対象者差も書く

## File Hygiene

- 生成物は `outputs` または `assets` に出す
- 同じ内容の重複ファイルを量産しない
- 命名は役割ベースにする
  - 例: `chunk-04-15-folder-design.md`
  - 例: `skill-candidates-content-production.md`
