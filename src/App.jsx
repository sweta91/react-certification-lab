import { useEffect, useState } from "react";
import "./App.css";

const concepts = [
  {
    number: "01",
    title: "Components",
    description: "Built reusable UI using functional React components."
  },
  {
    number: "02",
    title: "Props",
    description: "Passed data between components using props."
  },
  {
    number: "03",
    title: "State",
    description: "Managed interactive UI with useState."
  },
  {
    number: "04",
    title: "Events",
    description: "Handled user interactions with React event handlers."
  },
  {
    number: "05",
    title: "Conditional UI",
    description: "Rendered different UI states based on application data."
  },
  {
    number: "06",
    title: "Lists",
    description: "Rendered dynamic collections using map and keys."
  },
  {
    number: "07",
    title: "Forms",
    description: "Created controlled form inputs and handled submissions."
  },
  {
    number: "08",
    title: "useEffect",
    description: "Worked with side effects and browser APIs."
  }
];

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name);
  }

  return (
    <main>
      <nav>
        <div className="logo">S<span>.</span></div>

        <div className="nav-links">
          <a href="#concepts">Concepts</a>
          <a href="#demo">Interactive Demo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-title">REACT CERTIFICATION • 2026</p>

          <h1>
            Learning React.
            <br />
            <span>Building with it.</span>
          </h1>

          <p className="hero-text">
            A small interactive project demonstrating the core React concepts
            covered during my certification journey.
          </p>

          <div className="hero-actions">
            <a href="#concepts" className="primary-button">
              Explore concepts
            </a>

            <a href="#demo" className="secondary-button">
              Try the demo ↓
            </a>
          </div>
        </div>

        <div className="certificate-card">
          <div className="certificate-top">
            <span>REACT</span>
            <span>✓</span>
          </div>

          <div className="certificate-circle">R</div>

          <p className="certificate-label">CERTIFICATION</p>

          <h2>React Developer</h2>

          <p>Fundamentals &amp; Application Development</p>

          <div className="certificate-footer">
            <span>SWETA</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="concepts" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT I PRACTICED</p>
            <h2>React fundamentals</h2>
          </div>

          <p>
            The project intentionally keeps the UI simple while demonstrating
            the concepts behind the interface.
          </p>
        </div>

        <div className="concept-grid">
          {concepts.map((concept) => (
            <article className="concept-card" key={concept.number}>
              <span>{concept.number}</span>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
            </article>
          ))}
        </div>
      </section>

     <section id="demo" className="section demo-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow">INTERACTIVE DEMO</p>
      <h2>React in action</h2>
    </div>

    <p>
      Small interactive examples demonstrating the React concepts practiced
      during my certification journey.
    </p>
  </div>

  <div className="demo-grid">

    {/* 01 — useState */}
    <div className="demo-card">
      <span className="demo-label">01 • useState</span>

      <h3>Counter</h3>

      <p className="demo-description">
        State updates trigger a re-render of the component.
      </p>

      <div className="counter">
        <button onClick={() => setCount(count - 1)}>
          −
        </button>

        <strong>{count}</strong>

        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <button
        className="text-button"
        onClick={() => setCount(0)}
      >
        Reset counter
      </button>
    </div>


    {/* 02 — Conditional Rendering */}
    <div className="demo-card">
      <span className="demo-label">02 • Conditional Rendering</span>

      <h3>Login state</h3>

      <p className="demo-description">
        React can render different UI depending on state.
      </p>

      <div className="status-box">
        {showMessage ? (
          <>
            <span className="status-dot online"></span>
            <strong>Welcome back, Sweta!</strong>
          </>
        ) : (
          <>
            <span className="status-dot"></span>
            <strong>You are logged out.</strong>
          </>
        )}
      </div>

      <button
        className="primary-button small"
        onClick={() => setShowMessage(!showMessage)}
      >
        {showMessage ? "Log out" : "Log in"}
      </button>
    </div>


    {/* 03 — Controlled Form */}
    <div className="demo-card">
      <span className="demo-label">03 • Controlled Form</span>

      <h3>Live form</h3>

      <p className="demo-description">
        Input values are controlled by React state.
      </p>

      <input
        className="demo-input"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name..."
      />

      <div className="live-preview">
        {name
          ? `Hello, ${name}! 👋`
          : "Start typing above..."}
      </div>
    </div>


    {/* 04 — Lists & Keys */}
    <div className="demo-card">
      <span className="demo-label">04 • Lists & Keys</span>

      <h3>React skills</h3>

      <p className="demo-description">
        Dynamic data can be rendered using map().
      </p>

      <ul className="skills-list">
        {[
          "Components",
          "Props",
          "State",
          "Hooks"
        ].map((skill, index) => (
          <li key={skill}>
            <span>0{index + 1}</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>


    {/* 05 — Props */}
    <div className="demo-card">
      <span className="demo-label">05 • Props</span>

      <h3>Parent → Child</h3>

      <p className="demo-description">
        Props allow components to receive data from their parent.
      </p>

      <ProfileCard
        name="Sweta"
        role="React Developer"
        skill="React + JavaScript"
      />
    </div>


    {/* 06 — useEffect */}
    <div className="demo-card">
      <span className="demo-label">06 • useEffect</span>

      <h3>Component timer</h3>

      <p className="demo-description">
        useEffect can run side effects when a component is mounted.
      </p>

      <strong className="timer">
        {seconds}s
      </strong>

      <small>
        Timer running automatically
      </small>
    </div>


    {/* 07 — Array State */}
    <div className="demo-card">
      <span className="demo-label">07 • Array State</span>

      <h3>Shopping list</h3>

      <p className="demo-description">
        React state can contain arrays and be updated immutably.
      </p>

      <ShoppingList />
    </div>


    {/* 08 — Toggle */}
    <div className="demo-card">
      <span className="demo-label">08 • Event Handling</span>

      <h3>Like button</h3>

      <p className="demo-description">
        Events allow React components to respond to user actions.
      </p>

      <LikeButton />
    </div>


    {/* 09 — Select */}
    <div className="demo-card">
      <span className="demo-label">09 • Form Controls</span>

      <h3>Choose a skill</h3>

      <SkillSelector />
    </div>


    {/* 10 — Progress */}
    <div className="demo-card">
      <span className="demo-label">10 • Derived State</span>

      <h3>Learning progress</h3>

      <ProgressDemo />
    </div>

  </div>
</section>

      <footer>
        <span>React Certification Lab</span>
        <span>Built by Sweta • React + Vite</span>
      </footer>
    </main>
  );
}


function ProfileCard({ name, role, skill }) {
  return (
    <div className="profile-demo">
      <div className="profile-avatar">
        {name.charAt(0)}
      </div>

      <div>
        <strong>{name}</strong>
        <span>{role}</span>
        <small>{skill}</small>
      </div>
    </div>
  );
}
function ShoppingList() {
  const [items, setItems] = useState([
    "React",
    "JavaScript"
  ]);

  const [newItem, setNewItem] = useState("");

  function addItem(event) {
    event.preventDefault();

    if (!newItem.trim()) return;

    setItems([
      ...items,
      newItem.trim()
    ]);

    setNewItem("");
  }

  function removeItem(indexToRemove) {
    setItems(
      items.filter(
        (_, index) => index !== indexToRemove
      )
    );
  }

  return (
    <div>
      <form
        className="mini-form"
        onSubmit={addItem}
      >
        <input
          value={newItem}
          onChange={(event) =>
            setNewItem(event.target.value)
          }
          placeholder="Add item..."
        />

        <button type="submit">
          +
        </button>
      </form>

      <ul className="mini-list">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            <span>{item}</span>

            <button
              onClick={() => removeItem(index)}
              aria-label={`Remove ${item}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={liked ? "like-button liked" : "like-button"}
      onClick={() => setLiked(!liked)}
    >
      <span>
        {liked ? "♥" : "♡"}
      </span>

      {liked ? "Liked" : "Like this project"}
    </button>
  );
}

function SkillSelector() {
  const [skill, setSkill] = useState("React");

  return (
    <div>
      <select
        className="demo-select"
        value={skill}
        onChange={(event) =>
          setSkill(event.target.value)
        }
      >
        <option>React</option>
        <option>JavaScript</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Angular</option>
        <option>SCSS</option>
        <option>Ant Blazor</option>
        <option>Fluent UI</option>
      </select>

      <div className="selection-result">
        Currently learning:
        <strong>{skill}</strong>
      </div>
    </div>
  );
}

function ProgressDemo() {
  const [completed, setCompleted] = useState(3);

  const total = 5;

  const percentage = Math.round(
    (completed / total) * 100
  );

  return (
    <div>
      <div className="progress-header">
        <span>
          {completed} / {total} concepts
        </span>

        <strong>
          {percentage}%
        </strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`
          }}
        />
      </div>

      <div className="progress-actions">
        <button
          onClick={() =>
            setCompleted(
              Math.max(0, completed - 1)
            )
          }
        >
          −
        </button>

        <button
          onClick={() =>
            setCompleted(
              Math.min(total, completed + 1)
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
export default App;