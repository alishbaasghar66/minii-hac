export default function StudentCard({ student, course }) {
  return (
    <div className="card">
      <h2>STUDENT ID CARD</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>Father:</b> {student.father}</p>
      <p><b>Roll No:</b> {student.roll}</p>
      <p><b>Course:</b> {course.title}</p>
      <p><b>Duration:</b> {course.duration}</p>

      <button onClick={() => window.print()}>Download / Print</button>
    </div>
  );
}
