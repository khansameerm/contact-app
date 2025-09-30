import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port , ()=>{
    console.log(`Server running on port ${port}`);
});
});
