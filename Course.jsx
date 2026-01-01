import { useState } from "react";

export default function Course({ setPage, setCourse }) {
  const [data, setData] = useState({});

  return (
    <div className="box">
      <h2>Course Details</h2>

      <input placeholder="Course Title"
        onChange={(e) => setData({ ...data, title: e.target.value })} />

      <input placeholder="Duration"
        onChange={(e) => setData({ ...data, duration: e.target.value })} />

      <input placeholder="Timing Slots"
        onChange={(e) => setData({ ...data, timing: e.target.value })} />

      <textarea placeholder="Syllabus"
        onChange={(e) => setData({ ...data, syllabus: e.target.value })} />

      <button
        onClick={() => {
          setCourse(data);
          setPage("card");
        }}
      >
        Generate Card
      </button>
    </div>
  );
}
    