import { Router } from "express";
import { store } from "../store";
import { serializeGraph, deserializeGraph } from "../services/serialize";

const router = Router();

router.get("/export", (_, res) => {
  res.send(serializeGraph(store.getState()));
});

router.post("/import", (req, res) => {
  const graph = deserializeGraph(req.body.content);
  store.load(graph.nodes, graph.edges);
  res.json({ status: "imported" });
});

export default router;
