import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
      </Wrapper>
    </div>
  );
}

export default App;
