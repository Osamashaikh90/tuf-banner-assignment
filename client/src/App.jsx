import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import HideNavLayout from "./utils/Layout";
import { useLocation } from "react-router-dom";
import { AuthorizeUser } from "./middleware/auth";
function App() {
  const location = useLocation();


  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <HideNavLayout>
        <Navbar />
      </HideNavLayout>
      <div className={`${location.pathname === "/dashboard"?"":"mx-28"} flex flex-col gap-10 `}>
        <Outlet />
        <div className="dark:block hidden absolute z-[-100] top-0 left-0 lg:w-72 w-0 lg:h-72 h-0 bg-[#D41F30] rounded-full opacity-40 blur-[120px] dark:opacity-20"></div>
        <div className=" dark:block hidden absolute  bottom-4 right-0 z-[-100] lg:w-72 w-0 lg:h-72 h-0 bg-[#D41F30] rounded-full opacity-40 blur-[120px] dark:opacity-20"></div>
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <AuthorizeUser><Dashboard /></AuthorizeUser>,
      },
    ],
  },
]);
export default App;
