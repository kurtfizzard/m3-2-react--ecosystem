import React from "react";
import styled from "styled-components";
import { sellers, items } from "../data";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = styled.div`
  display: flex;
  margin: 25px;
  padding: 0;
  width: 630px;
`;

const ItemDetailsImage = styled.img`
  border-radius: 20px;
  height: 300px;
  margin-right: 30px;
  width: 300px;
`;

const ItemDetailName = styled.p`
  font-size: 30px;
  font-weight: 800;
  line-height: 10px;
  margin-bottom: 0px;
`;

const ItemDetailLatinName = styled.p`
  color: grey;
  font-style: italic;
  font-weight: bold;
  line-height: 10px;
  font-size: 15px;
`;

const ItemDetailDescription = styled.p`
  font-size: 15px;
`;

const ItemDetailProductof = styled.p`
  font-style: italic;
`;

const ItemDetailButton = styled.button`
  background: blue;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  height: 50px;
  width: 250px;
`;

const OutOfStockAlert = styled.p`
  border: 2px solid red;
  font-size: 20px;
  font-weight: bold;
  height: 35px;
  text-align: center;
  padding-top: 15px;
  width: 250px;
`;

const SellerDiv = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SellersImage = styled.img`
  border-radius: 50px;
  margin-right: 5px;
  width: 50px;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  // if the item is in stock, render the buy button
  if (item.quantity > 0) {
    return (
      <ItemDetailsContainer>
        <ItemDetailsImage src={item.imageSrc} />
        <div>
          <ItemDetailName>{item.name}</ItemDetailName>
          <ItemDetailLatinName>{item.latinName}</ItemDetailLatinName>
          <ItemDetailDescription>{item.description}</ItemDetailDescription>
          <ItemDetailProductof>
            Product of <bold>{item.countryOfOrigin}</bold>
          </ItemDetailProductof>
          <ItemDetailButton>${item.price} - Buy Now</ItemDetailButton>
          <SellerDiv>
            <SellersImage src={sellers[item.sellerId].avatarSrc} />
            <p>
              Sold By: <strong>{sellers[item.sellerId].storeName}</strong>
            </p>
          </SellerDiv>
        </div>
      </ItemDetailsContainer>
    );
    // if the item is not in stock, render the sold out notice
  } else {
    return (
      <ItemDetailsContainer>
        <ItemDetailsImage src={item.imageSrc} />
        <div>
          <ItemDetailName>{item.name}</ItemDetailName>
          <ItemDetailLatinName>{item.latinName}</ItemDetailLatinName>
          <ItemDetailDescription>{item.description}</ItemDetailDescription>
          <p>
            Product of <bold>{item.countryOfOrigin}</bold>
          </p>
          <OutOfStockAlert>OUT OF STOCK</OutOfStockAlert>
          <SellerDiv>
            <SellersImage src={sellers[item.sellerId].avatarSrc} />
            <p>
              Sold By: <strong>{sellers[item.sellerId].storeName}</strong>
            </p>
          </SellerDiv>
        </div>
      </ItemDetailsContainer>
    );
  }
};

export default ItemDetails;
