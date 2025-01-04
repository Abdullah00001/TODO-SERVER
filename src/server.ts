import dotenv from "dotenv";
import connect from "./configs/db.configs.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server rnning on port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else {
      throw new Error("Server Connection Failed Due To Unknown Error");
    }
  }
})();
