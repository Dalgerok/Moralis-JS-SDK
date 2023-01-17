import {
  GetNFTOwnersJSONRequest,
  getNFTOwnersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { PaginatedOperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetNFTOwnersJSONRequest, | 'address'>

type RequestQuery = Pick<GetNFTOwnersJSONRequest, | 'chain'| 'format'| 'limit'| 'cursor'| 'normalizeMetadata'>

export const evmGetNFTOwnersResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new PaginatedOperationResolver(getNFTOwnersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTOwnersOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};