import { ApiErrorCode, EvmAddress, EvmChain, MoralisApiError } from '@moralis/core';
import { MoralisObjectDataType } from '@moralis/core/lib/dataTypes/MoralisObjectDataType';

// TODO: make part of core config? The challenge in that case is to make sure it is Typed correctly
enum EvmApiFormatType {
  // Return the data directly, as is provided by the API
  LEGACY = 'legacy',
  // Return the formatted result of all moralis DataTypes
  JSON = 'JSON',
  // Return class with moralis DataTypes and format functions
  NORMAL = 'normal',
}

export type InputApiResult<Value extends object = object> =
  | {
      [key in keyof Value]: string | boolean | number | null | undefined | InputApiResult;
    }
  | InputApiResult[];

export type AdaptedApiResult<Value extends object = object> =
  | {
      [key in keyof Value]:
        | string
        | boolean
        | number
        | null
        | EvmAddress
        | EvmChain
        | MoralisObjectDataType
        | AdaptedApiResult;
    }
  | AdaptedApiResult[];

export type JSONApiResult<Value extends object = object> =
  | {
      [key in keyof Value]: string | boolean | number | null | JSONApiResult;
    }
  | JSONApiResult[];

// TODO: make part of core config
export class EvmApiResultAdapter<Data extends unknown, AdaptedData extends unknown, JSONData extends unknown> {
  private _data: Data;
  private _adapter: (data: Data) => AdaptedData;
  private _jsonAdapter: (data: AdaptedData) => JSONData;

  constructor(data: Data, adapter: (data: Data) => AdaptedData, jsonAdapter: (data: AdaptedData) => JSONData) {
    this._data = data;
    this._adapter = adapter;
    this._jsonAdapter = jsonAdapter;
  }

  get legacy() {
    return this._data;
  }

  get result(): AdaptedData {
    return this._adapter(this._data);
  }

  // TODO:  Cast all to primitive types
  toJSON() {
    return this._jsonAdapter(this.result);
  }

  format(formatType: EvmApiFormatType.LEGACY): Data;
  // WIP: add type
  format(formatType: EvmApiFormatType.JSON): unknown;
  format(formatType: EvmApiFormatType.NORMAL): AdaptedData;
  format(formatType: EvmApiFormatType) {
    if (formatType === EvmApiFormatType.LEGACY) {
      return this.legacy;
    }

    if (formatType === EvmApiFormatType.JSON) {
      return this.toJSON();
    }

    if (formatType === EvmApiFormatType.NORMAL) {
      return this.result;
    }

    throw new MoralisApiError({ code: ApiErrorCode.GENERIC_API_ERROR, message: 'provided formatType not supported' });
  }
}