import React from "react";
import './styles/index.less';
import Header from "@/pages/LandedTheme/Header";
import Banner from "@/pages/LandedTheme/Banner";
import Page from "@/pages/LandedTheme/Page";

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