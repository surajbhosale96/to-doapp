import { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const onClickHandler = () => {
    if (task === "") {
      alert("please add a task!");
    } else {
      setTaskList([...taskList, task]);
      setTask("");
      console.log(task);
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add a task!"
        value={task}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>ADD</button>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
