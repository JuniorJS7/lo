import React from 'react';
import NavBar from '../NavBar/NavBar';
import Selectors from '../Selectors/Selectors';


function ParentPage(props) {
    return (
        <div>
            <NavBar />
            <Selectors />
        </div>
    );
}

export default ParentPage;