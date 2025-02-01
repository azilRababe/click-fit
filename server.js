import express from "express";
import path from "path";
import cors from "cors";
import axios from "axios";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const uploadDir = path.join(__dirname, "upload_images");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use("/upload_images", express.static(uploadDir));

app.post("/upload", async (req, res) => {
  try {
    const { url, filename } = req.body;
    const imagePath = path.join(uploadDir, filename);

    // Fetch the image from the URL
    const response = await axios({
      url,
      responseType: "stream",
    });

    // Save the image to 'upload_images' directory
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);

    writer.on("finish", () =>
      res.json({ message: "Image saved successfully!" })
    );
    writer.on("error", (err) =>
      res.status(500).json({ error: "Saving failed", details: err.message })
    );
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save image", details: error.message });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
