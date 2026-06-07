const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const { uploadPhotos } = require("../_lib/uploadPhoto");

const { createUser, updateMe, getUser } = authController;

router.route("/").post(createUser).get(getUser);

router.route("/:id").patch(uploadPhotos, updateMe);

module.exports = router;
