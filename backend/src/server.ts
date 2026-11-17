
import express from "express";
import multer from "multer";

const app = express();
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
const PORT = 4000;

// Keep the uploaded file temporarily in memory.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 }, // 1 MB
});

app.get("/health", (_req, res) => {
  res.send("backend:ok");
});

app.post("/uploads", (req, res) => {
  upload.single("file")(req, res, (error) => {
    if (error) {
      const tooLarge =
        error instanceof multer.MulterError &&
        error.code === "LIMIT_FILE_SIZE";

      res.status(tooLarge ? 413 : 400).json({
        error: tooLarge
          ? "File exceeds 1 MB limit"
          : "File upload failed",
      });
      return;
    }

    const file = req.file;

    if (!file) {
      res.status(400).json({ error: "No file provided" });
      return;
    }

    if (!/\.(log|txt)$/i.test(file.originalname)) {
      res.status(400).json({
        error: "Only .log and .txt files are allowed",
      });
      return;
    }

    console.log("Received:", file.originalname);

    res.json({
      message: "File received successfully",
      filename: file.originalname,
      size: file.size,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
// POST /uploads creates a URL where files can be uploaded.
// memoryStorage() temporarily holds the file without saving it to PostgreSQL.
// res.json() confirms the filename and size. Parsing comes later.