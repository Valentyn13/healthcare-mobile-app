import { getExampleData } from './actions.ts';
import { actions } from './slice.ts';
const allActions = {
    ...actions,
    getExampleData,
};

export { allActions as actions };
export { reducer } from './slice.ts';
