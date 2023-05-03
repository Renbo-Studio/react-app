import { useState } from "react";

interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
  children: string;
  onclick: () => void;
}


function Button({ children, onclick, color = 'dark' }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
