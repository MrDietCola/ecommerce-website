const Orders = [
  { id: '1a', productId: 1, name: 'T-shirt', description: 'This is a T-shirt.', price: 65 },
  { id: '2a', productId: 2, name: 'Jeans', description: 'This is a pair of jeans.', price: 80 },
  { id: '3a', productId: 3, name: 'Sneakers', description: 'This is a pair of sneakers.', price: 120 },
  { id: '4a', productId: 4, name: 'Hat', description: 'This is a hat.', price: 25 },
]

export default function MyOrders(props) {
  return Orders.map((order, index) => (
    <>
      <div 
      key={order.id}
      className="order-card"
    >
      <h4 key={order.productId}>{order.name}</h4>
      <p>${order.price}</p>
      <p>{order.description}</p>      
    </div>
    </>
  ));
}