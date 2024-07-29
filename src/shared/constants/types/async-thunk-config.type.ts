import { store } from 'src/model/store/store';

type AsyncThunkConfig = {
    state: ReturnType<typeof store.instance.getState>;
    dispatch: typeof store.instance.dispatch;
    extra: typeof store.extraArguments;
};

export { type AsyncThunkConfig };
