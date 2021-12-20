import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import "./App.css"

// Import "Pages"
import Page1 from "./Components/Page1";

// Import Images
import homepage_pic from "./Images/home.png";
import henri_pic from "./Images/henri.jpg";

function App() {
    // Array holding the information about the rendered react-window elements
    const pageNames = [
        {name: "Homepage", image: homepage_pic},
        {name: "Henri", image: henri_pic}
    ];


    const Row = ({ index, style }) => (
        <>
            <a
                href={index === 0 ? "/" : `page${index}`}
                style={style}
                className="homepage-link"
            >
                <img
                src={pageNames[index]?.image}
                alt={`${pageNames[index]?.name} page image`}
                className="homepage-link-image"
                />

                {index === 0 ? "Homepage" : `Page ${index}`}{index === 0 ? null : `: ${pageNames[index]?.name}`}
            </a>
        </>
    );

	return (
		<Router>
			<Routes>
				<Route path="/page1" element={<Page1/>}/>
				<Route path="/" element={
					<div id="homepage">
						<h1>Hello World!</h1>
						<p>My name is Eric and I'm trying to learn more about web development. Welcome to a website inspired by Jennifer Dewalt's <a href="https://jenniferdewalt.com/" target="_blank">180 Websites in 180 Days project</a>.</p>
                        <br/><br/>

                        <div id="homepage-list">
                            <List
                                itemCount={100}
                                itemSize={100}
                                height={400}
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
