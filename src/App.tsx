import { Button, Input, Space } from 'antd';
import './App.css'
import { ThemeProvider} from './providers/ThemeContext.tsx';
import ThemeToggle from './components/ThemeToggle';
import {AntProvider} from './providers/AntProvider.tsx';
import UserTasks from './components/UserTaks';

function App() {
  return (
      <ThemeProvider>
          <AntProvider>
              <ThemeToggle />
              <UserTasks />
          </AntProvider>
      </ThemeProvider>
  )
}

export default App
