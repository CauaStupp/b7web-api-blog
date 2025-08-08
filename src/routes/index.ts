import { Router } from "express";
import { adminRouter } from "./admin";

const mainRouter = Router();

mainRouter.use("/api/admin", adminRouter);

export { mainRouter };
