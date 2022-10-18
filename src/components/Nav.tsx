import { Link } from "@mui/material";
import { FC } from "react";

interface Props {
  title: string;
  href: string;
}

const Nav: FC<Props> = ({ href, title }) => {
  return <Link href={href} title={title} />;
};

export default Nav;
