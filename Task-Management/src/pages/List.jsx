// import React, { useEffect, useState } from "react";
// import "boxicons";
// import { Link } from "react-router-dom";
// import Storage from "../hooks/LocalStorage";
// import UseTimer from "../hooks/UseTimer";
// import Modal from "../components/Modal";

// export default function List() {
//   const [TaskList, setTaskList] = Storage("Task", []);
//   const [completedTask, setCompletedTask] = Storage("completedTask", []);
//   const { updateTimer, togglePause, formattedTime, isPaused } = UseTimer();
//   const [isopen, setOpen] = useState(false);
//   const [id, setId] = useState("");
//   const [showPop, setShowPop] = useState(false);

//   useEffect(() => {
//     if (completedTask.length > 0 && !TaskList.length) {
//       if (completedTask.length === 0 && TaskList.length === 0) return;
//       const timeout = setTimeout(() => {
//         if (!timeout) setShowPop(false);
//         else setShowPop(true);
//       }, 10000);
//     }
//   }, [completedTask, TaskList]);

//   const CancelTask = (TaskId) => {
//     setTaskList((pre) => {
//       const FinishTask = pre.filter(({ id }) => TaskId !== id);
//       return FinishTask;
//     });
//     setCompletedTask((pre) => {
//       const compTask = [...pre, TaskList];
//       return compTask;
//     });
//   };

//   const onPauseTime = (TaskId) => {
//     setTaskList((pre) => {
//       const ChangedTask = pre.map((TaskItem) => {
//         const { Timepause, timer } = TaskItem;
//         if (TaskItem.id === TaskId) {
//           updateTimer(formattedTime);
//           return { ...TaskItem, Timepause: !Timepause };
//         } else {
//           return TaskItem;
//         }
//       });

//       return ChangedTask;
//     });

//     togglePause(TaskList.Timepause);
//   };

//   const onStart = (id) => {
//     TaskList.find((item) => {
//       if (item.id === id) {
//         updateTimer(item.timer);
//         togglePause(item.Timepause);
//       }
//     });
//   };

//   return (
//     <>
//       <main className="mt-10 pb-10">
//         <Link to="Addgoal">
//           <button className="rounded shadow py-1 px-4 hover:scale-90 transition delay-75 ease-in-out duration-300">
//             Add Tasks
//             <box-icon type="solid" size="xs" name="right-arrow"></box-icon>
//           </button>
//         </Link>

//         <Modal
//           isopen={isopen}
//           setOpen={setOpen}
//           header={<div className="text-xl font-semibold">Timer</div>}
//           footer={
//             <div className="flex items-center gap-1">
//               <button
//                 onClick={() => onPauseTime(id)}
//                 className="bg-red-600 text-white rounded px-3 py-1"
//               >
//                 {isPaused ? "start" : "pause"}
//               </button>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="rounded py-1 px-3 bg-slate-500 text-white"
//               >
//                 close
//               </button>
//             </div>
//           }
//         >
//           <div className="flex items-center justify-center rounded-full text-xl font-semibold bg-black/40 p-4 m-auto w-[150px] h-[150px]">
//             <h1>{formattedTime}</h1>
//           </div>
//         </Modal>

//         <main className="mt-4 flex items-center justify-center flex-col *:mt-2">
//           <p className="font-semibold" onClick={() => setShowPop(true)}>
//             <span className="align-top mr-1">
//               <box-icon name="timer"></box-icon>
//             </span>
//             Task: {TaskList.length} / {completedTask.length}
//           </p>

//           {showPop
//             ? null
//             : completedTask.length > TaskList.length &&
//               !TaskList.length && (
//                 <h1 className="text-green-500 font-semibold my-4">
//                   Congratulations! You have completed your{" "}
//                   {completedTask.length} tasks.
//                 </h1>
//               )}
//           <div className="bg-black/40 rounded p-1 md:p-3">
//             {!TaskList.length ? (
//               <h1>{showPop && "You have added no tasks."}</h1>
//             ) : (
//               TaskList.map(({ input, id }) => {
//                 return (
//                   <div
//                     className="w-[350px] md:w-[650px] border-white border-b my-3"
//                     key={id}
//                   >
//                     <div className="flex items-center justify-between p-2">
//                       <h1
//                         className="cursor-pointer"
//                         onClick={() => {
//                           setId(id);
//                           setOpen(!isopen);
//                           onStart(id);
//                         }}
//                       >
//                         {input}
//                       </h1>
//                       <p>
//                         <button onClick={() => CancelTask(id)}>
//                           <box-icon size="20px" name="x-circle"></box-icon>
//                         </button>
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </main>
//       </main>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import "boxicons";
import Storage from "../hooks/LocalStorage";
import UseTimer from "../hooks/UseTimer";
import Modal from "../components/Modal";

