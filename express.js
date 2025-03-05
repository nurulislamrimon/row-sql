import express from "express";
import { getStudents } from "./database.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", async (req, res) => {
  const students = await getStudents();
  res.send(students);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
