
function ProductTable() {
  const products = [
    {
      id: "P101",
      name: "Laptop",
      category: "Electronics",
      brand: "HP",
      price: 55000,
      stock: 20
    },
    {
      id: "P102",
      name: "Smartphone",
      category: "Electronics",
      brand: "Samsung",
      price: 25000,
      stock: 35
    },
    {
      id: "P103",
      name: "Headphones",
      category: "Accessories",
      brand: "Sony",
      price: 3000,
      stock: 50
    }
  ];

  return (
    <div className="table-container">
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>₹{product.price.toLocaleString("en-IN")}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
