import { AuthActionTypes } from "./auth.action-types";
import { Action } from "@ngrx/store";

export class Signup implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {
    console.log("Hello");
  }
}

export class SignupSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {
    console.log("Hello Again");
  }
}

export class SignupFail implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAIL;
  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LoadUser implements Action {
  readonly type = AuthActionTypes.LOAD_USER;
  constructor(public payload: any) {}
}

export type All =
  | Signup
  | SignupFail
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LoadUser;
