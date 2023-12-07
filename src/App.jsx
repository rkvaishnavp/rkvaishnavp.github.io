import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Main />
      <Education />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
