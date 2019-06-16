import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'
import { Route, Switch,withRouter } from 'react-router-dom'
class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <Switch>
        <Container style={{ marginTop: '30px' }}>
          <Row className="justify-content-md-center">
            <Col lg="11">
              <h2>Employee Directory</h2>
              <hr />
              <Route path="/" exact component={Employee} history={this.props.history} />
              <Route path="/edit" component={EditEmployee} history={this.props.history} />
            </Col>
          </Row>
        </Container>
      </Switch>
    );
  }
}


export default withRouter(App);
