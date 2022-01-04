import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { } from "../../store/actions";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import { Link } from "react-router-dom";

//Simple bar
import SimpleBar from "simplebar-react";

import SidebarContent from "./SidebarContent";

import logolight from "../../assets/images/logo-light.png";
import logolightsm from "../../assets/images/logo-lightsm.png";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>

                <div className="vertical-menu">
                   
                    <div data-simplebar className="h-100 sidebar-inner">
                    <Link to="#" className="logo logo-light">
                        <span className="logo-lg">
                            <img src={logolight} alt="" height="50" />
                        </span>
                        <span className="logo-sm">
                            <img src={logolightsm} alt="" height="40" />
                        </span>
                    </Link>
                        {this.props.type !== "condensed" ? (
                            <SimpleBar style={{ maxHeight: "100%", width: '100%' }}>
                                <SidebarContent />
                            </SimpleBar>
                        ) : <SidebarContent />}
                        <ProfileMenu />
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));
