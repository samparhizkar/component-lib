/**
 * Make a type and all its (sub) properties optional.
 */
export type DeepPartial<T> = T extends any[]
  ? DeepPartialArray<T[number]>
  : T extends Record<string, unknown>
  ? DeepPartialObject<T>
  : T;

type DeepPartialArray<T> = Array<DeepPartial<T>>;

type DeepPartialObject<T> = { [P in keyof T]+?: DeepPartial<T[P]> };
