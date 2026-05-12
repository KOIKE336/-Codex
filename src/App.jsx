import React from "react";

const BASE_URL = import.meta.env.BASE_URL || "/";
const withBase = (path) => `${BASE_URL}${path.replace(/^\//, "")}`;

/*
  編集メモ:
  1. ページ全体のタイトルや導入文は `siteCopy` を編集します。
  2. 導入パネルは `introPanels` 配列を編集します。
  3. ユースケース本体は `useCases` 配列を差し替えるだけで更新できます。
  4. 各ユースケースの `storyLead` は、その章の導入パネルです。
  5. 各ユースケースの `sources` に URL を入れると、出典欄へそのまま表示されます。
  6. PDF化はブラウザの印刷機能から実行できます。印刷向けCSSは `src/index.css` にあります。
*/

const siteCopy = {
  eyebrow: "購入特典 Web Book",
  issue: "Vol.01",
  title: "海外でバズったCodex実践ユースケース3選",
  subtitle: "初心者でも真似できるAI開発・業務改善アイデア集",
  summaryLine:
    "この特典では、海外で実際に使われているCodex活用の3パターンを、日本の副業・業務改善・個人開発に置き換えて読める形にしています。",
  description:
    "このページは、海外で話題になっているAIコーディングエージェント活用の型を、日本の初心者にもわかる言葉で再編集した読み物コンテンツです。最初に導入パートで全体像をつかみ、そのあとで実践ステップとプロンプト例まで確認できる構成にしています。",
  note:
    "『CODEXアプリの教科書』のアフィリエイト購入特典として独自に作成した読み物コンテンツです。",
  promise: "海外事例を、日本向けに読み替える"
};

const featuredPillars = [
  {
    emoji: "📌",
    title: "海外で今強い3パターンがわかる",
    body: "どの使い方が本当に話題なのかを、流行紹介で終わらずに整理しています。"
  },
  {
    emoji: "🇯🇵",
    title: "日本向けの置き換え方がわかる",
    body: "副業、業務改善、個人開発のどこに当てはめると使いやすいかまで翻訳しています。"
  },
  {
    emoji: "✍️",
    title: "そのまま試せる日本語プロンプトがある",
    body: "各章に小さく始めるためのプロンプトを入れているので、読み終わったあとすぐ試せます。"
  }
];

const termNotes = [
  {
    term: "run",
    meaning:
      "AIを一定時間動かし続けて、実装・確認・修正などをまとめて進める『実行』のことです。短い run なら数分〜1時間、長い run なら数時間単位で回すイメージです。"
  },
  {
    term: "Pull Request",
    meaning:
      "コードの変更内容を、他の人や自分にレビューしてもらうための提出単位です。『この修正を取り込んでよいですか？』と見せるための申請パック、と考えるとわかりやすいです。"
  },
  {
    term: "planning フェーズ",
    meaning:
      "AIがいきなりコードを書く前に、『どのファイルを触るか』『どういう順番で進めるか』『何を確認したら完了か』を先に整理する作戦タイムです。"
  },
  {
    term: "信頼度 A / B / C",
    meaning:
      "Aは公式情報や複数ソースで補強しやすいもの、BはX投稿ベースで方向性は参考になるもの、Cは環境依存や未確認要素が多いもの、という目安で見てください。"
  },
  {
    term: "AGENTS.md",
    meaning:
      "そのプロジェクトでAIに守ってほしいルールを書くためのファイルです。使う技術、触ってよい範囲、進め方の条件などをまとめる場所として使えます。"
  }
];

const introPanels = [
  {
    id: "question",
    label: "1コマ目",
    title: "まず最初の疑問",
    image: "/intro/overview-1-question.png",
    quote: "Codexって、結局なにができるの？",
    text:
      "機能名だけ見てもイメージしにくいからこそ、海外で実際にどう使われているかを見るのが近道です。最初の理解は“技術”より“使い道”から入るほうがスムーズです。",
    avatar: "🙋‍♀️",
    speaker: "初心者さん",
    role: "副業やAI活用に興味あり",
    sfx: "？",
    tone: "sky",
    span: "half",
    align: "left",
    callout: "難しい理論より、まずは具体例から"
  },
  {
    id: "surprise",
    label: "2コマ目",
    title: "海外で広がった衝撃",
    image: "/intro/overview-2-build.png",
    quote: "最近は『作る』より、『寝ている間に進める』運用そのものが話題になっています。",
    text:
      "単発のコード生成だけでなく、goal を渡して長時間 run（AIを一定時間動かし続ける実行）させる使い方が広がり、AIを『一時的な補助』ではなく『夜間に動く作業者』として見る空気が強くなっています。",
    avatar: "🧠",
    speaker: "ナビゲーター",
    role: "海外事例を解説",
    sfx: "!",
    tone: "warm",
    span: "half",
    align: "right",
    callout: "作る前の迷いが減る"
  },
  {
    id: "maintenance",
    label: "3コマ目",
    title: "細かい往復を減らす",
    image: "/intro/overview-3-maintain.png",
    quote: "しかも最近は、最初に詳しい指示書を渡して、最後までまとめて進めさせる使い方も広がっています。",
    text:
      "チャットで細かく往復するより、先に目的・制約・受け入れ条件を詰めたメモを渡して一気に進めさせる発想です。AIを『その場の相談相手』ではなく『外部の実装担当』のように使う型として注目されています。",
    avatar: "👩‍💻",
    speaker: "実務担当",
    role: "実装を前に進める現場目線",
    sfx: "詳細指示",
    tone: "grape",
    span: "half",
    align: "left",
    callout: "先に詰めるほど、あとが速い"
  },
  {
    id: "team",
    label: "4コマ目",
    title: "次の流れ",
    image: "/intro/overview-4-team.png",
    quote: "さらに、詳しい仕様書や skills を渡して、アプリ完成まで一気に進める流れも出てきています。",
    text:
      "つまり『少し手伝ってもらう』ではなく、『必要な前提を渡して、まとまった成果物まで持っていってもらう』方向です。いまの海外事例は、コード生成より“どこまで任せられるか”の広がりに面白さがあります。",
    avatar: "🧩",
    speaker: "戦略担当",
    role: "成果物までの持ち方を設計",
    sfx: "アプリ完成",
    tone: "mint",
    span: "half",
    align: "right",
    callout: "成果物まで一気に進む"
  },
  {
    id: "summary",
    label: "5コマ目",
    title: "この特典でやること",
    image: "/intro/overview-5-summary.png",
    quote: "だからこの特典では、海外の実践例を『日本人がどこから真似すればよいか』に翻訳して整理します。",
    text:
      "ただの流行紹介ではなく、副業・業務改善・個人開発へ置き換えるための読み物として構成しています。今回は被りにくい3つの本命だけに絞って、切り口の違いがわかるように整理しています。",
    avatar: "📘",
    speaker: "この特典の役割",
    role: "ストーリーの着地",
    sfx: "ここが大事",
    tone: "peach",
    span: "wide",
    align: "left",
    callout: "被りにくい3つの本命に厳選"
  }
];

const readingGuide = [
  {
    emoji: "🎬",
    title: "まずは全体像をざっくり知る",
    body:
      "最初の5コマを見るだけで、『Codexがどんな場面で使われているのか』をざっくりつかめるようにしています。"
  },
  {
    emoji: "🧱",
    title: "次に、自分に関係ある使い方を見つける",
    body:
      "各ユースケースを読みながら、『これは副業向きか』『これは仕事で使えそうか』を判断しやすいように整理しています。"
  },
  {
    emoji: "✍️",
    title: "最後に、小さく試してみる",
    body:
      "各事例には、いきなり大きく始めずに試せる小さいプロンプトも入れているので、気になったものからそのまま触れます。"
  }
];

const readerRoutes = [
  {
    title: "副業メインの人",
    body:
      "まずは 01 の /goal 運用から。平日夜しか時間がない人ほど相性が良く、次に 03 の iOSアプリ完成事例まで見ると『どこまで進められるか』のイメージが掴みやすいです。"
  },
  {
    title: "保守・社内改善が多い人",
    body:
      "02 の『詳しい指示書で一気に進める型』から読むのがおすすめです。仕様や制約を先に固める運用は、社内ツール改修や業務改善タスクへそのまま置き換えやすいです。"
  },
  {
    title: "個人開発の品質を上げたい人",
    body:
      "03 の iOSアプリ完成事例から読むと、成果物まで持っていく流れが見えやすいです。次に 02 を読むと、『そのために最初の指示をどう作るか』もつながります。"
  }
];

const setupGuides = [
  {
    eyebrow: "プロンプトの見方",
    title: "プロンプトで迷いにくくなる3つの観点",
    intro:
      "このページに出てくるプロンプトは、細かく見えるようでいて、実はほぼこの3つで組み立てています。最初は全部うまく書こうとせず、この3点だけ意識すれば十分です。",
    tone: "warm",
    items: [
      {
        number: "1",
        title: "何をやるか",
        body:
          "まずは『何を作るか』『何を直すか』を1文で固定します。例: 設定画面にダークモード切替を追加する。"
      },
      {
        number: "2",
        title: "どこまで入れるか",
        body:
          "欲しい機能や確認したい範囲を先に絞ります。例: ボタン表示、切替、再読み込み後の保持まで。"
      },
      {
        number: "3",
        title: "どんな条件で終えるか",
        body:
          "見た目、対象ファイル、実行時間、エラー有無などの条件を添えます。ここがあるとAIの暴走がかなり減ります。"
      }
    ],
    exampleTitle: "実際のプロンプト例",
    exampleCode:
      "目的: 設定画面にダークモード切替を追加してください。\n対象ファイル: src/pages/Settings.jsx と src/styles/theme.css のみ触ってください。\nやってほしいこと:\n- 切替ボタンを表示する\n- 切替状態を再読み込み後も保持する\n終わりの条件:\n- 色の切替が正しく反映される\n- console error が出ない\n- 45分以内で止める\n最初に短い作業計画を書いてから進めてください。",
    footer:
      "各章のプロンプトを見るときは、『目的』『範囲』『終わりの条件』の3つがどこに書かれているかを探すだけで理解しやすくなります。"
  },
  {
    eyebrow: "ルールの分け方",
    title: "Codexで先に決める2種類のルール",
    intro:
      "毎回同じことを説明しなくて済むように、ルールは『ずっと共通のもの』と『この案件だけのもの』に分けて考えるとラクです。",
    tone: "calm",
    items: [
      {
        number: "A",
        title: "共通ルール",
        body:
          "日本語で返す、専門用語はかみ砕く、大きな変更の前は確認する、のような『どの案件でも変わらない自分の好み』です。"
      },
      {
        number: "B",
        title: "プロジェクトルール",
        body:
          "この案件では React + Tailwind を使う、このフォルダの外は触らない、のような『このプロジェクトだけの条件』です。Codexではプロジェクト直下の AGENTS.md にまとめると整理しやすいです。"
      }
    ],
    placementTitle: "置き場所で役割が分かれる",
    placements: [
      {
        title: "グローバルルール",
        body:
          "パソコン全体の設定側に置くルールです。どのプロジェクトでも共通で守ってほしい、自分の好みを書きます。"
      },
      {
        title: "プロジェクトルール",
        body:
          "作業フォルダの中に置くルールです。その案件でだけ守ってほしい技術や制約を書きます。Codexならプロジェクト直下の AGENTS.md が使いやすいです。"
      }
    ],
    exampleTitle: "AGENTS.md のシンプルな例",
    exampleCode:
      "# AGENTS.md\n\n## この案件の前提\n- React + Tailwind CSS で作成する\n- src/ フォルダの外は勝手に触らない\n\n## 変更時のルール\n- 大きな変更を始める前に、先に短い作業計画を出す\n- まずは小さく実装して、最後に確認ポイントを要約する\n\n## デザイン方針\n- 白背景ベース\n- 初心者向けで見やすくする\n- 余白を広めに取る",
    footer:
      "細かい技術指定やデザイン指定まで共通ルールへ入れると、別の案件で邪魔になります。変わりそうなことはプロジェクト側へ寄せるのが安全です。こうしたルールの分け方は、Codexでもそのまま使えます。"
  }
];

