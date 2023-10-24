import React from 'react';
import './MenuColumnOption.css';

function MenuColumnOption({active, text, Icon}) {
  return (
    <div className={`menuColumnOption ${active && 'menuColumnOption--active'}`}>
      <Icon/>
      <div> {text}</div>
    </div>
  )
}

export default MenuColumnOption