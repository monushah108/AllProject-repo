import React from "react";
import Storage from "../hooks/LocalStorage";

export default function SchaduleList() {
  const [scheduleList, setScheduleList] = Storage("Schedule", []);

  const onDelete = (id) => {
    setScheduleList(pre => pre.filter(item => item.id !== id))
  }

  return (
    <div className="mt-4 px-1 md:px-4 flex items-center justify-center flex-col *:mt-2">
      <h1 className="my-8">{scheduleList.length ? 'Your Schedules' : 'empty schedule'}</h1>
      {scheduleList.map(({id, note, topic, dateTime }) => {
        return (
          <div className="w-full border-l border-r p-2  text-xs md:text-base md:w-[750px] text-start my-3 *:mt-2" key={id}>
            <h1>{topic} <span className="text-[10px] font-semibold text-black/50 italic">{dateTime} </span></h1>
            <p className="text-[13px] whitespace-pre-line">
             
                {note}
               
            </p>
            <button onClick={() => onDelete(id)} className="py-1 px-4 rounded bg-purple-500 text-white text-xs">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
