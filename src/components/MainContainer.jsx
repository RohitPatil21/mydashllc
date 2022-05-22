import React from 'react';
import LeftSubContainer from './LeftSubContainer';
import RightSubContainer from './RightSubContainer';
import '../Scss_Styles/Main.scss';



const MainContainer = () => {
  return (
    <div className="main-container">
        <LeftSubContainer />
        <RightSubContainer />
    </div>
  )
}

export default MainContainer