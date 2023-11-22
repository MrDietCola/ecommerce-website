
export default function Category({ categories }) {
  return categories.map((category, index) => (
    <>
      <button 
      key={category.id}
      className="topic-btn"
    >
      <h4>{category.name}</h4>      
    </button>
    </>
  ));
}