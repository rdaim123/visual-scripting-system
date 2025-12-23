import { Router } from "express";
import { store } from "../store";

const router = Router();

router.post("/save", (req, res) => {
  const { nodes, edges } = req.body;
  store.load(nodes, edges);
  res.json({ status: "ok" });
});

router.get("/load", (_, res) => {
  res.json(store.getState());
});

router.delete("/clear", (_, res) => {
  store.clear();
  res.json({ status: "cleared" });
});

export default router;
