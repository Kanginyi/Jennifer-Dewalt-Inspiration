import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Stylings/App.css"

// Import "Pages"
import Page1 from "./Components/Page1";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/page1" element={<Page1/>}/>
				<Route path="/" element={
					<div>
						<h1>Hello World!</h1>
						<p>My name is Eric and I'm trying to learn more about web development. Welcome to a website inspired by <a href="https://jenniferdewalt.com/" target="_blank">Jennifer Dewalt's</a> 180 Websites in 180 Days project.</p>
						<a href="/page1">Page 1</a><br/>
						<a href="/">Homepage</a>
					</div>
				}/>
			</Routes>
		</Router>   
	);
}

export default App;
