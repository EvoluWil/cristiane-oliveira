import { AppBar, Button } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const WaveStyled = styled("div")`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: calc(100vh - 60px);
  }
`;

export const CentralStyled = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: auto 0;
  height: 250px;
  width: 30vw;
  min-width: 300px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 15px;
  opacity: 0.7;
`;

export const LogoStyled = styled("img")`
  width: 200px;
  margin-bottom: 30px;
  margin-right: 20px;
`;

export const ButtonStyled = styled(Button)`
  height: 150px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.light};
  margin: 10px 0;
  width: 90%;
  opacity: 1;
`;

export const IconContainer = styled("a")`
  width: 90%;
  display: grid;
  grid-template-columns: 30px 1fr;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.light};
`;
