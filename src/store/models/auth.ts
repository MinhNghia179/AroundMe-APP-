import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { Dispatch } from '..';

interface IAuthProps {
  isAuthenticate: boolean;
}

const state: IAuthProps = {
  isAuthenticate: false,
};

const reducers = {
  setIsAuthenticate(state: IAuthProps, payload: boolean) {
    return {
      ...state,
      isAuthenticate: payload,
    };
  },
};

const effects = (dispatch: Dispatch) => ({});

export const auth = createModel<RootModel>()({
  state,
  reducers,
  effects,
});
