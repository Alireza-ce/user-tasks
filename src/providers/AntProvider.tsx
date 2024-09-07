import {tokens} from '../constants/themeTokens.ts';
import { ConfigProvider} from 'antd';
import {useContext, useEffect} from 'react';
import {ThemeContext} from './ThemeContext.tsx';

export const AntProvider = ({children})=>{
    const {theme,toggleTheme } = useContext(ThemeContext);
    useEffect(()=>{
        console.log('tehe,s::',theme)
    },[theme])

    return(<ConfigProvider
        theme={tokens[theme]}
    >
        {children}
        </ConfigProvider>)
}