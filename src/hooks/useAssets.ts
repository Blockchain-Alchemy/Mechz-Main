import axios from "axios";
import { useCallback } from "react";
import { useTezosContext } from './useTezosContext'

const TZSTATS_URL = 'https://api.tzstats.com';
const contractAddress = 'KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy';

const useAssets = () => {
  const { tezos, walletAddress } = useTezosContext()!

  const getAssets = useCallback((tokenId: number) => {
    if (tezos && walletAddress) {
      return tezos.wallet
        .at("KT1K58hY9q4ckHnb1KGXB2XgbM49EXZTWPBy")
        .then((contract) => {
          console.log('contract', contract)
          return contract.storage()
        })
        .then((storage: any) => {
          console.log('storage', storage)
          return storage.ledger.get({ 0: walletAddress, 1: tokenId })
        })
        .then((token) => {
          console.log('token', token)
          return token;
        })
    } else {
      return Promise.reject('Please connect your wallet')
    }

  }, [tezos, walletAddress])

  /*const getBigmapValue = async (ledger: any, key: string) => {
    try {
      const url = `${TZSTATS_URL}/explorer/bigmap/${ledger}/${key}`;
      const res = await axios.get(url)
      return res.data;
    } catch (e) {
      console.error(e);
      return null;
    };
  }

  const getAssets = useCallback(() => {
    const assets = async () => {
      let url = `${TZSTATS_URL}/explorer/contract/${contractAddress}`;
      let res = await axios.get(url)

      let ledger = res.data.bigmaps.ledger;

      for (let tokenId = 0; tokenId <= 10; tokenId++) {
        let key = `${walletAddress},${tokenId}`;
        let token = await getBigmapValue(ledger, key);
        if (token) {
          return token;
        }
      }
      return null;
    }
    return assets();
  }, [walletAddress])*/

  return {
    getAssets,
  };
};

export default useAssets;
