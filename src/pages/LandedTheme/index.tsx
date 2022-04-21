import React from "react";
import './styles/index.less';
import Header from "./Header";
import Banner from "./Banner";
import Page from "./Page";

class Home extends React.Component {
    render() {
        return (
            <div id="landed-theme">
                <Header></Header>
                <Banner></Banner>
                <Page></Page>
            </div>
        );
    }
}

export default Home;