import React from "react";
import styled from "styled-components";

const WeightHeight = props => {
  const sliderScale = (unit, range) => {
    let items = [];
    for (let i = 100; i < range; i++) {
      if (i % unit === 0) {
        items.push(
          <>
            <div className="bigtick">
              <p onClick={() => console.log({i})}>
                <svg
                  width="3"
                  height="67"
                  viewBox="0 0 3 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.5"
                    y1="6.55671e-08"
                    x2="1.5"
                    y2="67"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>
              </p>
              <NumberP>{i}</NumberP>
            </div>
            <div className="smalltick" data-value={i + 0.5} onClick={() => console.log(i - 0.5)}>
              <svg
                width="2"
                height="43"
                viewBox="0 0 2 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="4.37114e-08"
                  x2="0.999998"
                  y2="43"
                  stroke="#CCC9FF"
                  stroke-width="2"
                />
              </svg>
            </div>
          </>
        );
      } else {
        items.push(
          <div className="smalltick" data-value={i + 0.5}>
            |
          </div>
        );
      }
    }
    return items;
  };
  return (
    <>
      <WeightContainer>
        {sliderScale(1, 500).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
      </WeightContainer>
    </>
  );
};

export default WeightHeight;

const WeightContainer = styled.div`
  max-width: 29rem;
  height: 15rem;
  margin-bottom:6rem;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  overflow-x: auto;
  font-size: 2rem;

  .bigtick {
    display: flex;
    flex-direction: column;
    color: black;
    margin-left: 5rem;
  }

  .smalltick {
    margin-top: -9rem;
    margin-left: 2rem;
  }
`;
const DialStuff = styled.div`
  flex: 0 0 auto;
`;

const NumberP = styled.p`
margin-left: -1rem;
font-family: Catamaran;
font-weight: bold;
color: #FFFFFF;
font-size: 1.6rem;
`
