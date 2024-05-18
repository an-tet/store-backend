import { AxiosResponse } from 'axios';
import { LoginModel } from '../../../models/auth/login.model';
import { storeApi } from '../../apis';
import { AppDispatch } from '../../store';
import { checkingCredentials, login, logout } from './auth.slice';
import { clearUsersState } from '../user/user.slice';

export const loginThunk = (credentials: LoginModel) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const { data }: AxiosResponse = await storeApi.post(
      'auth/login',
      credentials
    );

    dispatch(login(data));
  };
};

export const logoutThunk = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(clearUsersState());
    dispatch(logout());
  };
};
