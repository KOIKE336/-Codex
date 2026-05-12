# Evaluation Rubric

教材を `知識資産として使えるか` の観点で見るための基準です。

各項目を 1 から 5 で採点します。

## 1. Operational Specificity

- 1: 抽象論だけで、すぐ試せない
- 3: 手順はあるが、再現に補足が必要
- 5: そのまま実行に移せる

## 2. Transferability

- 1: その教材固有でしか使えない
- 3: 一部は他案件に転用できる
- 5: 別案件や別ツールでも流用できる

## 3. Durability

- 1: 数週間から数か月で古びやすい
- 3: 原理は残るが具体例が古びやすい
- 5: 時間が経っても価値が残る

## 4. Asset Conversion Potential

- 1: 読み物としては良いが、資産化しにくい
- 3: 要約やテンプレに変換できる
- 5: AGENTS.md、Skill、Checklist、Automationまで落とせる

## 5. Evidence Quality

- 1: 主張が多く、根拠が追えない
- 3: 実体験ベースで一定の説得力がある
- 5: 一次情報や再確認可能な根拠が揃っている

## 6. Beginner Usefulness

- 1: 前提知識がないと使えない
- 3: 一部の補助があれば進められる
- 5: 初心者でも着手しやすい

## 7. Obsolescence Risk

これは逆指標です。高いほど古びやすい。

- 1: ほぼ腐らない
- 3: 一部見直しが必要
- 5: かなり頻繁に再確認が必要

## 推奨出力形式

```md
## Overall
- 一言評価:
- 対象読者:

## Scores
| Criterion | Score | Note |
| --- | --- | --- |
| Operational Specificity | 4 | 手順は具体的 |
| Transferability | 3 | 一部は他ツールにも転用可能 |
| Durability | 2 | モデル名やUI依存が多い |
| Asset Conversion Potential | 5 | SkillやAGENTSへ落とせる |
| Evidence Quality | 2 | 実体験中心で公式確認が必要 |
| Beginner Usefulness | 5 | 初学者に強い |
| Obsolescence Risk | 4 | 最新機能依存が多い |

## Keep
- 資産として残すもの

## Rewrite
- 自分用に書き換えるべきもの

## Revalidate
- 公式情報で再確認すべきもの
```