const codexReasons = [
  {
    title: "作業単位ではなく、仕事のまとまりごと任せられる",
    body:
      "コード1行の補完ではなく、要件整理、実装、修正、検証の流れまで一気通貫で任せられる点が大きな変化です。"
  },
  {
    title: "非エンジニアでも最初の一歩が出しやすい",
    body:
      "自然言語で意図を伝えながら修正を重ねられるので、専門用語が少なくてもプロトタイプを前に進めやすくなりました。"
  },
  {
    title: "1人でも小さなチームのように回せる",
    body:
      "修正係、調査係、レビュー係のように役割を切り分ける運用が広がり、個人でも開発速度を上げやすくなっています。"
  }
];

const useCases = [
  {
    id: "overnight-goal",
    badge: "特に注目",
    emoji: "🌙",
    title: "寝ている間に進む /goal 運用",
    shortSummary:
      "Codexに『何を、どこまで、どんな条件で進めるか』を先に渡し、夜のあいだに計画→実装→検証を回してもらう使い方です。",
    storyLead: {
      chapter: "CHAPTER 01",
      title: "『寝る前に投げて、朝に前進している』を作る",
      quote: "昼に開発する時間がないなら、夜のあいだにAIへ進めさせる発想があります。",
      guide:
        "いきなり10時間ランを真似するより、最初は1時間以内の小タスクで『止まり方』と『報告の仕方』を覚えさせるのが安全です。",
      avatar: "🌙",
      sfx: "夜間実行",
      tone: "warm",
      result: "まずは1〜2時間ランで体感"
    },
    meta: {
      difficulty: "中",
      bestFor: "副業開発 / 社内ツール改修 / まとまった実装タスク",
      firstWin: "1〜2時間の小さな /goal 実行"
    },
    coreInsight:
      "この事例の本質は『AIがすごい』ことより、人間が寝ている時間まで含めて仕事の流れを設計し直したことです。単発のコード生成ではなく、長時間タスクをどう安全に任せるかが価値の中心にあります。",
    beforeAfter: {
      before:
        "副業や通常業務のあとにしか開発時間が取れず、疲れた状態で少し進めて終わる。長めの実装や整理タスクほど、着手の心理コストが重くなりやすい状態です。",
      after:
        "夜にゴールと制約だけ渡しておき、朝にはドラフト、テスト結果、詰まった箇所の要約まで揃っている状態を作れます。人は『ゼロから始める人』ではなく『朝に判断する人』へ移りやすくなります。"
    },
    miniScenario:
      "たとえば社内ダッシュボードの新機能追加なら、夜のうちに『対象ファイル・受け入れ条件・最大実行時間』を指定して走らせ、翌朝に差分とテスト結果だけ確認する流れへ変えられます。",
    japanExamples: [
      "副業で平日夜しか触れない個人開発",
      "社内ツールの地味な改修を翌朝レビュー型へ変える運用",
      "仕様は決まっているが、実装にまとまった時間が必要なタスク"
    ],
    tooling: ["Codex /goal mode", "受け入れ条件メモ", "実行時間の上限", "進捗サマリー"],
    successLine:
      "最初の成功ラインは『朝起きたら全部終わっている』ことではなく、『自分が寝ている間に、下書きと検証結果が前に進んでいる』状態を作ることです。",
    whoFits: [
      "副業中で、まとまった開発時間を確保しにくい人",
      "小規模チームで夜間の前進を作りたい人",
      "AIをチャット相手ではなく、長時間の作業担当として使いたい人"
    ],
    avoidFor: [
      "プロンプト設計にまだ慣れていない段階で、いきなり長時間ランへ進むこと",
      "終了条件や予算上限を決めずに、放置実行すること",
      "本番直結の大改修を最初の練習台にすること"
    ],
    sourceTakeaway:
      "このX事例がおもしろいのは、『寝ている間に進む』という派手さ以上に、planning / coding / testing を分ける運用知見まで見せていることです。よくある“1回でアプリ完成”系の解説とは違い、長時間運用の作法が主役です。",
    createdWhat:
      "投稿では、複雑な機能実装やリファクタリングのような長時間タスクを、/goal モードで夜間にまとめて実行するワークフローが共有されていました。単一の成果物より、長時間の進め方そのものが主題です。",
    solvedProblem:
      "『実装する時間はないのに、やるべきタスクだけは積み上がる』という問題を、夜間実行で前に進める考え方です。特に、仕様がある程度固まっているタスクほど相性が良くなります。",
    whyBuzzed:
      "表面的には『寝ている間に開発が進む』未来感が刺さりましたが、本質的に注目されたのは、安全のための条件設定とフェーズ分割で長時間実行の信頼性を上げていた点です。単なるデモではなく、運用ノウハウとして見られています。",
    japanAngle:
      "日本なら、副業の平日夜開発、社内改善タスクの夜間下書き、翌朝レビュー型の小規模開発運用に置き換えやすいです。最初は“夜中に全部完成”ではなく、“翌朝に判断材料が揃う”ところを狙うと現実的です。",
    steps: [
      "まずは 1 時間以内で終わる小さなタスクを選びます。目安は『変更箇所が 1〜2 画面』『確認したい動作が 1 つだけ』です。例: 設定画面にダークモード切替を追加し、再読み込み後も状態が保持されるようにする。",
      "プロンプトには最低でも4つ書きます。1つ目は『目的』、例: 設定画面にダークモード切替を追加。2つ目は『対象ファイル』、例: src/pages/Settings.jsx と src/styles/theme.css だけを触る。3つ目は『終わりの条件』、例: ボタンが表示される、切替が効く、再読み込み後も保持される、console error が出ない。4つ目は『最大実行時間』、例: 45分で止めて要約を返す。",
      "最初の1回は、planning フェーズ（実装前の作戦タイム）を必ず入れます。ここでは『どのファイルを触るか』『どういう順番で進めるか』『何を確認して完了にするか』『詰まったらどこで止まるか』を、コードを書く前に箇条書きで出させます。",
      "朝に確認するときは、コードを読む前に4点だけ見ます。『何を変更したか』『実際に触ったファイルはどれか』『終わりの条件は満たせたか』『まだ残っている不安点は何か』です。この4点が明確なら、次の指示も出しやすくなります。"
    ],
    easyPrompt:
      "目的: この React ページにダークモード切替を追加してください。\n最初に短い作業計画を書いてください。\n作業時間は最大1時間です。\n確認条件:\n- 色の切替が正しく反映される\n- console error が出ない\n完了したら、何を変更したかと、次に私が確認すべき点を要約してください。",
    advancedPrompt:
      "目的: このリポジトリに新しい analytics dashboard を実装してください。\n進め方は planning → coding → testing の順に分けてください。\n最大実行時間は8時間です。\n各フェーズのあとに、次の受け入れ条件を確認してください。\n- responsive layout になっている\n- mock data が charts に正しく入っている\n- console error が出ていない\n- tests が通る\n30分以上詰まった場合は、ループせずに停止し、詰まっている理由・ここまでの進捗・次の最適な進め方を要約してください。",
    pitfalls: [
      "長時間実行は、トークンや利用量の管理を雑にすると一気にコストが膨らみます。",
      "終了条件がないと、細部をいじり続ける無限ループに入りやすくなります。",
      "朝のレビューを省くと、見た目は進んでいても意図とズレた状態に気づきにくくなります。"
    ],
    ideas: [
      "夜は実装、朝はレビュー、昼は追加指示という日次ループへ育てる",
      "同じ構成で、週次のリファクタリングやドキュメント更新へ広げる",
      "長時間 run の前に、別セッションでテスト観点だけ先に作らせる"
    ],
    confidence: "B",
    uncertainties: [
      "投稿ベースのため、10時間超ランの安定成功率は unverified",
      "利用プランやモデル設定ごとの差は unverified"
    ],
    tags: ["夜間運用", "/goal", "副業向け"],
    sources: [
      {
        label: "X: Vaibhav (VB) Srivastav / overnight /goal workflow",
        url: "https://x.com/reach_vb/status/2052805243268718803"
      },
      {
        label: "X: BOOTOSHI / overnight guide for long /goal runs",
        url: "https://x.com/KingBootoshi/status/2052510026535936157"
      }
    ]
  },
  {
    id: "detailed-prd-execution",
    badge: "特に注目",
    emoji: "📋",
    title: "先に詳細な指示書を渡して、一気に進める自律実行",
    shortSummary:
      "最初に詳しい仕様メモと受け入れ条件を渡して、Codexを『その場の相談相手』ではなく『最後まで進める実装担当』のように使う型です。",
    storyLead: {
      chapter: "CHAPTER 02",
      title: "『細かく会話する』より『最初に詰める』で勝つ",
      quote: "いま伸びているのは、短いやり取りを何度も重ねるより、先に詳しい指示書を渡してまとめて進めさせる使い方です。",
      guide:
        "この型は、AIに丸投げするというより『前提をきちんと渡したうえで任せる』発想です。最初は1機能ぶんの短い仕様メモから試すと入りやすいです。",
      avatar: "📋",
      sfx: "詳細指示",
      tone: "grape",
      result: "まずは1機能ぶんの仕様メモで体験"
    },
    meta: {
      difficulty: "中",
      bestFor: "個人開発 / 既存機能の追加 / 仕様が固まっている実装タスク",
      firstWin: "短い仕様メモから実装計画が返る"
    },
    coreInsight:
      "この事例の本質は『AIが何でもわかっている』ことではなく、人間が最初に前提を詰めておくほど、あとの往復が一気に減ることです。チャットの回数を増やすより、最初の指示の質を上げるほうが強いと示した点が新鮮でした。",
    beforeAfter: {
      before:
        "AIにその場その場で相談しながら進めると、前提の抜けや判断の揺れが起きやすく、会話だけ増えて実装が前に進みにくくなります。",
      after:
        "最初に目的・制約・完了条件をまとめたメモを渡すことで、AIは『これを終わらせる担当』として動きやすくなります。人は細かい説明役ではなく、途中の確認役へ移りやすくなります。"
    },
    miniScenario:
      "たとえば会員向けダッシュボードへ売上グラフを追加するなら、対象画面、使うデータ、見た目の条件、止まる条件まで先に書いて渡し、まずは計画を出させてから実装に入る流れへ変えられます。",
    japanExamples: [
      "副業MVPで、仕様が決まっている1機能を先に形にする",
      "社内ツールの追加機能を、詳しい作業メモから進める",
      "既存サービスの画面改善を、受け入れ条件つきで渡す"
    ],
    tooling: ["Codex", "仕様メモ", "受け入れ条件", "実行時間の上限"],
    successLine:
      "最初の成功ラインは『全部を一発で完成させる』ことではなく、『細かい説明を何度も繰り返さなくても、AIが前提を守って進めてくれる』状態を作ることです。",
    whoFits: [
      "アイデアはあるが、チャット往復が増えると疲れる人",
      "個人開発で、機能追加をまとめて進めたい人",
      "社内改善で、目的と制約を先に整理できる人"
    ],
    avoidFor: [
      "作りたいもの自体がまだ曖昧な段階で、詳細指示だけを増やすこと",
      "受け入れ条件を書かずに『いい感じで』に寄せすぎること",
      "最初から大規模機能を一気に任せようとすること"
    ],
    sourceTakeaway:
      "この投稿が強いのは、『AIに相談する』から『詳細なタスク文書を渡して進めさせる』へ発想が変わっていることです。チャット回数の多さではなく、最初に前提をどれだけ明文化できるかが主役になっています。",
    createdWhat:
      "投稿では、詳細な仕様文書を先に渡し、『ここまでやって、ここまで確認して、詰まったら止まる』を決めたうえで実装からテストまで一気に進めるワークフローが紹介されていました。",
    solvedProblem:
      "AIとのやり取りで起きやすい『前提が抜ける』『途中で方向がぶれる』『説明ばかり増える』という問題を、最初の指示書に情報を前倒しすることで減らしています。",
    whyBuzzed:
      "従来の『短いプロンプトを何度も投げる』使い方と真逆で、最初の文書に思い切って情報を寄せる型だったため、実践者に強いインパクトがありました。『AIを外部の実装担当のように使う』感覚が伝わりやすかったのも大きいです。",
    japanAngle:
      "日本なら、『仕様はあるけど着手が重いタスク』に置き換えるとわかりやすいです。副業の機能追加、社内ダッシュボード改修、既存ページの改善など、目的と制約を文章化しやすいものから始めると再現しやすくなります。",
    steps: [
      "まずは1機能だけ選びます。例: ダッシュボードに売上グラフを追加する。",
      "次に、仕様メモを4点だけで作ります。『目的』『対象画面やファイル』『入れたい要素』『完了条件』です。",
      "そのまま実装させる前に、『最初は計画だけ出してください』と書きます。ここでタスク分解と確認順序を先に見ます。",
      "計画を読んで問題がなければ、実装と確認へ進ませます。ズレを感じたら、この段階で1回だけ条件を足すほうが安全です。"
    ],
    easyPrompt:
      "目的: 会員ダッシュボードに売上グラフを追加してください。\nまずはコードを書かず、短い実装計画だけを出してください。\n計画には次の4つを入れてください。\n- 何を作るか\n- どのファイルを触るか\n- 何を確認したら完了か\n- 詰まったらどこで止まるか",
    advancedPrompt:
      "以下の仕様メモを前提に、この機能を実装してください。\n\n目的:\n- 会員向けダッシュボードに売上グラフと絞り込み機能を追加する\n\n条件:\n- 既存の React + Tailwind 構成を壊さない\n- mock data を使ってもよい\n- 対象は dashboard 関連ファイルのみに絞る\n\n完了条件:\n- グラフが表示される\n- 絞り込みが動く\n- console error が出ない\n- tests が通る\n\n進め方:\n- 最初に planning を出す\n- 次に coding\n- 最後に testing\n- 30分以上詰まったら止まり、理由と次の最適な進め方を要約する",
    pitfalls: [
      "最初の指示書が曖昧だと、長く動かしてもズレたまま進みやすいです。",
      "条件を盛り込みすぎると、逆に優先順位が見えなくなることがあります。",
      "途中確認をゼロにすると、手戻りが大きくなりやすいです。"
    ],
    ideas: [
      "仕様メモの型を作って、毎回コピペで始める",
      "planning だけ先に別セッションで作り、そのあと本番 run に渡す",
      "仕様メモの最後に『レビュー担当へ見せる要約』も含める"
    ],
    confidence: "B",
    uncertainties: [
      "投稿内の数値的な生産性差は投稿ベースで unverified",
      "長時間実行の安定度はプロジェクト規模により変わる可能性があります"
    ],
    tags: ["詳細指示", "自律実行", "仕様メモ"],
    sources: [
      {
        label: "X: Ronin / detailed PRD + autonomous execution",
        url: "https://x.com/DeRonin_/status/2051699072298328245"
      },
      {
        label: "X: sudo su / one-shot contractor style",
        url: "https://x.com/sudoingX/status/2051564648978424186"
      },
      {
        label: "X: Vaibhav (VB) Srivastav / large refactor & migration via /goal",
        url: "https://x.com/reach_vb/status/2052805243268718803"
      }
    ]
  },
  {
    id: "ios-one-shot-goal",
    badge: "特に注目",
    emoji: "📱",
    title: "詳しい spec と skills から、iOSアプリを一気に完成へ持っていく",
    shortSummary:
      "詳細な spec と使い回しできる skills を先に渡して、Codexに iOSアプリの雛形ではなく『完成に近い形』まで一気に進めさせる使い方です。",
    storyLead: {
      chapter: "CHAPTER 03",
      title: "『試作で終わる』から『配れる形まで行く』へ",
      quote: "最近は、詳しい spec と skills を揃えたうえで、アプリ1本を数時間で一気に形にする事例も話題です。",
      guide:
        "ここが面白いのは、単なる画面生成で終わらず、シミュレータ確認や TestFlight 手前の状態まで持っていくところです。最初は3画面以内の小さなアプリ案から試すと入りやすいです。",
      avatar: "📱",
      sfx: "アプリ完成",
      tone: "mint",
      result: "まずは3画面以内の小アプリで体験"
    },
    meta: {
      difficulty: "中",
      bestFor: "個人開発 / 副業アプリ試作 / iOS向けMVP",
      firstWin: "触れるアプリ雛形が数時間で返る"
    },
    coreInsight:
      "このケースの価値は、AIがコードを書くことより『完成に必要な前提を最初に揃える』ことです。spec と skills を先に渡しておくことで、会話を重ねなくてもアプリ全体の精度が上がりやすくなります。",
    beforeAfter: {
      before:
        "モバイルアプリを試したくても、画面構成、仕様決め、Xcodeまわり、確認作業が重く、途中で止まりやすい状態です。",
      after:
        "最初に spec と skills を固めておけば、Codex が『画面を作る』『つなぐ』『動作確認する』までまとめて進めやすくなり、個人でもアプリ完成の手前まで届きやすくなります。"
    },
    miniScenario:
      "たとえば家計簿アプリの MVP なら、必要な画面、主要導線、保存内容、見た目の方針を先に spec にまとめて渡し、まずはログインなしの3画面構成で一気に形へ持っていく、という流れが考えやすいです。",
    japanExamples: [
      "副業で試す小さな iPhone アプリ案",
      "既存Webサービスの iOS版プロトタイプ",
      "趣味開発の MVP を短期間で形にする"
    ],
    tooling: ["Codex /goal", "spec メモ", "skills", "iOS simulator", "TestFlight 手前の確認"],
    successLine:
      "最初の成功ラインは『ストア公開まで一気に行く』ことではなく、『人に触ってもらえる形のアプリが短時間で返ってくる』ことです。",
    whoFits: [
      "副業でアプリ案を形にしたい人",
      "個人開発で iOS 向けMVPを早く試したい人",
      "仕様を文章で先に固めるのが苦ではない人"
    ],
    avoidFor: [
      "最初から課金、通知、複雑な認証まで全部を入れようとすること",
      "spec を作らず、画面イメージだけで一気に走らせること",
      "モバイル固有の制約を確認せず、そのまま本番化を急ぐこと"
    ],
    sourceTakeaway:
      "この投稿が強いのは、『モバイルもできます』ではなく『spec と skills を揃えると、アプリ完成の近くまで一気に進む』と示したことです。時間短縮だけでなく、完成物の粒度まで見せているので説得力があります。",
    createdWhat:
      "投稿では、詳細 spec と skills を用意し、/goal で数時間走らせたうえで iOSアプリを完成に近い形まで持っていく流れが共有されていました。単なるプロトタイプではなく、配布直前の手前まで行くのが特徴です。",
    solvedProblem:
      "個人開発や副業では『作ってみたい』から『配れる形にする』までの距離が長く、途中で熱が冷めやすいです。この型は、その距離を短くするために最初の準備を前倒ししています。",
    whyBuzzed:
      "成果物がわかりやすく、しかも『iOSアプリが数時間でここまで行くのか』という驚きが強かったためです。/goal の抽象的な凄さではなく、完成物の具体性がバズの中心にあります。",
    japanAngle:
      "日本なら、副業のアプリ案、既存サービスのモバイル版、趣味開発の小さなMVPに置き換えやすいです。最初から大きなプロダクトを目指さず、『まずは3画面で導線だけ成立させる』とかなり再現しやすくなります。",
    steps: [
      "まずは 3 画面以内の小さなアプリ案を1つ選びます。例: 収支記録、メモ、予約確認。",
      "次に、spec を4点だけで書きます。『誰が使うか』『何画面あるか』『主要導線は何か』『完了条件は何か』です。",
      "使い回したい skills があるなら先に整理します。例: UIの書き方、確認手順、命名ルール。",
      "最初は『計画 → 実装 → 確認』の3段階だけ回し、触れる雛形が返ったら、次に足す機能を1つだけ決めます。"
    ],
    easyPrompt:
      "目的: 3画面以内の iPhone 向けアプリ試作品を作ってください。\nアプリ案:\n- 毎日の支出を1行で記録できる家計簿\n\n条件:\n- 画面は最大3つまで\n- 主要な画面移動がわかること\n- 見た目はシンプルで初心者向け\n\n最初に、短い実装計画だけを書いてください。",
    advancedPrompt:
      "以下の spec と skills を前提に、iOSアプリの MVP を一気に進めてください。\n\nspec:\n- 対象: 個人向けの簡易家計簿アプリ\n- 画面: ホーム / 入力 / 履歴 の3画面\n- 主要導線: 入力して保存し、履歴で確認できる\n- 見た目: 余白を広め、初学者でも触りやすい\n\n進め方:\n- 最初に planning を出す\n- 次に implementation\n- その後 simulator で確認する\n- 詰まったら停止し、理由と次に私が判断すべき点を要約する",
    pitfalls: [
      "spec が足りないと、画面はできても導線がぶれやすくなります。",
      "完成に近い形が返ってきても、そのまま本番品質とは限りません。",
      "skills を増やしすぎると、最初は何が効いたのか見えにくくなります。"
    ],
    ideas: [
      "まずは iOS だけで作り、手応えがあれば Web 版へ広げる",
      "同じ spec で別UI案を2つ出して比較する",
      "MVP完成後に、AGENT SKILLS 特典のレビュー役を重ねて磨く"
    ],
    confidence: "B",
    uncertainties: [
      "TestFlight 直前までの再現性は環境依存の可能性があります",
      "実際の完成時間はアプリ規模と skills の整備度によって変わります"
    ],
    tags: ["iOSアプリ", "spec", "skills", "副業向け"],
    sources: [
      {
        label: "X: Kevin Kern / one-shot iOS app with /goal + skills",
        url: "https://x.com/kevinkern/status/2050970315346395421"
      }
    ]
  },
  {
    id: "multi-agent-coordination",
    badge: "追加で押さえたい",
    emoji: "🤝",
    title: "役割分担した複数エージェントで並行して進める",
    shortSummary:
      "1つの会話で全部やらせるのではなく、設計役・実装役・レビュー役のように分けて、複数のCodexセッションで同時に進める使い方です。",
    storyLead: {
      chapter: "+ 応用 CASE 04",
      title: "『1人で全部』から『AIチームで分担』へ",
      quote: "1つのAIに全部を持たせるより、役割を分けて並行させるほうが強い場面があります。",
      guide:
        "最初から3役4役に広げる必要はありません。まずは設計役と実装役の2つに分けるだけでも、『役割を分ける意味』がかなり見えます。",
      avatar: "🤝",
      sfx: "役割分担",
      tone: "sky",
      result: "2役に分けて体験"
    },
    meta: {
      difficulty: "中",
      bestFor: "中規模改修 / 調査と実装の分離 / 並行作業",
      firstWin: "設計役と実装役を分けられる"
    },
    coreInsight:
      "このケースの価値は、AIが賢いこと以上に『文脈を分けて持たせる』ことです。1つの会話へ全部詰め込むと混ざるものを、役割ごとに整理すると、個人でも小さなチームのように回しやすくなります。",
    beforeAfter: {
      before:
        "1つの会話の中で、調査、設計、実装、確認を全部やらせると、途中から論点が混ざりやすく、何を誰に任せているのかが曖昧になります。",
      after:
        "設計役は設計だけ、実装役はコードだけ、レビュー役は確認だけ、と役割を分けることで、各セッションの目的がはっきりし、同時進行もしやすくなります。"
    },
    miniScenario:
      "たとえば特典ページ改修なら、1つのセッションで情報設計だけ考えさせ、別のセッションで実装だけ進めさせる。最後にレビュー役が全体を見て抜け漏れを拾う、という流れです。",
    japanExamples: [
      "社内ツールの設計と実装を分けて進める",
      "個人開発で調査役と実装役を分ける",
      "複数ページ改修で、確認役を別に立てる"
    ],
    tooling: ["複数のCodexセッション", "役割メモ", "進捗要約", "統合担当の自分"],
    successLine:
      "最初の成功ラインは、AIチームを完璧に作ることではなく、『この役割はこの会話で進める』と分けるだけで整理しやすくなることです。",
    whoFits: [
      "1人で複数タスクを同時に抱えがちな人",
      "設計と実装を頭の中で分けたい人",
      "Codexを複数セッションで使うことに抵抗がない人"
    ],
    avoidFor: [
      "最初から役割を増やしすぎること",
      "役割分担だけ決めて、受け渡し内容を決めないこと",
      "小さな単独タスクまで無理に複数役へ分けること"
    ],
    sourceTakeaway:
      "この事例が強いのは、『AIを増やした』ことではなく『役割を分けて会話を設計した』ことです。単一セッションの限界を、文脈の分割で越える発想がバズりました。",
    createdWhat:
      "投稿では、複数のエージェントがメッセージをやり取りしながら、計画、レビュー、分担を進める『Agent Mail』型の協調が紹介されていました。1人でAIチームを持つ感覚に近い事例です。",
    solvedProblem:
      "1つのAIセッションに全部を載せると、長くなるほど混線しやすくなります。この型は、役割を分けることで文脈の衝突を減らし、並行性も上げています。",
    whyBuzzed:
      "『複数のAIがやり取りして進める』見た目の新しさが強く、しかも実際のワークフロー改善にもつながるため、未来感と実用性の両方で話題になりました。",
    japanAngle:
      "日本なら、1人で社内改善や個人開発を進めるときに、『設計役』『実装役』『確認役』を頭の中で分ける代わりに、会話そのものを分ける発想として取り入れやすいです。最初は2役だけで十分です。",
    steps: [
      "まずは 2 役だけ決めます。例: 設計役と実装役。",
      "各役に『何を返すか』を固定します。設計役はタスク分解、実装役はコードと確認結果、のように役割を分けます。",
      "設計役の出力を、そのまま実装役へ渡します。自分はその受け渡しだけを見る形にすると整理しやすいです。",
      "使えそうなら、最後に確認役を足して3役へ広げます。"
    ],
    easyPrompt:
      "今日はAIを2役に分けて進めます。\nまずあなたは設計役として、次の機能を3〜5個の小タスクへ分解してください。\n出力には各タスクの目的と完了条件を入れてください。\nコードはまだ書かないでください。",
    advancedPrompt:
      "このタスクを、設計役・実装役・確認役の3役で進める前提で整理してください。\nまずは設計役として、\n- タスク分解\n- 各タスクの優先順位\n- 実装役へ渡すべき前提\nをまとめてください。\nそのあと、実装役へ渡す指示文の下書きと、最後に確認役が見るべき観点も作ってください。",
    pitfalls: [
      "役割を増やしすぎると、逆に受け渡し管理が重くなります。",
      "各役の責任範囲が曖昧だと、同じことを何度もやりがちです。",
      "小さなタスクでは、単一セッションのほうが速いこともあります。"
    ],
    ideas: [
      "実装役とは別に、ドキュメント整理役を立てる",
      "レビュー役に『初心者向けかどうか』だけを見させる",
      "毎回の役割テンプレを AGENTS.md とプロンプトで固定する"
    ],
    confidence: "B",
    uncertainties: [
      "具体的な協調方法は投稿ベースで細部が unverified です",
      "複数セッション運用の向き不向きはタスク規模によって差があります"
    ],
    tags: ["複数エージェント", "役割分担", "並行作業"],
    sources: [
      {
        label: "X: Jeffrey Emanuel / multi-agent coordination",
        url: "https://x.com/doodlestein/status/1984344027576033619"
      }
    ]
  },
  {
    id: "mobile-parallel",
    badge: "追加で押さえたい",
    emoji: "📱",
    title: "思いついたら即モバイル化する並列プロトタイピング",
    shortSummary:
      "モバイル向けのアイデアを、重いセットアップに入る前にCodexへ投げて、複数案を軽く並列で形にしていく使い方です。",
    storyLead: {
      chapter: "+ 応用 CASE 05",
      title: "『やってみたい』を熱いうちに形にする",
      quote: "思いついたアプリ案を、セットアップ疲れの前に形へ変える。",
      guide:
        "これは軽めの補助事例です。大事なのは『モバイル開発の全工程』ではなく、『最初の心理的ハードルを下げる』視点で読むことです。",
      avatar: "📱",
      sfx: "試作比較",
      tone: "peach",
      result: "週末試作に向く"
    },
    meta: {
      difficulty: "低",
      bestFor: "趣味開発 / 副業アプリ試作 / アイデア比較",
      firstWin: "1アイデアをモバイル向け雛形へ"
    },
    coreInsight:
      "この事例の価値は、技術的に高度なことより『思いついた瞬間の熱量を落とさない』ことです。重いIDEや事前準備で止まりがちなモバイル開発の入口を軽くする、かなり個人開発者目線の話です。",
    beforeAfter: {
      before:
        "モバイルで試したいアイデアがあっても、環境構築やツールの重さで着手が遅れ、結局そのまま流れてしまいやすいです。",
      after:
        "まずはモバイル向けの雛形や導線を短時間で出して比較できるので、『実装前に熱が冷める』問題を減らせます。"
    },
    miniScenario:
      "通勤中に思いついたメモアプリや予約アプリの案を、その日の夜にモバイル向けの画面構成だけでも出して比べる、といった使い方に向いています。",
    japanExamples: [
      "副業で試す小さなモバイルアプリ案",
      "Webサービスのモバイル版プロトタイプ",
      "趣味開発で複数アイデアを比べる初期検証"
    ],
    tooling: ["Codex", "モバイル向けUIの指示", "小さな画面遷移", "軽い比較メモ"],
    successLine:
      "最初の成功ラインは、複数案を並列で回すことではなく、1つのアイデアを『触れるモバイル向け雛形』まで持っていくことです。",
    whoFits: [
      "副業でアプリ案を試したい人",
      "モバイル開発の初速を上げたい個人開発者",
      "趣味開発でアイデア比較をしたい人"
    ],
    avoidFor: [
      "モバイル特有の制約を理解しないまま、本番アプリ化を急ぐこと",
      "いきなり複数案を同時進行して比較軸をなくすこと"
    ],
    sourceTakeaway:
      "この事例は本命3本ほど深い運用話ではありませんが、『思いついたら即試す』という個人開発のリアルな動機に寄っているのが面白いです。軽い補助事例として入れると、初心者の距離感が近くなります。",
    createdWhat:
      "投稿では、モバイル向けアプリのアイデアを並列で Codex に投げ、高速にプロトタイピングする発想が示されていました。完成品の詳細より、初速の軽さが主題です。",
    solvedProblem:
      "アイデアはあるのに、着手前の面倒さで止まる問題を減らします。特に、個人開発では“やってみる前に諦める”こと自体が損失になるので、この入口の軽さが効きます。",
    whyBuzzed:
      "Apple向け開発ツールである Xcode を重く感じる個人開発者の共感を集めやすく、『まず形にしてみる』文化との相性も良かったためです。バズの中身は、完成度より初速の気持ちよさにあります。",
    japanAngle:
      "日本では、趣味開発、副業の週末試作、既存Webサービスのモバイル版イメージ出しに置き換えやすいです。いきなりネイティブ完成を目指さず、画面遷移と主要導線だけ見る使い方が向いています。",
    steps: [
      "まずは 1 アイデアだけ選び、3 画面以内の構成に絞ります。",
      "『モバイル向けで』『最低限の画面移動付きで』と条件を短く固定します。",
      "生成された雛形を触って、次に残す案か、捨てる案かを決めます。",
      "複数案を比べるのは、1案ずつ試して感触がつかめてからで十分です。"
    ],
    easyPrompt:
      "このシンプルな Web アプリ案を、モバイル向けの試作品に変えてください。\n条件は次の3つです。\n- 画面数は最大3つまで\n- 基本的な画面移動を入れる\n- 主要な操作の流れがすぐ見える構成にする",
    advancedPrompt:
      "このプロダクト案に対して、モバイル向けの試作品を作ってください。\nあわせて画面遷移の別案を2つ提案してください。\n今回は完成度よりスピードを優先し、準備は最小限にしてください。\n最重要のユーザー導線を最優先にし、どの案から先に試すのがよいか理由つきで説明してください。",
    pitfalls: [
      "モバイル特有の挙動や最適化は、雛形だけでは十分に詰まりません。",
      "並列で案を増やしすぎると、比較する前に散らかります。",
      "雛形の気持ちよさだけで、本番化の難しさを見落としやすいです。"
    ],
    ideas: [
      "Web版があるなら、モバイル向けの導線だけ別で試す",
      "ユーザー導線別に2案作って、どちらが触りやすいか比較する",
      "手応えがあった案だけ、次に認証や保存機能を足していく"
    ],
    confidence: "B",
    uncertainties: ["完成アプリの詳細や再現範囲は unverified"],
    tags: ["モバイル試作", "個人開発", "初速重視"],
    sources: [
      { label: "X: hayden / mobile parallel prototyping", url: "https://x.com/hxxwhite/status/2052050756459810929" }
    ]
  }
];

