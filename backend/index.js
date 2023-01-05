import express from "express";
import mysql from "mysql";
import cors from "cors";

//init express
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8800;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello from backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book's been added");
  });
});

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
