import React from "react";
import '@/styles/Home.less';

class Home extends React.Component {
    render() {
        return (
            <div id="head-bar">
                <h1 id="logo"><a href="/">Landed</a></h1>
                <ul id='nav-ul'>
                    <li>Home</li>
                    <li>Layouts</li>
                    <li>Elements</li>
                    <li>
                        <button>Sign Up</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;