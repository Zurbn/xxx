import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOMENTUM_STORE_KEY, MomentumStoreState } from './state';

export const selectMomentumFeature =
    createFeatureSelector<MomentumStoreState>(MOMENTUM_STORE_KEY);

export const selectStatusesState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.statusesState
);
