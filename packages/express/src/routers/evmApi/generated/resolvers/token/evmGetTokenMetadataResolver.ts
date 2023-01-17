import {
  GetTokenMetadataJSONRequest,
  getTokenMetadataOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';



type RequestQuery = Pick<GetTokenMetadataJSONRequest, | 'chain'| 'addresses'>

export const evmGetTokenMetadataResolver  = async (
  req: Request<undefined, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new OperationResolver(getTokenMetadataOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenMetadataOperation.deserializeRequest({   ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};