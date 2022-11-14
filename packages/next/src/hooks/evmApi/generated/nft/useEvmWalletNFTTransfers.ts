import { getWalletNFTTransfersOperation, GetWalletNFTTransfersRequest, GetWalletNFTTransfersResponse } from '@moralisweb3/common-evm-utils';
import { SWRConfiguration } from 'swr/dist/types';
import axios from 'axios';
import Moralis from 'moralis';
import useSWR from 'swr';

export const useEvmWalletNFTTransfers = (request: GetWalletNFTTransfersRequest, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string) => {
    const jsonResponse = await axios.post(`/api/moralis/${endpoint}`, getWalletNFTTransfersOperation.serializeRequest(request, Moralis.Core));
    return getWalletNFTTransfersOperation.deserializeResponse(jsonResponse.data, request, Moralis.Core);
  };

  const { data, error, mutate, isValidating } = useSWR<GetWalletNFTTransfersResponse>('evmApi/getWalletNFTTransfers', axiosFetcher, SWRConfig);

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};