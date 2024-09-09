import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext.tsx';
import {Switch} from 'antd';
import styles from './ThemeMode.module.scss'
import moon from './moon.svg';
import sun from './sun.svg';


const ThemeToggle = ()=>{
    const { toggleTheme } = useContext(ThemeContext);

    return(
        <div className={styles.themeToggle}>
            <Switch  style={{boxShadow: '0 0 4px #fff' }} checkedChildren={<img className={styles.themeIcon} src={sun} alt="light"  />} unCheckedChildren={<img src={moon} className={styles.themeIcon} alt="dark" />} defaultChecked onChange={(checked)=> {
                toggleTheme()
            }} />
        </div>
    )
}

export default ThemeToggle;