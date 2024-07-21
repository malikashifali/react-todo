import { Button, Tooltip } from 'antd'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TiDocumentAdd } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Todos() {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
    const [editTodo, setEditTodo] = useState({ title: '', location: '', description: '' })
    const navigate = useNavigate()


    const navigateToAddTodo = () => {
      navigate('/dashboard/add-todo')
    }


    const handleDelete = (todoId) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this todo?")
      if (confirmDelete) {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
        toast.success("todo deleted successfully")
      }
    }


    const handleEdit = (todoId) => {
      const todo = todos.find(todo => todo.id === todoId)
      setEditTodo(todo)
    }

    const handleEditChange = (e) => {
      const { name, value } = e.target
      setEditTodo(s => ({ ...s, [name]: value }))
    }

    const handleEditSubmit = () => {
      const updatedTodos = todos.map(todo => todo.id === editTodo.id ? editTodo : todo)
      setTodos(updatedTodos)
      toast.success("Todo Updated Successfully")
    }

    return (
      <>
        <main>
          <div className="container">
            <div className="row mb-4">
              <div className="col">
                <Tooltip title='Add Todo'>
                  <Button type='primary' className='mt-4' onClick={navigateToAddTodo}>Add Todo <TiDocumentAdd /></Button>
                </Tooltip>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {todos.length < 1
                  ? <h1 className='text-primary text-center'>No Todos Available Yet. Click On Add Todo To Create Todos</h1>
                  : <>
                    <h2 className='text-center text-primary mb-3'>Todos Table</h2>
                    <div className="table-responsive">
                      <table className="table table-bordered text-center table-hover align-middle">
                        <thead>
                          <tr className='fw-bold'>
                            <td>#</td>
                            <td>Title</td>
                            <td>Location</td>
                            <td>Description</td>
                            <td>Id</td>
                            <td>Status</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {todos.map((todo, i) => {
                            const { id, title, location, description, status } = todo
                            return (
                              <tr key={todo.id}>
                                <td>{i + 1}</td>
                                <td>{title}</td>
                                <td>{location}</td>
                                <td>{description}</td>
                                <td>{id}</td>
                                <td className='text-warning'>{status}</td>
                                <td>
                                  <Tooltip title='Edit Todo'>
                                    <Button type='primary' className='me-0 me-lg-2 mb-2 mb-lg-0' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(id)}>
                                      <FaEdit />
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title='Delete Todo'>
                                    <Button type='button' danger className='text-white bg-danger' onClick={() => handleDelete(id)}>
                                      <MdDelete />
                                    </Button>
                                  </Tooltip>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>}
              </div>
            </div>
          </div>
        </main>

        {/* Edit Todo Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-6 mb-2">
                      <input type="text" name='title' className='form-control' placeholder='Edited Title' value={editTodo.title} onChange={handleEditChange} />
                    </div>
                    <div className="col-6 mb-2">
                      <input type="text" name='location' className='form-control' placeholder='Edited Location' value={editTodo.location} onChange={handleEditChange} />
                    </div>
                    <div className="col-12 mt-2">
                      <textarea name='description' className='form-control' placeholder='Edited Description' value={editTodo.description} onChange={handleEditChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEditSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

























