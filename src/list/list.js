import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function TodoList (props) {
  return (
    <Container>
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
          //variant={item.complete ? 'success' : 'danger'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {console.log(item)}
              Task: {item.text} {<br />}
              Assigned To: {item.assignee}
              {<br />}{<br />}

              {/*something about this buttons handler function is causing everything to delete */}
            <Button id='deleteButton' type='submit' onClick={() => props.deleteOne(item._id)}>Delete</Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Container>
    );
}

export default TodoList;