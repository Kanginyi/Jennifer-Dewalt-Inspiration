import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import "./App.css"

// Import "Pages"
import Page1 from "./Components/Page1";

function App() {
  
    // If index === 0, render Homepage and make sure that it doesn't render anythingelse, just bings into homepage
    // Anything else, increment by 1 and then go from there

    const Row = ({ index, style }) => (
        // <div style={style}> Row {index}</div>
        <a style={style} href={`/page${index}`}>Page {index}</a>
    );

    console.log(Row);

	return (
		<Router>
			<Routes>
				<Route path="/page1" element={<Page1/>}/>
				<Route path="/" element={
					<div id="homepage">
						<h1>Hello World!</h1>
						<p>My name is Eric and I'm trying to learn more about web development. Welcome to a website inspired by <a href="https://jenniferdewalt.com/" target="_blank">Jennifer Dewalt's</a> 180 Websites in 180 Days project.</p>
						<a href="/page1">Page 1</a><br/>
						<a href="/">Homepage</a>

                        <div id="homepage-list">
                            <List
                                itemCount={100}
                                itemSize={35}
                                height={250}
                                width={450}
                            >
                                {Row}
                            </List>
                        </div>
					</div>
				}/>
			</Routes>
		</Router>   
	);
}

export default App;
