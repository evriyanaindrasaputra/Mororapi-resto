import styled from "styled-components";

export const MenuContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;

export const HeadingMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #7e7c73;
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  height: 40px;

  @media screen and (max-width: 992px) {
    border-radius: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    justify-content: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: full;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Card = styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  width: 22%;
  flex-direction: column;
  background: #f2f2f2;
  box-shadow: 5px 5px 2px #e6e6e6;
  border-radius: 5px;
  @media screen and (max-width: 992px) {
    width: 85%;
    margin: 10px;
  }
`;
export const CardImage = styled.img`
  margin-top: 3px;
  margin-bottom: 3px;
  width: 100%;
  border-radius: 5px;
`;
export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-top: 3px;
  margin-bottom: 3px;
`;
export const CardPrice = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  text-align: center;
  margin-top: 3px;
  margin-bottom: 3px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
