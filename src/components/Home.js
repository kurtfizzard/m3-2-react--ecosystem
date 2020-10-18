import React from "react";
import styled from "styled-components";
import items from "../data";
import ListingGrid from "./ListingGrid";

const Paragraph = styled.p`
  font-size: 20px;
  margin-left: 20px;
`;

const Home = (props) => {
  console.log(props);
  const foodItems = Object.values(items);
  return (
    <>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Paragraph>
      <Paragraph>
        <strong>Browse items:</strong>
      </Paragraph>
      <ListingGrid itemList={foodItems} />
    </>
  );
};

export default Home;

// import listing grid
// pass fooditems into listing grid as props
// in listing grid: map over array of food items
// for every array of food item, render a thing
