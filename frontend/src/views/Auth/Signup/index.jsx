import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import { AuthSchema } from '../../../utilities';
import { AllAction } from '../../../redux';

import Form from '../../../components/Form';
import FormInput from '../../../components/FormInput';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  handleUserRegistration = (data) => this.props.signUpUser(data);

  render() {
    return (
      <Container>
        <Row className='justify-content-md-center mt-5'>
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2 className={'text-center pb-3'}>SignUp</h2>
                <Form
                  initialValues={{ email: '', password: '' }}
                  onSubmit={this.handleUserRegistration}
                  validationSchema={AuthSchema}
                >
                  <FormInput
                    label={'Email address'}
                    type='email'
                    placeholder='Enter email'
                    name={'email'}
                    className={'form-control'}
                    id={'email'}
                  />

                  <FormInput
                    label={'Password'}
                    type='password'
                    placeholder='Password'
                    name={'password'}
                    className={'form-control'}
                    id={'password'}
                  />

                  <div className={'d-flex align-items-center pt-2 flex-column'}>
                    <Button variant='primary' type='submit' className={'w-100'}>
                      Submit
                    </Button>
                    <div className={'pt-4'}>
                      Already have account please,
                      <Link to='/' className={'px-1 d-inline-block'}>
                        Login
                      </Link>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (payload) => {
      dispatch(AllAction.signUpUser(payload));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(SignUp);
