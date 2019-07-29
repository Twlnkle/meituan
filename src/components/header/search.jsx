import React, { Component } from "react";
import "../../assets/css/search.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="search">
                <input type="text" />
                <img src={require("../../assets/image/sear.png")} alt="" />
            </div>
        );
    }
}

export default Search;