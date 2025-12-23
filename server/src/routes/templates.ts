import { Router } from "express";
import { nodeTemplates } from "../templates/nodes";

const router = Router();

router.get("/", (_, res) => {
  res.json(nodeTemplates);
});

export default router;
