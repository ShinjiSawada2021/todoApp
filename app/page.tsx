"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // 新しいToDoを追加
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // ToDoを削除
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ToDoリスト</h1>
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいToDoを入力"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={addTodo} style={{ padding: "10px 20px" }}>
          追加
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{
                marginLeft: "20px",
                padding: "5px 10px",
                background: "#ff5c5c",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
