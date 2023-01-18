import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express';
import { Operation } from 'moralis/common-core';
import { NullableOperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const createNullableResolver = <Request, JSONRequest, Response, JSONResponse>(
  operation: Operation<Request, JSONRequest, Response, JSONResponse>,
  baseUrl: string,
) => {
  const resolver = new NullableOperationResolver(operation, baseUrl, Moralis.Core);

  async function handle(
    req: ExpressRequest<unknown, unknown, unknown, unknown>,
    res: ExpressResponse,
    next: NextFunction,
  ) {
    try {
      const jsonRequest = {
        ...(req?.params || {}),
        ...(req?.query || {}),
        ...(req?.body || {}),
      } as JSONRequest;
      const deserializedRequest = operation.deserializeRequest(jsonRequest, Moralis.Core);

      const response = await resolver.fetch(deserializedRequest);

      return res.send(response?.raw);
    } catch (error) {
      return next(error);
    }
  }

  return handle;
};