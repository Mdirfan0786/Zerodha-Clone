const { Signup, Login } = require("../controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/", userVerification, (req, res) => {
  res.send("Protected Route Accessed");
});

module.exports = router;
