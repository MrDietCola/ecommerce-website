export default function dealCard(props) {
  return props.deals.map((deal, index) => (
    <div 
      key={deal.id}
      className="deal-card"
    >
      <h2>{deal.name}</h2>
      <p>{deal.price}</p>
      <p>{deal.description}</p>
    </div>
  ));  
}