import React from 'react'
import NavBar from './NavBar/navBar';
import SerchBar from './SerchBar/serchBar';

export default function HeaderParent() {
  return (
    <div>
        <NavBar/>
        <SerchBar/>
    </div>
  )
}
