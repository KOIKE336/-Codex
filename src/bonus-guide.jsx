import React from "react";
import ReactDOM from "react-dom/client";
import "./bonus-guide.css";

const setupStep = {
  title: "迷ったら、まずこれだけ",
  time: "最短ルート",
  file: "00_CODEX_SETUP_PROMPT.md",
  href: "affiliate-bonus-pack/00_CODEX_SETUP_PROMPT.md",
  body: "中のプロンプトを丸ごとCodexに貼るだけで、推奨フォルダと初期Markdownファイルをまとめて作れます。手作業が不安な人は、このルートが一番ラクです。",
  action: "セットアッププロンプトを開く"
};

const starterSteps = [
  {
    title: "1. 作業場所を作る",
    time: "5分",
    file: "02_FOLDER_TEMPLATE.md",
    href: "affiliate-bonus-pack/02_FOLDER_TEMPLATE.md",
    body: "Codex用フォルダを1つ作り、参考資料と成果物の置き場所を分けます。ここを先に作ると、あとから迷いにくくなります。",
    action: "フォルダひな形を見る"
  },
  {
    title: "2. AGENTS.mdを1本置く",
    time: "5分",
    file: "01_AGENTS_STARTER.md",
    href: "affiliate-bonus-pack/01_AGENTS_STARTER.md",
    body: "用途に近いテンプレを1つだけ貼ります。最初から複数入れず、まず1回試してから足すのがコツです。",
    action: "AGENTS.mdテンプレを見る"
  },
  {
    title: "3. 依頼文を1本試す",
    time: "5分",
    file: "03_PROMPT_PACK.md",
    href: "affiliate-bonus-pack/03_PROMPT_PACK.md",
    body: "今やりたい作業に近いプロンプトを1本だけ使います。うまくいった文面は、次回用に保存します。",
    action: "依頼文集を開く"
  }
];

const bonuses = [
  {
    badge: "特典1",
    title: "コピペで使える AGENTS.md スターター",
    file: "01_AGENTS_STARTER.md",
    href: "affiliate-bonus-pack/01_AGENTS_STARTER.md",
    role: "毎回同じ説明をしなくて済むように、Codexへ守ってほしい基本ルールを置く特典です。",
    bestFor: "返答のトーンや粒度が毎回ブレる人",
    firstAction: "日常業務用か記事作成用を1本だけ貼って、軽い依頼を1回試す",
    avoid: "記事用、調査用、スライド用を最初から全部混ぜる"
  },
  {
    badge: "特典2",
    title: "15分で整う Codex作業フォルダひな形",
    file: "02_FOLDER_TEMPLATE.md",
    href: "affiliate-bonus-pack/02_FOLDER_TEMPLATE.md",
    role: "参考資料、下書き、成果物を分けて、作業を散らかりにくくする特典です。",
    bestFor: "どこに何を置けばいいか迷う人",
    firstAction: "`Codex_Workspace` を作り、7つの基本フォルダだけ先に作る",
    avoid: "成果物と元ファイルを同じ場所に混ぜる"
  },
  {
    badge: "特典3",
    title: "最初の成果が出るコピペ依頼文集",
    file: "03_PROMPT_PACK.md",
    href: "affiliate-bonus-pack/03_PROMPT_PACK.md",
    role: "要約、記事、SNS、リサーチ、スライド、Codex運用をすぐ試せるプロンプト集です。",
    bestFor: "何を頼めばいいかわからない人",
    firstAction: "5箱プロンプトを1本使い、結果を見て条件を1行だけ足す",
    avoid: "最初から完璧な依頼文を作ろうとする"
  },
  {
    badge: "特典4",
    title: "あなた用の初動アドバイス用テンプレ",
    file: "04_CUSTOMIZE_BONUS.md",
    href: "affiliate-bonus-pack/04_CUSTOMIZE_BONUS.md",
    role: "仕事や発信内容に合わせて、最初に使うべき型を整理するためのミニ個別化テンプレです。",
    bestFor: "自分の用途にどう落とし込むか決めたい人",
    firstAction: "仕事、最初にやりたいこと、よく扱うファイルを短く書き出す",
    avoid: "何でも相談OKにして範囲を広げすぎる"
  }
];

const chooserRows = [
  ["まとめて自動作成したい", "00_CODEX_SETUP_PROMPT.md", "Codexに丸ごと投げる"],
  ["何から始めればいいかわからない", "02_FOLDER_TEMPLATE.md", "まず作業場所を作る"],
  ["Codexの返答が毎回ブレる", "01_AGENTS_STARTER.md", "基本ルールを1本だけ置く"],
  ["依頼文が思いつかない", "03_PROMPT_PACK.md", "コピペで1回試す"],
  ["自分の用途に寄せたい", "04_CUSTOMIZE_BONUS.md", "最初の使い道を整理する"]
];

const fujinFiles = [
  ["README.md", "まず読む使い方ガイド"],
  ["SKILL.md", "AIに読み込ませる入口"],
  ["persona.md", "人格・口調の設定"],
  ["thinking.md", "判断軸・思考フレーム"],
  ["style.md", "文章の型・文体ルール"],
  ["examples.md", "具体例・Few-shot"]
];

