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
  const { data, request } = useAjax()

  useEffect(() => {
    //if()
  })
  const _addItem = async (item) => {
    const options = {
    // item.due = new Date();
    // await fetch(todoAPI, {
      method: 'post',
      url: todoAPI,
      data: item,
      // mode: 'cors',
      // cache: 'no-cache',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(item)
    }
    useAjax(options)
      // .then(response => response.json())
      // .then(savedItem => {
      //   setList([...list, savedItem])

      
      .then(console.log(list))
      .catch(console.error);
  };



  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    // if (item._id) {
      // item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      const options = {
      // fetch(url, {
        method: 'put',
        url: url,
        data: { complete: !item.complete },
        
      }
      const data = useAjax(options)
      setList(data);
        // .then(response => response.json())
        // .then(savedItem => {
        //   setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem))
  };

  const _getTodoItems = useCallback(async () => {
    const options = {
      method: 'get',
      url: todoAPI,
    }
    console.log(options);
      const obj = request(options);
      console.log(obj)
      //setList({obj})
  }, [request])

  useEffect(_getTodoItems, [_getTodoItems]);

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
          _getTodoItems();
          //let mappedList = list.filter(listItem => listItem._id !== item._id)
          //console.log(mappedList)

          //console.log(list);
        })
        .catch(console.error);
    }
  };


  return (
    <>
      <header>
        <h2>
          {console.log(list)}
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