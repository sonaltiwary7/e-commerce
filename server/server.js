const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const products = [
  { id: 1, name: 'Bag', price: 10, image: 'https://th.bing.com/th/id/OIP.SLXZeuIoCke-8XztFgrLYwHaE8?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'Perfumes', price: 20, image: 'https://th.bing.com/th/id/OIP.MMR3FWWDahvGNzfCQNhXPgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 3, name: 'Shoes', price: 30, image: 'https://png.pngtree.com/back_origin_pic/04/63/68/bd6de885b7268afbe7d1018ebb3c46ff.jpg' },
  { id: 4, name: 'Tshirts', price: 5, image: 'https://prabhubhakti.com/cdn/shop/files/g4_13ac3750-ce05-45e3-89e5-7f0437e69cde.png?v=1701084753' },
  { id: 5, name: 'Jeans', price: 13, image: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?cs=srgb&dl=pexels-neosiam-603022.jpg&fm=jpg' },
  { id: 6, name: 'Watch', price: 50, image: 'https://danielklein.in/cdn/shop/products/1.jpg?v=1671621801&width=320' },
  // Add more products as needed
];

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products', (req, res) => {
  const { search } = req.query;
  let filteredProducts = products;

  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }

  res.json(filteredProducts);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
