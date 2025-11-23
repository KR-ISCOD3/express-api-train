let products = [
  { id: 1, name: "Gaming Laptop", price: 1200 },
  { id: 2, name: "Office Laptop", price: 700 },
];

// Get all products
export const getProducts = (req, res) => {
  res.json(products);
};

// Get single product
export const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(product);
};

// Create product
export const createProduct = (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update product
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  let found = false;

  products = products.map(p => {
    if (p.id === id) {
      found = true;
      return { ...p, ...req.body };
    }
    return p;
  });

  if (!found) return res.status(404).json({ message: "Product not found" });

  res.json({ message: "Product updated" });
};

// Delete product
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const exists = products.some(p => p.id === id);

  if (!exists) return res.status(404).json({ message: "Product not found" });

  products = products.filter(p => p.id !== id);
  res.json({ message: "Product deleted" });
};
