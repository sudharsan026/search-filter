import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { que } = req.query;
  const keys = ["name", "username", "email"];
  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(que))
    );
  };
  res.json(searchData(Users).splice(0, 10));
});

app.listen(5000, () => console.log("API is running"));
