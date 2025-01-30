import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: "./upload_images/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ storage });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send({ message: "File uploaded successfully!" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
