const express = require("express")
const router = express.Router();
const {
    getFrame,
    getAllFrames,
    deleteFrame,
    updateFrame,
    createFrame,
} = require("../controllers/frame")

router.route("/").get(getAllFrames).post(createFrame)
router.route("/:id").get(getFrame).delete(deleteFrame).put(updateFrame)

module.exports = router;