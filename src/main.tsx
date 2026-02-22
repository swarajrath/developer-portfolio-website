
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { initGA } from "./utils/analytics.ts";

  // Initialize Google Analytics
  initGA();

  createRoot(document.getElementById("root")!).render(<App />);
