import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import jsMind from "jsmind"
import "jsmind/style/jsmind.css"

// jsmind 版本 0.8.3 一个 issue 的复现样例
// 对应 issue: https://github.com/hizzgdev/jsmind/issues/589
const MindmapTest = () => {
  const jmContainer = useRef(null)
  const jm = useRef(null)

  const nodeRenderTest = (jm, element, node) => {
    if (node.isroot || node.id === "2") {
      return false
    }
    // react 18 之前的写法： ReactDOM.render(<span>{node.topic}</span>, element)  //
    // react 18 之后 ReactDOM.render 被废弃不能用了，需要使用 ReactDOM.createRoot 尚未调通:
    // import ReactDOM from "react-dom/client";
    // const root = ReactDOM.createRoot(element);
    // root.render(<span>{node.topic}</span>);
    // ReactDOM.render(<span>{node.topic}</span>, element)
    element.innerHTML = `<span>${node.topic}</span>`
    return true
  }

  useEffect(() => {
    if (!jmContainer.current) {
      return
    }
    jm.current = new jsMind({
      container: jmContainer.current,
      editable: true,
      theme: "orange", //"greensea", //
      shortcut: {
        enable: true, // 是否启用快捷键
      },
      view: {
        custom_node_render: nodeRenderTest, // 使用自定义渲染函数
      },
    })

    jm.current.show({
      meta: { name: "", author: "", version: "" },
      format: "node_array",
      data: [
        { id: "root", topic: "前端库", isroot: true },
        { id: "1", topic: "脑图(custom_node_render展开按钮被遮蔽了)", parentid: "root", expanded: false },
        { id: "11", topic: "JSMind", parentid: "1" },
        { id: "2", topic: "流程图", parentid: "root", expanded: false },
        { id: "21", topic: "PlantUML", parentid: "2" },
      ],
    })

    jm.current.resize()
  })

  return <div ref={jmContainer} style={{ width: "100%", height: "100%" }} />
}

export { MindmapTest }
