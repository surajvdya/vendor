import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';



class LatestTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    render() {
        const data = {
            columns: [

                {
                    dataField: "Name",
                    text: "Name"
                },
                {
                    dataField: "date",
                    text: "Date"
                },
                {
                    dataField: "billingName",
                    text: "Billing Name"
                },
                {
                    dataField: "status",
                    text: "Payment Status"
                },
                {
                    dataField: "message",
                    text: ""
                },
                {
                    dataField: "options",
                    text: ""
                },


            ],
            rows: [
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
                {
                    Name: <Link to="#" className="text-dark font-weight-bold d-flex flex-column">Nike Air Max <span className="id">#NZ1572</span></Link>,
                    date: <span className="d-flex flex-column">Saturday, 2 May <span className="id">Delivery on Saturday 7 May</span></span>,
                    billingName: "Walter Brown",
                    status: <div className="badge badge-soft-success font-size-12">Delivered</div>,
                    message: <i className=' ri-message-line' />,
                    options: <i className='fas fa-ellipsis-h'/>,
                },
            ]
        };

        return (
            <React.Fragment>
                <Col lg={12}>
                    <h4 className="card-title mb-4">Recent Orders</h4>
                    <Card>
                        <CardBody>


                            <BootstrapTable
                                keyField='id'
                                data={data.rows}
                                columns={data.columns}
                                bordered={false}
                                hover={true}
                                classes={"table-centered table-borderless"}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default LatestTransactions;