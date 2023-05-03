import React, { ReactNode, useState } from "react";

interface Props{
  children: ReactNode;
}

function Dismiss({ children }: Props) {
  const [showAlert, setShowAlert] = useState(true);
  const [text, setText] = useState("Hide");

  return (
    <>
      <div
        className={showAlert ? "alert alert-warning alert-dismissible fade show" : "alert alert-warning alert-dismissible fade"}
        role="alert"
      >
        <strong>Holy guacamole!</strong> {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => {
            setShowAlert(!showAlert);
            setText(showAlert ? "Show" : "Hide");
          }}
        ></button>
      </div>
      <button className="btn btn-dark w-100" onClick={() => {
  setShowAlert(!showAlert);
  setText(showAlert ? "Show" : "Hide");
}}>
  {text}
</button>

    </>
  );
};

export default Dismiss;