const recommendationPatterns = [
  {
    title: "副業で使うなら",
    body:
      "まずは、自分の商品やサービスの周辺にある小さな不便を解消するツールを作るのがおすすめです。例: 顧客管理、進捗確認、資料生成。"
  },
  {
    title: "会社の業務改善で使うなら",
    body:
      "いきなり基幹システムに入れず、問い合わせ管理、報告テンプレート、手作業転記の削減など、失敗時の影響が小さい業務から始めると進めやすいです。"
  },
  {
    title: "個人開発で使うなら",
    body:
      "最初は機能の多さより『誰のどんな手間を減らすのか』を明確にし、試作品を小さく公開して反応を見るやり方が相性良好です。"
  }
];

const firstSteps = [
  "CodexやCursorなど、試しやすい環境を1つだけ選ぶ",
  "今の仕事や副業で『毎週くり返している作業』を3つ書き出す",
  "その中から、入力と出力が比較的単純なものを1つ選ぶ",
  "最小機能だけをAIに作らせるか、修正させる",
  "最後に、自分で使ってみて次の改善指示を1つ返す"
];

const agentSkillBonusCards = [
  {
    emoji: "🗺️",
    title: "長期Goal計画立案エージェント",
    phase: "着手前",
    fit: "副業 / MVP / 機能追加前",
    body:
      "大きめの目標を小タスクへ分解し、何から着手するかを整理する役です。/goal 実行の前に使うと失敗しにくくなります。",
    include: "AGENTS.md 例 + 計画分解プロンプト",
    whenToUse:
      "例: 『会員ダッシュボードに売上グラフを入れたい』けど、何から手を付けるか決まらないとき",
    tip: "実装役より先に使うと効果が出やすいです。",
    agentsSnippet:
      "## 計画立案エージェント\n\n- いきなり実装を始めず、まず短い実行計画を出してください\n- 大きな目標は、3〜7個の小タスクに分解してください\n- 各タスクについて、目的・対象ファイル・完了条件を明記してください\n- 最初に触るべき1タスクを提案してください",
    promptSnippet:
      "この目標を、実装しやすい順番に分解してください。\n\n目標:\n- 会員向けダッシュボードに、売上グラフとフィルタ機能を追加したい\n\n出力ルール:\n- いきなりコードは書かない\n- まず 3〜7 個の小タスクに分解する\n- 各タスクに「目的」「触るファイル」「完了条件」を付ける",
    download: "/agentskills/01-planning-agent.md",
    filename: "01-planning-agent.md"
  },
  {
    emoji: "🧪",
    title: "確認漏れを防ぐテスト観点整理エージェント",
    phase: "実装直後",
    fit: "新機能追加 / リファクタ前 / 公開前確認",
    body:
      "正常系、異常系、境界値の確認観点を先に洗い出す役です。いきなりテストコードを書く前の整理に向いています。",
    include: "AGENTS.md 例 + テスト観点整理プロンプト",
    whenToUse:
      "例: ログインフォームを作ったあとに、何を確認すれば安心かを先に洗い出したいとき",
    tip: "テストコード生成より先に、観点整理だけさせると扱いやすいです。",
    agentsSnippet:
      "## テスト観点整理エージェント\n\n- テストケースを作るときは、正常系・異常系・境界値を分けて考えてください\n- 実装コードを書く前に、まず確認観点を列挙してください\n- 重要度が高いものから順番に並べてください",
    promptSnippet:
      "この機能に対して、先に確認観点を整理してください。\n\n対象:\n- メールアドレスとパスワードでログインするフォーム\n\n出力ルール:\n- 正常系\n- 異常系\n- 境界値\nに分けて列挙する\n- 最後に、最初に確認すべき3件だけ選ぶ",
    download: "/agentskills/05-test-case-agent.md",
    filename: "05-test-case-agent.md"
  },
  {
    emoji: "🔎",
    title: "人に見せる前の差分チェックエージェント",
    phase: "提出前",
    fit: "保守 / 小規模チーム / 副業案件",
    body:
      "変更差分を先に読み、明らかなバグ・テスト漏れ・危ない変更を洗い出す役です。人間レビューの往復を減らしやすいです。",
    include: "AGENTS.md 例 + レビュー用プロンプト",
    whenToUse:
      "例: フォーム修正や一覧表示の調整を終えて、人に見せる前に危ない差分だけ先に拾いたいとき",
    tip: "最初は3〜4観点に絞ると使いやすいです。",
    agentsSnippet:
      "## 差分チェックエージェント\n\n- 差分レビューでは、まず明らかなバグ・想定外入力への対応漏れ・テスト不足を確認してください\n- 指摘は「必ず直したい」「余裕があれば改善したい」に分けてください\n- 結果は短く、箇条書きで返してください",
    promptSnippet:
      "この変更差分を、Pull Request を出す前のレビューとして確認してください。\n\n見てほしい観点:\n- 明らかなバグ\n- 想定外の入力や分岐への対応漏れ\n- テストが足りない箇所\n- セキュリティ上の気になる点\n\n最後に、レビュー担当へ見せる短い要約も書いてください。",
    download: "/agentskills/02-pr-review-agent.md",
    filename: "02-pr-review-agent.md"
  },
  {
    emoji: "🐞",
    title: "不具合の再現と原因切り分けエージェント",
    phase: "不具合発生時",
    fit: "保守 / エラー対応 / 初心者向け",
    body:
      "バグ報告やログを受け取って、再現手順・原因候補・最初に見るべき場所を整理する役です。",
    include: "AGENTS.md 例 + デバッグ用プロンプト",
    whenToUse:
      "例: 『ログイン後に画面が真っ白になる』と言われたが、再現手順も原因もまだ見えていないとき",
    tip: "スクショ・ログ・再現条件の3つがあると精度が上がりやすいです。",
    agentsSnippet:
      "## バグ切り分けエージェント\n\n- バグ調査では、まず再現手順を明文化してください\n- ログ・画面・関連コードから、原因候補を2〜3個に絞ってください\n- 結果は「再現手順」「怪しい場所」「次の確認」の3つで返してください",
    promptSnippet:
      "このバグ報告とログをもとに、原因を切り分けてください。\n\nバグ報告:\n- ログイン後に一覧画面が真っ白になる\n\nログ:\n- console に \"Cannot read properties of undefined\" が出る\n\n出力ルール:\n- まず再現手順を書く\n- 次に原因候補を2〜3個に絞る",
    download: "/agentskills/03-bug-debug-agent.md",
    filename: "03-bug-debug-agent.md"
  },
  {
    emoji: "🎨",
    title: "見た目の仕上げチェックエージェント",
    phase: "仕上げ前",
    fit: "LP / 特典ページ / 個人開発",
    body:
      "画面の見た目を確認して、情報量、余白、強弱、AIっぽさの有無をレビューする役です。仕上げ段階で効きます。",
    include: "AGENTS.md 例 + UIレビュー用プロンプト",
    whenToUse:
      "例: 動作は問題ないが、『なんとなく読みにくい』『CTAが弱い』を直したい仕上げ段階",
    tip: "実装前より、1回作ったあとに使うほうが効きます。",
    agentsSnippet:
      "## UIチェック&改善エージェント\n\n- UIを確認するときは、まず情報密度と視線誘導を見てください\n- 余白、見出しの強弱、配色、カードのメリハリを具体的に指摘してください\n- 改善案は優先順位つきで返してください",
    promptSnippet:
      "このUIを確認して、初心者向けの特典ページとして読みやすいかレビューしてください。\n\n見てほしい観点:\n- 情報量が詰まりすぎていないか\n- 見出しと本文の強弱があるか\n- 余白が足りているか\n- いかにもAIっぽい平均的デザインになっていないか",
    download: "/agentskills/04-ui-check-agent.md",
    filename: "04-ui-check-agent.md"
  }
];

