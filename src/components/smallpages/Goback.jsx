import React from "react";
import "../../assets/css/goback.css";
class Goback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: require("history").createHashHistory,
        };
    }
    goback = () => {
        this.state.history().goBack();
    }
    render() {
        return (
            <div className="goback">
                <img onClick={this.goback} src={require("../../assets/image/back.45314cf585ebb232852fa9c3f3db721d.png")} alt="" />
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default Goback;