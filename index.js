import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Connected API' });
});

app.listen(PORT, () => {
    console.log(`Server en http://localhost:${PORT}`);
});