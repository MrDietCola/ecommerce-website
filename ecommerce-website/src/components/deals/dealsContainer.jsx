export default function dealsContainer() {
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