const faq = [
  {
    q: "全部読む必要はありますか？",
    a: "ありません。最初はフォルダ、AGENTS.md、プロンプト1本だけで十分です。自分用に調整したい場合だけ、個別化テンプレを開いてください。"
  },
  {
    q: "mdファイルは何をすればいいですか？",
    a: "まずは開いて中身を見るだけで大丈夫です。プロンプトが入っている場合は、必要な部分をコピーしてCodexに貼ってください。"
  },
  {
    q: "最初にAGENTS.mdへ何を書けばいいですか？",
    a: "迷ったら日常業務用を1本だけ貼ってください。使いながらズレた点を1行ずつ足すほうが失敗しにくいです。"
  },
  {
    q: "参考資料が少なくても使えますか？",
    a: "使えます。最初は過去記事、過去投稿、考え方メモのような資料を3つだけ入れれば十分です。"
  }
];

function App() {
  return (
    <div className="bonus-guide-page">
      <header className="hero">
        <div className="bonus-shell">
          <div className="hero-panel">
            <div className="hero-grid">
              <div>
                <span className="eyebrow">リンク購入者限定</span>
                <h1>Codexアプリの教科書<br />購入者限定スターター特典</h1>
                <p className="hero-lead">
                  購入直後に最初に開くスタート画面です。
                  作業場所、AGENTS.md、依頼文までをつなげて、15分でCodexを1回動かせるところまで案内します。
                </p>
                <div className="hero-actions">
                  <a className="hero-button hero-button-primary" href="#start">
                    まず1回動かす
                  </a>
                  <a className="hero-button hero-button-secondary" href="#bonuses">
                    特典の中身を見る
                  </a>
                </div>
              </div>

              <div className="hero-side">
                <div className="mini-card">
                  <strong>この特典に入っているもの</strong>
                  <ul className="mini-card-list">
                    <li>AGENTS.md スターター</li>
                    <li>作業フォルダひな形</li>
                    <li>コピペ依頼文集</li>
                    <li>初動アドバイス用テンプレ</li>
                    <li>Fujin AI Skills（追加特典）</li>
                  </ul>
                </div>
                <div className="mini-card">
                  <strong>向いている人</strong>
                  <p>Codex導入後に、何から触ればいいか迷っている人。まず小さく成功体験を作りたい人です。</p>
                </div>
                <div className="mini-card">
                  <strong>読み方</strong>
                  <p>上から全部読まず、今の状況に合う特典だけ開いてください。迷ったら15分スタートへ戻ればOKです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="start">
          <div className="bonus-shell">
            <div className="section-header">
              <div>
                <p className="section-kicker">Quick Start</p>
                <h2>まず15分でここまでやればOK</h2>
                <p className="section-copy">
                  完璧な設定は後回しで大丈夫です。迷ったら最短ルートを使い、手作業で進めたい人だけ3ステップを見てください。
                </p>
              </div>
            </div>

            <article className="setup-card">
              <div>
                <p className="section-kicker">{setupStep.time}</p>
                <h3>{setupStep.title}</h3>
                <p>{setupStep.body}</p>
              </div>
              <a className="file-link" href={setupStep.href}>
                {setupStep.action}
              </a>
            </article>

            <div className="subsection-heading">
              <h3>手作業で進めるなら、この3つだけ</h3>
              <p>セットアッププロンプトを使わない場合も、やることは同じです。</p>
            </div>

            <div className="launch-grid">
              {starterSteps.map((step) => (
                <article className="launch-card" key={step.file}>
                  <p className="section-kicker">{step.time}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <a className="file-link" href={step.href}>
                    {step.action}
                  </a>
                </article>
              ))}
            </div>

            <div className="subsection-heading" style={{ marginTop: 18 }}>
              <h3>mdファイルって何？</h3>
              <p>
                テキストファイルの一種です。ダブルクリックして開き、中のプロンプトをコピーしてCodexに貼るだけで使えます。
                最初は編集しなくてOKです。
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="agents-visual">
          <div className="bonus-shell">
            <div className="visual-guide-card">
              <div className="section-header visual-header">
                <div>
                  <p className="section-kicker">Visual Guide</p>
                  <h2>AGENTS.mdは、こう作ればOK</h2>
                  <p className="section-copy">
                    日常業務用テンプレは、作業フォルダ直下の <code>AGENTS.md</code> に貼るだけです。
                    迷ったらこの図の3ステップだけ見てください。
                  </p>
                </div>
                <a className="file-link" href="affiliate-bonus-pack/01_AGENTS_STARTER.md">
                  01_AGENTS_STARTER.md
                </a>
              </div>
              <img
                className="workflow-image"
                src="affiliate-bonus-pack/images/agents-daily-work-setup.svg"
                alt="日常業務用AGENTS.mdの作り方。作業フォルダ直下にAGENTS.mdを作り、テンプレを貼り、そのフォルダでCodexに依頼する流れ。"
              />
            </div>
          </div>
        </section>

        <section className="section" id="bonuses">
          <div className="bonus-shell">
            <div className="section-header">
              <div>
                <p className="section-kicker">Bonus Pack</p>
                <h2>特典1〜4の使い方</h2>
                <p className="section-copy">
                  それぞれ役割が違います。最初から全部使わず、困っている場面に合うものだけ開いてください。
                </p>
              </div>
            </div>

            <div className="bonus-grid">
              {bonuses.map((bonus) => (
                <article className="bonus-card compact-card" key={bonus.file}>
                  <div className="bonus-card-header">
                    <span className="bonus-badge">{bonus.badge}</span>
                    <div>
                      <h3>{bonus.title}</h3>
                      <p className="bonus-subtitle">{bonus.role}</p>
                    </div>
                  </div>

                  <div className="bonus-layout">
                    <div className="bonus-panel">
                      <h4>最初の一手</h4>
                      <p>{bonus.firstAction}</p>
                      <a className="file-link" href={bonus.href}>
                        {bonus.file} を開く
                      </a>
                    </div>
                    <div className="bonus-panel">
                      <h4>避けたいこと</h4>
                      <p>{bonus.avoid}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="bonus-shell">
            <div className="section-header">
              <div>
                <p className="section-kicker">Choose</p>
                <h2>迷ったときは、この表だけ見てください</h2>
                <p className="section-copy">
                  今の状態に一番近い行を選ぶだけで、開くファイルが決まります。
                </p>
              </div>
            </div>

            <div className="choice-table" role="table" aria-label="迷ったときの選び方">
              {chooserRows.map(([status, file, action]) => (
                <div className="choice-row" role="row" key={status}>
                  <strong>{status}</strong>
                  <code>{file}</code>
                  <span className="choice-action">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="bonus-shell">
            <div className="section-header">
              <div>
                <p className="section-kicker">FAQ</p>
                <h2>よくある詰まりどころ</h2>
              </div>
            </div>

            <div className="faq-grid">
              {faq.map((item) => (
                <article className="faq-card" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="fujin-skills">
          <div className="bonus-shell">
            <div className="fujin-card">
              <div className="section-header visual-header">
                <div>
                  <p className="section-kicker">Extra Bonus</p>
                  <h2>Fujin AI Skills の使い方</h2>
                  <p className="section-copy">
                    <code>fujin-AI-skills</code> は、fujinさんの思考のクセ、文体、判断軸をAIに読み込ませるための追加特典です。
                    発信やローンチの壁打ち相手として使うためのSkillセットです。
                  </p>
                </div>
                <a className="file-link" href="fujin-AI-skills/README.md">
                  使い方ガイドを開く
                </a>
              </div>

              <div className="fujin-note">
                <strong>まず覚えることは1つだけ</strong>
                <p>
                  最初は <code>README.md</code> と <code>SKILL.md</code> だけ見れば十分です。
                  「Fujin式で壁打ちして」「Fujin風にリライトして」と頼むときに使います。
                </p>
              </div>

              <div className="fujin-steps">
                <div>
                  <h3>Codexで使うなら、この3ステップ</h3>
                  <ol className="step-list">
                    <li><code>fujin-AI-skills/README.md</code> を開いて、全体像を確認する</li>
                    <li><code>SKILL.md</code> をCodexに読ませて「この指示に従って」と伝える</li>
                    <li>原稿や相談内容を貼り、「Fujin式で壁打ちして」と依頼する</li>
                  </ol>
                </div>
                <div className="fujin-prompt">
                  <h3>最初のコピペ例</h3>
                  <pre className="code-box">{`fujin-AI-skills/SKILL.md を読んでください。
そのうえで、以下の原稿をFujin式にリライトしてください。

目的:
- 読者の背中を押す
- AIっぽさを減らす
- 結論を先に出す

原稿:
（ここに文章を貼る）`}</pre>
                </div>
              </div>

              <div className="fujin-files" aria-label="Fujin AI Skills の中身">
                {fujinFiles.map(([file, role]) => (
                  <a className="fujin-file" href={`fujin-AI-skills/${file}`} key={file}>
                    <code>{file}</code>
                    <span>{role}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="cta">
        <div className="bonus-shell">
          <div className="cta-panel">
            <div>
              <h2>この特典のゴールは、今日1回だけCodexを動かすことです。</h2>
              <p>
                まずは作業フォルダを作り、AGENTS.mdを1本置き、プロンプトを1本試してください。
                その小さな1回ができれば、この特典パックは十分に役割を果たしています。
                それだけで、次に頼むときの迷い方が変わります。
              </p>
              <div className="pill-row" style={{ marginTop: 18 }}>
                <span className="pill">全部読まなくてOK</span>
                <span className="pill">最初は15分だけ</span>
                <span className="pill">うまくいった型だけ残す</span>
              </div>
            </div>

            <aside className="cta-side">
              <h3>迷ったら、ここへ戻ってください</h3>
              <p>
                このページが入口です。特典ファイルを開いて詰まったときも、
                上の「迷ったときはこの表」か「15分スタート」に戻れば次の一手が見つかります。
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("bonus-guide-root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
