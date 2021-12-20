import React from 'react';
import "../Stylings/Page1.css";
import henri_profpic from "../Images/henri.jpg";

function Page1() {
    return (
        <div id="page1">
            <header id="henri-header">
                <img
                    src={henri_profpic}
                    alt="Henri the cat"
                    id="henri-profile-pic"
                />&nbsp;&nbsp;&nbsp;
                <h1>Henri</h1>
            </header>
            
            <section id="henri-section">

                <div id="henri-description">
                <h2>Henri Bingus</h2>
                    <p>
                        Meow, my name is Henki Benki and I'm a smelly boi.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in libero neque. Morbi id sollicitudin leo. Nullam nec porta turpis. Mauris tortor nisi, luctus non imperdiet laoreet, lobortis nec tellus. Morbi sed maximus massa. Nulla sed tortor pulvinar odio ultrices hendrerit eu sed urna. Vivamus faucibus tortor consectetur enim porta molestie. Donec pulvinar neque velit, scelerisque molestie dolor imperdiet in. Nunc molestie ex accumsan, hendrerit felis nec, congue turpis. Aenean vitae ipsum sit amet urna finibus efficitur. Nulla accumsan imperdiet aliquam. Fusce condimentum bibendum ipsum, a congue magna finibus vitae.
                        <br/>
                        Donec pellentesque lobortis aliquam. Vivamus laoreet nec nulla at aliquet. Cras consequat enim non metus molestie facilisis. Nulla at lectus arcu. Sed lacinia nulla ac sollicitudin faucibus. Nunc pulvinar ornare massa, at posuere diam rhoncus ac. Donec vehicula purus erat, id euismod tortor vulputate ut. Curabitur sit amet consectetur justo. Donec lacinia purus eget orci mollis, id commodo nisi molestie. Pellentesque blandit lacus et tellus vestibulum mollis. Nunc sit amet consectetur sem. Quisque luctus efficitur orci, quis pellentesque purus venenatis in.
                    </p>
                </div>

                <div id="henri-divs-image">
                    <div className="cat">
                        <div className="face">
                            <div className="left-ear">
                                <div className="left-inner"></div>
                            </div>
                            <div className="right-ear">
                                <div className="right-inner"></div>
                            </div>
                            <div className="left-eye">
                                <div className="eyeball"></div>
                                <div className="sparkle"></div>
                            </div>
                            <div className="right-eye">
                                <div className="eyeball"></div>
                                <div className="sparkle"></div>
                            </div>
                            <div className="nose">
                                <div className="left-mouth"></div>
                                <div className="right-mouth"></div>
                            </div>
                        </div>
                
                        <div className="body">
                            <div className="left-paw"></div>
                                <div className="left-poly"></div>
                            <div className="right-paw"></div>
                                <div className="right-poly"></div>
                            <div className="back-left-paw"></div>
                            <div className="back-right-paw"></div>
                            <div className="tail"></div>
                        </div>
                
                        <div className="shadow"></div>
                    </div>
                </div>

            </section>

            <a href="https://www.instagram.com/__.henri.__/" target="_blank">Henri</a>
        </div>
    );
}

export default Page1;