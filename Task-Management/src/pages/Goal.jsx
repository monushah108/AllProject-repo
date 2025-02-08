import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "react-calendar/dist/Calendar.css";
import Storage from "../hooks/LocalStorage";
import Sechadule from "../components/Sechadule";

export default function Goal() {
  const [error, setError] = useState(false);
  const [TaskList, setTaskList] = Storage("Task", []);
  const [scheduleList, setScheduleList] = Storage("Schedule", []);
  const [completedTask, setCompletedTask] = Storage("completedTask", []);

  const [Task, setTask] = useState({
    id: crypto.randomUUID(),
    emoji: false,
    input: "",
    timer: "00:00",
    Timepause: true,
  });
  const [schedule, setSchedule] = useState({
    id: crypto.randomUUID(),
    topic: "",
    note: "",
    dateTime: new Date().toISOString().slice(0, 16),
  });

  const onhandleInput = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setTask((pre) => ({ ...pre, [name]: value }));
    } else {
      setTask((pre) => ({ ...pre, input: Task.input + e.emoji }));
    }
  };

  const config = () => {
    let objValue = {};
    const InvalidInputs = !Task.input || Task.timer === "00:00";

    if (schedule.topic && schedule.note) return objValue;
    if (InvalidInputs) {
      return (objValue = {
        error:
          "Incorrect! You must set a timer or add Task to ensure the task runs as intended.",
      });
    } else if (schedule.note) {
      if (!schedule.topic)
        return (objValue = {
          error: "you must have to set topic also to set sechdule",
        });
      else return objValue;
    }

    return objValue;
  };

  const onhandleSubmit = (e) => {
    e.preventDefault();
    const err = Object.values(config()).length;
    console.log(err);
    if (err) {
      setError(true);
      return;
    } else {
      setError(false);

      setTaskList((pre) => {
        if (!Task.input && Task.timer == "00:00") return [...pre];
        else {
          const changeText = [...pre, { ...Task }];
          return changeText;
        }
      });

      setScheduleList((pre) => {
        if (!schedule.topic && !schedule.note) return [...pre];
        else {
          const changeSechdule = [...pre, { ...schedule }];
          return changeSechdule;
        }
      });
    }

    if (completedTask.length) {
      const userpermision = confirm(
        `You completed ${completedTask.length} Tasks. "Are you sure you want to delete your Completed Task details? This action cannot be undone."`
      );
      if (userpermision) {
        setCompletedTask([]);
      }
    }

    setTask({
      id: crypto.randomUUID(),
      emoji: false,
      input: "",
      timer: "00:00",
    });

    setSchedule({
      id: crypto.randomUUID(),
      topic: "",
      note: "",
      dateTime: new Date().toISOString().slice(0, 16),
    });
  };

  return (
    <>
      <main className="flex items-start flex-col mt-10 min-w-[250px] md:w-[750px] lg:w-[700px] m-auto md:text-sm">
        <div
          className={`bg-red-600/70 p-3 text-xs md:text-sm rounded w-full my-2 ${
            error ? "block" : "hidden"
          }`}
        >
          <p>
            <span className="align-middle mr-2">
              <box-icon color="red" type="solid" name="x-circle"></box-icon>
            </span>
            <span>{config()?.error ?? "something went wrong"}</span>
          </p>
        </div>

        <form action="/Addgoal" className="w-full" onSubmit={onhandleSubmit}>
          <div className="   p-3 space-y-4 text-xs  md:text-sm  relative">
            <h1 className="font-semibold">
              Add Your Goal Which you want to complete
            </h1>

            <div className="flex items-center gap-3 ">
              <input
                type="text"
                placeholder="Type Here..."
                className="input"
                name="input"
                value={Task.input}
                onChange={onhandleInput}
              />
              <div
                className="cursor-pointer"
                onClick={() => {
                  setTask((pre) => ({ ...pre, emoji: !Task.emoji }));
                }}
              >
                <box-icon name="smile" size="21px"></box-icon>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  name="timer"
                  value={Task.timer}
                  onChange={onhandleInput}
                />
              </div>
            </div>
            {Task.emoji && (
              <div className="absolute top-full right-0 mt-1 z-10 bg-white shadow-lg rounded">
                <EmojiPicker onEmojiClick={onhandleInput} />
              </div>
            )}

            <Sechadule setSchedule={setSchedule} schedule={schedule} />
            <button
              type="submit"
              className=" rounded bg-black/60 py-2 px-8 text-xs text-white"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
