// @flow
import * as React from "react";
import styled from "styled-components";

import transition from "../transition";
import defaultTheme from "../../defaultTheme";

import type { Props, State } from "./index";

const getMaxHeight = ({ maxHeight }) => {
  if (maxHeight === 0) return `0px`;
  if (!maxHeight) return undefined;
  return `${maxHeight}px`;
};

export const StyledSlide = styled.div`
  position: relative;
  width: 100%;
  transition: ${({ transitionDuration }) => transition(["max-height"], transitionDuration, "linear")};
  max-height: ${getMaxHeight};
  overflow: ${({ transitionFinished }) => !transitionFinished && "hidden"};
  visibility: ${({ visible }) => !visible && "hidden"};
`;

StyledSlide.defaultProps = {
  theme: defaultTheme,
  transitionDuration: "fast",
};

class Slide extends React.Component<Props, State> {
  state = {
    maxHeight: typeof this.props.maxHeight !== "undefined" ? this.props.maxHeight : 0,
    transitionFinished: false,
    visible: false,
  };

  expandTimeout = null;

  collapseTimeout = null;

  transitionFinishedTimeout = null;

  visibleTimeout = null;

  componentDidMount() {
    if (this.props.expanded) {
      this.setState({ transitionFinished: true, visible: true });
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: null | true) {
    if (snapshot) {
      if (this.props.expanded) {
        this.setMaxHeight();
        if (typeof setTimeout === "function") {
          if (this.visibleTimeout && typeof clearTimeout === "function") {
            clearTimeout(this.visibleTimeout);
            this.visibleTimeout = null;
          }
          this.setVisible(true)();
          this.expandTimeout = setTimeout(this.expandCallback, 150);
        }
      } else {
        if (this.state.maxHeight !== this.props.maxHeight) {
          this.setMaxHeight();
        }
        if (typeof setTimeout === "function") {
          if (this.expandTimeout && typeof clearTimeout === "function") {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = null;
          }
          this.collapseTimeout = setTimeout(this.collapseCallback, 1);
        }
      }
    }
  }

  componentWillUnmount() {
    if (typeof clearTimeout === "function") {
      if (this.expandTimeout) {
        clearTimeout(this.expandTimeout);
      }
      if (this.collapseTimeout) {
        clearTimeout(this.collapseTimeout);
      }
      if (this.transitionFinishedTimeout) {
        clearTimeout(this.transitionFinishedTimeout);
      }
      if (this.visibleTimeout) {
        clearTimeout(this.visibleTimeout);
      }
    }
  }

  getSnapshotBeforeUpdate(prevProps: Props) {
    if (this.props.expanded === prevProps.expanded) return null;
    return true;
  }

  setVisible = (visible: boolean) => () => {
    this.setState({ visible });
  };

  setMaxHeight = () => {
    const { maxHeight } = this.props;
    this.setState({
      maxHeight,
    });
  };

  expandCallback = () => {
    this.setState({
      maxHeight: null,
    });
    this.transitionFinishedTimeout = setTimeout(this.transitionFinishedCallback(true), 100);
  };

  collapseCallback = () => {
    this.setState({
      maxHeight: 0,
      transitionFinished: false,
    });
    this.visibleTimeout = setTimeout(this.setVisible(false), 150);

    if (this.transitionFinishedTimeout && typeof clearTimeout === "function") {
      clearTimeout(this.transitionFinishedTimeout);
      this.transitionFinishedTimeout = null;
    }
  };

  transitionFinishedCallback = (transitionFinished: boolean) => () => {
    this.setState({ transitionFinished });
  };

  render() {
    const { children, expanded = false, id, ariaLabelledBy, transitionDuration } = this.props;
    const { transitionFinished, maxHeight, visible } = this.state;
    return (
      <StyledSlide
        maxHeight={maxHeight}
        expanded={expanded}
        transitionFinished={transitionFinished}
        transitionDuration={transitionDuration}
        aria-hidden={!expanded}
        id={id}
        aria-labelledby={ariaLabelledBy}
        visible={visible}
        onClick={ev => {
          ev.stopPropagation();
        }}
      >
        {children}
      </StyledSlide>
    );
  }
}

export default Slide;
