import { createModel } from '@rematch/core';
import axios from 'axios';
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
    const response = await axios('');
  },
});

export const profile = createModel<RootModel>()({
  state,
  reducers,
  effects,
});
