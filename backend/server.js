const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 1234;

app.use(cors());

const storage = multer.memoryStorage(); // Salvează imaginile în memorie (poți schimba să fie pe disc)
const upload = multer({ storage: storage });

// Endpoint pentru request-uri cu imagini și date text
app.post("/api/add-parking", upload.array("images", 5), (req, res) => {
  const { address, hours, pricePerHour, details } = req.body;
  const images = req.files; // Lista cu fișiere

  if (!address || !hours || !pricePerHour || !details || images.length === 0) {
    return res.status(400).json({ error: "Toate câmpurile și cel puțin o imagine sunt necesare!" });
  }

  console.log("📌 Loc de parcare primit:", {
    address,
    hours,
    pricePerHour,
    details,
    images: images.map((img) => img.originalname),
  });

  res.status(200).json({ message: "Loc de parcare cu imagini adăugat cu succes!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Serverul rulează pe http://192.168.34.124:${PORT}`);
});
