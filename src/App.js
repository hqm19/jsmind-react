import "./App.css";
import { MindmapTest } from "./jsmind-test";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
      }}
    >
      {/* 这里不设置大小，会显示不出来。因为 jsmind 生成的 jsmind-inner div 中设置了 position: relative  */}
      <div style={{ width: "100vh", height: "100vh" }}>
        <MindmapTest />
      </div>
    </div>
  );
}

export default App;
