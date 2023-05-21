import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/categories", async (req, res, next) => {
	try {
		const categories = await prisma.category.findMany({
			include: {
				products: true,
			},
		});
		res.json(categories);
	} catch (error) {
		next(error);
	}
});

export default router;
