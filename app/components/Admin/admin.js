import React from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    ProgressBar,
    Grid,
    Row,
    Col
} from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper" className="content">
                <Navbar fluid={true}>
                    <div className="navbar-brand">
                        <span className="">
                            <span>Livescore Admin</span>
                            <button
                                type="button"
                                className="navbar-toggle"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </span>
                    </div>
                    <ul className="nav navbar-top-links navbar-right" id="nav-dropdown">
                        <NavDropdown title="Max Abakumov" id="userDropdown">
                            <MenuItem>
                                <span> Logout </span>
                            </MenuItem>
                        </NavDropdown>
                    </ul>
                </Navbar>
            </div>
        );
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col lg="3">
                <div className="navbar-default sidebar {this.props.className}" role="navigation">
                    <div className="sidebar-nav navbar-collapse collapse">
                        <ul className="nav in" id="side-menu">
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        );
    }
}

class ContentArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Sidebar />
                </Row>
            </Grid>
        );
    }
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Header/>
                <ContentArea />
            </div>
        );
    }
}

export default Admin;