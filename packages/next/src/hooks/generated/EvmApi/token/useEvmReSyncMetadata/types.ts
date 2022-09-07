import Moralis from "moralis";

type TSDKCall = typeof Moralis.EvmApi.token.reSyncMetadata;
export type TUseEvmReSyncMetadataParams = Parameters<TSDKCall>[0];
export type TUseEvmReSyncMetadataReturn = ReturnType<NonNullable<Awaited<ReturnType<TSDKCall>>>['toJSON']>;