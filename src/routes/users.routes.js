const { Router } = require('express')

const UserController = require("../controllers/UserController")

const userRoutes = Router()

const userController = new UserController();

userRoutes.post('/', userController.create)
userRoutes.put('/:id', userController.update)

module.exports = userRoutes


// function myMiddleware(request, response, next) {
//     console.log("Você passou pelo Middleware!")

//     if(!request.body.isAdmin) {
//         return response.json({ meesage: "user unauthorized" })
//     }

//     next()
// }