import { Router } from "express";

const router = Router();

router.get("/categories", async (req, res) => {
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