export default function List() {
  const [TaskList, setTaskList] = Storage("Task", []);
  const [completedTask, setCompletedTask] = Storage("completedTask", []);
  const { updateTimer, togglePause, formattedTime, isPaused } = UseTimer();
  const [modalState, setModalState] = useState({ isopen: false, id: "" });
  const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    if (completedTask.length > 0 && !TaskList.length) {
      const timeout = setTimeout(() => setShowPop(true), 10000);
      return () => clearTimeout(timeout);
    }
  }, [completedTask, TaskList]);

  const CancelTask = (TaskId) => {
    setTaskList((prev) => prev.filter(({ id }) => TaskId !== id));
    setCompletedTask((prev) => [...prev, TaskList]);
  };

  const onPauseTime = (TaskId) => {
    setTaskList((prev) =>
      prev.map((TaskItem) => {
        if (TaskItem.id === TaskId) {
          updateTimer(formattedTime);
          return { ...TaskItem, Timepause: !TaskItem.Timepause };
        }
        return TaskItem;
      })
    );
    togglePause(isPaused);
  };

  const onStart = (id) => {
    const task = TaskList.find((item) => item.id === id);
    if (task) {
      updateTimer(task.timer);
      togglePause(task.Timepause);
    }
  };

  return (
    <>
      <main className="mt-10 pb-10">

        <Modal
          isopen={modalState.isopen}
          setOpen={() => setModalState({ ...modalState, isopen: false })}
          header={<div className="text-xl font-semibold">Timer</div>}
          footer={
            <div className="flex items-center gap-1">
              <button
                onClick={() => onPauseTime(modalState.id)}
                className="bg-red-600 text-white rounded px-3 py-1"
              >
                {isPaused ? "start" : "pause"}
              </button>
              <button
                onClick={() => setModalState({ ...modalState, isopen: false })}
                className="rounded py-1 px-3 bg-slate-500 text-white"
              >
                close
              </button>
            </div>
          }
        >
          <div className="flex items-center justify-center rounded-full text-xl font-semibold bg-black/40 p-4 m-auto w-[150px] h-[150px]">
            <h1>{formattedTime}</h1>
          </div>
        </Modal>
        
        <main className="mt-4 text-xs md:text-base flex items-center justify-center flex-col *:mt-2">
          <p className="font-semibold" onClick={() => setShowPop(true)}>
            <span className="align-top mr-1">
              <box-icon name="timer" ></box-icon>
            </span>
            Task: {TaskList.length} / {completedTask.length}
          </p>

          {showPop ? null : completedTask.length > TaskList.length && !TaskList.length && (
            <h1 className="text-green-500 font-semibold my-4 bg-green-500/50 p-2 rounded">
             <span className="align-top mx-1"><box-icon type='solid' color='green' name='check-circle'></box-icon></span> 
              Congratulations! You have completed your {completedTask.length} tasks.
            </h1>
          )}
          <div className="shadow p-1 md:p-3 w-full  md:w-[650px]">
            {!TaskList.length ? (
              <h1>{showPop && "You have added no tasks."}</h1>
            ) : (
              TaskList.map(({ input, id }) => (
                <div className="w-full  border-b my-3" key={id}>
                  <div className="flex items-center justify-between p-2">
                    <h1
                      className="cursor-pointer"
                      onClick={() => {
                        setModalState({ isopen: !modalState.isopen, id });
                        onStart(id);
                      }}
                    >
                      {input}
                    </h1>
                    <p>
                      <button onClick={() => CancelTask(id)}>
                        <box-icon size="15px" name="x-circle"></box-icon>
                      </button>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </main>

    </>
  );
}
