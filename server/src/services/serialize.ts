export function serializeGraph(graph: any) {
  return JSON.stringify(graph);
}

export function deserializeGraph(json: string) {
  return JSON.parse(json);
}
