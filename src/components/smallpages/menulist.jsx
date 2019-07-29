import React from "react";
import "../../assets/css/menulist.css";
import Axios from "axios"
import { Link } from "react-router-dom";

class menulist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_data: [],
            index: 0,
            len: 8,
            chooseIndex: 0,
        };
    }
    componentDidMount() {
        Axios.post("/lists").then((res) => {
            this.setState({
                menu_data: res.data.data.primary_filter
            })
            console.log(res.data.data.primary_filter);
        });
        let showDataIndex = Math.floor(Math.random() * 8);
        this.setState({
            chooseIndex: showDataIndex
        })
    }
    render() {
        return (
            <div className="menulist">
                <ul>
                    {
                        this.state.menu_data.splice(this.state.chooseIndex, this.state.len).map((value, index) => {
                            return (
                                <Link to={`/detail/${value.code}`} key={index}>
                                    <li>
                                        <img src={value.url} alt="" /><br />
                                        <span>{value.name}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default menulist;