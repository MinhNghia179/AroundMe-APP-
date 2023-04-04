import { Models } from '@rematch/core';
import { profile } from './profile';
import { activity } from './activity';

export interface RootModel extends Models<RootModel> {
  profile: typeof profile;
  activity: typeof activity;
}

export const models: RootModel = { profile, activity };
