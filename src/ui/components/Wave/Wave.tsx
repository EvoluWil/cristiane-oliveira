import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import {
  WaveStyled,
  CentralStyled,
  LogoStyled,
  ButtonStyled,
  IconContainer,
} from "./Wave.style";
import { Typography } from "@material-ui/core";

const Wave: React.FC = () => {
  return (
    <WaveStyled>
      <LogoStyled src={"logo.png"} alt={"Cristiane-Oliveira"} />
      <CentralStyled>
        <ButtonStyled>
          <IconContainer
            href="http://trinks.com/CRISTIANEOLIVEIRA"
            rel="no-referrer"
            target="_blank"
          >
            <EventAvailableIcon fontSize="small" />
            <Typography>Agendar horario</Typography>
          </IconContainer>
        </ButtonStyled>
        <ButtonStyled>
          <IconContainer
            href="https://api.whatsapp.com/send?phone=5511939275814&text=Ol%C3%A1%20Cris%2C%20gostaria%20de%20saber%20mais%20sobre%20sua%20clinica"
            rel="no-referrer"
            target="_blank"
          >
            <WhatsAppIcon fontSize="small" />
            <Typography>Whatsapp</Typography>
          </IconContainer>
        </ButtonStyled>
        <ButtonStyled>
          <IconContainer href="tel:1146124758">
            <PhoneIcon fontSize="small" />
            <Typography>Telefonar</Typography>
          </IconContainer>
        </ButtonStyled>
      </CentralStyled>
    </WaveStyled>
  );
};
export default Wave;
