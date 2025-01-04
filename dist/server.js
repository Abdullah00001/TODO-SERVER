var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import connect from "./configs/db.configs.js";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connect();
        app.listen(PORT, () => {
            console.log(`Server rnning on port ${PORT}`);
        });
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
        else {
            throw new Error("Server Connection Failed Due To Unknown Error");
        }
    }
}))();
