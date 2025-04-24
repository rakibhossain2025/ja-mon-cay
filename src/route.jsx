import {
  createBrowserRouter,
} from "react-router";
import App from "./App";
import Banner from "./Components/Banner";
import AllDoctors from "./Components/AllDoctors";
import Contact from "./Components/Contact";
import MyAllBooking from "./Components/MyAllBooking";
import BlogPage from "./Components/BlogPage";
import DoctorDetails from "./Components/DoctorDetails ";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        loader: () => fetch("/api.json"),
        element: (<><Banner /> <AllDoctors /></>)
      }, {
        path: '/my-booking',
        loader: () => fetch("/api.json"),
        element: <MyAllBooking />
      },
      {
        loader: () => fetch("/api.json"),
        path: "/doctor/:id",
        element: <DoctorDetails />
      }
      ,
      {
        path: "/blog",
        element: <BlogPage />
      }
      ,
      {
        path: "/pagenotfound",
        element: <Contact />
      }
    ]
  },
]);