import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Searchbar() {
  return (
    <>
      <InputGroup className="">
        <Form.Control
          placeholder="search..."
          aria-label=""
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </>
  )
}