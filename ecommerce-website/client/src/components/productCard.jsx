export default function ProductCard(props) {
  return props.products.map((product, index) => (
    <div 
      key={product.id}
      className="product-card"
    >
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  ));  
}