
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Men's T-Shirt",
      description: "Comfortable cotton t-shirt",
      price: 2500,
      image: "https://th.bing.com/th/id/OIP.cR2xZf-X8_s0PfhukQssygHaJo?w=182&h=237&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Men",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Women's Dress",
      description: "Elegant casual dress",
      price: 4500,
      image: "data:image/webp;base64,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",
      category: "Women",
      sizes: ["M", "L"]
    },
    {
      id: 3,
      name: "Women's Dress",
      description: "Elegant casual dress",
      price: 4500,
      image: "data:image/webp;base64,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",
      category: "Women",
      sizes: ["M", "L"]
    },
    {
      id: 3,
      name: "Women's Dress",
      description: "Elegant casual dress",
      price: 4500,
      image: "data:image/webp;base64,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",
      category: "Women",
      sizes: ["M", "L"]
    },
    {
      id: 3,
      name: "Women's Dress",
      description: "Elegant casual dress",
      price: 4500,
      image: "https://th.bing.com/th/id/OIP.PNuCePmeYCqlZ9K1_F5U_gHaGq?w=182&h=164&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      category: "Women",
      sizes: ["M", "L"]
    }
  ];

  return (
    <div className="container py-1">
      <hr />

      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-2 mb-4">
            <div className="card shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">
                  {item.category} &nbsp;
                  [ {item.sizes.map(size => <span key={size}>{size}, </span>)} ]
                </p>
                <p className="fw-bold">Rs {item.price}</p>

                <div className="d-flex gap-2">
                  <a
                    href={`/product/${item.id}`}
                    className="btn btn-sm btn-primary flex-fill"
                  >
                    <i className="bi bi-eye"></i>
                  </a>

                  <button
                    className="btn btn-sm btn-success flex-fill"
                  >
                    <i className="bi bi-cart-plus"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
