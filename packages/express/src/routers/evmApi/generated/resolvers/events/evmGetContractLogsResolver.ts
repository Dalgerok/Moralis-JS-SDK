import {
  GetContractLogsJSONRequest,
  getContractLogsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetContractLogsJSONRequest, | 'address'>

type RequestQuery = Pick<GetContractLogsJSONRequest, | 'chain'| 'subdomain'| 'blockNumber'| 'fromBlock'| 'toBlock'| 'fromDate'| 'toDate'| 'topic0'| 'topic1'| 'topic2'| 'topic3'| 'limit'| 'cursor'>

export const evmGetContractLogsResolver  = async (
  req: Request<RequestParams, any, any, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getContractLogsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getContractLogsOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};