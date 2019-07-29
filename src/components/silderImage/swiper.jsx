import React from 'react';
import "../../assets/css/swiper.css";

import 'swiper/dist/css/swiper.min.css'
class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="swiper">
                <img src={require("../../assets/image/bannertemp.e8a6fa63.jpg")} alt="" />
            </div>
        );
    }
}

export default Swiper;