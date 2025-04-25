import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import {
  Budgets,
  Login,
  Overview,
  Pots,
  RecurringBills,
  Signup,
  Transactions,
} from "./pages";

import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { isAuthReady, login } from "./app/features/userSlice";

function App() {
  const { user, isAuth } = useSelector((store) => store.user);
  console.log(user);
  const rotues = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/budgets",
          element: <Budgets />,
        },
        {
          path: "/pots",
          element: <Pots />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/recurringBills",
          element: <RecurringBills />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.displayName && user.photoURL) {
        dispatch(login(user));
      }
      dispatch(isAuthReady());
    });
  }, []);

  return <>{isAuth && <RouterProvider router={rotues} />}</>;
}

export default App;
