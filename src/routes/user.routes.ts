import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
router.get("/hello", (req: Request, res: Response) => {
    res.send("Hello from TypeScript Router!");
});
export default router;