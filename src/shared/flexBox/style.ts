import styled from "styled-components";
import { screenSizes } from "styles/theme";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: row wrap;
  gap: 5%;
  justify-content: start;
  width: 100%;
  flex: 1 1 0px;
`;
export const PageContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  transition: all 300ms ease-in-out;
  align-items: center;
  @media (max-width: ${screenSizes.M}px) {
    padding-bottom: 0;
  }
  min-height: calc(100vh - 310px);
  background-blend-mode: normal, normal, normal, overlay, overlay, normal;
`;
