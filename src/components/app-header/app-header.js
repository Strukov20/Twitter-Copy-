import React from 'react';
import '../app-header/app-header.css'
import styled from 'styled-components';



const AppHeader = ({liked, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Bohdan Strukov</h1>
    <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;