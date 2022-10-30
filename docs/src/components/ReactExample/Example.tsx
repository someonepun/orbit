import React from "react";
import styled, { css } from "styled-components";
import { Portal } from "@kiwicom/orbit-components";

import { StyledAnchor } from "../HeadingWithLink";
import Editor from "./components/Editor";
import Frame, { StyledFrame } from "./components/Frame";
import Board from "./components/Board";
import Playground from "./components/Playground";
import ViewportsRuler from "./components/ViewportsRuler";
import { transform } from "./transform";

import { BgType, Props as InitialProps } from ".";

const fullScreenMixin = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  margin-top: 0 !important;
`;

const StyledWrapper = styled.div<{ isFullScreen: boolean }>`
  ${({ theme, isFullScreen }) => css`
    resize: vertical;
    display: grid;
    grid-template-rows: auto 1fr min-content;
    grid-template-columns: 1fr;
    border-radius: ${!isFullScreen && "12px"};
    border: 1px solid ${theme.orbit.paletteCloudNormal};
    overflow: hidden;
    overflow-y: auto;
    background: ${theme.orbit.paletteWhite};
    ${isFullScreen && fullScreenMixin};

    ${StyledAnchor} + & {
      margin-top: ${theme.orbit.spaceMedium} !important;
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceXLarge} !important;
    }
    & + :not(${StyledAnchor}) {
      margin-top: ${theme.orbit.spaceLarge} !important;
    }

    &[style*="height"] ${StyledFrame} {
      height: 100%;
    }
  `};
`;

const StyledWrapperFrame = styled.div<{ width: number | string; responsive: boolean }>`
  ${({ width, responsive }) => css`
    margin: 0 auto;
    width: 100%;
    ${responsive
      ? css`
          max-width: ${typeof width === "number" ? `${width}px` : width};
        `
      : css`
          padding: 0 14px;
        `};
  `}
`;

export interface Knob {
  defaultValue: string;
  name: string;
  type: string;
  options?: string[];
}

export interface ExampleKnob {
  component: string;
  knobs: Knob[];
}

export interface Variant {
  name: string;
  code: string;
}

interface Props extends InitialProps {
  responsive?: boolean;
  code: string;
  example: string;
  exampleName: string;
  exampleKnobs: ExampleKnob[];
  exampleVariants: Variant[];
  onChangeCode: (code: string) => void;
  origin: string;
}

const Example = ({
  responsive = true,
  code,
  origin,
  exampleId,
  exampleKnobs,
  exampleName,
  exampleVariants,
  height,
  background,
  onChangeCode,
  example,
}: Props) => {
  const [isEditorOpened, setOpenEditor] = React.useState(false);
  const [isFullScreen, setFullScreen] = React.useState(false);
  const [isPlaygroundOpened, setPlaygroundOpened] = React.useState(false);
  const [isVariantsOpened, setVariantsOpened] = React.useState(false);
  const [currentVariant, setCurrentVariant] = React.useState<string | null>(
    exampleVariants[0]?.name ?? null,
  );
  const [selectedBackground, setSelectedBackground] = React.useState<BgType>("white");
  const [width, setPreviewWidth] = React.useState<number | string>(0);
  const handleChangeRulerSize = React.useCallback(size => setPreviewWidth(size), []);

  const handleKeyDown = React.useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        if (isFullScreen) setFullScreen(false);
      }
    },
    [isFullScreen],
  );

  React.useEffect(() => {
    if (background) setSelectedBackground(background);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [background, setSelectedBackground, handleKeyDown]);

  const content = (
    <StyledWrapper isFullScreen={isFullScreen}>
      {responsive && <ViewportsRuler onChangeSize={handleChangeRulerSize} />}
      <StyledWrapperFrame width={width} responsive={responsive}>
        <Frame
          origin={origin}
          pageId={exampleId}
          isFullScreen={isFullScreen}
          exampleId={exampleId}
          height={height}
          background={selectedBackground}
        />
      </StyledWrapperFrame>
      <Board
        background={selectedBackground}
        pageId={exampleId}
        isFullScreen={isFullScreen}
        isEditorOpened={isEditorOpened}
        isPlaygroundOpened={isPlaygroundOpened}
        isVariantsOpened={isVariantsOpened}
        onSelectBackground={value => setSelectedBackground(value)}
        onOpenFullScreen={() => setFullScreen(!isFullScreen)}
        onOpenEditor={() => {
          setOpenEditor(prev => !prev);
          setPlaygroundOpened(false);
          setVariantsOpened(false);
        }}
        onOpenPlayground={() => {
          setOpenEditor(false);
          setPlaygroundOpened(prev => !prev);
        }}
        knobs={exampleKnobs.length > 0}
        variants={exampleVariants}
        currentVariant={currentVariant}
        onChangeVariant={variant => {
          setCurrentVariant(variant);
          const variantCode = exampleVariants.find(({ name }) => name === variant)?.code;
          if (variantCode) onChangeCode(variantCode);
        }}
        code={code}
      />
      {isEditorOpened && (
        <Editor onChange={onChangeCode} code={example} isFullScreen={isFullScreen} />
      )}
      {isPlaygroundOpened && exampleKnobs && exampleKnobs.length > 0 && (
        <Playground
          onChange={knob => onChangeCode(transform(exampleName, example, knob))}
          exampleKnobs={exampleKnobs}
        />
      )}
    </StyledWrapper>
  );

  return isFullScreen ? <Portal>{content}</Portal> : content;
};

export default Example;
