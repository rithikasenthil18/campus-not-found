import { Link } from "react-router-dom";

function Found() {
  return (
    <div className="page">
      <header>
        <h1>🟢 Found Items</h1>
        <p>Items found on campus</p>
      </header>

      <main className="single-page">
        <div className="page-card">
          <h2>Found Items</h2>

          <p className="empty">
            No found items reported yet.
          </p>

          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Found;