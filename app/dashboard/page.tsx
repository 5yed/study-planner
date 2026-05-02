"use client"

import { useState, useEffect } from "react"

type Task = {
  title: string
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")

  async function fetchTasks() {
    const res = await fetch("/api/tasks")
    const data = await res.json()
    setTasks(data)
  }

  async function addTask() {
    if (!title) return

    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    })

    setTitle("")
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Input card */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <span>{task.title}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}