import express from 'express';
import path from 'path'; // Import the path module
import cors from 'cors';

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true 
}));


app.use(express.json());

const data = [
    {
        id: 1,
        name: 'Louis Vuitton brown bag',
        price: 830,
        image: 'https://tse2.mm.bing.net/th?id=OIP.L0zuZ9_7dnNUJjs7TNN4CQHaHY&pid=Api&P=0&h=220',
   category: 'LV',
   rating: { rate: 3.6, count: 120 },
   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 2,
        name: 'Louis Vuitton dark brown bag',
        price: 730,
        image: 'https://tse1.mm.bing.net/th?id=OIP.G8CN3EPNq1WxDzr8OhtJ8gHaHF&pid=Api&P=0&h=220' 
    ,category:'LV',
    rating: { rate: 3.6, count: 120 },
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
    {
        id: 3,
        name: 'Gucci bag',
        price: 630,
        image: 'https://tse4.mm.bing.net/th?id=OIP.rSgLMzmyNtcVVbNn8UrQtwHaGP&pid=Api&P=0&h=220'
    ,category:'GUCCI',
    rating: { rate: 3.6, count: 120 },
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 4,
        name: 'Channel bag',
        price: 430,
        image: 'https://tse3.mm.bing.net/th?id=OIP.9QFNX6F296Pykjm9f1-6hAAAAA&pid=Api&P=0&h=220'
   ,category:'CH',
   rating: { rate: 3.6, count: 120 },
   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
    },
    {
        id: 5,
        name: 'fendi bag',
        price: 400,
        image: 'https://tse4.mm.bing.net/th?id=OIP.R7iMQjW1vCP-fouydO6Z7wHaE7&pid=Api&P=0&h=220'
   ,category:"FENDI",
   rating: { rate: 3.6, count: 120 },
   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
 },
 {
    id: 6,
    name: 'YSL white bag',
    price: 390,
    image:'https://www.lulux.ru/wp-content/uploads/2020/07/Saint-Laurent-YSL-Women-Nolita-Small-Bag-Vintage-Leather-White-9.jpg',
category:'YSL',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 7,
name: 'YSL black bag',
price: 630,
image:'https://tse4.mm.bing.net/th?id=OIP.X3Y-1zmseGK-_Qu7uBmrFwHaIX&pid=Api&P=0&h=220',
category:'YSL',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 8,
name: 'YSL red bag',
price: 430,
image:'https://tse3.mm.bing.net/th?id=OIP.P3ixfcfMfhYl2nRTTxIF7gHaH9&pid=Api&P=0&h=220',
category:'YSL',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 9,
name: 'YSL green bag',
price: 530,
image:'https://tse3.mm.bing.net/th?id=OIP.QyqWNPTNhxp2LebpzknZywHaHa&pid=Api&P=0&h=220',
category:'YSL',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 10,
name: 'YSL pink bag',
price: 370,
image:'https://tse4.mm.bing.net/th?id=OIP.oGOEfaIYPhJ76oC-RHgEawHaE8&pid=Api&P=0&h=220',
category:'YSL',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 11,
name: 'Channel black bag',
price: 240,
image: 'https://tse3.mm.bing.net/th?id=OIP.9QFNX6F296Pykjm9f1-6hAAAAA&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 12,
name: 'Channel brown bag',
price: 380,
image: 'https://tse4.mm.bing.net/th?id=OIP.EBtfcwDH4jNE9L5zXdurUAHaIp&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 13,
name: 'Channel blue bag',
price: 500,
image: 'https://tse2.mm.bing.net/th?id=OIP.Kt3MJaq_pYR3TcZAVVruEQHaHa&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 14,
name: 'Channel red bag',
price: 360,
image: 'https://tse4.mm.bing.net/th?id=OIP.IrMPPT6nKLf5MqvA9mtJqAAAAA&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 15,
name: 'Channel green bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP._RdEGA5hunWrbrdW-Cj5lgAAAA&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 16,
name: 'Channel skin bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.c9j62pZmXZ6QPdZ4BX_pCwHaJl&pid=Api&P=0&h=220'
,category:'CH',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 17,
name: 'fendi white bag',
price: 330,
image: 'https://tse2.mm.bing.net/th?id=OIP.THcgyNBZM0D5WZnL1QWlhgHaJ4&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 18,
name: 'fendi pink bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.bZijylDnQE4DiLxtuKT_GgHaHa&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 19,
name: 'fendi grey bag',
price: 330,
image: 'https://tse2.mm.bing.net/th?id=OIP.OStbsVZs759QYnq1Qvjf4QHaJQ&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 20,
name: 'fendi red bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.crrIfDISpUOFAAh__y80fgHaHa&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 21,
name: 'fendi black bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.oFj8OfR6ncIU93-iWVGCUAAAAA&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 22,
name: 'fendi brown bag',
price: 330,
image: 'https://tse3.mm.bing.net/th?id=OIP.dUOiKwQVjZt-u_RBLmqV_gHaJx&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 23,
name: 'fendi blue bag',
price: 330,
image: 'https://tse4.mm.bing.net/th?id=OIP.Yeh329E69_dIvg0oBI1uAQHaHa&pid=Api&P=0&h=220'
,category:"FENDI",
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 24,
name: 'Gucci brown bag',
price: 330,
image: 'https://tse2.mm.bing.net/th?id=OIP.tu-8XcKJFYuRgvITyPRolgHaHa&pid=Api&P=0&h=220'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 25,
name: 'Gucci white bag',
price: 330,
image: 'https://tse2.mm.bing.net/th?id=OIP.o0CSWLhetz2LnFeNmN31ugHaHa&pid=Api&P=0&h=220'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 26,
name: 'Gucci red bag',
price: 330,
image: 'https://tse4.mm.bing.net/th?id=OIP.00uDDvy-KWm9HrApIXJVCQHaHa&pid=Api&P=0&h=220'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 27,
name: 'Gucci pink bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.7xu55QPwobe11N2qpwfd5gHaHa&pid=Api&P=0&h=220'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 28,
name: 'Gucci black bag',
price: 330,
image: 'https://tse3.mm.bing.net/th?id=OIP.84T8CoK7W9DmVSwKVBcfrQHaHa&pid=Api&P=0&h=220'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 29,
name: 'Gucci skin  bag',
price: 330,
image: 'https://images.summitmedia-digital.com/preview/images/2019/11/11/443497_HVKEG_9772_001_062_0000_Light-GG-Marmont-small-shoulder-bag.jpg'
,category:'GUCCI',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'
},
{
id: 30,
name: 'Louis Vuitton pink & brown bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.ewOaMoH_cVHSolXhm2HceQHaFy&pid=Api&P=0&h=220' 
,category:'LV',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 31,
name: 'Louis Vuitton  bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.Jc_MIkRtTQX6B3zbBZQePAHaHc&pid=Api&P=0&h=220' 
,category:'LV',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 32,
name: 'Louis Vuitton circular bag',
price: 330,
image: 'https://tse4.mm.bing.net/th?id=OIP.BsyQjDl7q5vdzHhiCwOZdQHaHa&pid=Api&P=0&h=220' 
,category:'LV',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 33,
name: 'Louis Vuitton white & brown bag',
price: 330,
image: 'https://tse1.mm.bing.net/th?id=OIP.sdcE6dEfCnTtwHqPutIXRAHaHa&pid=Api&P=0&h=220' 
,category:'LV',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 34,
name: 'Louis Vuitton blue bag',
price: 330,
image: 'https://tse4.mm.bing.net/th?id=OIP.RpJDXv0y1QDRcOGzsq7MsAHaJx&pid=Api&P=0&h=220' 
,category:'LV',
rating: { rate: 3.6, count: 120 },
description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae illo quos, tempore nostrum nisi distinctio est maiores sapiente sint.'

},
{
id: 35,
name: 'Louis Vuitton white bag',
price: 330,
image: 'https://tse4.mm.bing.net/th?id=OIP.bmRA8bUyTQ6ypX1rbUEJ-wHaJA&pid=Api&P=0&h=220' 
,category:'LV',
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
