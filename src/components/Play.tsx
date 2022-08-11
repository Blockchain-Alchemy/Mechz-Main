import * as React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {
  PlasmicPlay,
  DefaultPlayProps,
} from "./plasmic/mechz/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useAssets from "../hooks/useAssets";
import useWallet from "../hooks/useWallet";
import { useInterval } from "../hooks/useInterval";

export interface PlayProps extends DefaultPlayProps {}

const unityContext = new UnityContext({
  loaderUrl: "Build/1.loader.js",
  dataUrl: "Build/1.data",
  frameworkUrl: "Build/1.framework.js",
  codeUrl: "Build/1.wasm",
});

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {
  const [holding, setHolding] = React.useState(false);
  const { walletAddress } = useWallet();
  const { getAssets } = useAssets();

  useInterval(() => {
    if (walletAddress && !holding) {
      getAssets(1)
        .then((token) => {
          if (token) {
            console.log('token', token)
            setHolding(true);
            unityContext.send("AccessController", "InsertToken");
          }
        }).catch(console.error);
    }
  }, 1000)

  const ticketImageView = () => {
    return (
      <div style={{ cursor: "pointer" }}>
        {holding ? (
          <img
            src="images/fuel_cell_active.png"
            alt="fuel_cell_active"
            onClick={() =>
              window.open("https://objkt.com/asset/KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy/1", "_blank")
            }
          />
        ) : (
          <img
            src="images/need.png"
            alt="Need Ticket"
            onClick={() =>
              window.open("https://objkt.com/asset/KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy/1", "_blank")
            }
          />
        )}
      </div>
    );
  };

  return (
    <PlasmicPlay
      root={{ ref }}
      {...props}
      ticketImage={ticketImageView()}
      unity={
        <Unity
          unityContext={unityContext}
          style={{
            height: "100%",
            width: 913,
            border: "0",
            background: "grey",
          }}
        />
      }
    />
  );
}

const Play = React.forwardRef(Play_);
export default Play;
