import { useContext } from "react";
import { AppState } from "../App";
const Home = () => {
  const { user } = useContext(AppState);
  return (
    <div>
      <h1>{user.username}</h1>;<h1>hello</h1>
    </div>
  );
};

export default Home;
