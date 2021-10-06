import React, { useEffect, useState } from 'react'
import Form from './Form'
import Lists from './Lists'

import styles from './Watchlist.module.scss'

export const Watchlist = () => {


    const [error, setError] = useState(null);
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    //getting todos from localStorage
    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos'));

        if (getTodos) {
            setTodos(getTodos);
        }
    }, [])

    //saving todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const submitHandler = e => {
        e.preventDefault();

        if (todo.length < 5) {
            setError('At least 5 letters required!');
            return false;
        }

        setTodos([{
            id: Date.now(),
            title: todo,
            done: false
        }, ...todos]);

        setError(null);
        setTodo('');
    }

    const delHandler = (todoId) => {
        if (window.confirm('Are you sure?')) {
            const updatedTodos = todos.filter(item => item.id !== todoId)
            setTodos(updatedTodos);
        }

    }
    const doneHandler = (todoId) => {
        const index = todos.findIndex(item => item.id === todoId);
        const duplicateTodos = [...todos];

        duplicateTodos[index] = {
            id: todos[index].id,
            title: todos[index].title,
            done: !todos[index].done,
        }
        setTodos(duplicateTodos)
    }

    return (
        <section className={styles.watchlist_main}>
            <div className={styles.container}>
                <h2 className={styles.component_title}>My Watch List</h2>
                <Form
                    todo={todo}
                    change={e => setTodo(e.target.value)}
                    submit={submitHandler}
                    error={error} />
                <Lists
                    del={delHandler}
                    done={doneHandler}
                    todos={todos}
                />
            </div>
        </section>
    )
}
