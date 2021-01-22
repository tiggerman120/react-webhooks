import React, { useCallback, useEffect, useState } from 'react';
import TodoForm from '../form/form.js';
import TodoList from '../list/list.js';
import Button from 'react-bootstrap/Button';
import './todo.scss';
import useAjax from '../hooks/ajax.js';

const axios = require('axios').default


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [count, setCount] = useState(0)
  const { data, request } = useAjax()





  const _addItem = async (item) => {
    const options = {
      method: 'post',
      url: todoAPI,
      data: item,
    }
    request(options);
    
  }
  
  const _getTodoItems = () => {
    const options = {
      method: 'get',
      url: todoAPI,
    }
    request(options);
    setList(data);
  };
  
  
  
  
  useEffect(() => {
     if (data.results) {
      setList(data.results);
    } else {
      _getTodoItems();
    }
  }, [])


  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    let url = `${todoAPI}/${id}`;
    const options = {
      method: 'put',
      url: url,
      data: { complete: !item.complete },
    }
    const data = useAjax(options)
    setList(data);
    
  };








  useEffect(() => {
    if (list.length === 0) {
      _getTodoItems();
    }
    setCount(list.filter(item => !item.complete).length);
    document.title = `To Do List: (${count})`;
  }, [data, list, count]);








  const deleteOne = async (id) => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      await fetch(url, {
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(savedItem => {
          console.log(savedItem)
          _getTodoItems();
         
        })
        .catch(console.error);
    }
  };
  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}

            handleComplete={_toggleComplete}
            deleteOne={deleteOne}
          />
        </div>
      </section>
    </>
  );

};

export default ToDo;