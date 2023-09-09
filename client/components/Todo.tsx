import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getTasks } from '../apis/apiClient'

export function Todo() {
  const { data: todo, isLoading, error } = useQuery(['todo'], getTasks)
  if (error) {
    return <p>Something went wrong.</p>
  }
  if (isLoading || !todo) {
    return <p>Loading...Please wait.</p>
  }
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="task">Enter Task:</label>
        <input name="task" type="text" />
        <button>Add Task</button>
      </form>
      {todo.map((el: any) => {
        return (
          <li key={todo.id}>
            <input type="checkbox" />
            {el.task}
          </li>
        )
      })}
    </div>
  )
}
