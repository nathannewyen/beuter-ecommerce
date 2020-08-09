import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const Wrapper = styled.div``;

const Sidenav = styled.nav`
  padding: 0 30px;
  margin-top: 50px;
  vertical-align: top;
  display: inline-block;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  width: 300px;
  ${media.tablet`visibility: hidden;`};
`;

const AllItems = styled.ul`
  ${media.tablet`
  margin-top: 50px;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1;
  width: 50%;
  max-width: none;
  height: 100vh;
  overflow: auto;
  transition: all .2s ease-in-out;
  `}
`;

const ListItems = styled(Link)`
  font-size: ${fontSizes.xs};
  font-weight: 500;
  color: black;
  margin-top: 18px;
  text-decoration: none;
  display: block;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: ${fontSizes.xs};
  margin-top: 8px;
  font-weight: 350;
  display: block;
`;

const HamburgerSize = styled.nav``;

const SideNav = (props) => {
  return (
    <Wrapper>
      {props.menuOpen ? (
        <HamburgerSize>
          <AllItems>
            <ListItems to="/new-arrival">NEW ARRIVAL</ListItems>
            <ListItems to="/product-category/top">TOPS</ListItems>
            <Item to="/">T-Shirts</Item>
            <Item to="/">Shirts</Item>
            <Item to="/">Hoodies</Item>
            <Item to="/">Sweaters</Item>
            <Item to="/">Jackets & Coats</Item>
            <ListItems to="/product-category/bottom">BOTTOMS</ListItems>
            <Item to="/"> Pants </Item>
            <Item to="/"> Shorts </Item>
            <Item to="/"> Jeans </Item>
            <ListItems to="#">BAGS & BACKPACKS</ListItems>
            <ListItems to="#">ACCESSORIES</ListItems>
            <ListItems to="#">COLLECTION</ListItems>
            <Item to="/"> SPRING SUMMER 2020 </Item>
            <Item to="/"> BLANKS BY BEUTER </Item>
            <ListItems to="#">CAMPAIGN</ListItems>
            <ListItems to="/about-us">ABOUT US</ListItems>
            <ListItems to="/contact">CONTACT</ListItems>
          </AllItems>
        </HamburgerSize>
      ) : null}
      <Sidenav>
        <AllItems>
          <ListItems to="/new-arrival">NEW ARRIVAL</ListItems>
          <ListItems to="/product-category/top">TOPS</ListItems>
          <Item to="/">T-Shirts</Item>
          <Item to="/">Shirts</Item>
          <Item to="/">Hoodies</Item>
          <Item to="/">Sweaters</Item>
          <Item to="/">Jackets & Coats</Item>
          <ListItems to="/product-category/bottom">BOTTOMS</ListItems>
          <Item to="/"> Pants </Item>
          <Item to="/"> Shorts </Item>
          <Item to="/"> Jeans </Item>
          <ListItems to="#">BAGS & BACKPACKS</ListItems>
          <ListItems to="#">ACCESSORIES</ListItems>
          <ListItems to="#">COLLECTION</ListItems>
          <Item to="/"> SPRING SUMMER 2020 </Item>
          <Item to="/"> BLANKS BY BEUTER </Item>
          <ListItems to="#">CAMPAIGN</ListItems>
          <ListItems to="/about-us">ABOUT US</ListItems>
          <ListItems to="/contact">CONTACT</ListItems>
        </AllItems>
      </Sidenav>
    </Wrapper>
  );
};

export default SideNav;
