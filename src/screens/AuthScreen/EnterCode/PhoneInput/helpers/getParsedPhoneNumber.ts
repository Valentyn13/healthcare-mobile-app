import parsePhoneNumber from 'libphonenumber-js';

export const getParsePhoneNumber = (phone: string): string => {
    return parsePhoneNumber(phone)?.formatInternational() || phone;
};
