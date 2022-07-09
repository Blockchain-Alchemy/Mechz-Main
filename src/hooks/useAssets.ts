import { useCallback } from "react";
import { useTezosContext } from './useTezosContext'

const useAssets = () => {
  const { tezos, walletAddress } = useTezosContext()!

  const getAssets = useCallback(() => {
    return true;
  }, [walletAddress])

  return {
    getAssets,
  };
};

export default useAssets;
