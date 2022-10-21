import { createLogic } from 'redux-logic';
import { push } from "react-router-redux";
import { AllAction } from "../Action";
import { AuthLogin, AuthSignup } from "../../services"
import { Toast } from '../../utilities';



const  loginLogic =  createLogic({
  type: AllAction.loginUser,
  async process({ action }, dispatch, done) {
    const result  = await AuthLogin(action.payload)
    if(result.data){
      dispatch(AllAction.successLoginUser({
        userAUthTokenDetails:result.data.token
      }))
      localStorage.setItem('token',result.data.token)
      Toast.fire({
        title: result.data.message,
        icon: 'success',
      })
      done();
    }
    else{
      Toast.fire({
        title: result.response.data.message,
        icon: 'error',
      })
      done();
    }
  }
})

const signupLogic = createLogic({
  type: AllAction.signUpUser,
  async process({ action }, dispatch, done) {
    const result  = await AuthSignup(action.payload)
    if(result.data){
      
      dispatch(AllAction.successSignupUser({
        userDetails:result.data.data
      }))
      dispatch(AllAction.redirectTo({ path: "/"}));
      Toast.fire({
        title: result.data.message,
        icon: 'success',
      })
      done();
    }
    else{
      Toast.fire({
        title: result.response.data.message,
        icon: 'error',
      })
      done();
    }
  }
})

/* Logic action for redirecting to path of routes */
export const redirectToLogic = createLogic({
  type: "REDIRET_TO",
  async process({ action }, dispatch, done) {
    dispatch(push(action.payload.path));
    done();
  }
});


export const allLogics = [
  loginLogic,
  signupLogic,
  redirectToLogic
];
  