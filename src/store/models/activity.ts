import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { Dispatch } from '..';

interface IActivityProps {}

const state: IActivityProps = {};

const reducers = {};

const effects = (dispatch: Dispatch) => ({});

export const activity = createModel<RootModel>()({
  state,
  reducers,
  effects,
});
