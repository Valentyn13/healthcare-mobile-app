import { FC, useState } from 'react';
import { Platform, View } from 'react-native';
import { Button, ButtonTypes, InterFontFamily } from 'src/shared';
import { Colors } from 'src/shared/constants/Colors';
import useTheme from 'src/shared/lib/useTheme';
import { Input } from 'src/shared/ui/input-fields/input/input';

import { MessageType } from '../types';

import { style } from './MessageInput.styles';

import SendMessageIcon from 'assets/svg-icons/controll/send-message-arrow.svg';

interface MessageInputProps {
    onMessageSend: (message: MessageType) => void;
}

export const MessageInput: FC<MessageInputProps> = ({ onMessageSend }) => {
    const { theme } = useTheme();

    const [value, setValue] = useState('');

    return (
        <View
            style={[
                style.wrapper,
                { marginBottom: Platform.OS === 'android' ? 1 : 0 },
            ]}
        >
            <Input
                style={{
                    ...style.input,
                    borderColor: Colors[theme].chat.border,
                    backgroundColor: Colors[theme].chat.input,
                }}
                font={InterFontFamily.ff400}
                placeholder="Message"
                placeholderTextColor={Colors[theme].chat.sendIcon}
                onChangeText={(text) => setValue(text)}
                value={value}
                multiline
            />
            <Button
                type={ButtonTypes.ROUNDED}
                onPress={() => {
                    onMessageSend({
                        id: new Date().getTime().toString(),
                        type: 'human',
                        description: value,
                    });
                    setValue('');
                }}
                style={{
                    backgroundColor: Colors[theme].chat.input,
                    borderColor: Colors[theme].chat.border,
                    borderWidth: 0.5,
                }}
                disabled={!value}
            >
                <SendMessageIcon
                    width={19}
                    height={19}
                    color={
                        value.length === 0
                            ? Colors[theme].chat.sendIcon
                            : Colors[theme].chat.sendIconActive
                    }
                />
            </Button>
        </View>
    );
};
