import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
import { NetworkOptions, TezosProvider } from "./components/TezosContext";

// const options = {
//   appName: "demo",
//   networkType: "ithacanet",
//   rpc: "https://rpc.tzkt.io/ithacanet", //'https://ithacanet.smartpy.io',
// } as NetworkOptions;

const options = {
  appName: "Mechz",
  networkType: "mainnet",
  rpc: "https://mainnet.api.tez.ie",
} as NetworkOptions;

const Providers = ({ children }: { children: any }) => {
  return (
    <TezosProvider options={options}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </TezosProvider>
  );
};

export default Providers;
