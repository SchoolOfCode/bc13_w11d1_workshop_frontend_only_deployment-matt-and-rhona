import "./App.css";
import Login from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Projile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80"
          className="App-logo"
          alt="logo"
        />
        <p>Welcome to our amazing app!</p>
        <Login />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
