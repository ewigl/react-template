import React from "react";
import '@/styles/Home.less';
import Header from "@/container/Home/Header";
import Banner from "@/container/Home/Banner";
import Page from "@/container/Home/Page";

class Home extends React.Component {
    render() {
        return (
            <div id="landed-app">
                <Header></Header>
                <Banner></Banner>
                <Page></Page>
            </div>
        );
    }
}

export default Home;