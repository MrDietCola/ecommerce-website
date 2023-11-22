import Category from "./category"

const categories = [
  {id: 1, name: 'Track a Package'},
  {id: 2, name: 'Returns & Refunds'},
  {id: 3, name: 'My Wishlists'},
  {id: 4, name: 'Payment Info'},
  {id: 5, name: 'Account Info'},
  {id: 6, name: 'Contact Us'},
]

export default function Categories() {
  return (
    <>
      <div className="category-container" key={'category'}>
        <Category categories={categories}/>
      </div>
    </>
  )
}
