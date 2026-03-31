import cors from "cors"
import express from "express";
import userRoute from "./routes/userRoute.js";
import urlRoute from "./routes/urlRoute.js";
import { redirect } from "./controllers/urlController.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", userRoute);
app.use("/api", urlRoute);

//redirect to original url
app.get("/:shortcode", redirect);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));