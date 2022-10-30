import styled from "styled-components";

const StyledMobileTocWrapper = styled.div`
  margin-top: 0px !important;
  > div {
    display: flex;
    width: 100%;
  }
  + * {
    margin-top: 0px !important;
  }
`;

export default StyledMobileTocWrapper;
