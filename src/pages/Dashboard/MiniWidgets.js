import React, { Component } from 'react';
import { Col, Card, CardBody, Media } from "reactstrap";

class MiniWidgets extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.reports.map((report, key) =>
                        <Col key={key} md={4}>
                            <Card className="vendor-card">
                                <CardBody >
                                    <Media>
                                        <div className="text-primary mr-4">
                                            <i className={report.icon + " font-size-42"}></i>
                                        </div>
                                        <Media body className="overflow-hidden">
                                            <p className="text-truncate report-title mb-1">{report.title}</p>
                                            <h4 className="mb-0 yesterdays">{report.value}</h4>
                                        </Media>

                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default MiniWidgets;