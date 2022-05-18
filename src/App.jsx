import { useState } from 'react'
import logo from './logo.svg'
import styled from "./App.module.css"
import { Card } from './components/card'
import {AiOutlineAmazon ,AiOutlineArrowRight ,AiFillApple} from "react-icons/ai"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Card
    date="28/10/2020"
    heading="Case Study"
    subheading="Amazone Gift"
    type="Pay"
    devices="Desktop - Mobile"
    logo={<AiOutlineAmazon size="90px"  className={styled.logo}></AiOutlineAmazon>}
    arrow={<AiOutlineArrowRight size="30px"></AiOutlineArrowRight>}
    ></Card>
    <Card
    date="17 Sep 2020"
    heading="Case Study"
    subheading="Apple Gift"
    type="Payment"
    devices="MacOS - Mobile"
    logo={<AiFillApple size="90px"  className={styled.logo}></AiFillApple>}
    arrow={<AiOutlineArrowRight size="30px"></AiOutlineArrowRight>}
    ></Card>
    </div>
  )
}

export default App
