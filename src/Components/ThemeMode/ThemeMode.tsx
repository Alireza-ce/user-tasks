import {useContext} from 'react';
import {ThemeContext} from '../../providers/ThemeContext.tsx';
import {Switch} from 'antd';
import styles from './ThemeMode.module.scss'
import moon from './moon.svg';
import sun from './sun.svg';


const ThemeMode = ()=>{
    const { toggleTheme } = useContext(ThemeContext);

    return(
        <Switch checkedChildren={<img className={styles.themeIcon} src={sun} alt="light" />} unCheckedChildren={<img src={moon} className={styles.themeIcon} alt="dark" />} defaultChecked onChange={(checked)=> {
            toggleTheme()
        }} />
    )
}

export default ThemeMode;