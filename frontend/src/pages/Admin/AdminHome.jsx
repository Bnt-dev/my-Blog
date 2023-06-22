import React from "react";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <h1>Bureau du Hokage</h1>
      <h2>Que souhaitez-vous administrer ?</h2>
      <section className="admin_list">
        <Link to="/api/admin/ninjas">Les Ninja</Link>
        <Link to="/api/admin/techniques">Les Techniques</Link>
        <Link to="/api/admin/villages">Les Villages</Link>
        <Link to="/api/admin/rarities">Les Raretés</Link>
      </section>
    </div>
  );
}

export default AdminHome;
