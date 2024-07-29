import { HintType } from './types';

interface ChatBotMessageListType {
    type: 'chat';
    id: string;
    value: string;
    header: string;
    description: string;
    hintList?: HintType[];
}

export const chatBotMessageList: ChatBotMessageListType[] = [
    {
        id: 'chatBotMessageList-1',
        type: 'chat',
        value: 'under-21',
        header: 'Great. Now we can focus on you!',
        description:
            'Please, let me know do you have any of the following problems:',
        hintList: [
            {
                id: '1',
                title: "I'm finding it hard to manage stress both in and out of school. What are some ways to better handle stress?",
                value: '',
            },
            {
                id: '2',
                title: "I had a fight with my best friend, and I'm feeling very sad. How can I resolve this situation?",
                value: '',
            },
            {
                id: '3',
                title: "I'm worried about my future. What can I do to feel more confident in my decisions?",
                value: '',
            },
        ],
    },
    {
        id: 'chatBotMessageList-2',
        type: 'chat',
        value: 'veteran',
        header: 'Great. Now we can focus on you!',
        description:
            'Please, let me know do you have any of the following problems:',
        hintList: [
            {
                id: '1',
                title: "I'm finding it hard to manage stress both in and out of school. What are some ways to better handle stress?",
                value: '',
            },
            {
                id: '2',
                title: "I had a fight with my best friend, and I'm feeling very sad. How can I resolve this situation?",
                value: '',
            },
            {
                id: '3',
                title: "I'm worried about my future. What can I do to feel more confident in my decisions?",
                value: '',
            },
        ],
    },
    {
        id: 'chatBotMessageList-3',
        type: 'chat',
        value: 'military',
        header: 'Great. Now we can focus on you!',
        description:
            'Please, let me know do you have any of the following problems:',
        hintList: [
            {
                id: '1',
                title: "I'm finding it hard to manage stress both in and out of school. What are some ways to better handle stress?",
                value: '',
            },
            {
                id: '2',
                title: "I had a fight with my best friend, and I'm feeling very sad. How can I resolve this situation?",
                value: '',
            },
            {
                id: '3',
                title: "I'm worried about my future. What can I do to feel more confident in my decisions?",
                value: '',
            },
        ],
    },
    {
        id: 'chatBotMessageList-4',
        type: 'chat',
        value: 'civil',
        header: 'Great. Now we can focus on you!',
        description:
            'Please, let me know do you have any of the following problems:',
        hintList: [
            {
                id: '1',
                title: "I'm finding it hard to manage stress both in and out of school. What are some ways to better handle stress?",
                value: '',
            },
            {
                id: '2',
                title: "I had a fight with my best friend, and I'm feeling very sad. How can I resolve this situation?",
                value: '',
            },
            {
                id: '3',
                title: "I'm worried about my future. What can I do to feel more confident in my decisions?",
                value: '',
            },
        ],
    },
];
