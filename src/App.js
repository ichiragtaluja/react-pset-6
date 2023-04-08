import logo from "./logo.svg";
import "./App.css";
import { DisplayProducts } from "./Q1/DisplayProducts";
import { DisplayToDos } from "./Q2/DisplayToDos";
import { HabitTracker } from "./Q3/HabitTracker";
import { Playlist } from "./Q4/Playlist";
import { SocialMediaPosts } from "./Q5/SocialMediaPosts";
import { ShowHabits } from "./Q6/ShowHabits";
import { DisplayProjects } from "./Q7/DisplayProjects";
import { UserProfile } from "./Q8/UserProfile";
// import { fakeFetch } from "./Q1/fakeFetch";
import { VideoDetail } from "./Q9/VideoDetail";
import { SocialMediaProfile } from "./Q10/SocialMediaProfile";

function App() {
  return (
    <div className="App">
      <DisplayProducts />
      <DisplayToDos />
      <HabitTracker />
      <Playlist />
      <SocialMediaPosts />
      <ShowHabits />
      <DisplayProjects />
      <UserProfile />
      <VideoDetail />
      <SocialMediaProfile />
    </div>
  );
}

export default App;
