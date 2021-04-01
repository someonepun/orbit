import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import { useMediaQuery, mediaQueries as mq } from "@kiwicom/orbit-components";

import Logo from "../images/orbit.svg";
import LogoGlyph from "../images/orbit-glyph.svg";
import Input from "./SearchInput";
import Bookmarks from "./Bookmarks";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";

const StyledWrapper = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  ${mq.tablet(css`
    padding: 1rem 0;
  `)}
  ${mq.desktop(css`
    padding: 1.5rem 0;
  `)}
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
`;

const StyledInner = styled.div`
  flex: 1;
  max-width: ${MAX_CONTENT_WIDTH};
  padding: 0 ${CONTENT_PADDING};
  box-sizing: content-box;
  height: 52px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-gap: 20px;
  align-items: center;
`;

interface Props {
  location: WindowLocation;
}

const Navbar = ({ location }: Props) => {
  const { isMediumMobile, isTablet } = useMediaQuery();
  const isHome = location && location.pathname === "/";

  return (
    <StyledWrapper>
      <StyledInner>
        <Link to="/">
          {isMediumMobile ? <Logo width={175} height={40} /> : <LogoGlyph width={40} height={40} />}
        </Link>
        {isHome ? <div /> : <Input />}
        {!isTablet && <Bookmarks />}
      </StyledInner>
      {isTablet && <Bookmarks />}
    </StyledWrapper>
  );
};

export default Navbar;
