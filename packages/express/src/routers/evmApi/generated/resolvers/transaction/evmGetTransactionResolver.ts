import {
  GetTransactionJSONRequest,
  getTransactionOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetTransactionJSONRequest, | 'transactionHash'>

type RequestQuery = Pick<GetTransactionJSONRequest, | 'chain'| 'subdomain'>

export const evmGetTransactionResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTransactionOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTransactionOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};