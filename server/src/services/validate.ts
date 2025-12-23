export function validateGraph(graph: any): boolean {
  return Array.isArray(graph.nodes) && Array.isArray(graph.edges);
}
