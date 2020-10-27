import { CardHeader, Input } from "reactstrap";
import styled from "styled-components";

export const CardHeaderStyled = styled(CardHeader)`
  background-color: transparent;
  border: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const InputStyled = styled(Input)`
  width: 250px;
`;

export const Tr = styled.tr`
  cursor: pointer;
`;