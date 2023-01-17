import {
  GetWalletNFTTransfersJSONRequest,
  getWalletNFTTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { PaginatedOperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetWalletNFTTransfersJSONRequest, | 'address'>

type RequestQuery = Pick<GetWalletNFTTransfersJSONRequest, | 'chain'| 'format'| 'direction'| 'fromBlock'| 'toBlock'| 'limit'| 'cursor'>

export const evmGetWalletNFTTransfersResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new PaginatedOperationResolver(getWalletNFTTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletNFTTransfersOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};