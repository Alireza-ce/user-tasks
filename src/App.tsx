import { Button, Input, Space } from 'antd';
import './App.css'
import { ThemeProvider} from './providers/ThemeContext.tsx';
import ThemeMode from './Components/ThemeMode';
import {AntProvider} from './providers/AntProvider.tsx';

function App() {

  return (
      <ThemeProvider>
          <ThemeMode />
          <AntProvider>
              <Space>
                  <Input placeholder="Please Input" />
                  <Button type="primary">Submit</Button>
              </Space>
          </AntProvider>
      </ThemeProvider>
  )
}

export default App
