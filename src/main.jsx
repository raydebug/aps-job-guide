import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  MailCheck,
  MessageSquareText,
  Search,
  Target,
} from "lucide-react";
import "./styles.css";

const phases = [
  {
    title: "定位岗位",
    time: "第 1-2 天",
    detail: "把专业、过往经验和签证条件翻译成 2-3 个可投岗位方向。",
    tasks: ["确定目标岗位标题", "收集 30 个真实 JD", "整理技能关键词"],
  },
  {
    title: "打磨材料",
    time: "第 3-7 天",
    detail: "准备澳洲格式简历、LinkedIn、项目故事和可复用 cover letter。",
    tasks: ["完成 1 页核心简历", "优化 LinkedIn headline", "写 6 个 STAR 故事"],
  },
  {
    title: "建立投递节奏",
    time: "第 2 周起",
    detail: "每天固定搜索、筛选、定制、投递和记录，而不是临时刷岗位。",
    tasks: ["每天新增 10-15 个岗位", "投递 5-8 个匹配岗位", "记录渠道和反馈"],
  },
  {
    title: "面试转化",
    time: "有回复后",
    detail: "围绕 JD 反推问题，用项目经历证明能力，用 follow-up 增加专业感。",
    tasks: ["准备 90 秒自我介绍", "按 JD 复盘技能证据", "面后 24 小时内跟进"],
  },
];

const roles = [
  {
    area: "Data / BI",
    titles: "Data Analyst, BI Analyst, Reporting Analyst",
    skills: "SQL, Excel, Power BI, Tableau, Python, stakeholder reporting",
    keywords: "junior data analyst, reporting analyst, graduate analyst",
  },
  {
    area: "IT Support",
    titles: "Service Desk Analyst, IT Support Officer, Helpdesk Technician",
    skills: "Windows, Microsoft 365, Active Directory, ticketing, troubleshooting",
    keywords: "level 1 support, service desk, helpdesk, desktop support",
  },
  {
    area: "Business / Admin",
    titles: "Project Coordinator, Operations Assistant, Administration Officer",
    skills: "documentation, coordination, Excel, CRM, process improvement",
    keywords: "project coordinator, operations assistant, admin officer",
  },
  {
    area: "Engineering",
    titles: "Graduate Engineer, Project Engineer, Civil Designer",
    skills: "AutoCAD, compliance, site coordination, documentation, safety",
    keywords: "graduate engineer, junior engineer, project engineer",
  },
];

const resumeBullets = [
  "用结果开头：Improved weekly reporting accuracy by consolidating 4 manual spreadsheets into one controlled tracker.",
  "用工具补强：Built SQL queries and Power BI dashboards to monitor application volume, response rate and interview conversion.",
  "用协作表达：Coordinated with recruiters, hiring managers and candidates to keep documentation complete and deadlines visible.",
];

