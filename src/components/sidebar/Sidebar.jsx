import style from "./Sidebar.module.scss";

function Sidebar({ showSidebar }) {
  return (
    <div className={`${style.sidebar} ${showSidebar && "show-sidebar"}`}>
      <button style={{ color: "wheat" }}>Minimazie</button>
    </div>
  );
}

export default Sidebar;
