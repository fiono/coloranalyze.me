import { useState } from "react";

function Header({ title }) {
  return <h1>{title} :)</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="colors 🌈" />

      <ul>
        {colors.map((c) => (
          <li key="{c}">{c}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
