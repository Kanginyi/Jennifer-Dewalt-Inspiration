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

            <p>We can create a Regular Expression by inputting a set of characters between two forward slashes:</p>
            <p><b>/RegEx/flags</b></p>
            <br/><br/>

            <section id="regex-divs-container">
                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Character Classes</p>
                        <ul>
                            <li>
                                <span>.</span>
                                &nbsp;Any character except new line
                            </li>
                            <li>
                                <span>\w \W</span>
                                &nbsp;Word (Alphanumeric characters & underscore), Opposite of Word
                            </li>
                            <li>
                                <span>\d \D</span>
                                &nbsp;Digit (0~9), Opposite of Digit
                            </li>
                            <li>
                                <span>\s \S</span>
                                &nbsp;Whitespace (Spaces, tabs, linebreaks), Opposite of Whitespace
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Brackets</p>
                        <ul>
                            <li>
                                <span>[abc]</span>
                                &nbsp;Any single character of a, b, or c
                            </li>
                            <li>
                                <span>[^xyz]</span>
                                &nbsp;Any single character EXCEPT x, y, or z
                            </li>
                            <li>
                                <span>[a-z]</span>
                                &nbsp;Any single character in the range of a~z
                            </li>
                            <li>
                                <span>[^0~9]</span>
                                &nbsp;Any single character EXCEPT 0~9
                            </li>
                            <li>
                                <span>[a-f0-5]</span>
                                &nbsp;Any single character in the range of a~f or 0~5
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Alternation & Quantifiers</p>
                        <ul>
                            <li>
                                <span>a|z</span>
                                &nbsp;Alternate: Match either a or z
                            </li>
                            <li>
                                <span>a?</span>
                                &nbsp;Zero or One occurrences of a
                            </li>
                            <li>
                                <span>b*</span>
                                &nbsp;Zero or more occurrences of b
                            </li>
                            <li>
                                <span>c+</span>
                                &nbsp;One or more occurrences of c
                            </li>
                            <li>
                                <span>x{`{n}`}</span>
                                &nbsp;Exactly n occurrences of x
                            </li>
                            <li>
                                <span>y{`{n, }`}</span>
                                &nbsp;n or more occurrences of y
                            </li>
                            <li>
                                <span>z{`{n, o}`}</span>
                                &nbsp;Between n or o occurrences of z
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Grouping</p>
                        <ul>
                            <li>
                                <span>(abc)</span>
                                &nbsp;Capture Group: Capture and match what's inside of the parentheses
                            </li>
                            <li>
                                <span>(?:xyz)</span>
                                &nbsp;Group what's inside of the parentheses without creating a Capture Group
                            </li>
                            <li>
                                <span>(?=abc)</span>
                                &nbsp;Positive Lookahead: Match something followed by abc
                            </li>
                            <li>
                                <span>(?!xyz)</span>
                                &nbsp;Negative Lookahead: Match something not followed by xyz
                            </li>
                            <li>
                                <span>(?{`<=`}abc)</span>
                                &nbsp;Positive Lookbehind: Match something preceded by abc
                            </li>
                            <li>
                                <span>(?{`<!`}xyz)</span>
                                &nbsp;Negative Lookbehind: Match something not preceded by xyz
                            </li>
                        </ul>
                    </div>
                </div> 

                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Escaped Characters</p>
                        <ul>
                            <li>
                                <span>\. \* \\ </span>
                                &nbsp;Escaped Characters: Make any character literal. 
                                Most commonly used to escape special characters.
                            </li>
                            <li>
                                <span>\t</span>
                                &nbsp;Tab
                            </li>
                            <li>
                                <span>\n</span>
                                &nbsp;New line or Line break
                            </li>
                            <li>
                                <span>\r</span>
                                &nbsp;Carriage Return
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="regex-divs">
                    <div className="regex-cards-content">
                        <p>Anchors</p>
                        <ul>
                            <li>
                                <span>\b \B</span>
                                &nbsp;Word Boundary, Opposite of Word Boundary
                            </li>
                            <li>
                                <span>\A</span>
                                &nbsp;Start of string
                            </li>
                            <li>
                                <span>^a</span>
                                &nbsp;Match string that starts with a
                            </li>
                            <li>
                                <span>\Z</span>
                                &nbsp;End of string
                            </li>
                            <li>
                                <span>z$</span>
                                &nbsp;Match string that ends with z
                            </li>
                            <li>
                                <span>^abc$</span>
                                &nbsp;Match exactly abc
                            </li>
                        </ul>
                    </div>
                </div>

                </section>

                <div>
                    <p>Flags</p>
                    <p>Things to append after the second forward slash of the regular expression. You can mix and match flags as needed.</p>
                    <ul>
                        <li>
                            <span>g</span>
                            &nbsp;<b>G</b>lobal: Match all instances, not only the first instance.
                        </li>
                        <li>
                            <span>i</span>
                            &nbsp;<b>I</b>gnore casing: Make the whole regular expression case insensitive.
                        </li>
                        <li>
                            <span>m</span>
                            &nbsp;<b>M</b>ultiline: Match things on multiple lines.
                        </li>
                        <li>
                            <span>s</span>
                            &nbsp;<b>S</b>ingleline: Also known as the Dot All flag, which lets the dot(.) match all possible characters. Treats the regular expression as a single line. 
                        </li>
                        <li>
                            <span>u</span>
                            &nbsp;<b>U</b>nicode: Lets the regular expression match Unicode escapes \u{`XXXXX`}
                        </li>
                        <li>
                            <span>y</span>
                            &nbsp;Stick<b>Y</b> searching: Make the regular expression start searching from the position noted in its <b>lastIndex</b> property.
                            <br/>
                            If the <b>lastIndex</b> property is not changed, the <b>y</b> flag would be useless since regular expressions start searching from the default index of 0.
                            <br/>
                            You can change the <b>lastIndex</b> property by doing:
                            <br/><br/><span className="code-block">/RegEx/.lastIndex = 5;</span>
                        </li>
                    </ul>
                </div> 

            
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