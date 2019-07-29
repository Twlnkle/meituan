import React from "react";
import "../../assets/css/neardetail.css";
import axios from "axios";
import Goback from "../smallpages/Goback";
import menudata from "../../Mock/neardetail";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from "../detailmenu/menu";
import Assess from "../detailmenu/assess";
import Shop from "../detailmenu/shop";
class pro_detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            neardetailData: null,
            menu: menudata,
        };
    }
    componentDidMount() {
        axios.get("/neardetail").then((res) => {
            console.log(res);
            this.setState({
                neardetailData: res.data.data
            })
        })
        console.log(this.state.menu);
    }
    userselect(index) {
        menudata.forEach((value, key) => {
            value.ifshow = false;
            if (key === index) {
                value.ifshow = true;
            }
        });
        this.setState({
            menu: menudata
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
                    <Router>
                        <div>
                            {/* 在这个div之下进行子父路由切换 */}
                            <ul className="menulist">
                                {
                                    this.state.menu.map((value, index) => {
                                        return (
                                            <Link key={index} to={'/neardetail' + value.action}>
                                                <li onClick={this.userselect.bind(this, index)}>{value.title}
                                                    <span className={value.ifshow ? 'botcolor' : ''}></span>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <Route path="/neardetail/" exact={true} component={Menu}></Route>
                        <Route path="/neardetail/assess" exact={true} component={Assess}></Route>
                        <Route path="/neardetail/shop" exact={true} component={Shop}></Route>
                    </Router>
                </div>
                : ''
        );
    }
}

export default pro_detail;