import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).json({message: "You are on login route"})
})

export default router