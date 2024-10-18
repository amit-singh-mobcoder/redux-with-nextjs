"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addTodo, deleteTodo, toggleTodo } from "@/features/todos/todosSlice";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const Todos = () => {
  const [todo, setTodo] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = todo.trim();
    if (text) {
      dispatch(addTodo(text));
      setTodo("");
    }
  };

  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleTodo = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div className="min-h-screen bg-yellow-950 flex flex-col items-center justify-start ">
      <div className="bg-yellow-800 w-full flex justify-center items-center py-4 ">
        <h2 className="font-bold text-3xl md:text-5xl">Todos</h2>
      </div>

      <div className="mt-8 w-full max-w-xl">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="outline-none w-full border-4 rounded-lg border-yellow-800 px-4 py-2 text-black font-bold"
            type="text"
            placeholder="Start writing your todos..."
          />
          <button
            onClick={handleAddTodo}
            className="border-4 rounded-lg border-yellow-800 px-6 py-2 bg-yellow-100 text-yellow-500 font-extrabold"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-8 w-full max-w-xl flex flex-col">
        <h2 className="font-semibold text-xl md:text-2xl">Todos List</h2>
        {todos.length > 0 ? (
          todos
            .filter((item) => !item.completed)
            .map((item, index) => (
              <div
                key={index}
                className="mt-2 w-full flex justify-between items-center bg-yellow-100 border-l-4 border-yellow-400 rounded-md px-4 py-2"
              >
                <p className="text-yellow-600 font-bold">{item.text}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggleTodo(item.id)}
                    className="bg-green-500 rounded-md px-3 py-1 font-bold"
                  >
                    <IoCheckmarkDone size={24} />
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(item.id)}
                    className="bg-red-500 rounded-md px-3 py-1 font-bold"
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p>No todos available</p>
        )}
      </div>

      <div className="mt-8 w-full max-w-xl flex flex-col">
        <h2 className="font-semibold text-xl md:text-2xl">Completed Todos List</h2>
        {todos.length > 0 ? (
          todos
            .filter((item) => item.completed)
            .map((item, index) => (
              <div
                key={index}
                className="mt-2 w-full flex justify-between items-center bg-green-100 border-l-4 border-green-400 rounded-md px-4 py-2"
              >
                <p className="text-yellow-600 font-bold">{item.text}</p>
              </div>
            ))
        ) : (
          <p>No completed todos available</p>
        )}
      </div>
    </div>
  );
};

export default Todos;