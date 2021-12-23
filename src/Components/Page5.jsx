import React from 'react';
import "../Stylings/Page5.css"

function Page5() {
    return (
        <div id="page5">

            <h1>Regular Expressions</h1>
            <h2>/Regex/</h2>

            <br/><br/><br/>
            <p>Regular Expressions (or RegEx) are patterns we can use to try and find matches in strings. <br/>
            Some of the more common use cases of RegEx are to validate text, search through text, or to find and replace text.
            <br/>RegEx might seem hard to read at first since it just looks like a jumble of random words BUT use this cheatsheet to potentially help! </p>
            
            <br/><br/>
            <p>There are plenty of websites that can help you practice RegEx but here are two (that also come with their own cheatsheets!):</p>
                <ul>
                    <li>
                        <a href="https://regexr.com" target="_blank">Regexr</a>
                    </li>
                    <li>
                        <a href="https://regex101.com" target="_blank">Regex100</a>
                    </li>
                </ul>

        </div>
    );
}

export default Page5;