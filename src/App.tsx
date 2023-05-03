import React from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="alert alert-danger" role="alert">
      <Alert>Hi <a href="#" className="alert-link">MOM</a></Alert>
      <Button color="danger" onclick={() => console.log('currentColor')}>
        Next
      </Button>
    </div>
  );
}

export default App;
