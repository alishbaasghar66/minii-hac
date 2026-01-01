export default function Login({ setPage }) {
  return (
    <div className="box">
      <h2>Login / Signup</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={() => setPage("biodata")}>Login</button>
    </div>
  );
}
