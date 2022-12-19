import {
  SyncNFTContractJSONRequest,
  syncNFTContractOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<SyncNFTContractJSONRequest, | 'address'>

type RequestQuery = Pick<SyncNFTContractJSONRequest, | 'chain'>

export const evmSyncNFTContractResolver  = async (
  req: Request<RequestParams, any, any, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(syncNFTContractOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      syncNFTContractOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};