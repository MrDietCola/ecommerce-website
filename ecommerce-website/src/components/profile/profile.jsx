import Categories from "./categories"
import MyOrders from "./myOrders"

const user = {
  name: 'AJ'
}
export default function Profile() {
  return (
    <>
      <section className="profile-container">
        <Categories/>
        <div className="order-container">
          <h3 className="orders-title">Welcom {user.name}</h3>
          <h4 className="orders-title">My Orders</h4>
          <MyOrders/>
        </div>
      </section>
    </>
  )
}