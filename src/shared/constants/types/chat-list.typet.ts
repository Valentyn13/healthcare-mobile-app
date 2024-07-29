import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

export type ChatType = {
    id: number;
    name: string;
    LogoBlue: FunctionComponent<SvgProps>;
    status: string;
    again: string;
};

export type ChatListDto = {
    title: string;
    data: {
        id: number;
        name: string;
        LogoBlue: React.FC<SvgProps>;
        status: string;
        again: string;
    }[];
}[];

export type ChantsListType = ChatType[];
