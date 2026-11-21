
import { Package, Boxes, IndianRupee } from "lucide-react";

function Dashboard() {
  return (
    <div className="stats">

      <div className="stat-card">
        <Package size={28} />
        <h3>Total Products</h3>
        <h2>120</h2>
      </div>

      <div className="stat-card">
        <Boxes size={28} />
        <h3>Total Stock</h3>
        <h2>850</h2>
      </div>

      <div className="stat-card">
        <IndianRupee size={28} />
        <h3>Inventory Value</h3>
        <h2>₹8,50,000</h2>
      </div>

    </div>
  );
}

export default Dashboard;
