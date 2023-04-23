import styled from "styled-components";
import { Text, Title } from "../../../../components/Typography";

const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 0 2rem;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 4px;
  
  margin-top: 0.875rem;
  margin-bottom: 1rem;

  flex-wrap: wrap;

  span {
    text-transform: uppercase;
    font-family: ${({theme}) => theme.textSizes["components-tag"]};
    font-weight: 700;
    font-size: ${({theme }) => theme.textSizes["components-tag"]};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;

    background: ${({theme}) => theme.colors["yellow-light"]};
    color: ${({theme}) => theme.colors["yellow-dark"]};

  }
`;

const CoffeeTitle = styled(Title).attrs({
  size: "s",
  color: "subtitle"
})`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;
const CoffeeDescription = styled(Text).attrs({
  size: "s",
  color: "label"
})`
  margin-bottom: 2rem;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  align-items: flex-end;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 4px;

    strong{
      line-height: 100%;
    }
  }
`;

const AddCartWrapper = styled.div`
  width: 7.5rem;
  height: 38px;
  > button {
    border: none;
    background: none;
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.3rem;

    background: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({theme}) => theme.colors["base-card"]};
    border-radius: 6px;

    transition: 0.4s;

    &:hover{
      background: ${({theme}) => theme.colors.purple};
    }
  }
`;
export {
  CoffeeCardContainer,
  Tags,
  CoffeeTitle,
  CardFooter,
  CoffeeDescription,
  AddCartWrapper
};