import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./ormconfig";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(port, async () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );

export { app };
