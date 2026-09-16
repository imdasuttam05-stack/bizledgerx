import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [status, setStatus] = useState("Checking API...");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await api.get("/health");

        if (response.data.success) {
          setStatus("Cloud API Connected");
        }
      } catch (err) {
        console.error(err);
        setError("API connection failed");
        setStatus("");
      }
    };

    checkAPI();
  }, []);

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        <h1>BUSINESS SOFTWARE</h1>

        <p style={styles.subtitle}>
          Cloud Business Management System
        </p>

        <div style={styles.menu}>
          <button>1. Masters</button>
          <button>2. Transactions</button>
          <button>3. Orders</button>
          <button>4. Inventory</button>
          <button>5. Accounts</button>
          <button>6. Reports</button>
          <button>7. GST / Tax</button>
          <button>8. Utilities</button>
          <button>9. Company</button>
          <button>0. Exit</button>
        </div>

        <div style={styles.status}>
          {status && <span>● {status}</span>}
          {error && <span style={styles.error}>{error}</span>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },

  card: {
    width: "100%",
    maxWidth: "850px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "35px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
  },

  subtitle: {
    color: "#666",
    marginBottom: "30px"
  },

  menu: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  },

  status: {
    marginTop: "30px",
    color: "#16803c",
    fontWeight: "600"
  },

  error: {
    color: "#c62828"
  }
};

export default App;
