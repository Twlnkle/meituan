import React from "react";
import "../../assets/css/neardetail.css";
import axios from "axios";
import Goback from "../smallpages/Goback";
class pro_detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            neardetailData: null,
        };
    }
    componentDidMount() {
        axios.get("/neardetail").then((res) => {
            console.log(res);
            this.setState({
                neardetailData: res.data.data
            })
        })
    }
    render() {
        return (
            this.state.neardetailData ?
                <div className="pro_detail">
                    <Goback title={this.state.neardetailData.poi_info.name}></Goback>
                    <div className="header_img">
                        <img className="header" src={this.state.neardetailData.poi_info.pic_url} alt="" />
                        <img className="bg" src={this.state.neardetailData.poi_info.head_pic_url} alt="" />
                        <span>{this.state.neardetailData.poi_info.name}</span>
                    </div>
                    <div>
                        <ul className="menulist">
                            <li>点菜

                            </li>
                            <li>评价
                            <span></span>
                            </li>
                            <li>商家</li>
                        </ul>
                    </div>
                </div>
                : ''
        );
    }
}

export default pro_detail;