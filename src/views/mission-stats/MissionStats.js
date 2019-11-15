// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionStats = () => {
    return (
        <>
        <StatsView>
            <StatsWrapper>
                <StatsContainer>
                    <MissionHeading>
                        <h1>Stay Hydrated</h1>
                    </MissionHeading>

                    <MissionSubHeading>

                    </MissionSubHeading>
                </StatsContainer>
            </StatsWrapper>
        </StatsView>
        </>
    );
};

// STYLED COMPONENTS
const StatsView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const StatsWrapper = styled.div`
    width: 100%;
`

const StatsContainer = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

`

const MissionHeading = styled.div`

`

const MissionSubHeading = styled.div`

`

// EXPORT
export default MissionStats;