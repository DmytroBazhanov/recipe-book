import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { initRecipeRouter } from "./routes/recipe-router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

initRecipeRouter(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
