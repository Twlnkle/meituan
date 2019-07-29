import React, { Component } from "react";
import "../../assets/css/Footer.css";
import footerData from "../../assets/footer/footerData";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: footerData,
        };
    }
    componentDidMount() {

    }
    userBtn(index) {
        footerData.forEach((val, inx) => {

            val.addClass = false;
            if (inx === index) {
                val.addClass = true;
            }
        });
        this.setState({
            list: footerData
        })
    }
    render() {
        return (
            <div className="fixedfooter">
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <li key={index} onClick={this.userBtn.bind(this, index)}>
                                    <Link to={value.action}>
                                        <img src={value.addClass ? value.ckimage : value.moimage} alt="" /><br />
                                        <span className={value.addClass ? 'footerColor' : ''}>{value.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Header;