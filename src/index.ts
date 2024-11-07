import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 7000;

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("It is working fine");
});

app.listen(PORT, () => {
  console.log(`App is running on PORT - ${PORT}`);
});
