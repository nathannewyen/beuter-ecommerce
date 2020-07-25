import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import axios from "axios";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const ProductWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  position: relative;
  margin-left: 350px;
  @media ${media.desktopL} {
    margin-left: 500px;
  }
  @media ${media.desktop} {
    margin-left: 400px;
  }
  @media ${media.laptopL} {
    margin-left: 200px;
  }
`;

const ProductContainer = styled.div`
  display: inline-block;
`;

const ProductImage = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  src: url(${(props) => props.src});
  @media ${media.desktopL} {
    width: 800px;
  }
  @media ${media.laptopL} {
    width: 600px;
  }
`;

const SideNav = styled.div`
  display: inline-block;
  position: fixed;
  height: 100%;
  text-align: left;
  margin-left: 50px;
`;

const ProductTitle = styled.div`
  font-size: ${fontSizes.md};
  font-weight: 500;
`;

const ProductDescription = styled.p`
  font-size: ${fontSizes.xs};
`;

const SizeAndFit = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const Info = styled.li`
  font-size: ${fontSizes.xs};
`;

const ItemPrice = styled.p`
  font-size: ${fontSizes.md};
  font-weight: 500;
`;

const BuyButton = styled.button`
  background-color: black;
  font-size: ${fontSizes.md};
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  padding: 8px 0;
  margin: 30px 0 50px;
  border: 0;
  width: 100%;
`;

const SideNavFooter = styled.div``;

const ItemInfo = styled(Link)`
  font-size: ${fontSizes.sm};
  font-weight: 500;
  color: black;
  display: inline-block;
  margin: 0px 30px 0 0;
`;

const Product = (props) => {
  const nf = new Intl.NumberFormat();

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description1, setDescription1] = useState(props.description1);
  const [description2, setDescription2] = useState(props.description2);
  const [description3, setDescription3] = useState(props.description3);
  const [description4, setDescription4] = useState(props.description4);
  const [img_url1, setImageUrl1] = useState(props.img_url1);
  const [img_url2, setImageUrl2] = useState(props.img_url2);
  const [img_url3, setImageUrl3] = useState(props.img_url3);
  const [img_url4, setImageUrl4] = useState(props.img_url4);
  const [size, setSize] = useState(props.size);
  const [size2, setSize2] = useState(props.size2);
  const [fit, setFit] = useState(props.fit);
  const [fit2, setFit2] = useState(props.fit2);

  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getOneProduct();
  });

  const getOneProduct = () => {
    axios
      .get(`http://localhost:8000/api/products/${props.title_url}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription1(res.data.description1);
        setDescription2(res.data.description2);
        setDescription3(res.data.description3);
        setImageUrl1(res.data.img_url1);
        setImageUrl2(res.data.img_url2);
        setImageUrl3(res.data.img_url3);
        setImageUrl4(res.data.img_url4);
        setSize(res.data.size);
        setSize2(res.data.size2);
        setFit(res.data.fit);
        setFit2(res.data.fit2);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductImage>
          <Image src={img_url1} />
        </ProductImage>
        <ProductImage>
          <Image src={img_url2} />
        </ProductImage>
        <ProductImage>
          <Image src={img_url3} />
        </ProductImage>
        <ProductImage>
          <Image src={img_url4} />
        </ProductImage>
      </ProductContainer>
      <SideNav>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description1}</ProductDescription>
        <ProductDescription>{description2}</ProductDescription>
        <ProductDescription>{description3}</ProductDescription>
        <ProductDescription>{description4}</ProductDescription>
        <SizeAndFit>Size & Fit</SizeAndFit>
        {size ? <Info>• {size}</Info> : <span></span>}
        {fit ? <Info>• {fit}</Info> : <span></span>}
        {size2 ? <Info>• {size2}</Info> : <span></span>}
        {fit2 ? <Info>• {fit2}</Info> : <span></span>}
        <ItemPrice>{nf.format(price)} vnd</ItemPrice>
        <BuyButton>Pre-order</BuyButton>
        <SideNavFooter>
          <ItemInfo to="/#">Size Chart</ItemInfo>
          <ItemInfo to="/shipping-return">Shipping and Return</ItemInfo>
        </SideNavFooter>
      </SideNav>
    </ProductWrapper>
  );
};

export default Product;