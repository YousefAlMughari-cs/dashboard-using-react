import "../src/App.css";

import Slidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
function App() {
  return (
    <>
      <div className="app">
        <Slidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
