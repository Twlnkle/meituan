import React from "react";
import "../../assets/css/nearby.css";
import axios from "axios";
import Starscore from "../smallpages/StarScore";
import { Link } from "react-router-dom";

class nearby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            near_data: [],
        };
    }
    componentDidMount() {
        axios.get("/nearby").then((res) => {
            this.setState({
                near_data: res.data.data.poilist,
            })
        })
    }
    render() {
        return (
            <div className="nearby">
                <div className="neartitle">附近商家</div>
                <div className="list_box">
                    <ul className="near_per">
                        {
                            this.state.near_data.map((value, index) => {
                                return (
                                    <Link to="/neardetail" key={index}>
                                        <li key={index}>
                                            <div className="per_left"><img src={value.pic_url} alt="" /></div>
                                            <div className="per_right">
                                                <div className="per_name">{value.name}
                                                    <Starscore score={value.wm_poi_score}></Starscore>
                                                </div>

                                                <div className="shopinfo">
                                                    <span>月售：{value.month_sale_num}</span>
                                                    <span>{value.mt_delivery_time}</span>
                                                    <span>{value.distance}</span>
                                                </div>
                                                <div className="shopprice">
                                                    <span>{value.min_price_tip}</span>
                                                    <span>{value.shipping_fee_tip}</span>
                                                    <span>{value.average_price_tip}</span>
                                                    <img src={value.poi_type_icon} alt="" />
                                                </div>
                                            </div>

                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default nearby;