import { AppBar } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
      justify-content: center;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      height: 60px;
      justify-content: center;
    }
  }
`;

export const HeaderLogoStyled = styled("img")`
  height: 40px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 70px;
  }
`;
