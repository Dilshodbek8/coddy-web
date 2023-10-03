import Image from "next/image";
import styles from "./page.module.css";
import tasks from "./tasks.json";
export default function Home() {
  return (
    <div className="container">
      <h1>home works</h1>
      <div className="content">
        {tasks.tasks.map((task) => (
          <a className="task" href={task.link}>
            {task.title}
          </a>
        ))}
      </div>
    </div>
  );
}
