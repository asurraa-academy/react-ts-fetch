import { Card, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { fetchTodo, TodoArray } from "../services/todo.service";
import "../styles/App.css";

function App() {
  const [todo, setTodo] = useState<TodoArray>([]);
  useEffect(() => {
    console.log("hi");

    fetchTodo()
      .then((res) => {
        const data = res.data;
        setTodo(data);
      })
      .catch((err) => alert("err"));
  }, []);

  return (
    <div className="App">
      {todo.map((res) => {
        return (
          <Card title={res.id}>
            <p>{res.title}</p>
            <Checkbox checked={res.completed}>{res.id}</Checkbox>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
