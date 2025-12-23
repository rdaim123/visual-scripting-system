import { useEffect, useState } from "react";
import { Editor } from "./components/Editor";
import { Sidebar } from "./components/Sidebar";
import { GraphStore } from "./core/graphStore";

const store = new GraphStore();

export default function App() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/templates")
      .then(res => res.json())
      .then(data => setTemplates(data));
  }, []);

  const createNode = (type: string) => {
    const id = crypto.randomUUID();
    const template = templates.find(t => t.type === type);

    const node = {
      id,
      type,
      position: { x: 100, y: 100 },
      data: template.initialData
    };

    store.addNode(node);
    setNodes([...store.getState().nodes]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar templates={templates} onCreateNode={createNode} />
      <Editor
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
        store={store}
      />
    </div>
  );
}
