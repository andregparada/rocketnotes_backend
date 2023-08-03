const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.put("/", ensureAuthenticated, userController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename);
    response.json();
})

module.exports = userRoutes
