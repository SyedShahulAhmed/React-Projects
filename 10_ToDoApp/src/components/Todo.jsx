import React, { useState } from 'react';
import dust from '../assests/dustbin.png'
import edit from '../assests/edit.png'

const Todo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? text : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, text]);
      }
      setText("");
    }
  };

  const handleEdit = (index) => {
    setText(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center bg-[#9376E0] p-10 rounded-lg shadow-lg w-[450px] md:w-[600px]">
      <form
        className="bg-[#E893CF] flex flex-col justify-center items-center p-9 gap-5 md:w-[500px] rounded-md shadow-md w-[400px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-[#F6FFA6]">TaskFlow Manager</h1>
        <div className="flex justify-between items-center bg-gray-200 md:w-[410px]  rounded-lg shadow-md">
          <input
            type="text"
            value={text}
            className="outline-none border-none p-2 text-md w-[80%] bg-transparent text-black placeholder-black-300 "
            placeholder="What’s your next task??"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="p-2 w-28 h-12 bg-[#00215E] text-white text-sm rounded-r-lg shadow-md">
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>

      <ul className="mt-5  w-[400px] md:w-[500px]">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-white p-3 bg-gray-800 rounded-md mb-2 shadow-md"
          >
            <span>{task}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-md"
              >
                 <img src={edit} alt="" className='h-5'/>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-2 bg-red-500 text-white text-sm rounded-md"
              >
                <img src={dust} alt="" className='h-5'/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