const agentSkillPhaseGuide = [
  {
    phase: "着手前",
    title: "何から始めるか決めたい",
    body: "まずは長期Goal計画立案で、目標を小タスクへ分けます。"
  },
  {
    phase: "実装直後",
    title: "何を確認するか先に並べたい",
    body: "テスト観点整理で、正常系・異常系・境界値の確認漏れを減らします。"
  },
  {
    phase: "提出前",
    title: "人に見せる前に危ない差分を拾いたい",
    body: "差分チェックで、明らかなバグやテスト不足を先に洗い出します。"
  },
  {
    phase: "不具合発生時",
    title: "壊れたけど、どこから調べるか迷う",
    body: "バグ切り分けで、再現手順と原因候補を先に整理します。"
  },
  {
    phase: "仕上げ前",
    title: "動くけど、見た目が弱い",
    body: "UI仕上げチェックで、余白・強弱・視線誘導を整えます。"
  }
];

const agentSkillDownloads = [
  {
    emoji: "📘",
    title: "最初の使い方ガイド",
    body:
      "どのmdから使えばよいか、AGENTS.md と毎回のプロンプトの違い、最初の進め方を1枚でまとめたガイドです。",
    href: "/agentskills/README_AGENTSKILLS.md",
    filename: "README_AGENTSKILLS.md"
  },
  {
    emoji: "🧩",
    title: "5本まとめて読む用",
    body:
      "5本の役割、AGENTS.md 例、コピペ用プロンプトを1つのmdにまとめた全体版です。まず全体を眺めたい人向けです。",
    href: "/agentskills/00-agent-skills-5pack.md",
    filename: "00-agent-skills-5pack.md"
  }
];

