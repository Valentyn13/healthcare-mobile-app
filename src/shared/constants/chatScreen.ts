import { MessageType } from 'src/shared/components/ModalChat/types';

export const INITIAL_MESSAGE: MessageType = {
    id: '1',
    type: 'chat',
    header: 'Hello!',
    description:
        'My name is Maryna. I’m your virtual chat assistant. Select your status.',
    hintList: [
        {
            id: 'hint-1',
            value: 'under-21',
            title: 'Teenager, less than 18 years old',
        },
        { id: 'hint-2', value: 'military', title: 'I’m military person' },
        { id: 'hint-3', value: 'veteran', title: 'I’m war veteran' },
        { id: 'hint-4', value: 'civil', title: 'Civil person' },
    ],
};
