import { useState } from "react";

interface Props {
  text: string;
}

const colors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
];

function Button({ text }: Props) {
  const [currentColor, setCurrentColor] = useState(0);

  const handleClick = () => {
    setCurrentColor(Math.floor(Math.random() * colors.length));
  };

  return (
    <button
      type="button"
      className={"btn btn-" + colors[currentColor]}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
