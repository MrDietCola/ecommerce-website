import Button from 'react-bootstrap/Button';

export default function CartBtn(props) {
  return (
    <Button 
      className='cart-btn'
      variant="outline-secondary" 
      id="button-addon2"
      onClick={() => props.setCartPage(true)}
    >
      &#x1F6D2;
    </Button>
  )  
}