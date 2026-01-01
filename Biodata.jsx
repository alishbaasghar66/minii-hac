import { useState } from "react";

export default function Biodata({ setPage, setStudent }) {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="box">
      <h2>Student Biodata</h2>

      <input name="name" placeholder="Student Name" onChange={handleChange} />
      <input name="father" placeholder="Father Name" onChange={handleChange} />
      <input name="cnic" placeholder="CNIC" onChange={handleChange} />
      <input name="roll" placeholder="Roll Number" onChange={handleChange} />
      <input name="course" placeholder="Course Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />

      <button
        onClick={() => {
          setStudent(data);
          setPage("course");
        }}
      >
        Next
      </button>
    </div>
  );
}
