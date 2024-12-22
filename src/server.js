import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
prisma.$connect(); // Conectar ao banco de dados

const app = express();
app.use(express.json()); // Para o express entender JSON

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).json({ message: 'Hello World' });
})

app.post('/usuario/cadastrar', async (req, res) => {
    const data = req.body;
    console.log(data);
    return res.status(201).json(await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
        }
    }));
})

app.get('/usuario/listar', async (req, res) => {
    const usuarios = await prisma.user.findMany();
    return res.status(200).json(usuarios);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});