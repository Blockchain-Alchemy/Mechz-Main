import * as React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {
  PlasmicPlay,
  DefaultPlayProps,
} from "./plasmic/mechz/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useAssets from "../hooks/useAssets";
import useWallet from "../hooks/useWallet";

export interface PlayProps extends DefaultPlayProps {}

const unityContext = new UnityContext({
  loaderUrl: "Build/1.loader.js",
  dataUrl: "Build/1.data.unityweb",
  frameworkUrl: "Build/1.framework.js.unityweb",
  codeUrl: "Build/1.wasm.unityweb",
});

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {
  const [holding, setHolding] = React.useState(false);
  const { walletAddress } = useWallet();
  const { getAssets } = useAssets();

  React.useEffect(() => {
    if (walletAddress) {
      // getAssets().then((result) => {
      //   if (result["asset-holding"]["amount"] > 0) {
      //     setHolding(true);
      //     unityContext.send("AccessController", "InsertToken");
      //   }
      // });
    }
  }, [walletAddress, getAssets]);

  const ticketImageView = () => {
    return (
      <div style={{ cursor: "pointer" }}>
        {holding ? (
          <img
            src="images/ticket_to_ride.png"
            alt="ticket_to_ride"
            onClick={() =>
              window.open("https://ab2.gallery/asset/794691991", "_blank")
            }
          />
        ) : (
          <img
            src="images/need.png"
            alt="Need Ticket"
            onClick={() =>
              window.open("https://ab2.gallery/asset/794691991", "_blank")
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
