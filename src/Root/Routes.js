/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import Home from "@material-ui/icons/Home";
import Notes from "@material-ui/icons/Notes";
import WorkoutList from "../features/WorkoutList/Containers/Workout.Container";
import HomePage from "../Home/Containers/Home";
import About from "../Home/Containers/About";

export const Routes = [
  {
    path: "/",
    exact: true,
    sidebarName: HomePage,
    navbarName: "Home",
    icon: Home,
    content: WorkoutList,
  },
  {
    path: "/about",
    sidebarName: About,
    navbarName: "About",
    icon: Notes,
    content: false
  }
];
