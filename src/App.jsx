
import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ProductTable from "./components/ProductTable";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <Header />

        {activePage === "Dashboard" && <Dashboard />}

        {activePage === "Products" && <ProductTable />}

        {activePage === "Categories" && (
          <h2>Categories Management</h2>
        )}

        {activePage === "Settings" && (
          <h2>Settings</h2>
        )}
      </main>
    </div>
  );
}

export default App;
