import styled from "styled-components";
import { defaultImg } from "../../utils/constants";

interface IImg {
  img: string;
}

export const StyledHero = styled.header<IImg>`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
