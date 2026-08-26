import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("Lost");

  const [form, setForm] = useState({
    item: "",
    location: "",
    date: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.item || !form.location || !form.date) {
      alert("Please fill all required fields");
      return;
    }

    setItems([
      ...items,
      {
        ...form,
        type,
      },
    ]);

    setForm({
      item: "",
      location: "",
      date: "",
      description: "",
    });
  };

  return (
    <div className="app">
      <header>
        <h1>🎓 Campus Lost & Found</h1>
        <p>Find what you lost. Return what you found.</p>
      </header>

      <main>
        <section className="form-card">
          <h2>Report an Item</h2>

          <form onSubmit={handleSubmit}>
            <label>Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Lost">Lost Item</option>
              <option value="Found">Found Item</option>
            </select>

            <label>Item Name *</label>

            <input
              type="text"
              placeholder="Eg: Black Wallet"
              value={form.item}
              onChange={(e) =>
                setForm({
                  ...form,
                  item: e.target.value,
                })
              }
            />

            <label>Location *</label>

            <input
              type="text"
              placeholder="Eg: Library"
              value={form.location}
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
            />

            <label>Date *</label>

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
            />

            <label>Description</label>

            <textarea
              placeholder="Describe the item..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />

            <button type="submit">
              Report Item
            </button>
          </form>
        </section>

        <section className="items">
          <h2>Recent Reports</h2>

          <div className="page-links">
            <Link to="/lost" className="lost-link">
              🔴 Lost Items
            </Link>

            <Link to="/found" className="found-link">
              🟢 Found Items
            </Link>
          </div>

          {items.length === 0 ? (
            <p className="empty">
              No items reported yet.
            </p>
          ) : (
            items.map((item, index) => (
              <div className="item-card" key={index}>
                <span className={item.type.toLowerCase()}>
                  {item.type}
                </span>

                <h3>{item.item}</h3>

                <p>📍 {item.location}</p>
                <p>📅 {item.date}</p>

                {item.description && (
                  <p>{item.description}</p>
                )}
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;