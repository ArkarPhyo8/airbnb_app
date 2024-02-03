import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col py-4 px-8">
      <Header />
      <Outlet />
    </div>
  );
}
