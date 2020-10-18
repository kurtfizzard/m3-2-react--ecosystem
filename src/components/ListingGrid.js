import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IndividualItem = styled(NavLink)`
  color: black;
  display: flex;
  flex-direction: column;
  margin: 30px;
  text-decoration: none;
  width: 25%;
`;

const ItemImage = styled.img`
  height: 200px;
  width: 200px;
`;

const ItemName = styled.p`
  font-size: 20px;
  font-weight: 800;
  line-height: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ItemLatinName = styled.p`
  color: grey;
  font-style: italic;
  font-weight: bold;
  line-height: 10px;
  margin-top: 0px;
`;

const ListingGrid = ({ itemList }) => {
  return (
    <ItemContainer>
      {/* render each of the items in the item list */}
      {itemList.map((item) => {
        return (
          <IndividualItem to={`/items/${item.id}`}>
            <ItemImage src={item.imageSrc} />
            <ItemName>{item.name}</ItemName>
            <ItemLatinName>{item.latinName}</ItemLatinName>
          </IndividualItem>
        );
      })}
    </ItemContainer>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
