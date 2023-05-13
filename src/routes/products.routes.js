import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/products", async (req, res) => {
	try {
		const products = await prisma.product.findMany({
			include: {
				category: true,
			},
		});
		res.json(products);
	} catch (error) {
		next(error);
	}
});

router.post("/products", (req, res) => {

});

router.get("/products/:id", (req, res) => {});
router.put("/products/:id", (req, res) => {});
router.delete("/products/:id", (req, res) => {});

export default router;
