import "./Sidebar.css";
import { navigationLinks } from "../../data/data";
import { personsImgs } from "../../utils/images";
import { useEffect, useContext, useState } from "react";
import { SidebarContext } from "../../Context/sidebarContext";

export default function Sidebar() {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>
      <nav className="navigiation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}>
                <img
                  src={navigationLink.image}
                  className="nav-link-icon "
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
