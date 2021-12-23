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

            <div>
                <div>
                    <p>Character Classes</p>
                    <ul>
                        <li>
                            <span>.</span>
                            Any character except new line
                        </li>
                        <li>
                            <span>\w \W</span>
                            Word (Alphanumeric characters & underscore), Opposite of Word
                        </li>
                        <li>
                            <span>\d \D</span>
                            Digit (0~9), Opposite of Digit
                        </li>
                        <li>
                            <span>\s \S</span>
                            Whitespace (Spaces, tabs, linebreaks), Opposite of Whitespace
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Brackets</p>
                    <ul>
                        <li>
                            <span>[abc]</span>
                            Any single character of a, b, or c
                        </li>
                        <li>
                            <span>[^xyz]</span>
                            Any single character EXCEPT x, y, or z
                        </li>
                        <li>
                            <span>[a-z]</span>
                            Any single character in the range of a~z
                        </li>
                        <li>
                            <span>[^0~9]</span>
                            Any single character EXCEPT 0~9
                        </li>
                        <li>
                            <span>[a-f0-5]</span>
                            Any single character in the range of a~f or 0~5
                        </li>
                    </ul>
                </div>
                
                <div>
                    <p>Alternation & Quantifiers</p>
                    <ul>
                        <li>
                            <span>a|z</span>
                            Alternate: Match either a or z
                        </li>
                        <li>
                            <span>a?</span>
                            Zero or One occurrences of a
                        </li>
                        <li>
                            <span>b*</span>
                            Zero or more occurrences of b
                        </li>
                        <li>
                            <span>c+</span>
                            One or more occurrences of c
                        </li>
                        <li>
                            <span>x{`n`}</span>
                            Exactly n occurrences of x
                        </li>
                        <li>
                            <span>y{`n, `}</span>
                            n or more occurrences of y
                        </li>
                        <li>
                            <span>z{`n, o`}</span>
                            Between n or o occurrences of z
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Grouping</p>
                    <ul>
                        <li>
                            <span>(abc)</span>
                            Capture Group: Capture and match what's inside of the parentheses
                        </li>
                        <li>
                            <span>(?:xyz)</span>
                            Group what's inside of the parentheses without creating a Capture Group
                        </li>
                        <li>
                            <span>(?=abc)</span>
                            Positive Lookahead: Match something followed by abc
                        </li>
                        <li>
                            <span>(?!xyz)</span>
                            Negative Lookahead: Match something not followed by xyz
                        </li>
                        <li>
                            <span>(?{`<=`}abc)</span>
                            Positive Lookbehind: Match something preceded by abc
                        </li>
                        <li>
                            <span>(?{`<!`}xyz)</span>
                            Negative Lookbehind: Match something not preceded by xyz
                        </li>
                    </ul>
                </div> 

                <div>
                    <p>Escaped Characters</p>
                    <ul>
                        <li>
                            <span>\. \* \\ </span>
                            Escaped Characters: Make any character literal. 
                            Most commonly used to escape special characters.
                        </li>
                        <li>
                            <span>\t</span>
                            Tab
                        </li>
                        <li>
                            <span>\n</span>
                            New line or Line break
                        </li>
                        <li>
                            <span>\r</span>
                            Carriage Return
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Anchors</p>
                    <ul>
                        <li>
                            <span>\b \B</span>
                            Word Boundary, Opposite of Word Boundary
                        </li>
                        <li>
                            <span>\A</span>
                            Start of string
                        </li>
                        <li>
                            <span>^a</span>
                            Match string that starts with a
                        </li>
                        <li>
                            <span>\Z</span>
                            End of string
                        </li>
                        <li>
                            <span>z$</span>
                            Match string that ends with z
                        </li>
                        <li>
                            <span>^abc$</span>
                            Match exactly abc
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Flags</p>
                    <p>Things to append after the second forward slash of the regular expression. You can mix and match flags as needed.</p>
                    <ul>
                        <li>
                            <span>g</span>
                            <b>G</b>lobal: Match all instances, not only the first instance.
                        </li>
                        <li>
                            <span>i</span>
                            <b>I</b>gnore casing: Make the whole regular expression case insensitive.
                        </li>
                        <li>
                            <span>m</span>
                            <b>M</b>ultiline: Match things on multiple lines.
                        </li>
                        <li>
                            <span>s</span>
                            <b>S</b>ingleline: Also known as the Dot All flag, which lets the dot(.) match all possible characters. Treats the regular expression as a single line. 
                        </li>
                        <li>
                            <span>u</span>
                            <b>U</b>nicode: Lets the regular expression match Unicode escapes \u{`XXXXX`}
                        </li>
                        <li>
                            <span>y</span>
                            Stick<b>Y</b> searching: Make the regular expression start searching from the position noted in its <b>lastIndex</b> property.
                            <br/>
                            If the <b>lastIndex</b> property is not changed, the <b>y</b> flag would be useless since regular expressions start searching from the default index of 0.
                            <br/>
                            You can change the <b>lastIndex</b> property by doing:
                            <br/><br/><span className="code-block">/RegEx/.lastIndex = 5;</span>
                        </li>
                    </ul>
                </div> 

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