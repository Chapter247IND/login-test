import { createAction } from "redux-actions";

export const defaultAction = createAction("default-action");


export const signUpUser = createAction("signup-user");
export const successSignupUser = createAction("success-signup-user");
export const cancelSignupUser = createAction("cancel-signup-user");

export const loginUser = createAction("login-user");
export const successLoginUser = createAction("success-login-user");
export const cancelLoginUser = createAction("cancel-login-user");

export const redirectTo = createAction("REDIRET_TO");

export const  AllAction = {
    loginUser,
    successLoginUser,
    cancelLoginUser,
    signUpUser,
    successSignupUser,
    cancelSignupUser,
    redirectTo
}