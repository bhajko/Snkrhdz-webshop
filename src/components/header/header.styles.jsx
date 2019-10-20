import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;

  @media screen and (max-width: 860px) {
    height: 150px;
    flex-direction: column;
    padding: 20px 0 0 0;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 860px) {
    justify-content: center;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 17px;

  @media screen and (max-width: 860px) {
    justify-content: center;
    padding: 10px 0;
    font-size: unset;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
