import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../Context/sidebarContext";
export default function ContentTop() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}>
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns">
        <button type="button" className="seacrh-btn content-top-btn">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
}
