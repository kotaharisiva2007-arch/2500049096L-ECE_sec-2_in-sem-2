
import {
  LayoutDashboard,
  Package,
  Tags,
  Settings
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Products", icon: Package },
    { name: "Categories", icon: Tags },
    { name: "Settings", icon: Settings }
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">ProductHub</h2>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={
                activePage === item.name ? "menu-link active" : "menu-link"
              }
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
