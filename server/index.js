const express = require("express");
const app = express();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
// const cors = require("cors");
// const { mongoose } = require("mongoose");
// const User = require("./models/User");
// const Place = require("./models/Place");
// const Booking = require("./models/Booking");
// const cookieParser = require("cookie-parser");
// const imageDownloader = require("image-downloader");
// const multer = require("multer");
// const fs = require("fs");

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = "deirkjeidsijqi3IFEIRJ39erkef";

// app.use(cookieParser());
// app.use(express.json());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );
// app.use("/uploads", express.static(__dirname + "/uploads"));

// function getUserDataFromReq(req) {
//   return new Promise((resolve, rejects) => {
//     jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
//       if (err) throw err;
//       resolve(userData);
//     });
//   });
// }

app.get("/", (req, res) => {
  res.json("Welcome to airbnb app");
});

// app.post("/register", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { name, email, password } = req.body;

//   try {
//     const userDoc = await User.create({
//       name,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });
//     res.json(userDoc);
//   } catch (e) {
//     res.status(422).json(e);
//   }
// });

// app.post("/login", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });

//   if (userDoc) {
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//       jwt.sign(
//         { email: userDoc.email, id: userDoc._id },
//         jwtSecret,
//         {},
//         (err, token) => {
//           if (err) throw err;
//           res.cookie("token", token).json(userDoc);
//         }
//       );
//     } else {
//       res.status(422).json("pass not ok");
//     }
//   } else {
//     res.json("not found");
//   }
// });

// app.post("/logout", (req, res) => {
//   res.cookie("token", "").json("true");
// });

// app.get("/profile", (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//       if (err) throw err;
//       const { name, email, _id } = await User.findById(userData.id);
//       res.json({ name, email, _id });
//     });
//   } else {
//     res.json(null);
//   }
// });

// app.post("/upload-by-link", async (req, res) => {
//   const { link } = req.body;
//   const newName = "photo" + Date.now() + ".jpg";
//   await imageDownloader.image({
//     url: link,
//     dest: __dirname + "/uploads/" + newName,
//   });
//   res.json(newName);
// });

// const photoMiddleware = multer({ dest: "uploads" });
// app.post("/upload", photoMiddleware.array("photos", 100), (req, res) => {
//   const uploadedFiles = [];
//   for (let i = 0; i < req.files.length; i++) {
//     const { path, originalname } = req.files[i];
//     const parts = originalname.split(".");
//     const ext = parts[parts.length - 1];
//     newPath = path + "." + ext;
//     fs.renameSync(path, newPath);
//     uploadedFiles.push(newPath.replace("uploads/", ""));
//   }
//   res.json(uploadedFiles);
// });

// app.post("/places", (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const { token } = req.cookies;
//   const {
//     title,
//     address,
//     photos,
//     description,
//     perks,
//     extraInfo,
//     checkIn,
//     checkOut,
//     maxGuests,
//     price,
//   } = req.body;

//   jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//     if (err) throw err;

//     const placeDoc = await Place.create({
//       owner: userData.id,
//       title,
//       address,
//       photos,
//       description,
//       perks,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests,
//       price,
//     });
//     res.json(placeDoc);
//   });
// });

// app.get("/user-places", (req, res) => {
//   const { token } = req.cookies;
//   jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//     if (err) throw err;
//     const { id } = userData;

//     const placeData = await Place.find({ owner: id });
//     res.json(placeData);
//   });
// });

// app.get("/places/:id", async (req, res) => {
//   const { id } = req.params;
//   const placesData = await Place.findById(id);
//   res.json(placesData);
// });

// //Update Places Data
// app.put("/places", (req, res) => {
//   const { token } = req.cookies;
//   const {
//     id,
//     title,
//     address,
//     photos,
//     description,
//     perks,
//     extraInfo,
//     checkIn,
//     checkOut,
//     maxGuests,
//     price,
//   } = req.body;
//   jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//     if (err) throw err;
//     const placeDoc = await Place.findById(id);

//     if (userData.id === placeDoc.owner.toString()) {
//       placeDoc.set({
//         title,
//         address,
//         photos,
//         description,
//         perks,
//         extraInfo,
//         checkIn,
//         checkOut,
//         maxGuests,
//         price,
//       });
//       await placeDoc.save();
//       res.json("Ok");
//     }
//   });
// });

// //Get data for Home Page
// app.get("/places", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const placesData = await Place.find();
//   res.json(placesData);
// });

// app.post("/bookings", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const userData = await getUserDataFromReq(req);
//   const { place, checkIn, checkOut, numberOfGuests, name, phone, price } =
//     req.body;

//   Booking.create({
//     place,
//     checkIn,
//     checkOut,
//     numberOfGuests,
//     name,
//     phone,
//     price,
//     user: userData.id,
//   })
//     .then((doc) => {
//       res.json(doc);
//     })
//     .catch((err) => {
//       throw err;
//     });
// });

// app.get("/bookings", async (req, res) => {
//   mongoose.connect(process.env.MONGO_URL);
//   const userData = await getUserDataFromReq(req);
//   res.json(await Booking.find({ user: userData.id }).populate("place"));
// });

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
