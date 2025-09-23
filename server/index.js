import dotenv from "dotenv";
import app from "./app.js";
import dbConnection from "./db/dbConnection.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`backend listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
    process.exit(1);
  });
