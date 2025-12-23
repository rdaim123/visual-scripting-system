import { ScriptNode } from "./types";

export interface Edge {
  id: string;
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
}

export class GraphStore {
  private nodes: ScriptNode[] = [];
  private edges: Edge[] = [];

  addNode(node: ScriptNode) {
    this.nodes.push(node);
  }

  updateNode(id: string, update: Partial<ScriptNode>) {
    this.nodes = this.nodes.map(n =>
      n.id === id ? { ...n, ...update } : n
    );
  }

  addEdge(edge: Edge) {
    this.edges.push(edge);
  }

  load(nodes: ScriptNode[], edges: Edge[]) {
    this.nodes = nodes;
    this.edges = edges;
  }

  getState() {
    return { nodes: this.nodes, edges: this.edges };
  }

  clear() {
    this.nodes = [];
    this.edges = [];
  }
}
