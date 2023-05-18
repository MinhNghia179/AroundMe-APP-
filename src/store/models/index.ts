import { Models } from '@rematch/core';
import { activity } from './activity';
import { auth } from './auth';
import { profile } from './profile';

export interface RootModel extends Models<RootModel> {
  profile: typeof profile;
  activity: typeof activity;
  auth: typeof auth;
}

export const models: RootModel = { profile, activity, auth };
