import { SWRConfiguration } from 'swr/dist/types';
import { TUseSolNfTsParams, TUseSolNfTsReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useSolNFTs = (params: TUseSolNfTsParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api/moralis/${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseSolNfTsReturn>(
    [`SolApi/account/getNFTs`, params],
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