const agentSkillHowTo = [
  {
    number: "1",
    title: "使いたい役割を1つだけ選ぶ",
    body:
      "最初から5本全部を使う必要はありません。今の作業に近いものを1つだけ選ぶほうが、AIの役割がぶれにくいです。"
  },
  {
    number: "2",
    title: "AGENTS.md の例をプロジェクトに入れる",
    body:
      "その案件で毎回守ってほしい進め方だけを、プロジェクト直下の AGENTS.md に入れます。常設ルールの役目です。"
  },
  {
    number: "3",
    title: "作業時にコピペ用プロンプトを送る",
    body:
      "今回だけの目的や範囲は、チャットで別に送ります。AGENTS.md が土台、プロンプトが今回の依頼、という分担です。"
  }
];

const agentSkillUseExample = {
  title: "たとえば人に見せる前の差分チェックなら、こんな流れで使います",
  steps: [
    "まずプロジェクト直下の AGENTS.md に『差分レビューでは、明らかなバグ・想定外入力への対応漏れ・テスト不足を先に見る』と書いておきます。",
    "次に、作業が終わったタイミングで『この変更差分をレビューしてください』というコピペ用プロンプトを送ります。",
    "するとAIは、毎回の土台ルールを読んだうえで、今回の差分だけを見てレビューを返しやすくなります。",
    "返ってきた指摘を見て、自分で直すか、人間レビューへ出すかを判断します。"
  ],
  agentsExample:
    "## 差分チェックエージェント\n\n- 差分レビューでは、まず明らかなバグ・想定外入力への対応漏れ・テスト不足を確認してください\n- 指摘は『必ず直したい』『余裕があれば改善したい』に分けてください\n- 結果は短く、箇条書きで返してください",
  promptExample:
    "この変更差分を、Pull Request を出す前のレビューとして確認してください。\n\n見てほしい観点:\n- 明らかなバグ\n- 想定外の入力や分岐への対応漏れ\n- テストが足りない箇所\n- セキュリティ上の気になる点\n\n最後に、レビュー担当へ見せる短い要約も書いてください。",
  takeaway:
    "ポイントは、AGENTS.md に毎回の進め方を書き、チャットでは今回の依頼だけを送ることです。これで毎回の説明が減り、役割もぶれにくくなります。"
};

