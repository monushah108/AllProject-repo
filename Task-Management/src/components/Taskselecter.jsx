
import { Link } from "react-router-dom";


export default function Taskselecter({setselect,select}) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-between px-2 text-xs md:text-sm">
      {select == "Task" ? (
        <Link to="Addgoal">
          <button className="rounded shadow py-1 px-4 hover:scale-90 transition delay-75 ease-in-out duration-300">
            <span>Add Tasks</span>
            <span className="align-text-top">
              <box-icon type="solid" size="xs" name="right-arrow"></box-icon>
            </span>
          </button>
        </Link>
      ) : (
        <div></div>
      )}
      <select
        name="select"
        id=""
        value={select.value}
        onChange={(e) => setselect(e.target.value)}
        defaultValue={"Task"}
        className="rounded shadow py-1 px-4"
      >
        <option value="Task">Task List</option>
        <option value="schedule">schedule List</option>
      </select>
    </div>
  );
}
