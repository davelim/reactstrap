import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import {Button} from 'reactstrap';
import Grid from './components/Grid';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* https://www.dhiwise.com/post/reactstrap-essentials-building-responsive-uis */}
      {/* <Button color="succss">Click me!</Button> */}
      <Grid />
    </div>

  )
}

export default App
