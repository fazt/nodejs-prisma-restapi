import express from 'express';
import productRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());

app.use('/api', productRoutes);

app.listen(3000)
console.log('Server on port', 3000);
