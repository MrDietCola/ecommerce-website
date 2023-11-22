export default function Topic(props) {
  return props.topics.map((topic, index) => (
    <button 
      key={topic.id}
      className="topic-btn"
    >
      <h4>{topic.name}</h4>      
    </button>
  ));  
}