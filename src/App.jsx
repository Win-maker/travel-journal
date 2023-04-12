import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import data from './components/Data'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <main className='main'>
      <Header />
      {data.map(item => <Content key={item.id} item={item} />)}
    </main>
  
  )
}

export default App
