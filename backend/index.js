import express from 'express';
import path from 'path'; // Import the path module

const app = express();

app.use(express.json());

const data = [
    {
        id: 1,
        name: 'Pink Bag',
        price: 330,
        image: 'https://tse1.mm.bing.net/th?id=OIP.P9CJ2mgCkbQLcR1KYamX5AHaHJ&pid=Api&P=0&h=220',
        category: 'LV',
        rating: { rate: 3.6, count: 120 },
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 2,
        name: 'Lui viton bag',
        price: 330,
        image: 'https://tse4.mm.bing.net/th?id=OIP._Nd37Tf6SYBN7O71oR_g4wHaIR&pid=Api&P=0&h=220',
        category: 'YSL',
        rating: { rate: 3.6, count: 120 },
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 3,
        name: 'channel bag',
        price: 330,
        image: 'https://tse4.mm.bing.net/th?id=OIP.rSgLMzmyNtcVVbNn8UrQtwHaGP&pid=Api&P=0&h=220',
        category: 'GUCCI',
        rating: { rate: 5, count: 120 },
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 4,
        name: 'YSL bag',
        price: 330,
        image: 'https://tse4.mm.bing.net/th?id=OIP.vmPjtRWGZtWDEsPAqRwCwQHaFV&pid=Api&P=0&h=220',
        category: 'CH',
        rating: { rate: 4.6, count: 120 },
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 5,
        name: 'fendi bag',
        price: 330,
        image: 'https://tse4.mm.bing.net/th?id=OIP.R7iMQjW1vCP-fouydO6Z7wHaE7&pid=Api&P=0&h=220',
        category: "FENDI",
        rating: { rate: 3.6, count: 120 },
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
];

app.get('/api/data', (req, res) => {
    if (req.query.search) {
        const searchQuery = req.query.search.toLowerCase();
        const filteredData = data.filter(product => product.name.toLowerCase().includes(searchQuery));
        res.send(filteredData);
        return;
    }

    setTimeout(() => {
        res.send(data);
    }, 2000);
});

app.get('/api/data/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = data.find(p => p.id === productId);
    if (product) {
        res.json({ product });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});