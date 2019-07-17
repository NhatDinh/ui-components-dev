import React from "react";
import styled from "styled-components";

export let Pagination = styled.ul`
  font-size: inherit;
  color: green;
`;

export let PageLink = styled.button`
  font-size: inherit;
  color: inherit;
  border: none;
  text-decoration: ${props => (props.active ? "underline" : "none")};
`;
