import React from "react";
import '@/styles/Home.less';
import imgPath from '@/static/capoo.png';

class Home extends React.Component {
    render() {
        return (
            <div id="landed-app">
                <header id="head-bar">
                    <h1 id="logo"><a href="/">Licht</a></h1>
                    <ul id='nav-ul'>
                        <li onClick={() => {
                            location.href = '/'
                        }}>Home
                        </li>
                        <li>Layouts</li>
                        <li>Elements</li>
                        <li>
                            <button>Sign Up</button>
                        </li>
                    </ul>
                </header>

                <section id='banner'>
                    <div className="content">
                        <header>
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, adipiscing elit.
                                <br/>
                                Etiam mattis pharetra rhoncus.
                            </p>
                        </header>
                        <span className="image"><img src={imgPath} alt=""/></span>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;