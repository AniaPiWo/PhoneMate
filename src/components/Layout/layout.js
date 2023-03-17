import { Outlet } from "react-router-dom";

export const Layout = () => {

  return (
    <main>
        <nav>
            <button>Sign In</button>
            <button>Register</button>
            <button>Sign Out</button>
        </nav>
        <Outlet/>
    </main>
  )
};
