export type MessageType =
    | MessageChatType
    | MessageHumanType
    | MessageHintType
    | MessageLoadingType
    | MessageAiType;

export interface MessageChatType {
    type: 'chat';
    id: string;
    header: string;
    description: string;
    hintList?: HintType[];
}

export interface MessageHumanType {
    type: 'human';
    id: string;
    description: string;
}

export interface MessageHintType {
    type: 'hint';
    id: string;
    description: string;
    value: string;
}

export interface MessageLoadingType {
    type: 'loading';
    id: string;
}

export interface MessageAiType {
    id: string;
    type: 'ai';
    header: string;
    description: string;
}

export interface HintType {
    id: string;
    title: string;
    value: string;
}
