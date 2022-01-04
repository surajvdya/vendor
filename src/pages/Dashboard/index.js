import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import MiniWidgets from "./MiniWidgets";
import LatestTransactions from "./LatestTransactions";
import OrdersTracker from "./OrdersTracker";
import img from "../../assets/images/design.png";

import mustard from "../../assets/images/small/img-1.jpg";
import snickers from "../../assets/images/small/img-2.jpg";
import watch from "../../assets/images/small/img-3.jpg";
import Shoe from "../../assets/images/small/img-4.jpg";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                { title: "Aydiav", link: "#" },
                { title: "Dashboard", link: "#" },
            ],
            reports: [
                { icon: "ri-stack-line", title: "2013 New Orders Today", value: "Yesterday was 2135 " },
                { icon: "ri-store-2-line", title: "1918 Items Shipped Today", value: "Yesterday was 2356" },
                { icon: "ri-briefcase-4-line", title: "175 Users Registered Today", value: "Yesterday was 235" },
            ],
            orders: [
                { title: "New Orders", value: "12" },
                { title: "In Progress", value: "8" },
                { title: "Shipped", value: "13" },
                { title: "Failed", value: "3" },
            ],
            products: [
                { img: mustard, name: "Yellow Mustard", value: "12" },
                { img: snickers, name: "White snickers", value: "8" },
                { img: watch, name: "Minimal Watch", value: "13" },
                { img: Shoe, name: "Black Shoe", value: "3" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Dashboard" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col xl={12}>
                                <Row>
                                    <MiniWidgets reports={this.state.reports} />
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12}>
                                <img src={img} className="banner mb-4"/>
                            </Col>
                        </Row>
                        <Row>
                            <OrdersTracker orders={this.state.orders} products={this.state.products}/>
                        </Row>
                        <Row>
                            <LatestTransactions />
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
