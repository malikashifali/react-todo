import React, { useState } from 'react'
import {toast} from 'react-toastify'

export default function AddTodo() {
    const initialState = { title: "", location: "", description: "" }
    const [todo, setTodo] = useState(initialState)
    const handleChange = (e) => {
        setTodo((s) => ({
            ...s, [e.target.name]: e.target.value, status:"inComplete", dateCreated:new Date().getTime(), id:Math.random().toString(36).slice(2)
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (todo.title && todo.location && todo.description) {
            const todos = JSON.parse(localStorage.getItem("todos")) || []
            todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(todos))
            toast.success("Todo Added Successfully")
        } else {
            toast.error("fill inputs correctly")
        }
        setTodo(initialState)
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-3 mx-auto" style={{ maxWidth: 400 }}>
                            <h2 className='text-center mb-4 text-primary'>Add Todo</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <input type="text" name='title' value={todo.title} className='form-control' placeholder='Title' onChange={handleChange} />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <input type="text" name='location' value={todo.location} className='form-control' placeholder='Location' onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <textarea type="text" name='description' value={todo.description} className='form-control' placeholder='Description' onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-success w-100 mt-3">Add Todo</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
