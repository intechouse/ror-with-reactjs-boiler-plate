import {createSelector} from 'reselect';

export const rootUser = (state) => state.reduxTokenAuth.currentUser;

export const getIsSellingAccepted = createSelector(rootUser, (data) => {
  return data.attributes.is_selling_accepted;
});
