//create 2 routes
// 1 for /dashboard
// 1 for /login

const express = require(`express`);
const router = express.Router();
const { dashboard, login } = require("../controllers/login");

router.route("/").get(authMiddleware,dashboard);
router.route("/login").post(login);

module.exports = router;
