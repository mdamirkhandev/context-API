import "./App.css";
import MyLogin from "./components/MyLogin";
import { Profile } from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <MyLogin />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
