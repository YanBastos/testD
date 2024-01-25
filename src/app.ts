
import express, { Application } from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://yanmoraesbastos:<password>@cluster0.ozvdtrq.mongodb.net/?retryWrites=true&w=majority')


app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});