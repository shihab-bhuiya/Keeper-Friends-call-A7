import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";
import TimeLine from "../Pages/Timeline/TimeLine";
import Static from "../Pages/Static/Static";
import Error from "../ErrorPage/ErrorPage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/static",
        element: <Static />,
      },
      {
        path:"/friendDetails/:friendId",
        loader: ()=> fetch("/friendsData.json"),
        element: <FriendDetails/>
      }
    ],
    errorElement: <Error/>,
  },
]);