const weeklyPlan = [
  ["周一", "更新关键词库，保存 20 个岗位"],
  ["周二", "定制简历，投递 6-8 个高匹配岗位"],
  ["周三", "LinkedIn 连接 recruiter，发 5 条短消息"],
  ["周四", "复盘无回复岗位，调整简历关键词"],
  ["周五", "准备面试故事库，模拟 3 个问题"],
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="站点导航">
        <div className="brand">
          <div className="brand-mark">APS</div>
          <div>
            <p>找工指导</p>
            <span>Australia job search playbook</span>
          </div>
        </div>
        <nav>
          <a href="#roadmap"><LayoutDashboard size={18} />路线图</a>
          <a href="#roles"><BriefcaseBusiness size={18} />岗位库</a>
          <a href="#resume"><FileText size={18} />简历</a>
          <a href="#apply"><CalendarCheck size={18} />投递</a>
          <a href="#interview"><MessageSquareText size={18} />面试</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">APS Job Search Guide</p>
            <h1>把找工拆成每天能执行的动作</h1>
          </div>
          <a className="primary-action" href="#apply">
            开始计划 <ArrowRight size={18} />
          </a>
        </header>

        <section className="status-strip" aria-label="核心指标">
          <Metric label="目标岗位" value="2-3 个" icon={<Target size={20} />} />
          <Metric label="每日投递" value="5-8 个" icon={<MailCheck size={20} />} />
          <Metric label="简历版本" value="按方向拆分" icon={<ClipboardList size={20} />} />
          <Metric label="复盘周期" value="每周一次" icon={<CheckCircle2 size={20} />} />
        </section>

        <section id="roadmap" className="section">
          <SectionHeader
            icon={<GraduationCap size={22} />}
            title="找工路线图"
            note="先建立系统，再追求数量。"
          />
          <div className="phase-grid">
            {phases.map((phase, index) => (
              <article className="phase-card" key={phase.title}>
                <div className="phase-number">{index + 1}</div>
                <div>
                  <span className="time-chip">{phase.time}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.detail}</p>
                  <ul>
                    {phase.tasks.map((task) => (
                      <li key={task}><CheckCircle2 size={16} />{task}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roles" className="section">
          <SectionHeader
            icon={<Search size={22} />}
            title="岗位方向库"
            note="从真实岗位标题反推简历关键词。"
          />
          <div className="role-table" role="table" aria-label="岗位方向库">
            <div className="role-row role-head" role="row">
              <span>方向</span>
              <span>常见标题</span>
              <span>核心技能</span>
              <span>搜索词</span>
            </div>
            {roles.map((role) => (
              <div className="role-row" role="row" key={role.area}>
                <strong>{role.area}</strong>
                <span>{role.titles}</span>
                <span>{role.skills}</span>
                <span>{role.keywords}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section two-column">
          <div>
            <SectionHeader
              icon={<FileText size={22} />}
              title="简历与 LinkedIn"
              note="重点是让雇主在 10 秒内看懂你能做什么。"
            />
            <div className="content-panel">
              <h3>简历结构</h3>
              <ol>
                <li>姓名、城市、邮箱、电话、LinkedIn。</li>
                <li>3 行 profile summary，写目标岗位和关键技能。</li>
                <li>Skills 按工具、业务能力、软技能分组。</li>
                <li>经历 bullet 使用 Action + Tool + Result。</li>
                <li>项目经历要对应目标岗位，而不是只罗列课程。</li>
              </ol>
            </div>
          </div>
          <div className="content-panel accent-panel">
            <div className="panel-title">
              <Linkedin size={20} />
              <h3>可复用 bullet</h3>
            </div>
            {resumeBullets.map((bullet) => (
              <p className="quote-line" key={bullet}>{bullet}</p>
            ))}
          </div>
        </section>

        <section id="apply" className="section two-column">
          <div>
            <SectionHeader
              icon={<CalendarCheck size={22} />}
              title="每周投递系统"
              note="用固定节奏减少焦虑，用数据判断哪里要改。"
            />
            <div className="week-grid">
              {weeklyPlan.map(([day, task]) => (
                <article key={day}>
                  <strong>{day}</strong>
                  <span>{task}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="content-panel checklist">
            <h3>每日检查</h3>
            {[
              "今天是否只投高匹配岗位",
              "简历是否包含 JD 里的关键词",
              "是否记录了岗位链接和公司名",
              "是否给 recruiter 或校友发了消息",
              "是否复盘了拒信或无回复原因",
            ].map((item) => (
              <label key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section id="interview" className="section">
          <SectionHeader
            icon={<MessageSquareText size={22} />}
            title="面试准备"
            note="准备证据，不背答案。"
          />
          <div className="interview-board">
            <article>
              <h3>90 秒自我介绍</h3>
              <p>背景一句话，目标岗位一句话，两个匹配能力，一个最近项目或成果，最后接回公司需求。</p>
            </article>
            <article>
              <h3>STAR 故事库</h3>
              <p>准备沟通冲突、学习新工具、解决问题、赶 deadline、团队合作和犯错复盘六类故事。</p>
            </article>
            <article>
              <h3>面后跟进</h3>
              <p>24 小时内感谢面试机会，补一句你对岗位的理解，再强调一个最匹配的能力。</p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value, icon }) {
  return (
    <article className="metric">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
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