const closingPanels = [
  {
    emoji: "💼",
    title: "副業なら",
    body:
      "今週中に 01 の小さい /goal プロンプトを1回だけ試してみてください。『夜のうちに下書きが進む』感覚をつかめるだけでも前進です。"
  },
  {
    emoji: "🏢",
    title: "社内改善なら",
    body:
      "毎週くり返している確認や差分レビューを1つ選び、02 の『詳しい指示書を渡して進める型』か追加特典の差分チェックへ置き換えられないか考えると入りやすいです。"
  },
  {
    emoji: "🛠️",
    title: "個人開発なら",
    body:
      "02 の『詳しい指示書を渡して進める型』を使って、1機能ぶんの仕様メモから小さく実装してみると、チャット往復のしんどさがかなり減ります。"
  }
];

const disclaimers = [
  "このページは、海外で共有されている活用傾向を参考に再編集したものであり、成果や収益を保証するものではありません。",
  "各ツールの料金、提供内容、利用規約は変更される場合があります。導入前に必ず公式情報をご確認ください。",
  "実運用では、セキュリティ、個人情報、著作権、社内ルールに配慮したうえでご活用ください。"
];

const toneClassMap = {
  warm: "comic-tone-warm",
  sky: "comic-tone-sky",
  grape: "comic-tone-grape",
  mint: "comic-tone-mint",
  peach: "comic-tone-peach"
};

const bubbleToneClassMap = {
  warm: "bubble-tone-warm",
  sky: "bubble-tone-sky",
  grape: "bubble-tone-grape",
  mint: "bubble-tone-mint",
  peach: "bubble-tone-peach"
};

const layoutClassMap = {
  half: "md:col-span-6",
  wide: "md:col-span-12"
};

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="max-w-4xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-calm">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base text-slate-600 md:text-lg">{body}</p> : null}
    </div>
  );
}

