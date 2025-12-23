export function serializeGraph(graph: any): string {
  return JSON.stringify(graph, null, 2);
}

export function deserializeGraph(json: string): any {
  return JSON.parse(json);
}
