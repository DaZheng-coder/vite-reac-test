
import {Button}  from 'antd'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  useEffect(() => {
    axios.get('/mock/api/getUsers').then((res)=>{
      console.log('*** res', res);
    })
  }, [])

  return (
    <div>
      {/* *** test */}
      <Button >1</Button>
    </div>
  )
}

export default App
