// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: v6GVasCmjcoJpKZhA57bGQ
// Component: -P5pSOuII0lcb0
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: NxycUbS85IVXb2/component

import { useScreenVariants as useScreenVariantshQ7Ab2TDfxBfTk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hQ7AB2tDFXBfTk/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mechz.module.css"; // plasmic-import: v6GVasCmjcoJpKZhA57bGQ/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: -P5pSOuII0lcb0/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: kmDjyMAgVxdWnp/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 3m4uVCB_20TDjx/icon
import mechz1186X80Png48Ym0AsJt from "./images/mechz1186X80Png.png"; // plasmic-import: 48YM0ASJt/picture

export type PlasmicNavbar__VariantMembers = {
  synced: "synced";
};

export type PlasmicNavbar__VariantsArgs = {
  synced?: SingleBooleanChoiceArg<"synced">;
};

type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>("synced");

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"header">;
  logoWrap?: p.Flex<"div">;
  logo?: p.Flex<typeof p.PlasmicImg>;
  navmenu?: p.Flex<"div">;
  link3?: p.Flex<"a">;
  link2?: p.Flex<"a">;
  link4?: p.Flex<"a">;
  navBarButtonBlock?: p.Flex<"div">;
  syncWallet?: p.Flex<typeof Button>;
  btnText?: p.Flex<"div">;
};

export interface DefaultNavbarProps {
  synced?: SingleBooleanChoiceArg<"synced">;
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshQ7Ab2TDfxBfTk()
  });

  return (
    <header
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"logoWrap"}
        data-plasmic-override={overrides.logoWrap}
        className={classNames(projectcss.all, sty.logoWrap)}
      >
        <p.PlasmicImg
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          alt={""}
          className={classNames(sty.logo)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"220px" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: mechz1186X80Png48Ym0AsJt,
            fullWidth: 186,
            fullHeight: 80,
            aspectRatio: undefined
          }}
        />
      </div>

      {true ? (
        <div
          data-plasmic-name={"navmenu"}
          data-plasmic-override={overrides.navmenu}
          className={classNames(projectcss.all, sty.navmenu)}
        >
          <a
            data-plasmic-name={"link3"}
            data-plasmic-override={overrides.link3}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link3
            )}
            href={"/" as const}
          >
            {"Home"}
          </a>

          <a
            data-plasmic-name={"link2"}
            data-plasmic-override={overrides.link2}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link2
            )}
            href={"#" as const}
          >
            {"Story"}
          </a>

          <a
            data-plasmic-name={"link4"}
            data-plasmic-override={overrides.link4}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link4
            )}
            href={
              "https://objkt.com/asset/KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy/0" as const
            }
          >
            {"Store"}
          </a>
        </div>
      ) : null}

      <div
        data-plasmic-name={"navBarButtonBlock"}
        data-plasmic-override={overrides.navBarButtonBlock}
        className={classNames(projectcss.all, sty.navBarButtonBlock)}
      >
        <Button
          data-plasmic-name={"syncWallet"}
          data-plasmic-override={overrides.syncWallet}
          className={classNames("__wab_instance", sty.syncWallet, {
            [sty.syncWalletsynced]: hasVariant(variants, "synced", "synced")
          })}
          color={"blue" as const}
          shape={"rounded" as const}
        >
          <div
            data-plasmic-name={"btnText"}
            data-plasmic-override={overrides.btnText}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.btnText,
              { [sty.btnTextsynced]: hasVariant(variants, "synced", "synced") }
            )}
          >
            {hasVariant(variants, "synced", "synced")
              ? "UnSync "
              : "Sync Wallet"}
          </div>
        </Button>
      </div>
    </header>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "logoWrap",
    "logo",
    "navmenu",
    "link3",
    "link2",
    "link4",
    "navBarButtonBlock",
    "syncWallet",
    "btnText"
  ],
  logoWrap: ["logoWrap", "logo"],
  logo: ["logo"],
  navmenu: ["navmenu", "link3", "link2", "link4"],
  link3: ["link3"],
  link2: ["link2"],
  link4: ["link4"],
  navBarButtonBlock: ["navBarButtonBlock", "syncWallet", "btnText"],
  syncWallet: ["syncWallet", "btnText"],
  btnText: ["btnText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "header";
  logoWrap: "div";
  logo: typeof p.PlasmicImg;
  navmenu: "div";
  link3: "a";
  link2: "a";
  link4: "a";
  navBarButtonBlock: "div";
  syncWallet: typeof Button;
  btnText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoWrap: makeNodeComponent("logoWrap"),
    logo: makeNodeComponent("logo"),
    navmenu: makeNodeComponent("navmenu"),
    link3: makeNodeComponent("link3"),
    link2: makeNodeComponent("link2"),
    link4: makeNodeComponent("link4"),
    navBarButtonBlock: makeNodeComponent("navBarButtonBlock"),
    syncWallet: makeNodeComponent("syncWallet"),
    btnText: makeNodeComponent("btnText"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
