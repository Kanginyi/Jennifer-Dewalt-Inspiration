import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import "./App.css"

// Import "Pages"
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";

// Import Images
import homepage_pic from "./Images/home.png";
import henri_pic from "./Images/henri.jpg";
import flexbox_pic from "./Images/flexbox.jpg";

import clock_pic from "./Images/clock.jpg";
import regex_pic from "./Images/regex.PNG";

import {BsEmojiAngryFill, BsEmojiNeutralFill, BsEmojiWinkFill} from "react-icons/bs"
import {AiOutlineMenuUnfold} from "react-icons/ai"

function App() {
    // Array holding the information about the rendered react-window elements
    const pageNames = [
        {name: "Homepage", image: homepage_pic},
        {name: "Henri", image: henri_pic},
        {name: "Flexbox", image: flexbox_pic},
        {name: "CSS Grid", image: ""},
        {name: "Analog Clock", image: clock_pic},
        {name: "Regex Cheatsheet", image: regex_pic},
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
                alt={`${pageNames[index]?.name} image`}
                className="homepage-link-image"
                />

                {index === 0 ? "Homepage" : `Page ${index}`}{index === 0 ? null : `: ${pageNames[index]?.name}`}
            </a>
        </>
    );

	return (
		<Router>
			<Routes>
                <Route path="/page5" element={<Page5/>}/>
                <Route path="/page4" element={<Page4/>}/>

                <Route path="/page2" element={<Page2/>}/>
				<Route path="/page1" element={<Page1/>}/>
				<Route path="/" element={
					<div id="homepage">
                        <div>
                            <h1 id="homepage-typing">Hello World!</h1>
                        </div>
                        <div id="homepage-underline"></div>
						
						<p id="homepage-description">My name is <span>Eric Yi</span> and I'm trying to learn more about web development.<br/>
                        Welcome to a collection of websites inspired by
                        Jennifer Dewalt's <a href="https://jenniferdewalt.com/" target="_blank">180 Websites in 180 Days project</a>.</p>

                        <main id="homepage-list">
                            <div id="browser-bar">
                                <div>Chromarifox</div>

                                <BsEmojiWinkFill className="browser-circle green" title="ur cute"/>
                                <BsEmojiNeutralFill className="browser-circle yellow" title="i'm not"/>
                                <BsEmojiAngryFill className="browser-circle red" title="but that's alright"/>
                            </div>
                            <br/><br/>

                            <div id="browser-menu">
                                <AiOutlineMenuUnfold id="browser-menu-icon"/>
                            </div>

                            <List
                                itemCount={100}
                                itemSize={100}
                                height={500}
                                width={475}
                            >
                                {Row}
                            </List>
                            <br/><br/>
                            <a
                                id="homepage-button"
                                href={`/page${Math.floor(Math.random() * (pageNames.length - 1) + 1)}`}
                            >
                                <span>RANDOM PAGE</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>
                        </main>
                                                
					</div>
				}/>
			</Routes>
		</Router>   
	);
}

export default App;