import './App.css'
import {ThemeProvider} from './contexts/ThemeContext.tsx';
import ThemeToggle from './components/ThemeToggle';
import {AntProvider} from './providers/AntProvider.tsx';
import UserTasks from './components/UserTaks';
import {TaskModalProvider} from './contexts/TaskModalContext.tsx';

function App() {
  return (
      <ThemeProvider>
          <AntProvider>
              <ThemeToggle />
              <TaskModalProvider>
                  <UserTasks/>
              </TaskModalProvider>
          </AntProvider>
      </ThemeProvider>
  )
}

export default App
