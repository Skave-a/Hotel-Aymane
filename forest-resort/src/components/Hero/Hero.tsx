import { IHero } from "../../utils/types";

export default function Hero(props: IHero) {
  const { children, hero } = props;
  return <header className={hero}>{children}</header>;
}
