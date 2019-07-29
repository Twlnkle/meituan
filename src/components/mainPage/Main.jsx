import React, { Component } from "react";
import Footer from "../footer/footer";
import Search from "../header/search";
import Swiper from "../silderImage/swiper";
import Menulist from "../smallpages/menulist";
import Nearby from "../smallpages/nearby";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Search></Search>
                <Swiper></Swiper>
                <Menulist></Menulist>
                <Nearby></Nearby>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;