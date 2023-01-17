import {
  GetSPLJSONRequest,
  getSPLOperation,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetSPLJSONRequest, | 'network'| 'address'>



export const solGetSPLResolver  = async (
  req: Request<RequestParams, undefined, undefined, undefined>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new OperationResolver(getSPLOperation, Moralis.SolApi.baseUrl, Moralis.Core).fetch(
      getSPLOperation.deserializeRequest({ ...req.params,   }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};