import React from "react";
import * as Questions_List from "./assets/questions.json";
import Questions from "./components/Questions/Questions";

function App() {
  return <Questions questions={Questions_List} />;
}

export default App;
