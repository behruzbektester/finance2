import style from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { useEffect, useState } from "react";

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={style.mainLayout}>
      <Sidebar showSidebar={showSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
