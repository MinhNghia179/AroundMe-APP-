import ApiClient from '@app/services/ApiClient';
import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { Dispatch } from '..';

interface ProfileProps {
  data: number;
}

const state: ProfileProps = {
  data: 0,
};

const reducers = {
  setData: (state: ProfileProps, payload: number) => ({
    ...state,
    data: payload,
  }),
};

const effects = (dispatch: Dispatch) => ({
  async fetchDetailProfile() {
    await ApiClient.get('https://dummyjson.com/products');
  },
});

export const profile = createModel<RootModel>()({
  state,
  reducers,
  effects,
});
