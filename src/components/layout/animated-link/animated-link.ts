import { Link, styled } from '@mui/material';

type AnimatedLinkProps = {
  isontop: number;
};

export const AnimatedLink = styled(Link)<AnimatedLinkProps>`
  padding: 12px 15px;
  text-decoration: none !important;
  position: relative;
  color: ${({ theme, isontop }) =>
    isontop ? '#FFFFFF' : theme.palette.secondary.main};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme, isontop }) =>
      isontop ? '#FFFFFF' : theme.palette.secondary.main};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &.active::before,
  :hover::before {
    visibility: visible;
    width: 100%;
  }
`;
