import {ThemeProvider} from './contexts/ThemeContext.tsx';
import ThemeToggle from './components/ThemeToggle';
import {AntProvider} from './providers/AntProvider.tsx';
import UserTasks from './components/UserTaks';
import {TaskModalProvider} from './contexts/TaskModalContext.tsx';
import styles from './App.module.scss'
import AppLayout from './components/AppLayout';

function App() {
  return (
      <div className={styles.app}>
          <ThemeProvider>
              <AntProvider>
                  <AppLayout>
                      <ThemeToggle/>
                      <TaskModalProvider>
                          <UserTasks/>
                      </TaskModalProvider>
                  </AppLayout>
              </AntProvider>
          </ThemeProvider>
      </div>
  )
}

export default App
