import { useCallback } from "react";
import { useTezosContext } from './useTezosContext'

const useAssets = () => {
  const { tezos, walletAddress } = useTezosContext()!

  const getAssets = useCallback(() => {
    if (tezos && walletAddress) {
      return tezos.wallet
        .at("KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy")
        .then((contract) => {
          console.log('contract', contract)
          return contract.storage()
        })
        .then((storage: any) => {
          console.log('storage', storage)
          return storage.ledger.get({ 0: walletAddress, 1: 0 })
        })
        .then((token) => {
          console.log('token', token)
          return token;
        })
    } else {
      return Promise.reject('Please connect your wallet')
    }

  }, [tezos, walletAddress])

  return {
    getAssets,
  };
};

export default useAssets;
