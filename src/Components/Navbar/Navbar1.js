import React from 'react'
import HealthLogo from './health1.ico';
import './navbar.css'
import text from './text.png'

import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,DropdownButton,Dropdown,Form,Col,ButtonGroup} from 'react-bootstrap';

import Home from '../Routes/Home';
import Quotations from '../Routes/Quotations';
import UserManuals from '../Routes/UserManuals';
import Products from '../Routes/Products';
import Repository from '../Routes/Repository';
import History from '../Routes/History';
import ApprovedProductList from '../Routes/ApprovedProductList';
import Orders from '../Routes/Orders';
import Payments from '../Routes/Payments';
import Notifictions from '../Routes/Notifications';
import Reports from '../Routes/Reports';
import AddQuotation from '../Routes/AddQuotation';
import UpdateQuotation from '../Routes/UpdateQuotation';
import CreateQuotations from '../Routes/CreateQuotations';
import BiologicalsImporter from '../Routes/BiologicalsImporter';
import BiologicalsManufecturer from '../Routes/BiologicalsManufecturer';
import BER from '../Routes/BER';
import BERCreation from '../Routes/BERCreation';
import DraftCreation from '../Routes/DraftCreation';
import SignIn from '../Routes/SignIn';
import SignUp from '../Routes/SignUp';


class Navbar1 extends React.Component {
  render(){  
    return (
      <div>
        <div className="App">
          <Form.Row>
            <Form.Group as={Col}>
              <div className="Logo">
                  <img src={HealthLogo}/>
                  <img src={text}/>
              </div>
          </Form.Group>
          <Form.Group>
            <Nav className="justify-content-end"> 
              <ButtonGroup>
                <Nav.Item>
                  <DropdownButton as={ButtonGroup} variant="success" id="dropdown-basic-button" title="SignIn/SignUp">
                    <Dropdown.Item href="/signIn">Sign In</Dropdown.Item>
                    <Dropdown.Item href="/signUp">Sign Up</Dropdown.Item>
                  </DropdownButton>
                </Nav.Item>               

                <Nav.Item>
                  <DropdownButton as={ButtonGroup} variant="success" id="dropdown-basic-button" title="User Manuals">
                    <Dropdown.Item href="/userManuals">Manuals</Dropdown.Item>
                    <Dropdown.Item href="/ber">BER</Dropdown.Item>
                  </DropdownButton>
                </Nav.Item>               
                <Nav.Item>
                  <DropdownButton as={ButtonGroup} variant="success" id="dropdown-basic-button" title="My Accounts">
                    <Dropdown.Item href="#/ac">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                  </DropdownButton>
                </Nav.Item>
                </ButtonGroup>
              </Nav>
            </Form.Group>
            </Form.Row>
          <Navbar bg="primary" variant="dark">
            <Nav className="bot">

              <Nav.Link as={Link} to="/home" >Home</Nav.Link>
              <DropdownButton variant="primary" id="dropdown-basic-button" title="Quotations" >
                <Dropdown.Item href="/quotations">View Quotations</Dropdown.Item>
                <Dropdown.Item href="/addQuotation">Add New Quotation</Dropdown.Item>
              </DropdownButton>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/repository">Repository</Nav.Link>
              <DropdownButton variant="primary" id="dropdown-basic-button" title="history" >
                <Dropdown.Item href="/quotations">Quotations</Dropdown.Item>
                <Dropdown.Item href="/approvedProductList">Approved ProductList</Dropdown.Item>
                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                <Dropdown.Item href="/payments">Payments</Dropdown.Item>
              </DropdownButton>
              <Nav.Link as={Link} to="/notifications">Notifictions</Nav.Link>
              <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/quotations" component={Quotations}/>
          <Route path="/userManuals" component={UserManuals}/>
          <Route path="/products" component={Products}/>
          <Route path="/repository" component={Repository}/>
          <Route path="/history" component={History}/>
          <Route path="/approvedProductList" component={ApprovedProductList}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/payments" component={Payments}/>
          <Route path="/notifications" component={Notifictions}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/addQuotation" component={AddQuotation}/>
          <Route path="/updateQuotation" component={UpdateQuotation}/>
          <Route path="/createQuotations" component={CreateQuotations}/>
          <Route path="/biologicalsImporter" component={BiologicalsImporter}/>
          <Route path="/biologicalsManufecturer" component={BiologicalsManufecturer}/>
          <Route path="/ber" component={BER}/>
          <Route path="/berCreation" component={BERCreation}/>
          <Route path="/draftCreation" component={DraftCreation}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/signUp" component={SignUp}/>
        </Switch>
      </div>
    )
  }
}

export default Navbar1;