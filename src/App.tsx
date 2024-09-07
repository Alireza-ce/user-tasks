import { Button, Input, Space } from 'antd';
import './App.css'
import { ThemeProvider} from './providers/ThemeContext.tsx';
import ThemeToggle from './components/ThemeToggle';
import {AntProvider} from './providers/AntProvider.tsx';
import {useFetch} from './hooks/useFetch.ts';
import {getUserTasksUrl} from './constants/urls.ts';

function App() {
const {da} = useFetch(getUserTasksUrl)
  return (
      <ThemeProvider>
          <AntProvider>
              <ThemeToggle />
              <Space>
                  <Input placeholder="Please Input" />
                  <Button type="primary">Submit</Button>
              </Space>
          </AntProvider>
      </ThemeProvider>
  )
}

export default App
