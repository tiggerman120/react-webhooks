import React, { useState }from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TodoForm (props) {
const [item, setItem] = useState('');

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newitem = {complete: false};
    console.log(`in handlesubmit ${item} ${newitem}`)
    setItem(newitem);
  };


    return (
      <>
      <Card>
        <Card.Title>Add To Do Item</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formtext">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
            required
            name="text"
            placeholder="Add To Do Item"
            defaultValue=""
            onChange={handleInputChange}
            />
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
          required
          type="text"
          name="assignee"
          placeholder="Assigned To"
          onChange={handleInputChange}
          />
          <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control
            required
            type="range"
            min="1"
            max="5"
            name="difficulty"
            defaultValue="1"
            onChange={handleInputChange}
            />
          <Button data-testid="submit" type="submit">Add Item</Button>
        </Form.Group>
        </Form>
        </Card>
      </>
    );
}

export default TodoForm;