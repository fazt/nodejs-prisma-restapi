import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

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

router.post("/products", async (req, res) => {
	try {
		const product = await prisma.product.create({
			data: req.body,
		});
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.get("/products/:id", async (req, res) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(req.params.id),
		},
		include: {
			category: true,
		},
	});
	res.json(product);
});

router.delete("/products/:id", async (req, res) => {
	const product = await prisma.product.delete({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(product.quantity);
});

router.patch("/products/:id", async (req, res) => {
	try {
		const product = await prisma.product.update({
			where: {
				id: Number(req.params.id),
			},
			data: req.body,
			include: {
				category: true,
			},
		});
		res.json(product);
	} catch (error) {
		next(error);
	}
});

export default router;
