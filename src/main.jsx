import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  FilePenLine,
  Gauge,
  MessageSquareQuote,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";
import "./styles.css";

const pitchPlan = [
  ["开头 50-70 字", "直接声明你申请什么岗位，并点出 2-3 个最相关能力。"],
  ["证据一 130-150 字", "用 STAR 写一个最强例子，优先对应 duty 或第一个 selection criterion。"],
  ["证据二 130-150 字", "换一个能力维度，例如 policy、client service、data、case work、stakeholder。"],
  ["岗位贴合 80-100 字", "把你的经验接回 agency、team outcome、public service context。"],
  ["结尾 30-50 字", "简短收束，不要重复简历，不要写空泛热情。"],
];

const apsDifferences = [
  {
    title: "不是展示优秀，而是证明 merit",
    detail:
      "普通求职常靠亮点包装；APS 更看你是否用具体证据证明自己最符合岗位要求，并能被公平比较。",
  },
  {
    title: "不是只投简历，而是写 pitch / criteria",
    detail:
      "CV 通常只是基础材料。很多 APS 岗位真正拉开差距的是 500-word pitch、statement of claims 或 selection criteria response。",
  },
  {
    title: "不是关键词匹配，而是等级匹配",
    detail:
      "APS 3/4/5/6 对独立性、复杂度、判断空间和责任范围要求不同。等级投错，材料写得再漂亮也会吃亏。",
  },
  {
    title: "不是面试表现一次定胜负，而是全程验证",
    detail:
      "申请、面试和 referee check 是一条证据链。你写过的 claim，panel 可能会在面试和推荐人环节继续验证。",
  },
];

const criteriaSteps = [
  "拆 JD：圈出 duties、capabilities、technical requirements 和 assessment language。",
  "选例子：每个标准只放 1 个强例子，不堆 3 个弱例子。",
  "写证据：Situation 轻写，Task/Action/Result 重写。",
  "贴等级：APS 4 写可靠执行，APS 5 写独立判断，APS 6 写协调复杂工作。",
  "删空话：去掉 passionate、hardworking、team player 这种不能打分的词。",
];

const levelSignals = [
  {
    level: "APS 3",
    signal: "按流程准确执行，能处理常见问题，及时升级复杂事项。",
    proof: "customer enquiries, admin processing, records, service desk, routine case work",
  },
  {
    level: "APS 4",
    signal: "能独立完成一组任务，判断常见例外，和内部/外部对象沟通。",
    proof: "case officer, program support, compliance support, reporting, stakeholder follow-up",
  },
  {
    level: "APS 5",
    signal: "能在有限指导下处理复杂任务，分析信息，给出建议或改进。",
    proof: "policy officer, data analyst, project officer, complex cases, briefing input",
  },
  {
    level: "APS 6",
    signal: "负责一个工作流或小团队成果，协调风险、质量、priority 和 stakeholder。",
    proof: "senior officer, team coordination, project delivery, policy advice, quality assurance",
  },
];

const rewriteExamples = [
  {
    weak: "I worked in customer service and helped customers.",
    strong:
      "Resolved high-volume client enquiries by applying policy guidelines, documenting decisions accurately, and escalating complex matters where risk or eligibility issues required senior review.",
  },
  {
    weak: "I am good at communication and teamwork.",
    strong:
      "Coordinated with internal teams and external clients to clarify requirements, manage competing deadlines, and keep stakeholders informed of progress and next steps.",
  },
  {
    weak: "I used Excel and made reports.",
    strong:
      "Built weekly Excel reporting to track application volume, overdue actions and outcome trends, giving managers a clearer basis for prioritising case work.",
  },
];

