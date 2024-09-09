import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.tsx';
import styles from './AppLayout.module.scss'

const AppLayout = ({children}) => {
    const {theme} = useContext(ThemeContext)

    return (<div className={`${styles.appLayout} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>{children}</div>)
}

export default AppLayout