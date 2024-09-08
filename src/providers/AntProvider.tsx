import {tokens} from '../constants/themeTokens.ts';
import {ConfigProvider} from 'antd';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext.tsx';

export const AntProvider = ({children}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <ConfigProvider theme={tokens[theme]}>
        {children}
        </ConfigProvider>)
}