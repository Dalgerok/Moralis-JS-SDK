import {
  GetWalletNFTsJSONRequest,
  getWalletNFTsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { PaginatedOperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetWalletNFTsJSONRequest, | 'address'>

type RequestQuery = Pick<GetWalletNFTsJSONRequest, | 'chain'| 'format'| 'limit'| 'tokenAddresses'| 'cursor'| 'normalizeMetadata'>

export const evmGetWalletNFTsResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new PaginatedOperationResolver(getWalletNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletNFTsOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};