function Pill({ children, tone = "default" }) {
  const tones = {
    default: "border-slate-200 bg-white text-slate-700",
    warm: "border-orange-200 bg-orange-50 text-orange-700",
    calm: "border-teal-200 bg-teal-50 text-teal-700",
    ink: "border-slate-900 bg-slate-900 text-white"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function CoverMiniCard({ item }) {
  return (
    <div className="comic-panel comic-tone-plain p-5">
      <div className="flex items-start gap-4">
        <div className="comic-avatar-small">{item.emoji}</div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

function SetupGuideCard({ item }) {
  const toneClass = item.tone === "warm" ? "comic-tone-warm" : "comic-tone-mint";

  return (
    <div className={`comic-panel ${toneClass} p-6`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-calm">{item.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-black text-slate-900">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{item.intro}</p>

      <div className="mt-5 space-y-4">
        {item.items.map((point) => (
          <div key={point.number} className="rounded-[1.35rem] border-2 border-slate-900/10 bg-white/90 p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-sm font-black text-slate-900">
                {point.number}
              </span>
              <h4 className="text-base font-black text-slate-900">{point.title}</h4>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{point.body}</p>
          </div>
        ))}
      </div>

      {item.placementTitle ? (
        <div className="mt-5 rounded-[1.35rem] border-2 border-slate-900/10 bg-white/90 p-5">
          <h4 className="text-base font-black text-slate-900">{item.placementTitle}</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {item.placements.map((placement) => (
              <div key={placement.title} className="rounded-[1.15rem] border border-slate-200 bg-slate-50 p-4">
                <h5 className="text-sm font-black text-slate-900">{placement.title}</h5>
                <p className="mt-2 text-sm leading-7 text-slate-700">{placement.body}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {item.howToSteps ? (
        <div className="mt-5 rounded-[1.35rem] border-2 border-slate-900/10 bg-white/90 p-5">
          <h4 className="text-base font-black text-slate-900">{item.howToTitle}</h4>
          <ol className="mt-4 space-y-3 text-sm text-slate-700 md:text-base">
            {item.howToSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-orange-100 text-xs font-bold text-orange-700">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {item.doDontTitle ? (
        <div className="mt-5 rounded-[1.35rem] border-2 border-slate-900/10 bg-white/90 p-5">
          <h4 className="text-base font-black text-slate-900">{item.doDontTitle}</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.15rem] border border-emerald-200 bg-emerald-50 p-4">
              <h5 className="text-sm font-black text-emerald-800">グローバルに書いてよい例</h5>
              <ul className="mt-3 space-y-2 text-sm text-emerald-900">
                {item.doItems.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="font-bold">◯</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.15rem] border border-rose-200 bg-rose-50 p-4">
              <h5 className="text-sm font-black text-rose-800">グローバルに書かないほうがよい例</h5>
              <ul className="mt-3 space-y-2 text-sm text-rose-900">
                {item.dontItems.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="font-bold">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      {item.exampleBlocks ? (
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          {item.exampleBlocks.map((block) => (
            <div
              key={block.title}
              className="overflow-hidden rounded-[1.35rem] border-2 border-slate-900 bg-slate-950 p-5 text-white"
            >
              <h4 className="text-base font-black">{block.title}</h4>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
                {block.code}
              </pre>
            </div>
          ))}
        </div>
      ) : item.exampleCode ? (
        <div className="mt-5 overflow-hidden rounded-[1.35rem] border-2 border-slate-900 bg-slate-950 p-5 text-white">
          <h4 className="text-base font-black">{item.exampleTitle}</h4>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
            {item.exampleCode}
          </pre>
        </div>
      ) : null}

      {item.footer ? (
        <div className="mt-5 rounded-[1.2rem] border border-slate-900/10 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700">
          {item.footer}
        </div>
      ) : null}
    </div>
  );
}

function ComicPanel({ panel }) {
  return (
    <article className={`comic-panel ${toneClassMap[panel.tone]} ${layoutClassMap[panel.span]} p-5 md:p-6`}>
      <div className={`grid gap-5 ${panel.span === "wide" ? "md:grid-cols-[0.88fr_1.12fr] md:items-center" : "md:grid-cols-[0.82fr_1.18fr] md:items-center"}`}>
        <div className={`overflow-hidden rounded-[1.4rem] border-2 border-slate-900 bg-white shadow-soft ${panel.span === "wide" ? "md:max-w-[360px]" : "md:max-w-[300px]"} md:mx-auto`}>
          <img
            src={withBase(panel.image)}
            alt={panel.title}
            className="aspect-[5/4] h-full w-full object-cover"
          />
        </div>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="ink">{panel.label}</Pill>
            <span className="text-sm font-semibold text-slate-700">{panel.title}</span>
          </div>

          <div className={`speech-bubble mt-4 ${bubbleToneClassMap[panel.tone]} ${panel.align === "right" ? "speech-right" : "speech-left"}`}>
            <p className="text-base font-bold text-slate-900 md:text-xl">{panel.quote}</p>
          </div>

          <p className="mt-4 text-sm text-slate-700 md:text-base">{panel.text}</p>

          <div className="mt-4 inline-flex rounded-full border border-slate-900/10 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700">
            {panel.callout}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="comic-avatar-small">{panel.avatar}</div>
            <div>
              <p className="text-sm font-bold text-slate-900">{panel.speaker}</p>
              <p className="text-xs text-slate-600">{panel.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ReasonCard({ reason, index }) {
  return (
    <div className="comic-panel comic-tone-plain p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-orange-200 font-black text-slate-900">
          {index + 1}
        </span>
        <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
      </div>
      <p className="mt-4 text-sm text-slate-600 md:text-base">{reason.body}</p>
    </div>
  );
}

function SourceList({ sources }) {
  return (
    <div className="comic-panel comic-tone-plain p-5">
      <h4 className="text-sm font-bold text-slate-900">参照した投稿・ソース</h4>
      <ul className="mt-3 space-y-3 text-sm text-slate-600">
        {sources.map((source) => (
          <li key={source.url} className="rounded-2xl border border-slate-200 bg-white p-3">
            <p className="font-semibold text-slate-800">{source.label}</p>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block break-all text-calm underline decoration-calm/30 underline-offset-4"
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseLead({ item }) {
  return (
    <div className={`comic-panel ${toneClassMap[item.storyLead.tone]} p-5 md:p-6`}>
      <div className="flex flex-wrap items-center gap-3">
        <Pill tone="ink">{item.storyLead.chapter}</Pill>
        <Pill tone={item.badge === "特に注目" ? "warm" : "calm"}>{item.badge}</Pill>
        <Pill>{item.emoji} {item.title}</Pill>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="flex flex-col items-start rounded-[1.5rem] border-2 border-slate-900/10 bg-white/80 p-4">
          <div className="comic-avatar-large">{item.storyLead.avatar}</div>
          <p className="mt-3 text-sm font-bold text-slate-900">{item.storyLead.title}</p>
          <p className="manga-sfx mt-2 text-xl text-slate-900/70">{item.storyLead.sfx}</p>
        </div>

        <div>
          <div className={`speech-bubble ${bubbleToneClassMap[item.storyLead.tone]} speech-left`}>
            <p className="text-base font-bold text-slate-900 md:text-xl">{item.storyLead.quote}</p>
          </div>
          <p className="mt-4 text-sm text-slate-700 md:text-base">{item.storyLead.guide}</p>
          <div className="mt-4 inline-flex rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            初回の手応え目安: {item.storyLead.result}
          </div>
        </div>
      </div>
    </div>
  );
}

function UseCaseCard({ item }) {
  return (
    <article className="print-avoid-break rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft print-card md:p-8">
      <UseCaseLead item={item} />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetaChip label="難易度" value={item.meta.difficulty} />
        <MetaChip label="向いている人" value={item.meta.bestFor} />
        <MetaChip label="最初の成果が出る目安" value={item.meta.firstWin} />
      </div>

      <p className="mt-6 text-base text-slate-600 md:text-lg">{item.shortSummary}</p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <FeatureBlock title="このケースを一言でいうと" body={item.coreInsight} tone="warm" />
        <FeatureBlock title="導入前によくある状態" body={item.beforeAfter.before} tone="plain" />
        <FeatureBlock title="導入後の変化イメージ" body={item.beforeAfter.after} tone="calm" />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
        <FeatureBlock title="使う場面のイメージ" body={item.miniScenario} tone="plain" />
        <FeatureListBlock title="日本で置き換えやすい使い道" items={item.japanExamples} />
      </div>

      <div className="mt-5">
        <FeatureBlock title="現実的な成功ライン" body={item.successLine} tone="warm" />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <FeatureListBlock title="特に向いている人" items={item.whoFits} />
        <FeatureListBlock title="最初は避けたい進め方" items={item.avoidFor} />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <ListBlock number="5" title="初心者向けの小さい始め方" items={item.steps} />
        <ListBlock number="7" title="つまずきやすいポイント" items={item.pitfalls} />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <PromptBlock
          number="6"
          title="まずはコピペで試す小さいプロンプト"
          helper="最初の再現用です。短時間で試せるように、範囲をかなり絞っています。日本語のまま、そのまま貼って試せます。"
          prompt={item.easyPrompt}
        />
        <PromptBlock
          number="6"
          title="事例に近い本格プロンプト"
          helper="慣れてきたらこちらです。ゴール、制約、検証条件までまとめて渡します。最初の1回は小さい版からで十分です。"
          prompt={item.advancedPrompt}
        />
      </div>

      <div className="mt-5">
        <ConfidenceBlock confidence={item.confidence} uncertainties={item.uncertainties} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>

      <div className="mt-6">
        <SourceList sources={item.sources} />
      </div>
    </article>
  );
}

function MetaChip({ label, value }) {
  return (
    <div className="rounded-[1.35rem] border-2 border-slate-900/10 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-bold text-slate-900 md:text-base">{value}</p>
    </div>
  );
}

function FeatureBlock({ title, body, tone = "plain" }) {
  const toneClasses = {
    plain: "bg-white",
    warm: "bg-orange-50",
    calm: "bg-teal-50"
  };

  return (
    <div className={`rounded-[1.35rem] border-2 border-slate-900/10 p-5 ${toneClasses[tone]}`}>
      <h4 className="text-base font-black text-slate-900">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{body}</p>
    </div>
  );
}

function FeatureListBlock({ title, items }) {
  return (
    <div className="rounded-[1.35rem] border-2 border-slate-900/10 bg-white p-5">
      <h4 className="text-base font-black text-slate-900">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-slate-700 md:text-base">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolingBlock({ items }) {
  return (
    <div className="rounded-[1.35rem] border-2 border-slate-900/10 bg-slate-950 p-5 text-white">
      <h4 className="text-base font-black">このケースでよく出る構成</h4>
      <p className="mt-2 text-sm text-slate-300">
        ここは厳密な正解ではなく、再現しやすい組み合わせの目安です。
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoBlock({ number, title, body }) {
  return (
    <div className="comic-panel comic-tone-plain p-5">
      <p className="text-sm font-semibold text-accent">0{number}</p>
      <h4 className="mt-2 text-lg font-bold text-slate-900">{title}</h4>
      <p className="mt-3 text-sm text-slate-600 md:text-base">{body}</p>
    </div>
  );
}

function ListBlock({ number, title, items }) {
  return (
    <div className="comic-panel comic-tone-plain p-5">
      <p className="text-sm font-semibold text-accent">0{number}</p>
      <h4 className="mt-2 text-lg font-bold text-slate-900">{title}</h4>
      <ol className="mt-4 space-y-3 text-sm text-slate-600 md:text-base">
        {items.map((point, itemIndex) => (
          <li key={point} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-orange-100 text-xs font-bold text-orange-700">
              {itemIndex + 1}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PromptBlock({ number, title, prompt, helper }) {
  return (
    <div className="comic-panel overflow-hidden border-slate-900 bg-slate-950 p-5 text-white print-card">
      <p className="text-sm font-semibold text-amber-300">0{number}</p>
      <h4 className="mt-2 text-lg font-bold">{title}</h4>
      <p className="mt-3 text-sm text-slate-300">{helper}</p>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
        {prompt}
      </pre>
    </div>
  );
}

function ConfidenceBlock({ confidence, uncertainties }) {
  const tone =
    confidence === "A"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : confidence === "B"
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-rose-200 bg-rose-50 text-rose-800";

  return (
    <div className="rounded-[1.35rem] border-2 border-slate-900/10 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${tone}`}>
          信頼度 {confidence}
        </span>
        <h4 className="text-base font-black text-slate-900">この事例の読み方</h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
        X投稿ベースの事例は、結果の数字をそのまま真似するより、進め方や安全のための条件設定を取り入れるほうが安全です。まずは小さく再現し、使える部分だけを自分の文脈へ移し替える読み方がおすすめです。
      </p>
      <ul className="mt-4 space-y-3">
        {uncertainties.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-slate-700 md:text-base">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
              !
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingCard({ item }) {
  return (
    <div className="comic-panel comic-tone-plain p-6">
      <div className="comic-avatar-small">{item.emoji}</div>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm text-slate-600 md:text-base">{item.body}</p>
    </div>
  );
}

function BonusSkillCard({ item }) {
  return (
    <div className="comic-panel comic-tone-plain p-6">
      <div className="flex items-start gap-4">
        <div className="comic-avatar-small">{item.emoji}</div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            使うタイミング: {item.phase}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-calm">
            向いている場面: {item.fit}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{item.body}</p>
      <div className="mt-4 rounded-[1.1rem] border border-slate-900/10 bg-white px-4 py-3 text-sm font-medium text-slate-700">
        使いどころ: {item.whenToUse}
      </div>
      <div className="mt-4 rounded-[1.1rem] border border-slate-900/10 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
        収録内容: {item.include}
      </div>
      <div className="mt-5 grid gap-5">
        <CodeCopyCard
          title="1. AGENTS.md に貼る部分"
          helper="毎回守ってほしい進め方です。プロジェクト直下の AGENTS.md に入れます。"
          code={item.agentsSnippet}
          copyLabel="AGENTS.mdをコピー"
        />
        <CodeCopyCard
          title="2. チャットで送るプロンプト"
          helper="その日の作業内容だけを、ここで別に伝えます。"
          code={item.promptSnippet}
          copyLabel="プロンプトをコピー"
        />
      </div>
      <div className="mt-4 rounded-[1.1rem] border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-slate-800">
        コツ: {item.tip}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={withBase(item.download)}
          download={item.filename}
          className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900"
        >
          必要ならmdも保存する
        </a>
        <p className="text-xs text-slate-500">{item.filename}</p>
      </div>
    </div>
  );
}

function DownloadStarterCard({ item }) {
  return (
    <div className="comic-panel comic-tone-plain p-6">
      <div className="flex items-start gap-4">
        <div className="comic-avatar-small">{item.emoji}</div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
        </div>
      </div>
      <a
        href={withBase(item.href)}
        download={item.filename}
        className="mt-5 inline-flex rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-sm font-bold text-slate-900"
      >
        ダウンロード
      </a>
      <p className="mt-2 text-xs text-slate-500">{item.filename}</p>
    </div>
  );
}

function CodeCopyCard({ title, helper, code, copyLabel = "コピー" }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (_error) {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-[1.35rem] border-2 border-slate-900 bg-slate-950 p-5 text-white">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="text-base font-black">{title}</h4>
          <p className="mt-2 text-sm text-slate-300">{helper}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white"
        >
          {copied ? "コピーしました" : copyLabel}
        </button>
      </div>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
        {code}
      </pre>
    </div>
  );
}

function BonusHowToCard({ item }) {
  return (
    <div className="rounded-[1.25rem] border-2 border-slate-900/10 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-orange-100 text-sm font-black text-slate-900">
          {item.number}
        </span>
        <h3 className="text-base font-black text-slate-900">{item.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{item.body}</p>
    </div>
  );
}

function BonusSkillExample({ item }) {
  return (
    <div className="mt-8 rounded-[1.7rem] border-2 border-slate-900 bg-white p-5 md:p-6">
      <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
      <ol className="mt-5 space-y-3 text-sm text-slate-700 md:text-base">
        {item.steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-orange-100 text-xs font-bold text-slate-900">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <div className="overflow-hidden rounded-[1.35rem] border-2 border-slate-900 bg-slate-950 p-5 text-white">
          <h4 className="text-base font-black">AGENTS.md に入れる部分</h4>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
            {item.agentsExample}
          </pre>
        </div>
        <div className="overflow-hidden rounded-[1.35rem] border-2 border-slate-900 bg-slate-950 p-5 text-white">
          <h4 className="text-base font-black">作業時に送るプロンプト</h4>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
            {item.promptExample}
          </pre>
        </div>
      </div>

      <div className="mt-5 rounded-[1.2rem] border border-slate-900/10 bg-amber-50 px-4 py-3 text-sm font-medium text-slate-800">
        {item.takeaway}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen text-ink">
      <header className="relative overflow-hidden">
        <div className="screen-only absolute inset-0 opacity-90">
          <div className="absolute left-[-120px] top-8 h-64 w-64 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="absolute right-[-120px] top-16 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl" />
          <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-amber-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-12">
          <div className="comic-panel comic-tone-cover p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Pill tone="ink">{siteCopy.issue}</Pill>
              <Pill tone="warm">{siteCopy.eyebrow}</Pill>
              <Pill tone="calm">{siteCopy.promise}</Pill>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold tracking-[0.16em] text-calm">
                  海外トレンドを、日本向けに再編集した読み物コンテンツ
                </p>
                <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-ink md:text-6xl">
                  {siteCopy.title}
                </h1>
                <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">
                  {siteCopy.subtitle}
                </p>
                <div className="mt-5 rounded-[1.4rem] border border-slate-900/10 bg-white/85 px-4 py-3">
                  <p className="text-sm font-semibold text-slate-800 md:text-base">
                    {siteCopy.summaryLine}
                  </p>
                </div>
                <p className="mt-6 max-w-3xl text-base text-slate-700 md:text-lg">
                  {siteCopy.description}
                </p>
                <div className="mt-6 rounded-[1.6rem] border-2 border-slate-900 bg-white/90 p-4">
                  <p className="text-sm font-bold text-slate-900">この特典の立ち位置</p>
                  <p className="mt-2 text-sm text-slate-600 md:text-base">{siteCopy.note}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {featuredPillars.map((item) => (
                  <CoverMiniCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <section className="mt-8 print-compact">
          <SectionTitle
            eyebrow="読み方"
            title="まずはここだけ見ればOK"
            body="全部を順番に読む必要はありません。自分に近い使い方から読む前提で、このページを使ってください。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {readingGuide.map((item) => (
              <div key={item.title} className="comic-panel comic-tone-plain p-6">
                <div className="comic-avatar-small">{item.emoji}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 md:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="用語"
            title="最初に知っておく用語"
            body="本文に出てくる言葉のうち、初心者がつまずきやすいものだけ先に短く整理しています。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {termNotes.map((item) => (
              <div key={item.term} className="comic-panel comic-tone-plain p-6">
                <div className="inline-flex rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                  {item.term}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="導入"
            title="最初に全体像をつかむ"
            body="この導入パートだけでも、『Codexが今どんな使われ方をしているのか』がざっくり頭に入るようにしています。"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-12">
            {introPanels.map((panel) => (
              <ComicPanel key={panel.id} panel={panel} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="背景"
            title="Codexが注目されている理由"
            body="単なるコード補完ではなく、1つの仕事の流れごと預けられるようになってきたことが大きな変化です。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {codexReasons.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="読む順番"
            title="どこから読めばいい？"
            body="自分の目的に近いルートだけ拾えば大丈夫です。全部読まなくても使えるようにしています。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {readerRoutes.map((item) => (
              <div key={item.title} className="comic-panel comic-tone-plain p-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 md:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="補助線"
            title="この2つだけ知っておくと、あとがかなり読みやすい"
            body="ここは本編ではなく補助パートです。海外ユースケースを読むときに、プロンプトや AGENTS.md の意味がつかみやすくなる部分だけを短くまとめています。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-start">
            {setupGuides.map((item) => (
              <SetupGuideCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="本編"
            title="まずはこの3本だけ押さえればOK"
            body="今回は、反応が強く、しかも切り口が被りにくい3本だけに絞っています。『時間の使い方』『指示の出し方』『成果物までの持っていき方』の3方向から、Codex活用の広がりをつかめる構成です。"
          />
          <div className="mt-8 space-y-8">
            {useCases.slice(0, 3).map((item) => (
              <UseCaseCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="日本向け"
            title="日本人向けおすすめ活用パターン"
            body="派手な海外事例を、そのまま真似する必要はありません。日本では、身近な不便を小さく置き換えるほうが再現しやすいです。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {recommendationPatterns.map((pattern) => (
              <div key={pattern.title} className="comic-panel comic-tone-plain p-6">
                <h3 className="text-xl font-bold text-slate-900">{pattern.title}</h3>
                <p className="mt-3 text-sm text-slate-600 md:text-base">{pattern.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="最初の1歩"
            title="まず最初にやるべきこと"
            body="最初から大きなサービスを作る必要はありません。小さく試して、1回でも『たしかに楽になった』を作るのが最優先です。"
          />
          <div className="mt-8 comic-panel comic-tone-cover p-6 md:p-8">
            <ol className="space-y-4">
              {firstSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[1.4rem] border-2 border-slate-900 bg-white/90 p-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-amber-300 text-sm font-black text-slate-900">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-700 md:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="追加特典"
            title="Codexで使い回せるAGENT SKILLS 5選"
            body="ここは、本編を読んだあとにそのまま試せる実用テンプレ集です。5本とも似た役割ではなく、『どのタイミングで使うか』が違います。各スキルはページ内でそのままコピーして使えます。mdの保存は必要な人だけで大丈夫です。"
          />
          <div className="mt-6 rounded-[1.4rem] border-2 border-slate-900 bg-amber-50 px-5 py-4 text-sm font-medium text-slate-800 md:text-base">
            海外事例で「こういう使い方がある」とわかったあとに、実際の行動へつなげやすいように、作業前・提出前・不具合対応・仕上げ前などのタイミング別に、再利用しやすい5本だけをまとめています。
          </div>
          <div className="mt-8 rounded-[1.7rem] border-2 border-slate-900 bg-white p-5 md:p-6">
            <h3 className="text-xl font-black text-slate-900">5本は「似た役割」ではなく「使うタイミング」で分けています</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {agentSkillPhaseGuide.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border-2 border-slate-900/10 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-calm">{item.phase}</p>
                  <h4 className="mt-2 text-base font-black text-slate-900">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-[1.7rem] border-2 border-slate-900/10 bg-slate-50 p-5 md:p-6">
            <h3 className="text-xl font-black text-slate-900">実際の使い方はこの3ステップです</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {agentSkillHowTo.map((item) => (
                <BonusHowToCard key={item.number} item={item} />
              ))}
            </div>
            <div className="mt-5 rounded-[1.2rem] border border-slate-900/10 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              コツ: 最初は 1本だけ入れて試し、うまくいったらそのプロジェクト専用に少しずつ育てていくのが安全です。全部を一度に詰め込むと、役割がぶつかりやすくなります。
            </div>
          </div>
          <BonusSkillExample item={agentSkillUseExample} />
          <div className="mt-8">
            <h3 className="text-xl font-black text-slate-900">必要ならmdファイルも保存できます</h3>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              基本はこのページ内のコードをコピーして使えばOKです。手元に残したい人だけ、ガイドや個別ファイルも保存できます。
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {agentSkillDownloads.map((item) => (
                <DownloadStarterCard key={item.title} item={item} />
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {agentSkillBonusCards.map((item) => (
              <BonusSkillCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="まとめ"
            title="今日から試すなら、この3つ"
            body="大きな夢を盛るより、まずは自分の立場に近い小さな使い方を1回だけ試すほうが理解は早いです。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {closingPanels.map((item) => (
              <ClosingCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 print-compact">
          <SectionTitle
            eyebrow="免責"
            title="免責事項"
            body="誇大な表現を避けるため、導入前に押さえておきたい前提を明記しています。"
          />
          <div className="mt-8 comic-panel comic-tone-plain p-6 md:p-8">
            <ul className="space-y-4 text-sm text-slate-600 md:text-base">
              {disclaimers.map((item) => (
                <li key={item} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
