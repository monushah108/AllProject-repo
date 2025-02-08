export default function Sechadule({ schedule, setSchedule  }) {
  const onchange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <main className="space-y-3 border-t pt-2">
      <h1 className="font-semibold">scheduling the work</h1>
      <div>
        <input
          type="datetime-local"
          name="dateTime"
          value={schedule.dateTime}
          onChange={onchange}
        />
      </div>
      <div>
        <input
          className="input font-semibold"
          id="topic"
          type="text"
          name="topic"
          placeholder="Add Topic"
          value={schedule.topic}
          onChange={onchange}
        />
      </div>
      <div>
        <textarea
          className="input min-h-[170px] max-h-[250px] resize-y"
          name="note"
          placeholder="Add Important Note"
          value={schedule.note}
          onChange={onchange}
        ></textarea>
      </div>
    </main>

  
  );
}
