import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import "../styles/fontello/css/fontello.css";
import { keyboard } from "../utils/constants.js";
import { WrapperButton, StyledIcon, FlexBox } from "../components/Generic.js";
import { FadeIn, FadeOut } from "../styles/animations.js";

const { margin, blackWidth, blackHeight, whiteHeight, whiteWidth } = keyboard;

const SettingsContainer = styled.div`
  margin: auto;
  border: 1px solid RoyalBlue;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  top: -100vh;
  transform: translateY(${({ show }) => (show ? "100vh" : "-100vh")});
  transition: transform 1s;
`;
const BlurredBackground = styled.div`
  animation: ${({ show }) => css`0.2s ease ${show ? FadeIn : FadeOut}`};
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  @supports (not (backdrop-filter: blur())) {
    background-color: rgba(0, 0, 0, 0.7);
  }
  backdrop-filter: blur(10px);
`;
const ModeButton = styled.button`
  background-color: ${({ currentGameMode, buttonType }) =>
    currentGameMode === buttonType ? "RoyalBlue" : "transparent"};
  border: 2px solid RoyalBlue;
  color: white;
  font-size: 1em;
`;
const KeysButtons = props =>
  [...Array(12).keys()].map(keyIndex => (
    <NoteButtons
      key={keyIndex}
      isBlack={isBlack(keyIndex)}
      note={keyIndex}
      isNoteUsed={props.chromaticScale[keyIndex] ? true : false}
      onClick={() => props.toggleNote(keyIndex)}
    ></NoteButtons>
  ));
function isBlack(keyIndex) {
  const blackKeysIndexes = [1, 3, 6, 8, 10];
  return blackKeysIndexes.includes(keyIndex) ? true : false;
}
const NoteButtons = styled.div`
  box-sizing: border-box;
  height: ${({ isBlack }) => (isBlack ? blackHeight : whiteHeight)};
  width: ${({ isBlack }) => (isBlack ? blackWidth : whiteWidth)};
  margin-left: ${({ isBlack }) => (isBlack ? `calc(${blackWidth}/-2)` : `-${margin}`)};
  margin-right: ${({ isBlack }) => (isBlack ? `calc(${blackWidth}/-2)` : `-${margin}`)};
  z-index: ${({ isBlack }) => (isBlack ? 1 : 0)};
  background-color: ${({ isNoteUsed, isBlack }) =>
    isNoteUsed ? "purple" : isBlack ? "black" : "grey"};
  border: ${() => `${margin} solid black`};
  transition: background-color 0.2s;
`;
const Label = styled.p`
  font-family: Geo;
  font-size: 1.5em;
`;
const Settings = props => {
  const [shouldRender, setRender] = useState(props.show);

  useEffect(() => {
    if (props.show) setRender(true);
  }, [props.show]);
  const onAnimationEnd = () => {
    if (!props.show) setRender(false);
  };
  return !shouldRender ? null : (
    <BlurredBackground onAnimationEnd={onAnimationEnd} show={props.show}>
      <SettingsContainer show={props.show}>
        <FlexBox justify="flex-end">
          <WrapperButton onClick={() => props.toggle("settings")}>
            <StyledIcon className="icon-cancel"></StyledIcon>
          </WrapperButton>
        </FlexBox>
        <Label> Gameplay mode:</Label>
        <FlexBox row>
          <ModeButton
            buttonType="harmonic"
            currentGameMode={props.currentGameMode}
            onClick={() => props.changeGameMode("harmonic")}
          >
            Harmonic
          </ModeButton>
          <ModeButton
            buttonType="iterative"
            currentGameMode={props.currentGameMode}
            onClick={() => props.changeGameMode("iterative")}
          >
            Iterative
          </ModeButton>
        </FlexBox>
        <Label>Notes to use</Label>
        <FlexBox row align="flex-start" style={{ margin: "10px" }}>
          <KeysButtons
            chromaticScale={props.chromaticScale}
            toggleNote={keyIndex => props.toggleNote(keyIndex)}
          />
        </FlexBox>
      </SettingsContainer>
    </BlurredBackground>
  );
};
export default Settings;
