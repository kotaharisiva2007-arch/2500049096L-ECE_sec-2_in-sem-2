
import { Search, Bell, User } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>Product Catalog</h2>
        <p>Manage your inventory efficiently</p>
      </div>

      <div className="header-right">
        <Search size={20} />
        <Bell size={20} />
        <User size={22} />
      </div>
    </header>
  );
}

export default Header;
