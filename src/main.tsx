import "@unocss/reset/tailwind.css";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import App from "./App.tsx";
import "./assets/fonts/sao.css";
import "./styles/Animation.css";
import "./styles/DropShadow.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<App />
	// <React.StrictMode>
	// </React.StrictMode>
);
