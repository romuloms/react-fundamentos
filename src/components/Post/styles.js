import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  /* opacity: ${(props) => props.removed ? 0.3 : 1};
  color: ${(props) => props.removed ? '#f00' : '#fff'}; */

  ${({ removed }) => css`
    opacity: ${removed ? 0.3 : 1};
    color: ${removed ? '#f00' : '#fff'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Likes = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;

// CSS-in-JS