import { RootReducer } from '../../store.package';

export const selectIsVisibleTabBar = (state: RootReducer) =>
    state.tabBar.isVisible;
