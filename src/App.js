import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";
import ToolsPage from "./pages/ToolsPage";
import ContactPage from "./pages/ContactPage";
// import darkBg from "./assets";

function App() {
	return (
	// <BrowserRouter>
	// 	<div id="app-container">
	// 		<Navbar />
	// 		<Routes>
	// 			<Route exact path="/" element=<HomePage /> />
	// 			<Route path="/about" element=<AboutPage /> />
	// 			<Route path="/projects" element=<ProjectsPage /> />
	// 			<Route path="/contact" element=<ContactPage /> />
	// 			{/* <Route path="/resume" element=<AboutPage /> /> */}
	// 		</Routes>
	// 	</div>

	// </BrowserRouter>
		<div id="app-container">
			<div className="bg-image"></div>
			<Navbar />
			<HomePage />
			<AboutPage />
			<ProjectsPage />
			<ToolsPage />
			<ContactPage />
		</div>
	);
}

export default App;