const interviewQuestions = [
  "Tell us about a time you applied policy or procedure in a difficult situation.",
  "Describe a time you managed competing priorities.",
  "Give an example of working with a difficult stakeholder or client.",
  "Tell us about a mistake, what you did, and what changed afterwards.",
  "How would you handle confidential or sensitive information?",
];

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="APS Application Toolkit">
          <span className="brand-mark">APS</span>
          <span>Application Toolkit</span>
        </a>
        <nav aria-label="站点导航">
          <a href="#logic">评分逻辑</a>
          <a href="#pitch">Pitch</a>
          <a href="#criteria">Criteria</a>
          <a href="#levels">等级</a>
          <a href="#interview">面试</a>
        </nav>
      </header>

      <section className="workspace" id="top">
        <header className="hero">
          <h1>APS 求职最大的不同：你不是在推销自己，而是在提交可评分证据。</h1>
          <p className="hero-text">
            普通求职常问“我怎么显得更强”。APS 申请首先要问：
            panel 能否按 merit、selection criteria 和 APS level 公平判断我适合这个岗位。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#differences">
              先看 4 个不同 <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#logic">
              看评分逻辑
            </a>
          </div>
        </header>

        <section id="differences" className="difference-section" aria-label="APS 和普通求职的最大不同">
          <div className="section-kicker">先建立正确框架</div>
          <h2>APS 申请和普通求职最不一样的 4 件事</h2>
          <div className="difference-list">
            {apsDifferences.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lead-example" aria-label="APS 改写例子">
          <div className="example-heading">
            <Sparkles size={20} />
            <span>真正有用的改写长这样</span>
          </div>
          <div className="rewrite-pair">
            <p className="weak">I helped customers and answered questions.</p>
            <ArrowRight size={20} />
            <p className="strong">
              Applied policy guidelines to resolve client enquiries, documented outcomes,
              and escalated complex cases where eligibility or risk required review.
            </p>
          </div>
        </section>

        <section className="diagnosis" aria-label="页面判断">
          <article>
            <strong>先读 JD</strong>
            <span>找出 duty、criteria、level 和 assessment language。</span>
          </article>
          <article>
            <strong>再选证据</strong>
            <span>每个 claim 都要有场景、动作、结果和岗位贴合。</span>
          </article>
          <article>
            <strong>最后验证链条</strong>
            <span>面试和 referee 会检查你写的 claims 是否站得住。</span>
          </article>
        </section>

        <section id="logic" className="section">
          <div>
            <SectionHeader
              icon={<Target size={22} />}
              title="APS 申请核心逻辑"
              note="不要先问简历好不好看，先问 panel 能不能给你打分。"
            />
            <div className="flow">
              {[
                ["Job Description", "岗位到底要你做什么"],
                ["Selection Criteria", "panel 会按什么维度评估"],
                ["Your Evidence", "你有什么可验证的例子"],
                ["Merit Ranking", "你和其他候选人相比强在哪里"],
              ].map(([title, detail], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pitch" className="section">
          <SectionHeader
            icon={<FilePenLine size={22} />}
            title="500-Word Pitch 结构"
            note="Pitch 的任务不是复述简历，而是集中证明你符合岗位要求。"
          />
          <div className="pitch-board">
            {pitchPlan.map(([range, purpose]) => (
              <article key={range}>
                <strong>{range}</strong>
                <p>{purpose}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="criteria" className="section split">
          <div>
            <SectionHeader
              icon={<BookOpenCheck size={22} />}
              title="Selection Criteria 写法"
              note="每个回答都要像一段小型证据陈述，而不是个人品质声明。"
            />
            <div className="step-list">
              {criteriaSteps.map((step) => (
                <div key={step}>
                  <CheckCircle2 size={18} />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="template-panel">
            <h3>回答骨架</h3>
            <p>
              <b>Claim:</b> 我具备这个能力。
            </p>
            <p>
              <b>Context:</b> 在什么岗位、任务或限制下使用过。
            </p>
            <p>
              <b>Action:</b> 我具体做了什么判断、沟通、分析或交付。
            </p>
            <p>
              <b>Result:</b> 产生了什么可观察结果。
            </p>
            <p>
              <b>Fit:</b> 这个例子为什么对应本岗位。
            </p>
          </div>
        </section>

        <section id="levels" className="section">
          <SectionHeader
            icon={<Gauge size={22} />}
            title="APS 等级判断"
            note="先投对等级，再谈命中率。等级错了，材料再顺也很难进。"
          />
          <div className="level-table" role="table" aria-label="APS level signals">
            <div className="level-row level-head" role="row">
              <span>等级</span>
              <span>panel 想看到的能力信号</span>
              <span>可用经历关键词</span>
            </div>
            {levelSignals.map((item) => (
              <div className="level-row" role="row" key={item.level}>
                <strong>{item.level}</strong>
                <span>{item.signal}</span>
                <span>{item.proof}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeader
            icon={<Sparkles size={22} />}
            title="Before / After 改写"
            note="APS 材料要从性格描述变成可验证行为。"
          />
          <div className="rewrite-grid">
            {rewriteExamples.map((item) => (
              <article key={item.weak}>
                <p className="weak">{item.weak}</p>
                <p className="strong">{item.strong}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="interview" className="section split">
          <div>
            <SectionHeader
              icon={<MessageSquareQuote size={22} />}
              title="APS 面试准备"
              note="Panel 通常想验证：你写的证据是不是真的，你能否在岗位场景里稳定表现。"
            />
            <div className="question-list">
              {interviewQuestions.map((question) => (
                <label key={question}>
                  <input type="checkbox" />
                  <span>{question}</span>
                </label>
              ))}
            </div>
          </div>
          <aside className="referee-panel">
            <div className="panel-title">
              <UserCheck size={20} />
              <h3>Referee 不是形式</h3>
            </div>
            <p>
              Referee check 会用来验证你在 CV、申请和面试里的 claims。申请前就要确认
              referee 能讲出与你目标岗位相关的例子。
            </p>
          </aside>
        </section>

        <section id="sources" className="section source-band">
          <SectionHeader
            icon={<BadgeCheck size={22} />}
            title="官方依据"
            note="内容围绕 APSC 对 APS recruitment、merit、selection criteria 和 referee checks 的公开说明整理。"
          />
          <div className="source-links">
            <a href="https://www.apsc.gov.au/working-aps/joining-aps/cracking-code/3-applying-aps-job-cracking-code">
              APSC: Applying for an APS job
            </a>
            <a href="https://www.apsc.gov.au/working-aps/joining-aps/cracking-code/8-frequently-asked-questions-cracking-code">
              APSC: Merit and recruitment FAQ
            </a>
            <a href="https://www.apsc.gov.au/factsheet-referee-checks-0">
              APSC: Referee checks
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

function SectionHeader({ icon, title, note }) {
  return (
    <div className="section-header">
      <div className="section-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
