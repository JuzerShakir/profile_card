import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    name: "Ruby",
    level: "advanced",
    color: "#025464",
  },
  {
    name: "Rails",
    level: "advanced",
    color: "#E57C23",
  },
  {
    name: "SQL",
    level: "intermediate",
    color: "#E8AA42",
  },
  {
    name: "Git",
    level: "intermediate",
    color: "#F1C376",
  },
  {
    name: "React",
    level: "beginner",
    color: "#F8F1F1",
  },
];

const emojiLevel = { advanced: "💪", intermediate: "👍", beginner: "👶" };

function App() {
  return (
    <div className="card">
      <Dp />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

function Skillset(skill) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const { name, level, color } = skillObj;
  const skillStyle = {
    backgroundColor: color,
  };

  return (
    <li className="skill" style={skillStyle}>
      {name} {emojiLevel[level]}
    </li>
  );
}

function Intro() {
  return (
    <div>
      <h1>Juzer Shakir</h1>
      <p>
        I'm a Full-Stack Web Developer specializing in Ruby On Rails & React.
        I'm a passionate coder with a strong commitment to producing
        exceptional, clean, and efficient code.
      </p>
    </div>
  );
}

function Dp() {
  return (
    <img className="avatar" src="my_profile_photo.jpg" alt="Juzer Shakir" />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
