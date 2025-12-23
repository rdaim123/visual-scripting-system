import { Router } from "express";
import { Executor } from "../../client/src/core/executor";
import { store } from "../store";

const router = Router();

router.post("/", (req, res) => {
  const executor = new Executor(store.getState());
  executor.execute(req.body.startNode, req.body.context);
  res.json({ status: "executed" });
});

export default router;
