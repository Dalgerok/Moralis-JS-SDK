import {
  ResolveDomainJSONRequest,
  resolveDomainOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<ResolveDomainJSONRequest, | 'domain'>

type RequestQuery = Pick<ResolveDomainJSONRequest, | 'currency'>

export const evmResolveDomainResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(resolveDomainOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      resolveDomainOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};