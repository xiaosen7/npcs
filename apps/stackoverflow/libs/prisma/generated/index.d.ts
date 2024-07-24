/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model Question
 *
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>;
/**
 * Model Answer
 *
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Questions
   * const questions = await prisma.question.findMany()
   * ```
   */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Answers
   * const answers = await prisma.answer.findMany()
   * ```
   */
  get answer(): Prisma.AnswerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Tag: "Tag";
    Question: "Question";
    Answer: "Answer";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      this["params"]["clientOptions"]
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps: "user" | "tag" | "question" | "answer";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>;
        fields: Prisma.QuestionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[];
          };
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[];
          };
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateQuestion>;
          };
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<QuestionGroupByOutputType>[];
          };
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>;
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number;
          };
        };
      };
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>;
        fields: Prisma.AnswerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[];
          };
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[];
          };
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnswer>;
          };
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnswerGroupByOutputType>[];
          };
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>;
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    followedTags: number;
    createdTags: number;
    questions: number;
    upvoteQuestions: number;
    downvoteQuestions: number;
    collections: number;
    answers: number;
    upvoteAnswers: number;
    downVoteAnswers: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    followedTags?: boolean | UserCountOutputTypeCountFollowedTagsArgs;
    createdTags?: boolean | UserCountOutputTypeCountCreatedTagsArgs;
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs;
    upvoteQuestions?: boolean | UserCountOutputTypeCountUpvoteQuestionsArgs;
    downvoteQuestions?: boolean | UserCountOutputTypeCountDownvoteQuestionsArgs;
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs;
    answers?: boolean | UserCountOutputTypeCountAnswersArgs;
    upvoteAnswers?: boolean | UserCountOutputTypeCountUpvoteAnswersArgs;
    downVoteAnswers?: boolean | UserCountOutputTypeCountDownVoteAnswersArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvoteQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDownvoteQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvoteAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDownVoteAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    questions: number;
    followers: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    questions?: boolean | TagCountOutputTypeCountQuestionsArgs;
    followers?: boolean | TagCountOutputTypeCountFollowersArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    tags: number;
    answers: number;
    upvotes: number;
    downvotes: number;
    collectors: number;
  };

  export type QuestionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | QuestionCountOutputTypeCountTagsArgs;
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs;
    upvotes?: boolean | QuestionCountOutputTypeCountUpvotesArgs;
    downvotes?: boolean | QuestionCountOutputTypeCountDownvotesArgs;
    collectors?: boolean | QuestionCountOutputTypeCountCollectorsArgs;
  };

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUpvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountDownvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountCollectorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    upvotes: number;
    downvotes: number;
  };

  export type AnswerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    upvotes?: boolean | AnswerCountOutputTypeCountUpvotesArgs;
    downvotes?: boolean | AnswerCountOutputTypeCountDownvotesArgs;
  };

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountUpvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountDownvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    reputation: number | null;
  };

  export type UserSumAggregateOutputType = {
    reputation: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    clerkId: string | null;
    fullName: string | null;
    username: string | null;
    email: string | null;
    imageUrl: string | null;
    portfolioWebsite: string | null;
    location: string | null;
    bio: string | null;
    reputation: number | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    clerkId: string | null;
    fullName: string | null;
    username: string | null;
    email: string | null;
    imageUrl: string | null;
    portfolioWebsite: string | null;
    location: string | null;
    bio: string | null;
    reputation: number | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    clerkId: number;
    fullName: number;
    username: number;
    email: number;
    imageUrl: number;
    portfolioWebsite: number;
    location: number;
    bio: number;
    reputation: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    reputation?: true;
  };

  export type UserSumAggregateInputType = {
    reputation?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    clerkId?: true;
    fullName?: true;
    username?: true;
    email?: true;
    imageUrl?: true;
    portfolioWebsite?: true;
    location?: true;
    bio?: true;
    reputation?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    clerkId?: true;
    fullName?: true;
    username?: true;
    email?: true;
    imageUrl?: true;
    portfolioWebsite?: true;
    location?: true;
    bio?: true;
    reputation?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    clerkId?: true;
    fullName?: true;
    username?: true;
    email?: true;
    imageUrl?: true;
    portfolioWebsite?: true;
    location?: true;
    bio?: true;
    reputation?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite: string | null;
    location: string | null;
    bio: string | null;
    reputation: number;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clerkId?: boolean;
      fullName?: boolean;
      username?: boolean;
      email?: boolean;
      imageUrl?: boolean;
      portfolioWebsite?: boolean;
      location?: boolean;
      bio?: boolean;
      reputation?: boolean;
      createdAt?: boolean;
      followedTags?: boolean | User$followedTagsArgs<ExtArgs>;
      createdTags?: boolean | User$createdTagsArgs<ExtArgs>;
      questions?: boolean | User$questionsArgs<ExtArgs>;
      upvoteQuestions?: boolean | User$upvoteQuestionsArgs<ExtArgs>;
      downvoteQuestions?: boolean | User$downvoteQuestionsArgs<ExtArgs>;
      collections?: boolean | User$collectionsArgs<ExtArgs>;
      answers?: boolean | User$answersArgs<ExtArgs>;
      upvoteAnswers?: boolean | User$upvoteAnswersArgs<ExtArgs>;
      downVoteAnswers?: boolean | User$downVoteAnswersArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      clerkId?: boolean;
      fullName?: boolean;
      username?: boolean;
      email?: boolean;
      imageUrl?: boolean;
      portfolioWebsite?: boolean;
      location?: boolean;
      bio?: boolean;
      reputation?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    clerkId?: boolean;
    fullName?: boolean;
    username?: boolean;
    email?: boolean;
    imageUrl?: boolean;
    portfolioWebsite?: boolean;
    location?: boolean;
    bio?: boolean;
    reputation?: boolean;
    createdAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    followedTags?: boolean | User$followedTagsArgs<ExtArgs>;
    createdTags?: boolean | User$createdTagsArgs<ExtArgs>;
    questions?: boolean | User$questionsArgs<ExtArgs>;
    upvoteQuestions?: boolean | User$upvoteQuestionsArgs<ExtArgs>;
    downvoteQuestions?: boolean | User$downvoteQuestionsArgs<ExtArgs>;
    collections?: boolean | User$collectionsArgs<ExtArgs>;
    answers?: boolean | User$answersArgs<ExtArgs>;
    upvoteAnswers?: boolean | User$upvoteAnswersArgs<ExtArgs>;
    downVoteAnswers?: boolean | User$downVoteAnswersArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      followedTags: Prisma.$TagPayload<ExtArgs>[];
      createdTags: Prisma.$TagPayload<ExtArgs>[];
      questions: Prisma.$QuestionPayload<ExtArgs>[];
      upvoteQuestions: Prisma.$QuestionPayload<ExtArgs>[];
      downvoteQuestions: Prisma.$QuestionPayload<ExtArgs>[];
      collections: Prisma.$QuestionPayload<ExtArgs>[];
      answers: Prisma.$AnswerPayload<ExtArgs>[];
      upvoteAnswers: Prisma.$AnswerPayload<ExtArgs>[];
      downVoteAnswers: Prisma.$AnswerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        clerkId: string;
        fullName: string;
        username: string;
        email: string;
        imageUrl: string;
        portfolioWebsite: string | null;
        location: string | null;
        bio: string | null;
        reputation: number;
        createdAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    followedTags<T extends User$followedTagsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followedTagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null
    >;
    createdTags<T extends User$createdTagsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdTagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null
    >;
    questions<T extends User$questionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$questionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null
    >;
    upvoteQuestions<T extends User$upvoteQuestionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$upvoteQuestionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null
    >;
    downvoteQuestions<T extends User$downvoteQuestionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$downvoteQuestionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null
    >;
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$collectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null
    >;
    answers<T extends User$answersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$answersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null
    >;
    upvoteAnswers<T extends User$upvoteAnswersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$upvoteAnswersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null
    >;
    downVoteAnswers<T extends User$downVoteAnswersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$downVoteAnswersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly clerkId: FieldRef<"User", "String">;
    readonly fullName: FieldRef<"User", "String">;
    readonly username: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly imageUrl: FieldRef<"User", "String">;
    readonly portfolioWebsite: FieldRef<"User", "String">;
    readonly location: FieldRef<"User", "String">;
    readonly bio: FieldRef<"User", "String">;
    readonly reputation: FieldRef<"User", "Int">;
    readonly createdAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.followedTags
   */
  export type User$followedTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * User.createdTags
   */
  export type User$createdTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * User.questions
   */
  export type User$questionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * User.upvoteQuestions
   */
  export type User$upvoteQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * User.downvoteQuestions
   */
  export type User$downvoteQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * User.collections
   */
  export type User$collectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * User.answers
   */
  export type User$answersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * User.upvoteAnswers
   */
  export type User$upvoteAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * User.downVoteAnswers
   */
  export type User$downVoteAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    creatorId: string | null;
  };

  export type TagMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    creatorId: string | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    creatorId: number;
    _all: number;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    creatorId?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    creatorId?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    creatorId?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    creatorId: string;
    _count: TagCountAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      creatorId?: boolean;
      questions?: boolean | Tag$questionsArgs<ExtArgs>;
      followers?: boolean | Tag$followersArgs<ExtArgs>;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      creatorId?: boolean;
      creator?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    creatorId?: boolean;
  };

  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    questions?: boolean | Tag$questionsArgs<ExtArgs>;
    followers?: boolean | Tag$followersArgs<ExtArgs>;
    creator?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    creator?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Tag";
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[];
      followers: Prisma.$UserPayload<ExtArgs>[];
      creator: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        createdAt: Date;
        creatorId: string;
      },
      ExtArgs["result"]["tag"]
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>;

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Tag"];
      meta: { name: "Tag" };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>,
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs["orderBy"] }
        : { orderBy?: TagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    questions<T extends Tag$questionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$questionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null
    >;
    followers<T extends Tag$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$followersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", "String">;
    readonly name: FieldRef<"Tag", "String">;
    readonly description: FieldRef<"Tag", "String">;
    readonly createdAt: FieldRef<"Tag", "DateTime">;
    readonly creatorId: FieldRef<"Tag", "String">;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
  };

  /**
   * Tag.questions
   */
  export type Tag$questionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Tag.followers
   */
  export type Tag$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  export type QuestionAvgAggregateOutputType = {
    views: number | null;
  };

  export type QuestionSumAggregateOutputType = {
    views: number | null;
  };

  export type QuestionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    views: number | null;
    authorId: string | null;
    createdAt: Date | null;
  };

  export type QuestionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    views: number | null;
    authorId: string | null;
    createdAt: Date | null;
  };

  export type QuestionCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    views: number;
    authorId: number;
    createdAt: number;
    _all: number;
  };

  export type QuestionAvgAggregateInputType = {
    views?: true;
  };

  export type QuestionSumAggregateInputType = {
    views?: true;
  };

  export type QuestionMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    views?: true;
    authorId?: true;
    createdAt?: true;
  };

  export type QuestionMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    views?: true;
    authorId?: true;
    createdAt?: true;
  };

  export type QuestionCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    views?: true;
    authorId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type QuestionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Questions
     **/
    _count?: true | QuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: QuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: QuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuestionMaxAggregateInputType;
  };

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>;
  };

  export type QuestionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithAggregationInput
      | QuestionOrderByWithAggregationInput[];
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum;
    having?: QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
  };

  export type QuestionGroupByOutputType = {
    id: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt: Date;
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<QuestionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof QuestionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>;
        }
      >
    >;

  export type QuestionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      views?: boolean;
      authorId?: boolean;
      createdAt?: boolean;
      tags?: boolean | Question$tagsArgs<ExtArgs>;
      answers?: boolean | Question$answersArgs<ExtArgs>;
      upvotes?: boolean | Question$upvotesArgs<ExtArgs>;
      downvotes?: boolean | Question$downvotesArgs<ExtArgs>;
      collectors?: boolean | Question$collectorsArgs<ExtArgs>;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["question"]
  >;

  export type QuestionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      views?: boolean;
      authorId?: boolean;
      createdAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["question"]
  >;

  export type QuestionSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    views?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
  };

  export type QuestionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | Question$tagsArgs<ExtArgs>;
    answers?: boolean | Question$answersArgs<ExtArgs>;
    upvotes?: boolean | Question$upvotesArgs<ExtArgs>;
    downvotes?: boolean | Question$downvotesArgs<ExtArgs>;
    collectors?: boolean | Question$collectorsArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type QuestionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $QuestionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Question";
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[];
      answers: Prisma.$AnswerPayload<ExtArgs>[];
      upvotes: Prisma.$UserPayload<ExtArgs>[];
      downvotes: Prisma.$UserPayload<ExtArgs>[];
      collectors: Prisma.$UserPayload<ExtArgs>[];
      author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        content: string;
        views: number;
        authorId: string;
        createdAt: Date;
      },
      ExtArgs["result"]["question"]
    >;
    composites: {};
  };

  type QuestionGetPayload<
    S extends boolean | null | undefined | QuestionDefaultArgs,
  > = $Result.GetResult<Prisma.$QuestionPayload, S>;

  type QuestionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<QuestionFindManyArgs, "select" | "include" | "distinct"> & {
    select?: QuestionCountAggregateInputType | true;
  };

  export interface QuestionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Question"];
      meta: { name: "Question" };
    };
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(
      args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(
      args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     *
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     *
     */
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuestionCreateManyArgs>(
      args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        "createManyAndReturn"
      >
    >;

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     *
     */
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
     **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], QuestionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends QuestionAggregateArgs>(
      args: Subset<T, QuestionAggregateArgs>,
    ): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs["orderBy"] }
        : { orderBy?: QuestionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetQuestionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Question model
     */
    readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tags<T extends Question$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null
    >;
    answers<T extends Question$answersArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$answersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null
    >;
    upvotes<T extends Question$upvotesArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$upvotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    downvotes<T extends Question$downvotesArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$downvotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    collectors<T extends Question$collectorsArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$collectorsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", "String">;
    readonly title: FieldRef<"Question", "String">;
    readonly content: FieldRef<"Question", "String">;
    readonly views: FieldRef<"Question", "Int">;
    readonly authorId: FieldRef<"Question", "String">;
    readonly createdAt: FieldRef<"Question", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question create
   */
  export type QuestionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
  };

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Question update
   */
  export type QuestionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Questions.
     */
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput;
  };

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput;
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
  };

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput;
  };

  /**
   * Question.tags
   */
  export type Question$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Question.answers
   */
  export type Question$answersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Question.upvotes
   */
  export type Question$upvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Question.downvotes
   */
  export type Question$downvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Question.collectors
   */
  export type Question$collectorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
  };

  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
  };

  export type AnswerMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    authorId: string | null;
    questionId: string | null;
  };

  export type AnswerMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    authorId: string | null;
    questionId: string | null;
  };

  export type AnswerCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    authorId: number;
    questionId: number;
    _all: number;
  };

  export type AnswerMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    questionId?: true;
  };

  export type AnswerMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    questionId?: true;
  };

  export type AnswerCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    questionId?: true;
    _all?: true;
  };

  export type AnswerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Answers
     **/
    _count?: true | AnswerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnswerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnswerMaxAggregateInputType;
  };

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateAnswer]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>;
  };

  export type AnswerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
    orderBy?:
      | AnswerOrderByWithAggregationInput
      | AnswerOrderByWithAggregationInput[];
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum;
    having?: AnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnswerCountAggregateInputType | true;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
  };

  export type AnswerGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    authorId: string;
    questionId: string;
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
  };

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnswerGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AnswerGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>;
        }
      >
    >;

  export type AnswerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      authorId?: boolean;
      questionId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      upvotes?: boolean | Answer$upvotesArgs<ExtArgs>;
      downvotes?: boolean | Answer$downvotesArgs<ExtArgs>;
      question?: boolean | QuestionDefaultArgs<ExtArgs>;
      _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["answer"]
  >;

  export type AnswerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      authorId?: boolean;
      questionId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      question?: boolean | QuestionDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["answer"]
  >;

  export type AnswerSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
  };

  export type AnswerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    upvotes?: boolean | Answer$upvotesArgs<ExtArgs>;
    downvotes?: boolean | Answer$downvotesArgs<ExtArgs>;
    question?: boolean | QuestionDefaultArgs<ExtArgs>;
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AnswerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    question?: boolean | QuestionDefaultArgs<ExtArgs>;
  };

  export type $AnswerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Answer";
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      upvotes: Prisma.$UserPayload<ExtArgs>[];
      downvotes: Prisma.$UserPayload<ExtArgs>[];
      question: Prisma.$QuestionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        createdAt: Date;
        authorId: string;
        questionId: string;
      },
      ExtArgs["result"]["answer"]
    >;
    composites: {};
  };

  type AnswerGetPayload<
    S extends boolean | null | undefined | AnswerDefaultArgs,
  > = $Result.GetResult<Prisma.$AnswerPayload, S>;

  type AnswerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AnswerFindManyArgs, "select" | "include" | "distinct"> & {
    select?: AnswerCountAggregateInputType | true;
  };

  export interface AnswerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Answer"];
      meta: { name: "Answer" };
    };
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(
      args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(
      args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     *
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AnswerFindManyArgs>(
      args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     *
     */
    create<T extends AnswerCreateArgs>(
      args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnswerCreateManyArgs>(
      args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        "createManyAndReturn"
      >
    >;

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     *
     */
    delete<T extends AnswerDeleteArgs>(
      args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnswerUpdateArgs>(
      args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnswerDeleteManyArgs>(
      args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnswerUpdateManyArgs>(
      args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(
      args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
     **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AnswerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AnswerAggregateArgs>(
      args: Subset<T, AnswerAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnswerAggregateType<T>>;

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs["orderBy"] }
        : { orderBy?: AnswerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAnswerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Answer model
     */
    readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    upvotes<T extends Answer$upvotesArgs<ExtArgs> = {}>(
      args?: Subset<T, Answer$upvotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    downvotes<T extends Answer$downvotesArgs<ExtArgs> = {}>(
      args?: Subset<T, Answer$downvotesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null
    >;
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, QuestionDefaultArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      | $Result.GetResult<
          Prisma.$QuestionPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", "String">;
    readonly content: FieldRef<"Answer", "String">;
    readonly createdAt: FieldRef<"Answer", "DateTime">;
    readonly authorId: FieldRef<"Answer", "String">;
    readonly questionId: FieldRef<"Answer", "String">;
  }

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer create
   */
  export type AnswerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>;
  };

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>;
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>;
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput;
  };

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput;
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>;
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>;
  };

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput;
  };

  /**
   * Answer.upvotes
   */
  export type Answer$upvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Answer.downvotes
   */
  export type Answer$downvotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    clerkId: "clerkId";
    fullName: "fullName";
    username: "username";
    email: "email";
    imageUrl: "imageUrl";
    portfolioWebsite: "portfolioWebsite";
    location: "location";
    bio: "bio";
    reputation: "reputation";
    createdAt: "createdAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    createdAt: "createdAt";
    creatorId: "creatorId";
  };

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const QuestionScalarFieldEnum: {
    id: "id";
    title: "title";
    content: "content";
    views: "views";
    authorId: "authorId";
    createdAt: "createdAt";
  };

  export type QuestionScalarFieldEnum =
    (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum];

  export const AnswerScalarFieldEnum: {
    id: "id";
    content: "content";
    createdAt: "createdAt";
    authorId: "authorId";
    questionId: "questionId";
  };

  export type AnswerScalarFieldEnum =
    (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    clerkId?: StringFilter<"User"> | string;
    fullName?: StringFilter<"User"> | string;
    username?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    imageUrl?: StringFilter<"User"> | string;
    portfolioWebsite?: StringNullableFilter<"User"> | string | null;
    location?: StringNullableFilter<"User"> | string | null;
    bio?: StringNullableFilter<"User"> | string | null;
    reputation?: IntFilter<"User"> | number;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    followedTags?: TagListRelationFilter;
    createdTags?: TagListRelationFilter;
    questions?: QuestionListRelationFilter;
    upvoteQuestions?: QuestionListRelationFilter;
    downvoteQuestions?: QuestionListRelationFilter;
    collections?: QuestionListRelationFilter;
    answers?: AnswerListRelationFilter;
    upvoteAnswers?: AnswerListRelationFilter;
    downVoteAnswers?: AnswerListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    clerkId?: SortOrder;
    fullName?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    imageUrl?: SortOrder;
    portfolioWebsite?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
    followedTags?: TagOrderByRelationAggregateInput;
    createdTags?: TagOrderByRelationAggregateInput;
    questions?: QuestionOrderByRelationAggregateInput;
    upvoteQuestions?: QuestionOrderByRelationAggregateInput;
    downvoteQuestions?: QuestionOrderByRelationAggregateInput;
    collections?: QuestionOrderByRelationAggregateInput;
    answers?: AnswerOrderByRelationAggregateInput;
    upvoteAnswers?: AnswerOrderByRelationAggregateInput;
    downVoteAnswers?: AnswerOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      clerkId?: string;
      username?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      fullName?: StringFilter<"User"> | string;
      imageUrl?: StringFilter<"User"> | string;
      portfolioWebsite?: StringNullableFilter<"User"> | string | null;
      location?: StringNullableFilter<"User"> | string | null;
      bio?: StringNullableFilter<"User"> | string | null;
      reputation?: IntFilter<"User"> | number;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      followedTags?: TagListRelationFilter;
      createdTags?: TagListRelationFilter;
      questions?: QuestionListRelationFilter;
      upvoteQuestions?: QuestionListRelationFilter;
      downvoteQuestions?: QuestionListRelationFilter;
      collections?: QuestionListRelationFilter;
      answers?: AnswerListRelationFilter;
      upvoteAnswers?: AnswerListRelationFilter;
      downVoteAnswers?: AnswerListRelationFilter;
    },
    "id" | "clerkId" | "username" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    clerkId?: SortOrder;
    fullName?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    imageUrl?: SortOrder;
    portfolioWebsite?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    clerkId?: StringWithAggregatesFilter<"User"> | string;
    fullName?: StringWithAggregatesFilter<"User"> | string;
    username?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    imageUrl?: StringWithAggregatesFilter<"User"> | string;
    portfolioWebsite?:
      | StringNullableWithAggregatesFilter<"User">
      | string
      | null;
    location?: StringNullableWithAggregatesFilter<"User"> | string | null;
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null;
    reputation?: IntWithAggregatesFilter<"User"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: StringFilter<"Tag"> | string;
    name?: StringFilter<"Tag"> | string;
    description?: StringFilter<"Tag"> | string;
    createdAt?: DateTimeFilter<"Tag"> | Date | string;
    creatorId?: StringFilter<"Tag"> | string;
    questions?: QuestionListRelationFilter;
    followers?: UserListRelationFilter;
    creator?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    creatorId?: SortOrder;
    questions?: QuestionOrderByRelationAggregateInput;
    followers?: UserOrderByRelationAggregateInput;
    creator?: UserOrderByWithRelationInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      description?: StringFilter<"Tag"> | string;
      createdAt?: DateTimeFilter<"Tag"> | Date | string;
      creatorId?: StringFilter<"Tag"> | string;
      questions?: QuestionListRelationFilter;
      followers?: UserListRelationFilter;
      creator?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id" | "name"
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    creatorId?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Tag"> | string;
    name?: StringWithAggregatesFilter<"Tag"> | string;
    description?: StringWithAggregatesFilter<"Tag"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
    creatorId?: StringWithAggregatesFilter<"Tag"> | string;
  };

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[];
    OR?: QuestionWhereInput[];
    NOT?: QuestionWhereInput | QuestionWhereInput[];
    id?: StringFilter<"Question"> | string;
    title?: StringFilter<"Question"> | string;
    content?: StringFilter<"Question"> | string;
    views?: IntFilter<"Question"> | number;
    authorId?: StringFilter<"Question"> | string;
    createdAt?: DateTimeFilter<"Question"> | Date | string;
    tags?: TagListRelationFilter;
    answers?: AnswerListRelationFilter;
    upvotes?: UserListRelationFilter;
    downvotes?: UserListRelationFilter;
    collectors?: UserListRelationFilter;
    author?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    views?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    tags?: TagOrderByRelationAggregateInput;
    answers?: AnswerOrderByRelationAggregateInput;
    upvotes?: UserOrderByRelationAggregateInput;
    downvotes?: UserOrderByRelationAggregateInput;
    collectors?: UserOrderByRelationAggregateInput;
    author?: UserOrderByWithRelationInput;
  };

  export type QuestionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: QuestionWhereInput | QuestionWhereInput[];
      OR?: QuestionWhereInput[];
      NOT?: QuestionWhereInput | QuestionWhereInput[];
      title?: StringFilter<"Question"> | string;
      content?: StringFilter<"Question"> | string;
      views?: IntFilter<"Question"> | number;
      authorId?: StringFilter<"Question"> | string;
      createdAt?: DateTimeFilter<"Question"> | Date | string;
      tags?: TagListRelationFilter;
      answers?: AnswerListRelationFilter;
      upvotes?: UserListRelationFilter;
      downvotes?: UserListRelationFilter;
      collectors?: UserListRelationFilter;
      author?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    views?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    _count?: QuestionCountOrderByAggregateInput;
    _avg?: QuestionAvgOrderByAggregateInput;
    _max?: QuestionMaxOrderByAggregateInput;
    _min?: QuestionMinOrderByAggregateInput;
    _sum?: QuestionSumOrderByAggregateInput;
  };

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?:
      | QuestionScalarWhereWithAggregatesInput
      | QuestionScalarWhereWithAggregatesInput[];
    OR?: QuestionScalarWhereWithAggregatesInput[];
    NOT?:
      | QuestionScalarWhereWithAggregatesInput
      | QuestionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Question"> | string;
    title?: StringWithAggregatesFilter<"Question"> | string;
    content?: StringWithAggregatesFilter<"Question"> | string;
    views?: IntWithAggregatesFilter<"Question"> | number;
    authorId?: StringWithAggregatesFilter<"Question"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string;
  };

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[];
    OR?: AnswerWhereInput[];
    NOT?: AnswerWhereInput | AnswerWhereInput[];
    id?: StringFilter<"Answer"> | string;
    content?: StringFilter<"Answer"> | string;
    createdAt?: DateTimeFilter<"Answer"> | Date | string;
    authorId?: StringFilter<"Answer"> | string;
    questionId?: StringFilter<"Answer"> | string;
    author?: XOR<UserRelationFilter, UserWhereInput>;
    upvotes?: UserListRelationFilter;
    downvotes?: UserListRelationFilter;
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>;
  };

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    author?: UserOrderByWithRelationInput;
    upvotes?: UserOrderByRelationAggregateInput;
    downvotes?: UserOrderByRelationAggregateInput;
    question?: QuestionOrderByWithRelationInput;
  };

  export type AnswerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AnswerWhereInput | AnswerWhereInput[];
      OR?: AnswerWhereInput[];
      NOT?: AnswerWhereInput | AnswerWhereInput[];
      content?: StringFilter<"Answer"> | string;
      createdAt?: DateTimeFilter<"Answer"> | Date | string;
      authorId?: StringFilter<"Answer"> | string;
      questionId?: StringFilter<"Answer"> | string;
      author?: XOR<UserRelationFilter, UserWhereInput>;
      upvotes?: UserListRelationFilter;
      downvotes?: UserListRelationFilter;
      question?: XOR<QuestionRelationFilter, QuestionWhereInput>;
    },
    "id"
  >;

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    _count?: AnswerCountOrderByAggregateInput;
    _max?: AnswerMaxOrderByAggregateInput;
    _min?: AnswerMinOrderByAggregateInput;
  };

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?:
      | AnswerScalarWhereWithAggregatesInput
      | AnswerScalarWhereWithAggregatesInput[];
    OR?: AnswerScalarWhereWithAggregatesInput[];
    NOT?:
      | AnswerScalarWhereWithAggregatesInput
      | AnswerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Answer"> | string;
    content?: StringWithAggregatesFilter<"Answer"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string;
    authorId?: StringWithAggregatesFilter<"Answer"> | string;
    questionId?: StringWithAggregatesFilter<"Answer"> | string;
  };

  export type UserCreateInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    questions?: QuestionCreateNestedManyWithoutTagsInput;
    followers?: UserCreateNestedManyWithoutFollowedTagsInput;
    creator: UserCreateNestedOneWithoutCreatedTagsInput;
  };

  export type TagUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    creatorId: string;
    questions?: QuestionUncheckedCreateNestedManyWithoutTagsInput;
    followers?: UserUncheckedCreateNestedManyWithoutFollowedTagsInput;
  };

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUpdateManyWithoutTagsNestedInput;
    followers?: UserUpdateManyWithoutFollowedTagsNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedTagsNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
    questions?: QuestionUncheckedUpdateManyWithoutTagsNestedInput;
    followers?: UserUncheckedUpdateManyWithoutFollowedTagsNestedInput;
  };

  export type TagCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    creatorId: string;
  };

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
  };

  export type QuestionCreateInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionCreateManyInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
  };

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserCreateNestedManyWithoutDownVoteAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
  };

  export type AnswerUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
    questionId: string;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownVoteAnswersInput;
  };

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUpdateManyWithoutDownVoteAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownVoteAnswersNestedInput;
  };

  export type AnswerCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
    questionId: string;
  };

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type TagListRelationFilter = {
    every?: TagWhereInput;
    some?: TagWhereInput;
    none?: TagWhereInput;
  };

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput;
    some?: QuestionWhereInput;
    none?: QuestionWhereInput;
  };

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput;
    some?: AnswerWhereInput;
    none?: AnswerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    clerkId?: SortOrder;
    fullName?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    imageUrl?: SortOrder;
    portfolioWebsite?: SortOrder;
    location?: SortOrder;
    bio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    clerkId?: SortOrder;
    fullName?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    imageUrl?: SortOrder;
    portfolioWebsite?: SortOrder;
    location?: SortOrder;
    bio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    clerkId?: SortOrder;
    fullName?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    imageUrl?: SortOrder;
    portfolioWebsite?: SortOrder;
    location?: SortOrder;
    bio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    creatorId?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    creatorId?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    creatorId?: SortOrder;
  };

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    views?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionAvgOrderByAggregateInput = {
    views?: SortOrder;
  };

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    views?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    views?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionSumOrderByAggregateInput = {
    views?: SortOrder;
  };

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput;
    isNot?: QuestionWhereInput;
  };

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
  };

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
  };

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
  };

  export type TagCreateNestedManyWithoutFollowersInput = {
    create?:
      | XOR<
          TagCreateWithoutFollowersInput,
          TagUncheckedCreateWithoutFollowersInput
        >
      | TagCreateWithoutFollowersInput[]
      | TagUncheckedCreateWithoutFollowersInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutFollowersInput
      | TagCreateOrConnectWithoutFollowersInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<TagCreateWithoutCreatorInput, TagUncheckedCreateWithoutCreatorInput>
      | TagCreateWithoutCreatorInput[]
      | TagUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutCreatorInput
      | TagCreateOrConnectWithoutCreatorInput[];
    createMany?: TagCreateManyCreatorInputEnvelope;
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionCreateNestedManyWithoutUpvotesInput = {
    create?:
      | XOR<
          QuestionCreateWithoutUpvotesInput,
          QuestionUncheckedCreateWithoutUpvotesInput
        >
      | QuestionCreateWithoutUpvotesInput[]
      | QuestionUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutUpvotesInput
      | QuestionCreateOrConnectWithoutUpvotesInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionCreateNestedManyWithoutDownvotesInput = {
    create?:
      | XOR<
          QuestionCreateWithoutDownvotesInput,
          QuestionUncheckedCreateWithoutDownvotesInput
        >
      | QuestionCreateWithoutDownvotesInput[]
      | QuestionUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutDownvotesInput
      | QuestionCreateOrConnectWithoutDownvotesInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionCreateNestedManyWithoutCollectorsInput = {
    create?:
      | XOR<
          QuestionCreateWithoutCollectorsInput,
          QuestionUncheckedCreateWithoutCollectorsInput
        >
      | QuestionCreateWithoutCollectorsInput[]
      | QuestionUncheckedCreateWithoutCollectorsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutCollectorsInput
      | QuestionCreateOrConnectWithoutCollectorsInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type AnswerCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type AnswerCreateNestedManyWithoutUpvotesInput = {
    create?:
      | XOR<
          AnswerCreateWithoutUpvotesInput,
          AnswerUncheckedCreateWithoutUpvotesInput
        >
      | AnswerCreateWithoutUpvotesInput[]
      | AnswerUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutUpvotesInput
      | AnswerCreateOrConnectWithoutUpvotesInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type AnswerCreateNestedManyWithoutDownvotesInput = {
    create?:
      | XOR<
          AnswerCreateWithoutDownvotesInput,
          AnswerUncheckedCreateWithoutDownvotesInput
        >
      | AnswerCreateWithoutDownvotesInput[]
      | AnswerUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutDownvotesInput
      | AnswerCreateOrConnectWithoutDownvotesInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutFollowersInput = {
    create?:
      | XOR<
          TagCreateWithoutFollowersInput,
          TagUncheckedCreateWithoutFollowersInput
        >
      | TagCreateWithoutFollowersInput[]
      | TagUncheckedCreateWithoutFollowersInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutFollowersInput
      | TagCreateOrConnectWithoutFollowersInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutCreatorInput = {
    create?:
      | XOR<TagCreateWithoutCreatorInput, TagUncheckedCreateWithoutCreatorInput>
      | TagCreateWithoutCreatorInput[]
      | TagUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutCreatorInput
      | TagCreateOrConnectWithoutCreatorInput[];
    createMany?: TagCreateManyCreatorInputEnvelope;
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionUncheckedCreateNestedManyWithoutUpvotesInput = {
    create?:
      | XOR<
          QuestionCreateWithoutUpvotesInput,
          QuestionUncheckedCreateWithoutUpvotesInput
        >
      | QuestionCreateWithoutUpvotesInput[]
      | QuestionUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutUpvotesInput
      | QuestionCreateOrConnectWithoutUpvotesInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionUncheckedCreateNestedManyWithoutDownvotesInput = {
    create?:
      | XOR<
          QuestionCreateWithoutDownvotesInput,
          QuestionUncheckedCreateWithoutDownvotesInput
        >
      | QuestionCreateWithoutDownvotesInput[]
      | QuestionUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutDownvotesInput
      | QuestionCreateOrConnectWithoutDownvotesInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type QuestionUncheckedCreateNestedManyWithoutCollectorsInput = {
    create?:
      | XOR<
          QuestionCreateWithoutCollectorsInput,
          QuestionUncheckedCreateWithoutCollectorsInput
        >
      | QuestionCreateWithoutCollectorsInput[]
      | QuestionUncheckedCreateWithoutCollectorsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutCollectorsInput
      | QuestionCreateOrConnectWithoutCollectorsInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutUpvotesInput = {
    create?:
      | XOR<
          AnswerCreateWithoutUpvotesInput,
          AnswerUncheckedCreateWithoutUpvotesInput
        >
      | AnswerCreateWithoutUpvotesInput[]
      | AnswerUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutUpvotesInput
      | AnswerCreateOrConnectWithoutUpvotesInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutDownvotesInput = {
    create?:
      | XOR<
          AnswerCreateWithoutDownvotesInput,
          AnswerUncheckedCreateWithoutDownvotesInput
        >
      | AnswerCreateWithoutDownvotesInput[]
      | AnswerUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutDownvotesInput
      | AnswerCreateOrConnectWithoutDownvotesInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type TagUpdateManyWithoutFollowersNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutFollowersInput,
          TagUncheckedCreateWithoutFollowersInput
        >
      | TagCreateWithoutFollowersInput[]
      | TagUncheckedCreateWithoutFollowersInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutFollowersInput
      | TagCreateOrConnectWithoutFollowersInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutFollowersInput
      | TagUpsertWithWhereUniqueWithoutFollowersInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutFollowersInput
      | TagUpdateWithWhereUniqueWithoutFollowersInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutFollowersInput
      | TagUpdateManyWithWhereWithoutFollowersInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type TagUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<TagCreateWithoutCreatorInput, TagUncheckedCreateWithoutCreatorInput>
      | TagCreateWithoutCreatorInput[]
      | TagUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutCreatorInput
      | TagCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutCreatorInput
      | TagUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: TagCreateManyCreatorInputEnvelope;
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutCreatorInput
      | TagUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutCreatorInput
      | TagUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutAuthorInput
      | QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUpdateManyWithoutUpvotesNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutUpvotesInput,
          QuestionUncheckedCreateWithoutUpvotesInput
        >
      | QuestionCreateWithoutUpvotesInput[]
      | QuestionUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutUpvotesInput
      | QuestionCreateOrConnectWithoutUpvotesInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutUpvotesInput
      | QuestionUpsertWithWhereUniqueWithoutUpvotesInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutUpvotesInput
      | QuestionUpdateWithWhereUniqueWithoutUpvotesInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutUpvotesInput
      | QuestionUpdateManyWithWhereWithoutUpvotesInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUpdateManyWithoutDownvotesNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutDownvotesInput,
          QuestionUncheckedCreateWithoutDownvotesInput
        >
      | QuestionCreateWithoutDownvotesInput[]
      | QuestionUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutDownvotesInput
      | QuestionCreateOrConnectWithoutDownvotesInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutDownvotesInput
      | QuestionUpsertWithWhereUniqueWithoutDownvotesInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutDownvotesInput
      | QuestionUpdateWithWhereUniqueWithoutDownvotesInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutDownvotesInput
      | QuestionUpdateManyWithWhereWithoutDownvotesInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUpdateManyWithoutCollectorsNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutCollectorsInput,
          QuestionUncheckedCreateWithoutCollectorsInput
        >
      | QuestionCreateWithoutCollectorsInput[]
      | QuestionUncheckedCreateWithoutCollectorsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutCollectorsInput
      | QuestionCreateOrConnectWithoutCollectorsInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutCollectorsInput
      | QuestionUpsertWithWhereUniqueWithoutCollectorsInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutCollectorsInput
      | QuestionUpdateWithWhereUniqueWithoutCollectorsInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutCollectorsInput
      | QuestionUpdateManyWithWhereWithoutCollectorsInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type AnswerUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutAuthorInput
      | AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type AnswerUpdateManyWithoutUpvotesNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutUpvotesInput,
          AnswerUncheckedCreateWithoutUpvotesInput
        >
      | AnswerCreateWithoutUpvotesInput[]
      | AnswerUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutUpvotesInput
      | AnswerCreateOrConnectWithoutUpvotesInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutUpvotesInput
      | AnswerUpsertWithWhereUniqueWithoutUpvotesInput[];
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutUpvotesInput
      | AnswerUpdateWithWhereUniqueWithoutUpvotesInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutUpvotesInput
      | AnswerUpdateManyWithWhereWithoutUpvotesInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type AnswerUpdateManyWithoutDownvotesNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutDownvotesInput,
          AnswerUncheckedCreateWithoutDownvotesInput
        >
      | AnswerCreateWithoutDownvotesInput[]
      | AnswerUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutDownvotesInput
      | AnswerCreateOrConnectWithoutDownvotesInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutDownvotesInput
      | AnswerUpsertWithWhereUniqueWithoutDownvotesInput[];
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutDownvotesInput
      | AnswerUpdateWithWhereUniqueWithoutDownvotesInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutDownvotesInput
      | AnswerUpdateManyWithWhereWithoutDownvotesInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutFollowersInput,
          TagUncheckedCreateWithoutFollowersInput
        >
      | TagCreateWithoutFollowersInput[]
      | TagUncheckedCreateWithoutFollowersInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutFollowersInput
      | TagCreateOrConnectWithoutFollowersInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutFollowersInput
      | TagUpsertWithWhereUniqueWithoutFollowersInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutFollowersInput
      | TagUpdateWithWhereUniqueWithoutFollowersInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutFollowersInput
      | TagUpdateManyWithWhereWithoutFollowersInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?:
      | XOR<TagCreateWithoutCreatorInput, TagUncheckedCreateWithoutCreatorInput>
      | TagCreateWithoutCreatorInput[]
      | TagUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutCreatorInput
      | TagCreateOrConnectWithoutCreatorInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutCreatorInput
      | TagUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: TagCreateManyCreatorInputEnvelope;
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutCreatorInput
      | TagUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutCreatorInput
      | TagUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutAuthorInput
      | QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUncheckedUpdateManyWithoutUpvotesNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutUpvotesInput,
          QuestionUncheckedCreateWithoutUpvotesInput
        >
      | QuestionCreateWithoutUpvotesInput[]
      | QuestionUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutUpvotesInput
      | QuestionCreateOrConnectWithoutUpvotesInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutUpvotesInput
      | QuestionUpsertWithWhereUniqueWithoutUpvotesInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutUpvotesInput
      | QuestionUpdateWithWhereUniqueWithoutUpvotesInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutUpvotesInput
      | QuestionUpdateManyWithWhereWithoutUpvotesInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUncheckedUpdateManyWithoutDownvotesNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutDownvotesInput,
          QuestionUncheckedCreateWithoutDownvotesInput
        >
      | QuestionCreateWithoutDownvotesInput[]
      | QuestionUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutDownvotesInput
      | QuestionCreateOrConnectWithoutDownvotesInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutDownvotesInput
      | QuestionUpsertWithWhereUniqueWithoutDownvotesInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutDownvotesInput
      | QuestionUpdateWithWhereUniqueWithoutDownvotesInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutDownvotesInput
      | QuestionUpdateManyWithWhereWithoutDownvotesInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type QuestionUncheckedUpdateManyWithoutCollectorsNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutCollectorsInput,
          QuestionUncheckedCreateWithoutCollectorsInput
        >
      | QuestionCreateWithoutCollectorsInput[]
      | QuestionUncheckedCreateWithoutCollectorsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutCollectorsInput
      | QuestionCreateOrConnectWithoutCollectorsInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutCollectorsInput
      | QuestionUpsertWithWhereUniqueWithoutCollectorsInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutCollectorsInput
      | QuestionUpdateWithWhereUniqueWithoutCollectorsInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutCollectorsInput
      | QuestionUpdateManyWithWhereWithoutCollectorsInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutAuthorInput
      | AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutUpvotesNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutUpvotesInput,
          AnswerUncheckedCreateWithoutUpvotesInput
        >
      | AnswerCreateWithoutUpvotesInput[]
      | AnswerUncheckedCreateWithoutUpvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutUpvotesInput
      | AnswerCreateOrConnectWithoutUpvotesInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutUpvotesInput
      | AnswerUpsertWithWhereUniqueWithoutUpvotesInput[];
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutUpvotesInput
      | AnswerUpdateWithWhereUniqueWithoutUpvotesInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutUpvotesInput
      | AnswerUpdateManyWithWhereWithoutUpvotesInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutDownvotesNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutDownvotesInput,
          AnswerUncheckedCreateWithoutDownvotesInput
        >
      | AnswerCreateWithoutDownvotesInput[]
      | AnswerUncheckedCreateWithoutDownvotesInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutDownvotesInput
      | AnswerCreateOrConnectWithoutDownvotesInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutDownvotesInput
      | AnswerUpsertWithWhereUniqueWithoutDownvotesInput[];
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutDownvotesInput
      | AnswerUpdateWithWhereUniqueWithoutDownvotesInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutDownvotesInput
      | AnswerUpdateManyWithWhereWithoutDownvotesInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type QuestionCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          QuestionCreateWithoutTagsInput,
          QuestionUncheckedCreateWithoutTagsInput
        >
      | QuestionCreateWithoutTagsInput[]
      | QuestionUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutTagsInput
      | QuestionCreateOrConnectWithoutTagsInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutFollowedTagsInput = {
    create?:
      | XOR<
          UserCreateWithoutFollowedTagsInput,
          UserUncheckedCreateWithoutFollowedTagsInput
        >
      | UserCreateWithoutFollowedTagsInput[]
      | UserUncheckedCreateWithoutFollowedTagsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutFollowedTagsInput
      | UserCreateOrConnectWithoutFollowedTagsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutCreatedTagsInput = {
    create?: XOR<
      UserCreateWithoutCreatedTagsInput,
      UserUncheckedCreateWithoutCreatedTagsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTagsInput;
    connect?: UserWhereUniqueInput;
  };

  export type QuestionUncheckedCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          QuestionCreateWithoutTagsInput,
          QuestionUncheckedCreateWithoutTagsInput
        >
      | QuestionCreateWithoutTagsInput[]
      | QuestionUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutTagsInput
      | QuestionCreateOrConnectWithoutTagsInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutFollowedTagsInput = {
    create?:
      | XOR<
          UserCreateWithoutFollowedTagsInput,
          UserUncheckedCreateWithoutFollowedTagsInput
        >
      | UserCreateWithoutFollowedTagsInput[]
      | UserUncheckedCreateWithoutFollowedTagsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutFollowedTagsInput
      | UserCreateOrConnectWithoutFollowedTagsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type QuestionUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutTagsInput,
          QuestionUncheckedCreateWithoutTagsInput
        >
      | QuestionCreateWithoutTagsInput[]
      | QuestionUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutTagsInput
      | QuestionCreateOrConnectWithoutTagsInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutTagsInput
      | QuestionUpsertWithWhereUniqueWithoutTagsInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutTagsInput
      | QuestionUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutTagsInput
      | QuestionUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type UserUpdateManyWithoutFollowedTagsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutFollowedTagsInput,
          UserUncheckedCreateWithoutFollowedTagsInput
        >
      | UserCreateWithoutFollowedTagsInput[]
      | UserUncheckedCreateWithoutFollowedTagsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutFollowedTagsInput
      | UserCreateOrConnectWithoutFollowedTagsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutFollowedTagsInput
      | UserUpsertWithWhereUniqueWithoutFollowedTagsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutFollowedTagsInput
      | UserUpdateWithWhereUniqueWithoutFollowedTagsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutFollowedTagsInput
      | UserUpdateManyWithWhereWithoutFollowedTagsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutCreatedTagsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedTagsInput,
      UserUncheckedCreateWithoutCreatedTagsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTagsInput;
    upsert?: UserUpsertWithoutCreatedTagsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedTagsInput,
        UserUpdateWithoutCreatedTagsInput
      >,
      UserUncheckedUpdateWithoutCreatedTagsInput
    >;
  };

  export type QuestionUncheckedUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutTagsInput,
          QuestionUncheckedCreateWithoutTagsInput
        >
      | QuestionCreateWithoutTagsInput[]
      | QuestionUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutTagsInput
      | QuestionCreateOrConnectWithoutTagsInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutTagsInput
      | QuestionUpsertWithWhereUniqueWithoutTagsInput[];
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutTagsInput
      | QuestionUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutTagsInput
      | QuestionUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutFollowedTagsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutFollowedTagsInput,
          UserUncheckedCreateWithoutFollowedTagsInput
        >
      | UserCreateWithoutFollowedTagsInput[]
      | UserUncheckedCreateWithoutFollowedTagsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutFollowedTagsInput
      | UserCreateOrConnectWithoutFollowedTagsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutFollowedTagsInput
      | UserUpsertWithWhereUniqueWithoutFollowedTagsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutFollowedTagsInput
      | UserUpdateWithWhereUniqueWithoutFollowedTagsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutFollowedTagsInput
      | UserUpdateManyWithWhereWithoutFollowedTagsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type TagCreateNestedManyWithoutQuestionsInput = {
    create?:
      | XOR<
          TagCreateWithoutQuestionsInput,
          TagUncheckedCreateWithoutQuestionsInput
        >
      | TagCreateWithoutQuestionsInput[]
      | TagUncheckedCreateWithoutQuestionsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutQuestionsInput
      | TagCreateOrConnectWithoutQuestionsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutUpvoteQuestionsInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteQuestionsInput,
          UserUncheckedCreateWithoutUpvoteQuestionsInput
        >
      | UserCreateWithoutUpvoteQuestionsInput[]
      | UserUncheckedCreateWithoutUpvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteQuestionsInput
      | UserCreateOrConnectWithoutUpvoteQuestionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutDownvoteQuestionsInput = {
    create?:
      | XOR<
          UserCreateWithoutDownvoteQuestionsInput,
          UserUncheckedCreateWithoutDownvoteQuestionsInput
        >
      | UserCreateWithoutDownvoteQuestionsInput[]
      | UserUncheckedCreateWithoutDownvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownvoteQuestionsInput
      | UserCreateOrConnectWithoutDownvoteQuestionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutCollectionsInput = {
    create?:
      | XOR<
          UserCreateWithoutCollectionsInput,
          UserUncheckedCreateWithoutCollectionsInput
        >
      | UserCreateWithoutCollectionsInput[]
      | UserUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutCollectionsInput
      | UserCreateOrConnectWithoutCollectionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type TagUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?:
      | XOR<
          TagCreateWithoutQuestionsInput,
          TagUncheckedCreateWithoutQuestionsInput
        >
      | TagCreateWithoutQuestionsInput[]
      | TagUncheckedCreateWithoutQuestionsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutQuestionsInput
      | TagCreateOrConnectWithoutQuestionsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteQuestionsInput,
          UserUncheckedCreateWithoutUpvoteQuestionsInput
        >
      | UserCreateWithoutUpvoteQuestionsInput[]
      | UserUncheckedCreateWithoutUpvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteQuestionsInput
      | UserCreateOrConnectWithoutUpvoteQuestionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput = {
    create?:
      | XOR<
          UserCreateWithoutDownvoteQuestionsInput,
          UserUncheckedCreateWithoutDownvoteQuestionsInput
        >
      | UserCreateWithoutDownvoteQuestionsInput[]
      | UserUncheckedCreateWithoutDownvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownvoteQuestionsInput
      | UserCreateOrConnectWithoutDownvoteQuestionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutCollectionsInput = {
    create?:
      | XOR<
          UserCreateWithoutCollectionsInput,
          UserUncheckedCreateWithoutCollectionsInput
        >
      | UserCreateWithoutCollectionsInput[]
      | UserUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutCollectionsInput
      | UserCreateOrConnectWithoutCollectionsInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type TagUpdateManyWithoutQuestionsNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutQuestionsInput,
          TagUncheckedCreateWithoutQuestionsInput
        >
      | TagCreateWithoutQuestionsInput[]
      | TagUncheckedCreateWithoutQuestionsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutQuestionsInput
      | TagCreateOrConnectWithoutQuestionsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutQuestionsInput
      | TagUpsertWithWhereUniqueWithoutQuestionsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutQuestionsInput
      | TagUpdateWithWhereUniqueWithoutQuestionsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutQuestionsInput
      | TagUpdateManyWithWhereWithoutQuestionsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutQuestionInput
      | AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type UserUpdateManyWithoutUpvoteQuestionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteQuestionsInput,
          UserUncheckedCreateWithoutUpvoteQuestionsInput
        >
      | UserCreateWithoutUpvoteQuestionsInput[]
      | UserUncheckedCreateWithoutUpvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteQuestionsInput
      | UserCreateOrConnectWithoutUpvoteQuestionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutUpvoteQuestionsInput
      | UserUpsertWithWhereUniqueWithoutUpvoteQuestionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutUpvoteQuestionsInput
      | UserUpdateWithWhereUniqueWithoutUpvoteQuestionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutUpvoteQuestionsInput
      | UserUpdateManyWithWhereWithoutUpvoteQuestionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUpdateManyWithoutDownvoteQuestionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutDownvoteQuestionsInput,
          UserUncheckedCreateWithoutDownvoteQuestionsInput
        >
      | UserCreateWithoutDownvoteQuestionsInput[]
      | UserUncheckedCreateWithoutDownvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownvoteQuestionsInput
      | UserCreateOrConnectWithoutDownvoteQuestionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutDownvoteQuestionsInput
      | UserUpsertWithWhereUniqueWithoutDownvoteQuestionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutDownvoteQuestionsInput
      | UserUpdateWithWhereUniqueWithoutDownvoteQuestionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutDownvoteQuestionsInput
      | UserUpdateManyWithWhereWithoutDownvoteQuestionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUpdateManyWithoutCollectionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutCollectionsInput,
          UserUncheckedCreateWithoutCollectionsInput
        >
      | UserCreateWithoutCollectionsInput[]
      | UserUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutCollectionsInput
      | UserCreateOrConnectWithoutCollectionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutCollectionsInput
      | UserUpsertWithWhereUniqueWithoutCollectionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutCollectionsInput
      | UserUpdateWithWhereUniqueWithoutCollectionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutCollectionsInput
      | UserUpdateManyWithWhereWithoutCollectionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
    upsert?: UserUpsertWithoutQuestionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutQuestionsInput,
        UserUpdateWithoutQuestionsInput
      >,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type TagUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutQuestionsInput,
          TagUncheckedCreateWithoutQuestionsInput
        >
      | TagCreateWithoutQuestionsInput[]
      | TagUncheckedCreateWithoutQuestionsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutQuestionsInput
      | TagCreateOrConnectWithoutQuestionsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutQuestionsInput
      | TagUpsertWithWhereUniqueWithoutQuestionsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutQuestionsInput
      | TagUpdateWithWhereUniqueWithoutQuestionsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutQuestionsInput
      | TagUpdateManyWithWhereWithoutQuestionsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutQuestionInput
      | AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteQuestionsInput,
          UserUncheckedCreateWithoutUpvoteQuestionsInput
        >
      | UserCreateWithoutUpvoteQuestionsInput[]
      | UserUncheckedCreateWithoutUpvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteQuestionsInput
      | UserCreateOrConnectWithoutUpvoteQuestionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutUpvoteQuestionsInput
      | UserUpsertWithWhereUniqueWithoutUpvoteQuestionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutUpvoteQuestionsInput
      | UserUpdateWithWhereUniqueWithoutUpvoteQuestionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutUpvoteQuestionsInput
      | UserUpdateManyWithWhereWithoutUpvoteQuestionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutDownvoteQuestionsInput,
          UserUncheckedCreateWithoutDownvoteQuestionsInput
        >
      | UserCreateWithoutDownvoteQuestionsInput[]
      | UserUncheckedCreateWithoutDownvoteQuestionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownvoteQuestionsInput
      | UserCreateOrConnectWithoutDownvoteQuestionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutDownvoteQuestionsInput
      | UserUpsertWithWhereUniqueWithoutDownvoteQuestionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutDownvoteQuestionsInput
      | UserUpdateWithWhereUniqueWithoutDownvoteQuestionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutDownvoteQuestionsInput
      | UserUpdateManyWithWhereWithoutDownvoteQuestionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutCollectionsNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutCollectionsInput,
          UserUncheckedCreateWithoutCollectionsInput
        >
      | UserCreateWithoutCollectionsInput[]
      | UserUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutCollectionsInput
      | UserCreateOrConnectWithoutCollectionsInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutCollectionsInput
      | UserUpsertWithWhereUniqueWithoutCollectionsInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutCollectionsInput
      | UserUpdateWithWhereUniqueWithoutCollectionsInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutCollectionsInput
      | UserUpdateManyWithWhereWithoutCollectionsInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedManyWithoutUpvoteAnswersInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteAnswersInput,
          UserUncheckedCreateWithoutUpvoteAnswersInput
        >
      | UserCreateWithoutUpvoteAnswersInput[]
      | UserUncheckedCreateWithoutUpvoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteAnswersInput
      | UserCreateOrConnectWithoutUpvoteAnswersInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserCreateNestedManyWithoutDownVoteAnswersInput = {
    create?:
      | XOR<
          UserCreateWithoutDownVoteAnswersInput,
          UserUncheckedCreateWithoutDownVoteAnswersInput
        >
      | UserCreateWithoutDownVoteAnswersInput[]
      | UserUncheckedCreateWithoutDownVoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownVoteAnswersInput
      | UserCreateOrConnectWithoutDownVoteAnswersInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type UserUncheckedCreateNestedManyWithoutUpvoteAnswersInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteAnswersInput,
          UserUncheckedCreateWithoutUpvoteAnswersInput
        >
      | UserCreateWithoutUpvoteAnswersInput[]
      | UserUncheckedCreateWithoutUpvoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteAnswersInput
      | UserCreateOrConnectWithoutUpvoteAnswersInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutDownVoteAnswersInput = {
    create?:
      | XOR<
          UserCreateWithoutDownVoteAnswersInput,
          UserUncheckedCreateWithoutDownVoteAnswersInput
        >
      | UserCreateWithoutDownVoteAnswersInput[]
      | UserUncheckedCreateWithoutDownVoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownVoteAnswersInput
      | UserCreateOrConnectWithoutDownVoteAnswersInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;
    upsert?: UserUpsertWithoutAnswersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAnswersInput,
        UserUpdateWithoutAnswersInput
      >,
      UserUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type UserUpdateManyWithoutUpvoteAnswersNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteAnswersInput,
          UserUncheckedCreateWithoutUpvoteAnswersInput
        >
      | UserCreateWithoutUpvoteAnswersInput[]
      | UserUncheckedCreateWithoutUpvoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteAnswersInput
      | UserCreateOrConnectWithoutUpvoteAnswersInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutUpvoteAnswersInput
      | UserUpsertWithWhereUniqueWithoutUpvoteAnswersInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutUpvoteAnswersInput
      | UserUpdateWithWhereUniqueWithoutUpvoteAnswersInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutUpvoteAnswersInput
      | UserUpdateManyWithWhereWithoutUpvoteAnswersInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUpdateManyWithoutDownVoteAnswersNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutDownVoteAnswersInput,
          UserUncheckedCreateWithoutDownVoteAnswersInput
        >
      | UserCreateWithoutDownVoteAnswersInput[]
      | UserUncheckedCreateWithoutDownVoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownVoteAnswersInput
      | UserCreateOrConnectWithoutDownVoteAnswersInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutDownVoteAnswersInput
      | UserUpsertWithWhereUniqueWithoutDownVoteAnswersInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutDownVoteAnswersInput
      | UserUpdateWithWhereUniqueWithoutDownVoteAnswersInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutDownVoteAnswersInput
      | UserUpdateManyWithWhereWithoutDownVoteAnswersInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;
    upsert?: QuestionUpsertWithoutAnswersInput;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      XOR<
        QuestionUpdateToOneWithWhereWithoutAnswersInput,
        QuestionUpdateWithoutAnswersInput
      >,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type UserUncheckedUpdateManyWithoutUpvoteAnswersNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutUpvoteAnswersInput,
          UserUncheckedCreateWithoutUpvoteAnswersInput
        >
      | UserCreateWithoutUpvoteAnswersInput[]
      | UserUncheckedCreateWithoutUpvoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutUpvoteAnswersInput
      | UserCreateOrConnectWithoutUpvoteAnswersInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutUpvoteAnswersInput
      | UserUpsertWithWhereUniqueWithoutUpvoteAnswersInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutUpvoteAnswersInput
      | UserUpdateWithWhereUniqueWithoutUpvoteAnswersInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutUpvoteAnswersInput
      | UserUpdateManyWithWhereWithoutUpvoteAnswersInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutDownVoteAnswersNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutDownVoteAnswersInput,
          UserUncheckedCreateWithoutDownVoteAnswersInput
        >
      | UserCreateWithoutDownVoteAnswersInput[]
      | UserUncheckedCreateWithoutDownVoteAnswersInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutDownVoteAnswersInput
      | UserCreateOrConnectWithoutDownVoteAnswersInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutDownVoteAnswersInput
      | UserUpsertWithWhereUniqueWithoutDownVoteAnswersInput[];
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutDownVoteAnswersInput
      | UserUpdateWithWhereUniqueWithoutDownVoteAnswersInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutDownVoteAnswersInput
      | UserUpdateManyWithWhereWithoutDownVoteAnswersInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type TagCreateWithoutFollowersInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    questions?: QuestionCreateNestedManyWithoutTagsInput;
    creator: UserCreateNestedOneWithoutCreatedTagsInput;
  };

  export type TagUncheckedCreateWithoutFollowersInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    creatorId: string;
    questions?: QuestionUncheckedCreateNestedManyWithoutTagsInput;
  };

  export type TagCreateOrConnectWithoutFollowersInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutFollowersInput,
      TagUncheckedCreateWithoutFollowersInput
    >;
  };

  export type TagCreateWithoutCreatorInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    questions?: QuestionCreateNestedManyWithoutTagsInput;
    followers?: UserCreateNestedManyWithoutFollowedTagsInput;
  };

  export type TagUncheckedCreateWithoutCreatorInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    questions?: QuestionUncheckedCreateNestedManyWithoutTagsInput;
    followers?: UserUncheckedCreateNestedManyWithoutFollowedTagsInput;
  };

  export type TagCreateOrConnectWithoutCreatorInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutCreatorInput,
      TagUncheckedCreateWithoutCreatorInput
    >;
  };

  export type TagCreateManyCreatorInputEnvelope = {
    data: TagCreateManyCreatorInput | TagCreateManyCreatorInput[];
    skipDuplicates?: boolean;
  };

  export type QuestionCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutAuthorInput,
      QuestionUncheckedCreateWithoutAuthorInput
    >;
  };

  export type QuestionCreateManyAuthorInputEnvelope = {
    data: QuestionCreateManyAuthorInput | QuestionCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type QuestionCreateWithoutUpvotesInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateWithoutUpvotesInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionCreateOrConnectWithoutUpvotesInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutUpvotesInput,
      QuestionUncheckedCreateWithoutUpvotesInput
    >;
  };

  export type QuestionCreateWithoutDownvotesInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateWithoutDownvotesInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionCreateOrConnectWithoutDownvotesInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutDownvotesInput,
      QuestionUncheckedCreateWithoutDownvotesInput
    >;
  };

  export type QuestionCreateWithoutCollectorsInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateWithoutCollectorsInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
  };

  export type QuestionCreateOrConnectWithoutCollectorsInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutCollectorsInput,
      QuestionUncheckedCreateWithoutCollectorsInput
    >;
  };

  export type AnswerCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    upvotes?: UserCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserCreateNestedManyWithoutDownVoteAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
  };

  export type AnswerUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    questionId: string;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownVoteAnswersInput;
  };

  export type AnswerCreateOrConnectWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutAuthorInput,
      AnswerUncheckedCreateWithoutAuthorInput
    >;
  };

  export type AnswerCreateManyAuthorInputEnvelope = {
    data: AnswerCreateManyAuthorInput | AnswerCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type AnswerCreateWithoutUpvotesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    downvotes?: UserCreateNestedManyWithoutDownVoteAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
  };

  export type AnswerUncheckedCreateWithoutUpvotesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
    questionId: string;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownVoteAnswersInput;
  };

  export type AnswerCreateOrConnectWithoutUpvotesInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutUpvotesInput,
      AnswerUncheckedCreateWithoutUpvotesInput
    >;
  };

  export type AnswerCreateWithoutDownvotesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
  };

  export type AnswerUncheckedCreateWithoutDownvotesInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
    questionId: string;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteAnswersInput;
  };

  export type AnswerCreateOrConnectWithoutDownvotesInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutDownvotesInput,
      AnswerUncheckedCreateWithoutDownvotesInput
    >;
  };

  export type TagUpsertWithWhereUniqueWithoutFollowersInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutFollowersInput,
      TagUncheckedUpdateWithoutFollowersInput
    >;
    create: XOR<
      TagCreateWithoutFollowersInput,
      TagUncheckedCreateWithoutFollowersInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutFollowersInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutFollowersInput,
      TagUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutFollowersInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutFollowersInput
    >;
  };

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[];
    OR?: TagScalarWhereInput[];
    NOT?: TagScalarWhereInput | TagScalarWhereInput[];
    id?: StringFilter<"Tag"> | string;
    name?: StringFilter<"Tag"> | string;
    description?: StringFilter<"Tag"> | string;
    createdAt?: DateTimeFilter<"Tag"> | Date | string;
    creatorId?: StringFilter<"Tag"> | string;
  };

  export type TagUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutCreatorInput,
      TagUncheckedUpdateWithoutCreatorInput
    >;
    create: XOR<
      TagCreateWithoutCreatorInput,
      TagUncheckedCreateWithoutCreatorInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutCreatorInput,
      TagUncheckedUpdateWithoutCreatorInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutCreatorInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutCreatorInput
    >;
  };

  export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutAuthorInput,
      QuestionUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      QuestionCreateWithoutAuthorInput,
      QuestionUncheckedCreateWithoutAuthorInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutAuthorInput,
      QuestionUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
    OR?: QuestionScalarWhereInput[];
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
    id?: StringFilter<"Question"> | string;
    title?: StringFilter<"Question"> | string;
    content?: StringFilter<"Question"> | string;
    views?: IntFilter<"Question"> | number;
    authorId?: StringFilter<"Question"> | string;
    createdAt?: DateTimeFilter<"Question"> | Date | string;
  };

  export type QuestionUpsertWithWhereUniqueWithoutUpvotesInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutUpvotesInput,
      QuestionUncheckedUpdateWithoutUpvotesInput
    >;
    create: XOR<
      QuestionCreateWithoutUpvotesInput,
      QuestionUncheckedCreateWithoutUpvotesInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutUpvotesInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutUpvotesInput,
      QuestionUncheckedUpdateWithoutUpvotesInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutUpvotesInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutUpvotesInput
    >;
  };

  export type QuestionUpsertWithWhereUniqueWithoutDownvotesInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutDownvotesInput,
      QuestionUncheckedUpdateWithoutDownvotesInput
    >;
    create: XOR<
      QuestionCreateWithoutDownvotesInput,
      QuestionUncheckedCreateWithoutDownvotesInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutDownvotesInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutDownvotesInput,
      QuestionUncheckedUpdateWithoutDownvotesInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutDownvotesInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutDownvotesInput
    >;
  };

  export type QuestionUpsertWithWhereUniqueWithoutCollectorsInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutCollectorsInput,
      QuestionUncheckedUpdateWithoutCollectorsInput
    >;
    create: XOR<
      QuestionCreateWithoutCollectorsInput,
      QuestionUncheckedCreateWithoutCollectorsInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutCollectorsInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutCollectorsInput,
      QuestionUncheckedUpdateWithoutCollectorsInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutCollectorsInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutCollectorsInput
    >;
  };

  export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutAuthorInput,
      AnswerUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      AnswerCreateWithoutAuthorInput,
      AnswerUncheckedCreateWithoutAuthorInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutAuthorInput,
      AnswerUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
    OR?: AnswerScalarWhereInput[];
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
    id?: StringFilter<"Answer"> | string;
    content?: StringFilter<"Answer"> | string;
    createdAt?: DateTimeFilter<"Answer"> | Date | string;
    authorId?: StringFilter<"Answer"> | string;
    questionId?: StringFilter<"Answer"> | string;
  };

  export type AnswerUpsertWithWhereUniqueWithoutUpvotesInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutUpvotesInput,
      AnswerUncheckedUpdateWithoutUpvotesInput
    >;
    create: XOR<
      AnswerCreateWithoutUpvotesInput,
      AnswerUncheckedCreateWithoutUpvotesInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutUpvotesInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutUpvotesInput,
      AnswerUncheckedUpdateWithoutUpvotesInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutUpvotesInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutUpvotesInput
    >;
  };

  export type AnswerUpsertWithWhereUniqueWithoutDownvotesInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutDownvotesInput,
      AnswerUncheckedUpdateWithoutDownvotesInput
    >;
    create: XOR<
      AnswerCreateWithoutDownvotesInput,
      AnswerUncheckedCreateWithoutDownvotesInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutDownvotesInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutDownvotesInput,
      AnswerUncheckedUpdateWithoutDownvotesInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutDownvotesInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutDownvotesInput
    >;
  };

  export type QuestionCreateWithoutTagsInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateWithoutTagsInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionCreateOrConnectWithoutTagsInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
  };

  export type UserCreateWithoutFollowedTagsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutFollowedTagsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutFollowedTagsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFollowedTagsInput,
      UserUncheckedCreateWithoutFollowedTagsInput
    >;
  };

  export type UserCreateWithoutCreatedTagsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutCreatedTagsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutCreatedTagsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedTagsInput,
      UserUncheckedCreateWithoutCreatedTagsInput
    >;
  };

  export type QuestionUpsertWithWhereUniqueWithoutTagsInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutTagsInput,
      QuestionUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutTagsInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutTagsInput,
      QuestionUncheckedUpdateWithoutTagsInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutTagsInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutTagsInput
    >;
  };

  export type UserUpsertWithWhereUniqueWithoutFollowedTagsInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutFollowedTagsInput,
      UserUncheckedUpdateWithoutFollowedTagsInput
    >;
    create: XOR<
      UserCreateWithoutFollowedTagsInput,
      UserUncheckedCreateWithoutFollowedTagsInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutFollowedTagsInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutFollowedTagsInput,
      UserUncheckedUpdateWithoutFollowedTagsInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutFollowedTagsInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutFollowedTagsInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: StringFilter<"User"> | string;
    clerkId?: StringFilter<"User"> | string;
    fullName?: StringFilter<"User"> | string;
    username?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    imageUrl?: StringFilter<"User"> | string;
    portfolioWebsite?: StringNullableFilter<"User"> | string | null;
    location?: StringNullableFilter<"User"> | string | null;
    bio?: StringNullableFilter<"User"> | string | null;
    reputation?: IntFilter<"User"> | number;
    createdAt?: DateTimeFilter<"User"> | Date | string;
  };

  export type UserUpsertWithoutCreatedTagsInput = {
    update: XOR<
      UserUpdateWithoutCreatedTagsInput,
      UserUncheckedUpdateWithoutCreatedTagsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedTagsInput,
      UserUncheckedCreateWithoutCreatedTagsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedTagsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedTagsInput,
      UserUncheckedUpdateWithoutCreatedTagsInput
    >;
  };

  export type UserUpdateWithoutCreatedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type TagCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    followers?: UserCreateNestedManyWithoutFollowedTagsInput;
    creator: UserCreateNestedOneWithoutCreatedTagsInput;
  };

  export type TagUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
    creatorId: string;
    followers?: UserUncheckedCreateNestedManyWithoutFollowedTagsInput;
  };

  export type TagCreateOrConnectWithoutQuestionsInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
  };

  export type AnswerCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserCreateNestedManyWithoutDownVoteAnswersInput;
  };

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteAnswersInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownVoteAnswersInput;
  };

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutQuestionInput,
      AnswerUncheckedCreateWithoutQuestionInput
    >;
  };

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutUpvoteQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutUpvoteQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutUpvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutUpvoteQuestionsInput,
      UserUncheckedCreateWithoutUpvoteQuestionsInput
    >;
  };

  export type UserCreateWithoutDownvoteQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutDownvoteQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutDownvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutDownvoteQuestionsInput,
      UserUncheckedCreateWithoutDownvoteQuestionsInput
    >;
  };

  export type UserCreateWithoutCollectionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
  };

  export type UserCreateWithoutQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
  };

  export type TagUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutQuestionsInput,
      TagUncheckedUpdateWithoutQuestionsInput
    >;
    create: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutQuestionsInput,
      TagUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutQuestionsInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutQuestionsInput
    >;
  };

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutQuestionInput,
      AnswerUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      AnswerCreateWithoutQuestionInput,
      AnswerUncheckedCreateWithoutQuestionInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutQuestionInput,
      AnswerUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type UserUpsertWithWhereUniqueWithoutUpvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutUpvoteQuestionsInput,
      UserUncheckedUpdateWithoutUpvoteQuestionsInput
    >;
    create: XOR<
      UserCreateWithoutUpvoteQuestionsInput,
      UserUncheckedCreateWithoutUpvoteQuestionsInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutUpvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutUpvoteQuestionsInput,
      UserUncheckedUpdateWithoutUpvoteQuestionsInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutUpvoteQuestionsInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutUpvoteQuestionsInput
    >;
  };

  export type UserUpsertWithWhereUniqueWithoutDownvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutDownvoteQuestionsInput,
      UserUncheckedUpdateWithoutDownvoteQuestionsInput
    >;
    create: XOR<
      UserCreateWithoutDownvoteQuestionsInput,
      UserUncheckedCreateWithoutDownvoteQuestionsInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutDownvoteQuestionsInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutDownvoteQuestionsInput,
      UserUncheckedUpdateWithoutDownvoteQuestionsInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutDownvoteQuestionsInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutDownvoteQuestionsInput
    >;
  };

  export type UserUpsertWithWhereUniqueWithoutCollectionsInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutCollectionsInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutCollectionsInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutCollectionsInput
    >;
  };

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<
      UserUpdateWithoutQuestionsInput,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
    create: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutQuestionsInput,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserCreateWithoutAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
  };

  export type UserCreateWithoutUpvoteAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    downVoteAnswers?: AnswerCreateNestedManyWithoutDownvotesInput;
  };

  export type UserUncheckedCreateWithoutUpvoteAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    downVoteAnswers?: AnswerUncheckedCreateNestedManyWithoutDownvotesInput;
  };

  export type UserCreateOrConnectWithoutUpvoteAnswersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutUpvoteAnswersInput,
      UserUncheckedCreateWithoutUpvoteAnswersInput
    >;
  };

  export type UserCreateWithoutDownVoteAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagCreateNestedManyWithoutFollowersInput;
    createdTags?: TagCreateNestedManyWithoutCreatorInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerCreateNestedManyWithoutUpvotesInput;
  };

  export type UserUncheckedCreateWithoutDownVoteAnswersInput = {
    id?: string;
    clerkId: string;
    fullName: string;
    username: string;
    email: string;
    imageUrl: string;
    portfolioWebsite?: string | null;
    location?: string | null;
    bio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    followedTags?: TagUncheckedCreateNestedManyWithoutFollowersInput;
    createdTags?: TagUncheckedCreateNestedManyWithoutCreatorInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutUpvotesInput;
    downvoteQuestions?: QuestionUncheckedCreateNestedManyWithoutDownvotesInput;
    collections?: QuestionUncheckedCreateNestedManyWithoutCollectorsInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    upvoteAnswers?: AnswerUncheckedCreateNestedManyWithoutUpvotesInput;
  };

  export type UserCreateOrConnectWithoutDownVoteAnswersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutDownVoteAnswersInput,
      UserUncheckedCreateWithoutDownVoteAnswersInput
    >;
  };

  export type QuestionCreateWithoutAnswersInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
    tags?: TagCreateNestedManyWithoutQuestionsInput;
    upvotes?: UserCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserCreateNestedManyWithoutCollectionsInput;
    author: UserCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    authorId: string;
    createdAt?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutQuestionsInput;
    upvotes?: UserUncheckedCreateNestedManyWithoutUpvoteQuestionsInput;
    downvotes?: UserUncheckedCreateNestedManyWithoutDownvoteQuestionsInput;
    collectors?: UserUncheckedCreateNestedManyWithoutCollectionsInput;
  };

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
  };

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<
      UserUpdateWithoutAnswersInput,
      UserUncheckedUpdateWithoutAnswersInput
    >;
    create: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAnswersInput,
      UserUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUpsertWithWhereUniqueWithoutUpvoteAnswersInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutUpvoteAnswersInput,
      UserUncheckedUpdateWithoutUpvoteAnswersInput
    >;
    create: XOR<
      UserCreateWithoutUpvoteAnswersInput,
      UserUncheckedCreateWithoutUpvoteAnswersInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutUpvoteAnswersInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutUpvoteAnswersInput,
      UserUncheckedUpdateWithoutUpvoteAnswersInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutUpvoteAnswersInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutUpvoteAnswersInput
    >;
  };

  export type UserUpsertWithWhereUniqueWithoutDownVoteAnswersInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutDownVoteAnswersInput,
      UserUncheckedUpdateWithoutDownVoteAnswersInput
    >;
    create: XOR<
      UserCreateWithoutDownVoteAnswersInput,
      UserUncheckedCreateWithoutDownVoteAnswersInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutDownVoteAnswersInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutDownVoteAnswersInput,
      UserUncheckedUpdateWithoutDownVoteAnswersInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutDownVoteAnswersInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutDownVoteAnswersInput
    >;
  };

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<
      QuestionUpdateWithoutAnswersInput,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
    create: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    where?: QuestionWhereInput;
  };

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput;
    data: XOR<
      QuestionUpdateWithoutAnswersInput,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type TagCreateManyCreatorInput = {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date | string;
  };

  export type QuestionCreateManyAuthorInput = {
    id?: string;
    title: string;
    content: string;
    views: number;
    createdAt?: Date | string;
  };

  export type AnswerCreateManyAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    questionId: string;
  };

  export type TagUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUpdateManyWithoutTagsNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedTagsNestedInput;
  };

  export type TagUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
    questions?: QuestionUncheckedUpdateManyWithoutTagsNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
  };

  export type TagUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUpdateManyWithoutTagsNestedInput;
    followers?: UserUpdateManyWithoutFollowedTagsNestedInput;
  };

  export type TagUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUncheckedUpdateManyWithoutTagsNestedInput;
    followers?: UserUncheckedUpdateManyWithoutFollowedTagsNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUpdateWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUpdateWithoutCollectorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutCollectorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutQuestionsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutCollectorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    upvotes?: UserUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUpdateManyWithoutDownVoteAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownVoteAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questionId?: StringFieldUpdateOperationsInput | string;
  };

  export type AnswerUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    downvotes?: UserUpdateManyWithoutDownVoteAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    downvotes?: UserUncheckedUpdateManyWithoutDownVoteAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
  };

  export type AnswerUpdateWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutDownvotesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
  };

  export type QuestionUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUpdateManyWithoutCollectionsNestedInput;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteQuestionsNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownvoteQuestionsNestedInput;
    collectors?: UserUncheckedUpdateManyWithoutCollectionsNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpdateWithoutFollowedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutFollowedTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerCreateManyQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    authorId: string;
  };

  export type TagUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followers?: UserUpdateManyWithoutFollowedTagsNestedInput;
    creator?: UserUpdateOneRequiredWithoutCreatedTagsNestedInput;
  };

  export type TagUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
    followers?: UserUncheckedUpdateManyWithoutFollowedTagsNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: StringFieldUpdateOperationsInput | string;
  };

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    upvotes?: UserUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUpdateManyWithoutDownVoteAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    upvotes?: UserUncheckedUpdateManyWithoutUpvoteAnswersNestedInput;
    downvotes?: UserUncheckedUpdateManyWithoutDownVoteAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUpdateWithoutUpvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutUpvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutUpvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpdateWithoutDownvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutDownvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutDownvoteQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpdateWithoutUpvoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    downVoteAnswers?: AnswerUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutUpvoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    downVoteAnswers?: AnswerUncheckedUpdateManyWithoutDownvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutUpvoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpdateWithoutDownVoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUpdateManyWithoutUpvotesNestedInput;
  };

  export type UserUncheckedUpdateWithoutDownVoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followedTags?: TagUncheckedUpdateManyWithoutFollowersNestedInput;
    createdTags?: TagUncheckedUpdateManyWithoutCreatorNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteQuestions?: QuestionUncheckedUpdateManyWithoutUpvotesNestedInput;
    downvoteQuestions?: QuestionUncheckedUpdateManyWithoutDownvotesNestedInput;
    collections?: QuestionUncheckedUpdateManyWithoutCollectorsNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    upvoteAnswers?: AnswerUncheckedUpdateManyWithoutUpvotesNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutDownVoteAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clerkId?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    portfolioWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagCountOutputTypeDefaultArgs instead
   */
  export type TagCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
   */
  export type QuestionCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = QuestionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AnswerCountOutputTypeDefaultArgs instead
   */
  export type AnswerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AnswerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagDefaultArgs instead
   */
  export type TagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use QuestionDefaultArgs instead
   */
  export type QuestionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = QuestionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AnswerDefaultArgs instead
   */
  export type AnswerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AnswerDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
