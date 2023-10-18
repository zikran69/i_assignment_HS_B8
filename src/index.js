import express from "express";
import routes from "./routes/router.js";

const app = express();
const port = 9000;

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
