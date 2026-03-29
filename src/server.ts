import dotenv from "dotenv";
import Database from "./config/mongoDb.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  console.log("MONGO_URI:", process.env.MONGO_URI);
  await Database.connect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
