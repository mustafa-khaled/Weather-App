import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main searchQuery={searchQuery} />
    </>
  );
}

export default App;
