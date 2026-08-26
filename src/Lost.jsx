import { Link } from "react-router-dom";

function Lost() {
  return (
    <div className="page">
      <header>
        <h1>🔴 Lost Items</h1>
        <p>Items reported as lost on campus</p>
      </header>

      <main className="single-page">
        <div className="page-card">
          <h2>Lost Items</h2>

          <p className="empty">
            No lost items reported yet.
          </p>

          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Lost;