import React from 'react'
import Button from '../Button'
import './Home.scss'
import useIsDark from '../../hooks/useIsDark';

const Home = () => {
    const [isDark, setIsDark] = useIsDark();

  return (
    <main className='home'>
    <div className="home__theme-btn">
        {/* <button className="theme-button__button">Change Theme</button> */}
        <Button state={isDark} setState={setIsDark}></Button> 
    </div> 
    </main>
  )
}

export default Home
