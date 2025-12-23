import { ScriptNode } from "./types";

export class Executor {
  constructor(
    private graph: { nodes: ScriptNode[]; edges: any[] }
  ) {}

  execute(startNodeId: string, context: any = {}) {
    const visited = new Set<string>();
    let queue = [startNodeId];

    while (queue.length > 0) {
      const nodeId = queue.shift()!;
      if (visited.has(nodeId)) continue;
      visited.add(nodeId);

      const node = this.graph.nodes.find(n => n.id === nodeId);
      if (!node) continue;

      this.executeNode(node, context);

      const outgoing = this.graph.edges.filter(e => e.source === nodeId);
      outgoing.forEach(e => queue.push(e.target));
    }
  }

  private executeNode(node: ScriptNode, context: any) {
    switch (node.type) {
      case "compare":
        const { a, b, operator } = node.data as any;
        return eval(`${a} ${operator} ${b}`);
      case "log":
        console.log(context[node.data["key"]]);
        return true;
      default:
        return null;
    }
  }
}
