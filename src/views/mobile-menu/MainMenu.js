// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MainMenu = () => {
    return (
        <>
        <MenuWrapper>

        </MenuWrapper>
        </>
    );
};

// STYLED COMPONENTS
const MenuWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
`

// EXPORT
export default MainMenu;