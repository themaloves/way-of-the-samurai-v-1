import React from 'react';
import preloaderSVG from '../../../assets/img/Spinner-1s-200px.svg';

const Preloader = (props) => {
  return (
    <div className="">
      <img src={preloaderSVG}/>
    </div>
  )
}

export default Preloader;