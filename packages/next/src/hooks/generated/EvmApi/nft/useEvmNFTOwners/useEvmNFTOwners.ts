import { SWRConfiguration } from 'swr/dist/types';
import { TUseEvmNftOwnersParams, TUseEvmNftOwnersReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmNFTOwners = (params: TUseEvmNftOwnersParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api/moralis/${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseEvmNftOwnersReturn>(
    [`EvmApi/nft/getNFTOwners`, params],
    axiosFetcher,
    SWRConfig,
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};