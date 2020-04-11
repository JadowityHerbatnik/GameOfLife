import React, { useContext } from "react";
import styled from "styled-components";
import { DispatchContext } from "@home/Game";
import { ThemeContext } from "@common/Layout";

const StyledLabel = styled.label`
  margin: 3px;
  padding: 6px;
  display: inline-block;
  border: ${({ colors }) => `2px solid ${colors.grey}`};
  color: ${({ colors }) => colors.grey};
  transition: opacity 0.5s;
  font-weight: bold;
`;
const StyledInput = styled.input`
  appearance: none;
  &:checked + ${StyledLabel} {
    color: ${({ colors }) => colors.border};
    border-color: ${({ colors }) => colors.border};
    opacity: 1;
  }
`;
export const RadioInput = ({ name, value, dependency }) => {
  const dispatch = useContext(DispatchContext);
  const colors = useContext(ThemeContext);
  return (
    <>
      <StyledInput
        colors={colors}
        checked={dependency === value}
        type="radio"
        name={name}
        value={value}
        id={value}
        onChange={(e) => dispatch({ type: e.target.value })}
      />
      <StyledLabel colors={colors} htmlFor={value}>
        {value}
      </StyledLabel>
    </>
  );
};
