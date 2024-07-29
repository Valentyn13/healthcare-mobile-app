import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const startTheme = useColorScheme();

    const [theme, setTheme] = useState<Theme>(startTheme as Theme);

    useEffect(() => {
        // Load saved theme from storage
        const getTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme) {
                    setTheme(savedTheme as Theme);
                }
            } catch (error) {
                console.log('Error loading theme:', error);
            }
        };
        getTheme();
    }, []);

    const toggleTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        AsyncStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
