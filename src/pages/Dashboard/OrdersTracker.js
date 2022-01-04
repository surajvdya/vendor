import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';



class LatestTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    render() {


        return (
            <React.Fragment>
                <Col lg={8}>
                    <h4 className="card-title mb-4">Orders Tracker</h4>
                    <Card>
                        <CardBody className="order-tracker-container">
                            {
                                this.props.orders.map((orders, key) =>
                                    <div className="order-tracker" key={key}>
                                        <span className="count">{orders.value}</span>
                                        <span className="name">{orders.title}</span>
                                    </div>
                                )
                            }
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <h4 className="card-title mb-4">Top Products</h4>
                    <div className="products-container">
                        {
                            this.props.products.map((products, key) =>
                                <div className="product" key={key}>
                                    <img src={products.img} />
                                    <div className="product-detail">
                                        <span className="name">{products.name}</span>
                                        <span className="count">{products.value} Sells</span>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default LatestTransactions;