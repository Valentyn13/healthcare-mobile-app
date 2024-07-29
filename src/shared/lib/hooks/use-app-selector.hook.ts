import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from 'src/model/store/store';

const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.instance.getState>
> = useSelector;

export { useAppSelector };
