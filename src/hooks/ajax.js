import axios from 'axios';
import React, { useState, useEffect } from 'react';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const useAjax = () => {

  const [data, setData] = useState({});
  const [options, request] = useState([]);
  console.log(data);
  useEffect(() => {
    async function ajaxCall() {

      
      try {
        const res = await axios(options);
        console.log(res)
        setData(res.data.results);
      } catch (error) {
        console.log(error.message);
      }
      
    }
    ajaxCall();
  }, [options])
  console.log(data);
  return { data, request };
}


function useAjaxCalls() {
  const [list, setList] = useState([]);

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(() => {
    _getTodoItems();
  }, [])

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  return [list, setList, _getTodoItems, _addItem]
}

export default useAjax