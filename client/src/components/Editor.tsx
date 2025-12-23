import ReactFlow, {
  addEdge,
  Background,
  Controls
} from "reactflow";
import { nodeTypes } from "./nodes";

export function Editor({
  nodes,
  edges,
  setNodes,
  setEdges,
  store
}: any) {
  const onConnect = (params: any) => {
    setEdges((eds: any) => addEdge(params, eds));
    store.addEdge(params);
  };

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
