import * as React from "react";
import {
  PlasmicNavbar,
  DefaultNavbarProps
} from "./plasmic/mechz/PlasmicNavbar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useWallet from "../hooks/useWallet";

export interface NavbarProps extends DefaultNavbarProps {}

function Navbar_(props: NavbarProps, ref: HTMLElementRefOf<"header">) {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  const handleSyncButton = () => {
    if (walletAddress) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <PlasmicNavbar
      root={{ ref }}
      {...props}
      synced={!!walletAddress}
      syncWallet={{
        onClick: () => handleSyncButton(),
      }}
    />
  );
}

const Navbar = React.forwardRef(Navbar_);
export default Navbar;
