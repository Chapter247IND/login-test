import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';

import { AuthSchema } from '../../../utilities/Validation';
import { AllAction } from '../../../redux/Action';

import Form from '../../../components/Form';
import FormInput from '../../../components/FormInput';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    let userDetail = this.props.loginState.userDetails;
    if (userDetail) {
      this.setState({
        email: this.props.loginState.userDetails.email,
      });
    }
  }

  handleSubmit = async (data) => {
    if (data) {
      this.props.loginUser(data);
    }
  };

  render() {
    const { appData: { userDetails } = {} } = this.props;

    return (
      <Container>
        <Row className='justify-content-md-center mt-5'>
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2 className={'text-center pb-3'}>Login Page</h2>
                <>
                  <Form
                    initialValues={{
                      email: userDetails?.email || '',
                      password: '',
                    }}
                    onSubmit={this.handleSubmit}
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

                    <div
                      className={'d-flex align-items-center pt-2 flex-column'}
                    >
                      <Button
                        variant='primary'
                        type='submit'
                        className={'w-100'}
                      >
                        Submit
                      </Button>
                      <div className={'pt-4'}>
                        Don't have account please,
                        <Link to='/signup' className={'px-1 d-inline-block'}>
                          Signup
                        </Link>
                      </div>
                    </div>
                  </Form>
                </>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state.appReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => {
      dispatch(AllAction.loginUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
