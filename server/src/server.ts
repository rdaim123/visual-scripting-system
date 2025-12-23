import express from "express";
import cors from "cors";

import graphRoutes from "./routes/graph";
import templateRoutes from "./routes/templates";
import fileRoutes from "./routes/files";
import executeRoutes from "./routes/execute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/graph", graphRoutes);
app.use("/templates", templateRoutes);
app.use("/files", fileRoutes);
app.use("/execute", executeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
