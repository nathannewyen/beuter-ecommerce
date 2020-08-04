import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import styled from "styled-components";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Info = styled.p`
  font-size: ${fontSizes.xs};
`;

const LinkShop = styled(Link)`
  font-weight: 500;
  color: black;
  text-decoration: underline;
  display: inline-block;
`;

const LineDivide = styled.hr`
  height: 1px;
  background-color: #b0b0b0;
`;

const PriceInfo = styled.span`
  font-size: ${fontSizes.xs};
  float: right;
`;

const CheckOutButton = styled.button`
  width: 100%;
  padding: 5px;
  background-color: black;
  color: white;
  border: 0;
  font-size: ${fontSizes.s};
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
`;

const ProductInfo = styled.div``;

const Image = styled.img`
  src: url(${(props) => props.src});
  width: 300px;
`;

function Cart({ basketProps }) {
  let productsInCart = [];

  if (basketProps.inCart) {
    productsInCart.push(basketProps.products);
  }
  console.log(productsInCart);

  let total = 0;

  productsInCart.map((cartProduct) => {
    total = total + cartProduct.price;
  });

  console.log(total);

  return (
    <Wrapper>
      <Container>
        <Info>There are 1 items in your Shopping Bag.</Info>
        <Info>
          <LinkShop to="/">Shop more</LinkShop> or{" "}
          <LinkShop to="/">Check out now</LinkShop>
        </Info>

        <ProductInfo></ProductInfo>

        <LineDivide />
        <Info>
          Subtotal <PriceInfo>2,100,000 vnd</PriceInfo>
        </Info>
        <Info>
          Shipping <PriceInfo>25,000 vnd</PriceInfo>
        </Info>
        <Info>
          Additional fee <PriceInfo>15,000 vnd</PriceInfo>
        </Info>
        <Info>
          Total <PriceInfo>15,000,000 vnd</PriceInfo>
        </Info>
        <CheckOutButton type="submit">Proceed to check out</CheckOutButton>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);