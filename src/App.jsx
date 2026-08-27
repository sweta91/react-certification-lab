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
          <p className="eyebrow">REACT CERTIFICATION • 2026</p>

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
        </div>

        <div className="demo-grid">
          <div className="demo-card">
            <span className="demo-label">useState</span>
            <h3>Counter</h3>

            <div className="counter">
              <button onClick={() => setCount(count - 1)}>−</button>
              <strong>{count}</strong>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button
              className="text-button"
              onClick={() => setCount(0)}
            >
              Reset counter
            </button>
          </div>

          <div className="demo-card">
            <span className="demo-label">Conditional Rendering</span>
            <h3>Toggle message</h3>

            <button
              className="primary-button small"
              onClick={() => setShowMessage(!showMessage)}
            >
              {showMessage ? "Hide message" : "Show message"}
            </button>

            {showMessage && (
              <div className="success-message">
                React state changed the UI. ✓
              </div>
            )}
          </div>

          <div className="demo-card">
            <span className="demo-label">Controlled Form</span>
            <h3>Say hello</h3>

            <form onSubmit={handleSubmit}>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
              />

              <button className="primary-button small">
                Submit
              </button>
            </form>

            {submittedName && (
              <div className="success-message">
                Hello, {submittedName}! 👋
              </div>
            )}
          </div>

          <div className="demo-card">
            <span className="demo-label">useEffect</span>
            <h3>Component timer</h3>

            <strong className="timer">{seconds}s</strong>

            <p>
              This counter updates through a useEffect interval while the
              component is mounted.
            </p>
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

export default App;