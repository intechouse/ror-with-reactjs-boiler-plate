import {createSelector} from 'reselect';

export const rootUser = (state) => state.reduxTokenAuth.currentUser;

export const isLoggedInSelector = createSelector(rootUser, (data) => {
  return data.isSignedIn;
});

export const getCurrentUser = createSelector(rootUser, (data) => {
  return Object.keys(data.attributes).length === 0 ? null : data.attributes;
});
