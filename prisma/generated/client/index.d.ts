
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model WordList
 * 
 */
export type WordList = $Result.DefaultSelection<Prisma.$WordListPayload>
/**
 * Model UserWordList
 * 
 */
export type UserWordList = $Result.DefaultSelection<Prisma.$UserWordListPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model DemographicSurvey
 * 
 */
export type DemographicSurvey = $Result.DefaultSelection<Prisma.$DemographicSurveyPayload>
/**
 * Model UserConsent
 * 
 */
export type UserConsent = $Result.DefaultSelection<Prisma.$UserConsentPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wordList`: Exposes CRUD operations for the **WordList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordLists
    * const wordLists = await prisma.wordList.findMany()
    * ```
    */
  get wordList(): Prisma.WordListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWordList`: Exposes CRUD operations for the **UserWordList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWordLists
    * const userWordLists = await prisma.userWordList.findMany()
    * ```
    */
  get userWordList(): Prisma.UserWordListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demographicSurvey`: Exposes CRUD operations for the **DemographicSurvey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemographicSurveys
    * const demographicSurveys = await prisma.demographicSurvey.findMany()
    * ```
    */
  get demographicSurvey(): Prisma.DemographicSurveyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userConsent`: Exposes CRUD operations for the **UserConsent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserConsents
    * const userConsents = await prisma.userConsent.findMany()
    * ```
    */
  get userConsent(): Prisma.UserConsentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Word: 'Word',
    WordList: 'WordList',
    UserWordList: 'UserWordList',
    QuizAttempt: 'QuizAttempt',
    DemographicSurvey: 'DemographicSurvey',
    UserConsent: 'UserConsent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "word" | "wordList" | "userWordList" | "quizAttempt" | "demographicSurvey" | "userConsent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      WordList: {
        payload: Prisma.$WordListPayload<ExtArgs>
        fields: Prisma.WordListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          findFirst: {
            args: Prisma.WordListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          findMany: {
            args: Prisma.WordListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>[]
          }
          create: {
            args: Prisma.WordListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          createMany: {
            args: Prisma.WordListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>[]
          }
          delete: {
            args: Prisma.WordListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          update: {
            args: Prisma.WordListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          deleteMany: {
            args: Prisma.WordListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>[]
          }
          upsert: {
            args: Prisma.WordListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordListPayload>
          }
          aggregate: {
            args: Prisma.WordListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWordList>
          }
          groupBy: {
            args: Prisma.WordListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordListCountArgs<ExtArgs>
            result: $Utils.Optional<WordListCountAggregateOutputType> | number
          }
        }
      }
      UserWordList: {
        payload: Prisma.$UserWordListPayload<ExtArgs>
        fields: Prisma.UserWordListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWordListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWordListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          findFirst: {
            args: Prisma.UserWordListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWordListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          findMany: {
            args: Prisma.UserWordListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>[]
          }
          create: {
            args: Prisma.UserWordListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          createMany: {
            args: Prisma.UserWordListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWordListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>[]
          }
          delete: {
            args: Prisma.UserWordListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          update: {
            args: Prisma.UserWordListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          deleteMany: {
            args: Prisma.UserWordListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWordListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWordListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>[]
          }
          upsert: {
            args: Prisma.UserWordListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordListPayload>
          }
          aggregate: {
            args: Prisma.UserWordListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWordList>
          }
          groupBy: {
            args: Prisma.UserWordListGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWordListGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWordListCountArgs<ExtArgs>
            result: $Utils.Optional<UserWordListCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      DemographicSurvey: {
        payload: Prisma.$DemographicSurveyPayload<ExtArgs>
        fields: Prisma.DemographicSurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemographicSurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemographicSurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          findFirst: {
            args: Prisma.DemographicSurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemographicSurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          findMany: {
            args: Prisma.DemographicSurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>[]
          }
          create: {
            args: Prisma.DemographicSurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          createMany: {
            args: Prisma.DemographicSurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemographicSurveyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>[]
          }
          delete: {
            args: Prisma.DemographicSurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          update: {
            args: Prisma.DemographicSurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          deleteMany: {
            args: Prisma.DemographicSurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemographicSurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemographicSurveyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>[]
          }
          upsert: {
            args: Prisma.DemographicSurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemographicSurveyPayload>
          }
          aggregate: {
            args: Prisma.DemographicSurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemographicSurvey>
          }
          groupBy: {
            args: Prisma.DemographicSurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemographicSurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemographicSurveyCountArgs<ExtArgs>
            result: $Utils.Optional<DemographicSurveyCountAggregateOutputType> | number
          }
        }
      }
      UserConsent: {
        payload: Prisma.$UserConsentPayload<ExtArgs>
        fields: Prisma.UserConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          findFirst: {
            args: Prisma.UserConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          findMany: {
            args: Prisma.UserConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          create: {
            args: Prisma.UserConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          createMany: {
            args: Prisma.UserConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          delete: {
            args: Prisma.UserConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          update: {
            args: Prisma.UserConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          deleteMany: {
            args: Prisma.UserConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          upsert: {
            args: Prisma.UserConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          aggregate: {
            args: Prisma.UserConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserConsent>
          }
          groupBy: {
            args: Prisma.UserConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserConsentCountArgs<ExtArgs>
            result: $Utils.Optional<UserConsentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    word?: WordOmit
    wordList?: WordListOmit
    userWordList?: UserWordListOmit
    quizAttempt?: QuizAttemptOmit
    demographicSurvey?: DemographicSurveyOmit
    userConsent?: UserConsentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    quizAttempts: number
    surveyResponses: number
    consent: number
    wordListAssignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
    surveyResponses?: boolean | UserCountOutputTypeCountSurveyResponsesArgs
    consent?: boolean | UserCountOutputTypeCountConsentArgs
    wordListAssignments?: boolean | UserCountOutputTypeCountWordListAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurveyResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemographicSurveyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConsentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWordListAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordListWhereInput
  }


  /**
   * Count Type WordListCountOutputType
   */

  export type WordListCountOutputType = {
    words: number
    userAssignments: number
    quizAttempts: number
  }

  export type WordListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | WordListCountOutputTypeCountWordsArgs
    userAssignments?: boolean | WordListCountOutputTypeCountUserAssignmentsArgs
    quizAttempts?: boolean | WordListCountOutputTypeCountQuizAttemptsArgs
  }

  // Custom InputTypes
  /**
   * WordListCountOutputType without action
   */
  export type WordListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordListCountOutputType
     */
    select?: WordListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordListCountOutputType without action
   */
  export type WordListCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }

  /**
   * WordListCountOutputType without action
   */
  export type WordListCountOutputTypeCountUserAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordListWhereInput
  }

  /**
   * WordListCountOutputType without action
   */
  export type WordListCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    isAdmin: number
    metadata: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
    metadata?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    isAdmin: boolean
    metadata: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    metadata?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    surveyResponses?: boolean | User$surveyResponsesArgs<ExtArgs>
    consent?: boolean | User$consentArgs<ExtArgs>
    wordListAssignments?: boolean | User$wordListAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    metadata?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "isAdmin" | "metadata", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    surveyResponses?: boolean | User$surveyResponsesArgs<ExtArgs>
    consent?: boolean | User$consentArgs<ExtArgs>
    wordListAssignments?: boolean | User$wordListAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      surveyResponses: Prisma.$DemographicSurveyPayload<ExtArgs>[]
      consent: Prisma.$UserConsentPayload<ExtArgs>[]
      wordListAssignments: Prisma.$UserWordListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      isAdmin: boolean
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surveyResponses<T extends User$surveyResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$surveyResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consent<T extends User$consentArgs<ExtArgs> = {}>(args?: Subset<T, User$consentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wordListAssignments<T extends User$wordListAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordListAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly metadata: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * User.surveyResponses
   */
  export type User$surveyResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    where?: DemographicSurveyWhereInput
    orderBy?: DemographicSurveyOrderByWithRelationInput | DemographicSurveyOrderByWithRelationInput[]
    cursor?: DemographicSurveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemographicSurveyScalarFieldEnum | DemographicSurveyScalarFieldEnum[]
  }

  /**
   * User.consent
   */
  export type User$consentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    where?: UserConsentWhereInput
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    cursor?: UserConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * User.wordListAssignments
   */
  export type User$wordListAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    where?: UserWordListWhereInput
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    cursor?: UserWordListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWordListScalarFieldEnum | UserWordListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
    wordListId: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
    wordListId: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    word: string | null
    isNonWord: boolean | null
    wordListId: number | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    word: string | null
    isNonWord: boolean | null
    wordListId: number | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    word: number
    isNonWord: number
    wordListId: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
    wordListId?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
    wordListId?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    word?: true
    isNonWord?: true
    wordListId?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    word?: true
    isNonWord?: true
    wordListId?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    word?: true
    isNonWord?: true
    wordListId?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: number
    word: string
    isNonWord: boolean
    wordListId: number
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isNonWord?: boolean
    wordListId?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isNonWord?: boolean
    wordListId?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isNonWord?: boolean
    wordListId?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    word?: boolean
    isNonWord?: boolean
    wordListId?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "isNonWord" | "wordListId", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      wordList: Prisma.$WordListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      isNonWord: boolean
      wordListId: number
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wordList<T extends WordListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordListDefaultArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'Int'>
    readonly word: FieldRef<"Word", 'String'>
    readonly isNonWord: FieldRef<"Word", 'Boolean'>
    readonly wordListId: FieldRef<"Word", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model WordList
   */

  export type AggregateWordList = {
    _count: WordListCountAggregateOutputType | null
    _avg: WordListAvgAggregateOutputType | null
    _sum: WordListSumAggregateOutputType | null
    _min: WordListMinAggregateOutputType | null
    _max: WordListMaxAggregateOutputType | null
  }

  export type WordListAvgAggregateOutputType = {
    id: number | null
    original_id: number | null
    timesUsed: number | null
  }

  export type WordListSumAggregateOutputType = {
    id: number | null
    original_id: number | null
    timesUsed: number | null
  }

  export type WordListMinAggregateOutputType = {
    id: number | null
    original_id: number | null
    createdAt: Date | null
    timesUsed: number | null
    lastUsedAt: Date | null
  }

  export type WordListMaxAggregateOutputType = {
    id: number | null
    original_id: number | null
    createdAt: Date | null
    timesUsed: number | null
    lastUsedAt: Date | null
  }

  export type WordListCountAggregateOutputType = {
    id: number
    original_id: number
    createdAt: number
    timesUsed: number
    lastUsedAt: number
    _all: number
  }


  export type WordListAvgAggregateInputType = {
    id?: true
    original_id?: true
    timesUsed?: true
  }

  export type WordListSumAggregateInputType = {
    id?: true
    original_id?: true
    timesUsed?: true
  }

  export type WordListMinAggregateInputType = {
    id?: true
    original_id?: true
    createdAt?: true
    timesUsed?: true
    lastUsedAt?: true
  }

  export type WordListMaxAggregateInputType = {
    id?: true
    original_id?: true
    createdAt?: true
    timesUsed?: true
    lastUsedAt?: true
  }

  export type WordListCountAggregateInputType = {
    id?: true
    original_id?: true
    createdAt?: true
    timesUsed?: true
    lastUsedAt?: true
    _all?: true
  }

  export type WordListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordList to aggregate.
     */
    where?: WordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordLists to fetch.
     */
    orderBy?: WordListOrderByWithRelationInput | WordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordLists
    **/
    _count?: true | WordListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordListMaxAggregateInputType
  }

  export type GetWordListAggregateType<T extends WordListAggregateArgs> = {
        [P in keyof T & keyof AggregateWordList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordList[P]>
      : GetScalarType<T[P], AggregateWordList[P]>
  }




  export type WordListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordListWhereInput
    orderBy?: WordListOrderByWithAggregationInput | WordListOrderByWithAggregationInput[]
    by: WordListScalarFieldEnum[] | WordListScalarFieldEnum
    having?: WordListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordListCountAggregateInputType | true
    _avg?: WordListAvgAggregateInputType
    _sum?: WordListSumAggregateInputType
    _min?: WordListMinAggregateInputType
    _max?: WordListMaxAggregateInputType
  }

  export type WordListGroupByOutputType = {
    id: number
    original_id: number
    createdAt: Date
    timesUsed: number
    lastUsedAt: Date | null
    _count: WordListCountAggregateOutputType | null
    _avg: WordListAvgAggregateOutputType | null
    _sum: WordListSumAggregateOutputType | null
    _min: WordListMinAggregateOutputType | null
    _max: WordListMaxAggregateOutputType | null
  }

  type GetWordListGroupByPayload<T extends WordListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordListGroupByOutputType[P]>
            : GetScalarType<T[P], WordListGroupByOutputType[P]>
        }
      >
    >


  export type WordListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_id?: boolean
    createdAt?: boolean
    timesUsed?: boolean
    lastUsedAt?: boolean
    words?: boolean | WordList$wordsArgs<ExtArgs>
    userAssignments?: boolean | WordList$userAssignmentsArgs<ExtArgs>
    quizAttempts?: boolean | WordList$quizAttemptsArgs<ExtArgs>
    _count?: boolean | WordListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordList"]>

  export type WordListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_id?: boolean
    createdAt?: boolean
    timesUsed?: boolean
    lastUsedAt?: boolean
  }, ExtArgs["result"]["wordList"]>

  export type WordListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_id?: boolean
    createdAt?: boolean
    timesUsed?: boolean
    lastUsedAt?: boolean
  }, ExtArgs["result"]["wordList"]>

  export type WordListSelectScalar = {
    id?: boolean
    original_id?: boolean
    createdAt?: boolean
    timesUsed?: boolean
    lastUsedAt?: boolean
  }

  export type WordListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "original_id" | "createdAt" | "timesUsed" | "lastUsedAt", ExtArgs["result"]["wordList"]>
  export type WordListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | WordList$wordsArgs<ExtArgs>
    userAssignments?: boolean | WordList$userAssignmentsArgs<ExtArgs>
    quizAttempts?: boolean | WordList$quizAttemptsArgs<ExtArgs>
    _count?: boolean | WordListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WordList"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
      userAssignments: Prisma.$UserWordListPayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      original_id: number
      createdAt: Date
      timesUsed: number
      lastUsedAt: Date | null
    }, ExtArgs["result"]["wordList"]>
    composites: {}
  }

  type WordListGetPayload<S extends boolean | null | undefined | WordListDefaultArgs> = $Result.GetResult<Prisma.$WordListPayload, S>

  type WordListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordListCountAggregateInputType | true
    }

  export interface WordListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordList'], meta: { name: 'WordList' } }
    /**
     * Find zero or one WordList that matches the filter.
     * @param {WordListFindUniqueArgs} args - Arguments to find a WordList
     * @example
     * // Get one WordList
     * const wordList = await prisma.wordList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordListFindUniqueArgs>(args: SelectSubset<T, WordListFindUniqueArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WordList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordListFindUniqueOrThrowArgs} args - Arguments to find a WordList
     * @example
     * // Get one WordList
     * const wordList = await prisma.wordList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordListFindUniqueOrThrowArgs>(args: SelectSubset<T, WordListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListFindFirstArgs} args - Arguments to find a WordList
     * @example
     * // Get one WordList
     * const wordList = await prisma.wordList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordListFindFirstArgs>(args?: SelectSubset<T, WordListFindFirstArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListFindFirstOrThrowArgs} args - Arguments to find a WordList
     * @example
     * // Get one WordList
     * const wordList = await prisma.wordList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordListFindFirstOrThrowArgs>(args?: SelectSubset<T, WordListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WordLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordLists
     * const wordLists = await prisma.wordList.findMany()
     * 
     * // Get first 10 WordLists
     * const wordLists = await prisma.wordList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordListWithIdOnly = await prisma.wordList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordListFindManyArgs>(args?: SelectSubset<T, WordListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WordList.
     * @param {WordListCreateArgs} args - Arguments to create a WordList.
     * @example
     * // Create one WordList
     * const WordList = await prisma.wordList.create({
     *   data: {
     *     // ... data to create a WordList
     *   }
     * })
     * 
     */
    create<T extends WordListCreateArgs>(args: SelectSubset<T, WordListCreateArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WordLists.
     * @param {WordListCreateManyArgs} args - Arguments to create many WordLists.
     * @example
     * // Create many WordLists
     * const wordList = await prisma.wordList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordListCreateManyArgs>(args?: SelectSubset<T, WordListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WordLists and returns the data saved in the database.
     * @param {WordListCreateManyAndReturnArgs} args - Arguments to create many WordLists.
     * @example
     * // Create many WordLists
     * const wordList = await prisma.wordList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WordLists and only return the `id`
     * const wordListWithIdOnly = await prisma.wordList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordListCreateManyAndReturnArgs>(args?: SelectSubset<T, WordListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WordList.
     * @param {WordListDeleteArgs} args - Arguments to delete one WordList.
     * @example
     * // Delete one WordList
     * const WordList = await prisma.wordList.delete({
     *   where: {
     *     // ... filter to delete one WordList
     *   }
     * })
     * 
     */
    delete<T extends WordListDeleteArgs>(args: SelectSubset<T, WordListDeleteArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WordList.
     * @param {WordListUpdateArgs} args - Arguments to update one WordList.
     * @example
     * // Update one WordList
     * const wordList = await prisma.wordList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordListUpdateArgs>(args: SelectSubset<T, WordListUpdateArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WordLists.
     * @param {WordListDeleteManyArgs} args - Arguments to filter WordLists to delete.
     * @example
     * // Delete a few WordLists
     * const { count } = await prisma.wordList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordListDeleteManyArgs>(args?: SelectSubset<T, WordListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordLists
     * const wordList = await prisma.wordList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordListUpdateManyArgs>(args: SelectSubset<T, WordListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordLists and returns the data updated in the database.
     * @param {WordListUpdateManyAndReturnArgs} args - Arguments to update many WordLists.
     * @example
     * // Update many WordLists
     * const wordList = await prisma.wordList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WordLists and only return the `id`
     * const wordListWithIdOnly = await prisma.wordList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordListUpdateManyAndReturnArgs>(args: SelectSubset<T, WordListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WordList.
     * @param {WordListUpsertArgs} args - Arguments to update or create a WordList.
     * @example
     * // Update or create a WordList
     * const wordList = await prisma.wordList.upsert({
     *   create: {
     *     // ... data to create a WordList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordList we want to update
     *   }
     * })
     */
    upsert<T extends WordListUpsertArgs>(args: SelectSubset<T, WordListUpsertArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListCountArgs} args - Arguments to filter WordLists to count.
     * @example
     * // Count the number of WordLists
     * const count = await prisma.wordList.count({
     *   where: {
     *     // ... the filter for the WordLists we want to count
     *   }
     * })
    **/
    count<T extends WordListCountArgs>(
      args?: Subset<T, WordListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordListAggregateArgs>(args: Subset<T, WordListAggregateArgs>): Prisma.PrismaPromise<GetWordListAggregateType<T>>

    /**
     * Group by WordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordListGroupByArgs} args - Group by arguments.
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
      T extends WordListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordListGroupByArgs['orderBy'] }
        : { orderBy?: WordListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WordList model
   */
  readonly fields: WordListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WordList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    words<T extends WordList$wordsArgs<ExtArgs> = {}>(args?: Subset<T, WordList$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAssignments<T extends WordList$userAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, WordList$userAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizAttempts<T extends WordList$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, WordList$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WordList model
   */
  interface WordListFieldRefs {
    readonly id: FieldRef<"WordList", 'Int'>
    readonly original_id: FieldRef<"WordList", 'Int'>
    readonly createdAt: FieldRef<"WordList", 'DateTime'>
    readonly timesUsed: FieldRef<"WordList", 'Int'>
    readonly lastUsedAt: FieldRef<"WordList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WordList findUnique
   */
  export type WordListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter, which WordList to fetch.
     */
    where: WordListWhereUniqueInput
  }

  /**
   * WordList findUniqueOrThrow
   */
  export type WordListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter, which WordList to fetch.
     */
    where: WordListWhereUniqueInput
  }

  /**
   * WordList findFirst
   */
  export type WordListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter, which WordList to fetch.
     */
    where?: WordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordLists to fetch.
     */
    orderBy?: WordListOrderByWithRelationInput | WordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordLists.
     */
    cursor?: WordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordLists.
     */
    distinct?: WordListScalarFieldEnum | WordListScalarFieldEnum[]
  }

  /**
   * WordList findFirstOrThrow
   */
  export type WordListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter, which WordList to fetch.
     */
    where?: WordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordLists to fetch.
     */
    orderBy?: WordListOrderByWithRelationInput | WordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordLists.
     */
    cursor?: WordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordLists.
     */
    distinct?: WordListScalarFieldEnum | WordListScalarFieldEnum[]
  }

  /**
   * WordList findMany
   */
  export type WordListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter, which WordLists to fetch.
     */
    where?: WordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordLists to fetch.
     */
    orderBy?: WordListOrderByWithRelationInput | WordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordLists.
     */
    cursor?: WordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordLists.
     */
    skip?: number
    distinct?: WordListScalarFieldEnum | WordListScalarFieldEnum[]
  }

  /**
   * WordList create
   */
  export type WordListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * The data needed to create a WordList.
     */
    data?: XOR<WordListCreateInput, WordListUncheckedCreateInput>
  }

  /**
   * WordList createMany
   */
  export type WordListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordLists.
     */
    data: WordListCreateManyInput | WordListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordList createManyAndReturn
   */
  export type WordListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * The data used to create many WordLists.
     */
    data: WordListCreateManyInput | WordListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordList update
   */
  export type WordListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * The data needed to update a WordList.
     */
    data: XOR<WordListUpdateInput, WordListUncheckedUpdateInput>
    /**
     * Choose, which WordList to update.
     */
    where: WordListWhereUniqueInput
  }

  /**
   * WordList updateMany
   */
  export type WordListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordLists.
     */
    data: XOR<WordListUpdateManyMutationInput, WordListUncheckedUpdateManyInput>
    /**
     * Filter which WordLists to update
     */
    where?: WordListWhereInput
    /**
     * Limit how many WordLists to update.
     */
    limit?: number
  }

  /**
   * WordList updateManyAndReturn
   */
  export type WordListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * The data used to update WordLists.
     */
    data: XOR<WordListUpdateManyMutationInput, WordListUncheckedUpdateManyInput>
    /**
     * Filter which WordLists to update
     */
    where?: WordListWhereInput
    /**
     * Limit how many WordLists to update.
     */
    limit?: number
  }

  /**
   * WordList upsert
   */
  export type WordListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * The filter to search for the WordList to update in case it exists.
     */
    where: WordListWhereUniqueInput
    /**
     * In case the WordList found by the `where` argument doesn't exist, create a new WordList with this data.
     */
    create: XOR<WordListCreateInput, WordListUncheckedCreateInput>
    /**
     * In case the WordList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordListUpdateInput, WordListUncheckedUpdateInput>
  }

  /**
   * WordList delete
   */
  export type WordListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
    /**
     * Filter which WordList to delete.
     */
    where: WordListWhereUniqueInput
  }

  /**
   * WordList deleteMany
   */
  export type WordListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordLists to delete
     */
    where?: WordListWhereInput
    /**
     * Limit how many WordLists to delete.
     */
    limit?: number
  }

  /**
   * WordList.words
   */
  export type WordList$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * WordList.userAssignments
   */
  export type WordList$userAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    where?: UserWordListWhereInput
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    cursor?: UserWordListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWordListScalarFieldEnum | UserWordListScalarFieldEnum[]
  }

  /**
   * WordList.quizAttempts
   */
  export type WordList$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * WordList without action
   */
  export type WordListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordList
     */
    select?: WordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordList
     */
    omit?: WordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordListInclude<ExtArgs> | null
  }


  /**
   * Model UserWordList
   */

  export type AggregateUserWordList = {
    _count: UserWordListCountAggregateOutputType | null
    _avg: UserWordListAvgAggregateOutputType | null
    _sum: UserWordListSumAggregateOutputType | null
    _min: UserWordListMinAggregateOutputType | null
    _max: UserWordListMaxAggregateOutputType | null
  }

  export type UserWordListAvgAggregateOutputType = {
    id: number | null
    wordListId: number | null
  }

  export type UserWordListSumAggregateOutputType = {
    id: number | null
    wordListId: number | null
  }

  export type UserWordListMinAggregateOutputType = {
    id: number | null
    userId: string | null
    wordListId: number | null
    assignedAt: Date | null
  }

  export type UserWordListMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    wordListId: number | null
    assignedAt: Date | null
  }

  export type UserWordListCountAggregateOutputType = {
    id: number
    userId: number
    wordListId: number
    assignedAt: number
    _all: number
  }


  export type UserWordListAvgAggregateInputType = {
    id?: true
    wordListId?: true
  }

  export type UserWordListSumAggregateInputType = {
    id?: true
    wordListId?: true
  }

  export type UserWordListMinAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    assignedAt?: true
  }

  export type UserWordListMaxAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    assignedAt?: true
  }

  export type UserWordListCountAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    assignedAt?: true
    _all?: true
  }

  export type UserWordListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWordList to aggregate.
     */
    where?: UserWordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordLists to fetch.
     */
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWordLists
    **/
    _count?: true | UserWordListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserWordListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserWordListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWordListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWordListMaxAggregateInputType
  }

  export type GetUserWordListAggregateType<T extends UserWordListAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWordList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWordList[P]>
      : GetScalarType<T[P], AggregateUserWordList[P]>
  }




  export type UserWordListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordListWhereInput
    orderBy?: UserWordListOrderByWithAggregationInput | UserWordListOrderByWithAggregationInput[]
    by: UserWordListScalarFieldEnum[] | UserWordListScalarFieldEnum
    having?: UserWordListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWordListCountAggregateInputType | true
    _avg?: UserWordListAvgAggregateInputType
    _sum?: UserWordListSumAggregateInputType
    _min?: UserWordListMinAggregateInputType
    _max?: UserWordListMaxAggregateInputType
  }

  export type UserWordListGroupByOutputType = {
    id: number
    userId: string
    wordListId: number
    assignedAt: Date
    _count: UserWordListCountAggregateOutputType | null
    _avg: UserWordListAvgAggregateOutputType | null
    _sum: UserWordListSumAggregateOutputType | null
    _min: UserWordListMinAggregateOutputType | null
    _max: UserWordListMaxAggregateOutputType | null
  }

  type GetUserWordListGroupByPayload<T extends UserWordListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWordListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWordListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWordListGroupByOutputType[P]>
            : GetScalarType<T[P], UserWordListGroupByOutputType[P]>
        }
      >
    >


  export type UserWordListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    assignedAt?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordList"]>

  export type UserWordListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    assignedAt?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordList"]>

  export type UserWordListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    assignedAt?: boolean
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordList"]>

  export type UserWordListSelectScalar = {
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    assignedAt?: boolean
  }

  export type UserWordListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wordListId" | "assignedAt", ExtArgs["result"]["userWordList"]>
  export type UserWordListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWordListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserWordListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserWordListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWordList"
    objects: {
      wordList: Prisma.$WordListPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      wordListId: number
      assignedAt: Date
    }, ExtArgs["result"]["userWordList"]>
    composites: {}
  }

  type UserWordListGetPayload<S extends boolean | null | undefined | UserWordListDefaultArgs> = $Result.GetResult<Prisma.$UserWordListPayload, S>

  type UserWordListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWordListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWordListCountAggregateInputType | true
    }

  export interface UserWordListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWordList'], meta: { name: 'UserWordList' } }
    /**
     * Find zero or one UserWordList that matches the filter.
     * @param {UserWordListFindUniqueArgs} args - Arguments to find a UserWordList
     * @example
     * // Get one UserWordList
     * const userWordList = await prisma.userWordList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWordListFindUniqueArgs>(args: SelectSubset<T, UserWordListFindUniqueArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWordList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWordListFindUniqueOrThrowArgs} args - Arguments to find a UserWordList
     * @example
     * // Get one UserWordList
     * const userWordList = await prisma.userWordList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWordListFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWordListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWordList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListFindFirstArgs} args - Arguments to find a UserWordList
     * @example
     * // Get one UserWordList
     * const userWordList = await prisma.userWordList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWordListFindFirstArgs>(args?: SelectSubset<T, UserWordListFindFirstArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWordList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListFindFirstOrThrowArgs} args - Arguments to find a UserWordList
     * @example
     * // Get one UserWordList
     * const userWordList = await prisma.userWordList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWordListFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWordListFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWordLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWordLists
     * const userWordLists = await prisma.userWordList.findMany()
     * 
     * // Get first 10 UserWordLists
     * const userWordLists = await prisma.userWordList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWordListWithIdOnly = await prisma.userWordList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWordListFindManyArgs>(args?: SelectSubset<T, UserWordListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWordList.
     * @param {UserWordListCreateArgs} args - Arguments to create a UserWordList.
     * @example
     * // Create one UserWordList
     * const UserWordList = await prisma.userWordList.create({
     *   data: {
     *     // ... data to create a UserWordList
     *   }
     * })
     * 
     */
    create<T extends UserWordListCreateArgs>(args: SelectSubset<T, UserWordListCreateArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWordLists.
     * @param {UserWordListCreateManyArgs} args - Arguments to create many UserWordLists.
     * @example
     * // Create many UserWordLists
     * const userWordList = await prisma.userWordList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWordListCreateManyArgs>(args?: SelectSubset<T, UserWordListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWordLists and returns the data saved in the database.
     * @param {UserWordListCreateManyAndReturnArgs} args - Arguments to create many UserWordLists.
     * @example
     * // Create many UserWordLists
     * const userWordList = await prisma.userWordList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWordLists and only return the `id`
     * const userWordListWithIdOnly = await prisma.userWordList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWordListCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWordListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWordList.
     * @param {UserWordListDeleteArgs} args - Arguments to delete one UserWordList.
     * @example
     * // Delete one UserWordList
     * const UserWordList = await prisma.userWordList.delete({
     *   where: {
     *     // ... filter to delete one UserWordList
     *   }
     * })
     * 
     */
    delete<T extends UserWordListDeleteArgs>(args: SelectSubset<T, UserWordListDeleteArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWordList.
     * @param {UserWordListUpdateArgs} args - Arguments to update one UserWordList.
     * @example
     * // Update one UserWordList
     * const userWordList = await prisma.userWordList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWordListUpdateArgs>(args: SelectSubset<T, UserWordListUpdateArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWordLists.
     * @param {UserWordListDeleteManyArgs} args - Arguments to filter UserWordLists to delete.
     * @example
     * // Delete a few UserWordLists
     * const { count } = await prisma.userWordList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWordListDeleteManyArgs>(args?: SelectSubset<T, UserWordListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWordLists
     * const userWordList = await prisma.userWordList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWordListUpdateManyArgs>(args: SelectSubset<T, UserWordListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWordLists and returns the data updated in the database.
     * @param {UserWordListUpdateManyAndReturnArgs} args - Arguments to update many UserWordLists.
     * @example
     * // Update many UserWordLists
     * const userWordList = await prisma.userWordList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWordLists and only return the `id`
     * const userWordListWithIdOnly = await prisma.userWordList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWordListUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWordListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWordList.
     * @param {UserWordListUpsertArgs} args - Arguments to update or create a UserWordList.
     * @example
     * // Update or create a UserWordList
     * const userWordList = await prisma.userWordList.upsert({
     *   create: {
     *     // ... data to create a UserWordList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWordList we want to update
     *   }
     * })
     */
    upsert<T extends UserWordListUpsertArgs>(args: SelectSubset<T, UserWordListUpsertArgs<ExtArgs>>): Prisma__UserWordListClient<$Result.GetResult<Prisma.$UserWordListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListCountArgs} args - Arguments to filter UserWordLists to count.
     * @example
     * // Count the number of UserWordLists
     * const count = await prisma.userWordList.count({
     *   where: {
     *     // ... the filter for the UserWordLists we want to count
     *   }
     * })
    **/
    count<T extends UserWordListCountArgs>(
      args?: Subset<T, UserWordListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWordListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWordListAggregateArgs>(args: Subset<T, UserWordListAggregateArgs>): Prisma.PrismaPromise<GetUserWordListAggregateType<T>>

    /**
     * Group by UserWordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordListGroupByArgs} args - Group by arguments.
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
      T extends UserWordListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWordListGroupByArgs['orderBy'] }
        : { orderBy?: UserWordListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserWordListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWordListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWordList model
   */
  readonly fields: UserWordListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWordList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWordListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wordList<T extends WordListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordListDefaultArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserWordList model
   */
  interface UserWordListFieldRefs {
    readonly id: FieldRef<"UserWordList", 'Int'>
    readonly userId: FieldRef<"UserWordList", 'String'>
    readonly wordListId: FieldRef<"UserWordList", 'Int'>
    readonly assignedAt: FieldRef<"UserWordList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWordList findUnique
   */
  export type UserWordListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter, which UserWordList to fetch.
     */
    where: UserWordListWhereUniqueInput
  }

  /**
   * UserWordList findUniqueOrThrow
   */
  export type UserWordListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter, which UserWordList to fetch.
     */
    where: UserWordListWhereUniqueInput
  }

  /**
   * UserWordList findFirst
   */
  export type UserWordListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter, which UserWordList to fetch.
     */
    where?: UserWordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordLists to fetch.
     */
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWordLists.
     */
    cursor?: UserWordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWordLists.
     */
    distinct?: UserWordListScalarFieldEnum | UserWordListScalarFieldEnum[]
  }

  /**
   * UserWordList findFirstOrThrow
   */
  export type UserWordListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter, which UserWordList to fetch.
     */
    where?: UserWordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordLists to fetch.
     */
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWordLists.
     */
    cursor?: UserWordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWordLists.
     */
    distinct?: UserWordListScalarFieldEnum | UserWordListScalarFieldEnum[]
  }

  /**
   * UserWordList findMany
   */
  export type UserWordListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter, which UserWordLists to fetch.
     */
    where?: UserWordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordLists to fetch.
     */
    orderBy?: UserWordListOrderByWithRelationInput | UserWordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWordLists.
     */
    cursor?: UserWordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordLists.
     */
    skip?: number
    distinct?: UserWordListScalarFieldEnum | UserWordListScalarFieldEnum[]
  }

  /**
   * UserWordList create
   */
  export type UserWordListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWordList.
     */
    data: XOR<UserWordListCreateInput, UserWordListUncheckedCreateInput>
  }

  /**
   * UserWordList createMany
   */
  export type UserWordListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWordLists.
     */
    data: UserWordListCreateManyInput | UserWordListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWordList createManyAndReturn
   */
  export type UserWordListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * The data used to create many UserWordLists.
     */
    data: UserWordListCreateManyInput | UserWordListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWordList update
   */
  export type UserWordListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWordList.
     */
    data: XOR<UserWordListUpdateInput, UserWordListUncheckedUpdateInput>
    /**
     * Choose, which UserWordList to update.
     */
    where: UserWordListWhereUniqueInput
  }

  /**
   * UserWordList updateMany
   */
  export type UserWordListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWordLists.
     */
    data: XOR<UserWordListUpdateManyMutationInput, UserWordListUncheckedUpdateManyInput>
    /**
     * Filter which UserWordLists to update
     */
    where?: UserWordListWhereInput
    /**
     * Limit how many UserWordLists to update.
     */
    limit?: number
  }

  /**
   * UserWordList updateManyAndReturn
   */
  export type UserWordListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * The data used to update UserWordLists.
     */
    data: XOR<UserWordListUpdateManyMutationInput, UserWordListUncheckedUpdateManyInput>
    /**
     * Filter which UserWordLists to update
     */
    where?: UserWordListWhereInput
    /**
     * Limit how many UserWordLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWordList upsert
   */
  export type UserWordListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWordList to update in case it exists.
     */
    where: UserWordListWhereUniqueInput
    /**
     * In case the UserWordList found by the `where` argument doesn't exist, create a new UserWordList with this data.
     */
    create: XOR<UserWordListCreateInput, UserWordListUncheckedCreateInput>
    /**
     * In case the UserWordList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWordListUpdateInput, UserWordListUncheckedUpdateInput>
  }

  /**
   * UserWordList delete
   */
  export type UserWordListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
    /**
     * Filter which UserWordList to delete.
     */
    where: UserWordListWhereUniqueInput
  }

  /**
   * UserWordList deleteMany
   */
  export type UserWordListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWordLists to delete
     */
    where?: UserWordListWhereInput
    /**
     * Limit how many UserWordLists to delete.
     */
    limit?: number
  }

  /**
   * UserWordList without action
   */
  export type UserWordListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordList
     */
    select?: UserWordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordList
     */
    omit?: UserWordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordListInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    id: number | null
    wordListId: number | null
    score: number | null
    correctWords: number | null
    incorrectWords: number | null
    correctNonWords: number | null
    incorrectNonWords: number | null
    npxionTime: number | null
    totalQuizDuration: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    id: number | null
    wordListId: number | null
    score: number | null
    correctWords: number | null
    incorrectWords: number | null
    correctNonWords: number | null
    incorrectNonWords: number | null
    npxionTime: number | null
    totalQuizDuration: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: number | null
    userId: string | null
    wordListId: number | null
    score: number | null
    correctWords: number | null
    incorrectWords: number | null
    correctNonWords: number | null
    incorrectNonWords: number | null
    npxionTime: number | null
    totalQuizDuration: number | null
    createdAt: Date | null
    deviceType: string | null
    deviceOS: string | null
    deviceBrowser: string | null
    monitorSize: string | null
    viewportSize: string | null
    quizStatus: string | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    wordListId: number | null
    score: number | null
    correctWords: number | null
    incorrectWords: number | null
    correctNonWords: number | null
    incorrectNonWords: number | null
    npxionTime: number | null
    totalQuizDuration: number | null
    createdAt: Date | null
    deviceType: string | null
    deviceOS: string | null
    deviceBrowser: string | null
    monitorSize: string | null
    viewportSize: string | null
    quizStatus: string | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: number
    createdAt: number
    deviceType: number
    deviceOS: number
    deviceBrowser: number
    monitorSize: number
    viewportSize: number
    quizStatus: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    id?: true
    wordListId?: true
    score?: true
    correctWords?: true
    incorrectWords?: true
    correctNonWords?: true
    incorrectNonWords?: true
    npxionTime?: true
    totalQuizDuration?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    id?: true
    wordListId?: true
    score?: true
    correctWords?: true
    incorrectWords?: true
    correctNonWords?: true
    incorrectNonWords?: true
    npxionTime?: true
    totalQuizDuration?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    score?: true
    correctWords?: true
    incorrectWords?: true
    correctNonWords?: true
    incorrectNonWords?: true
    npxionTime?: true
    totalQuizDuration?: true
    createdAt?: true
    deviceType?: true
    deviceOS?: true
    deviceBrowser?: true
    monitorSize?: true
    viewportSize?: true
    quizStatus?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    score?: true
    correctWords?: true
    incorrectWords?: true
    correctNonWords?: true
    incorrectNonWords?: true
    npxionTime?: true
    totalQuizDuration?: true
    createdAt?: true
    deviceType?: true
    deviceOS?: true
    deviceBrowser?: true
    monitorSize?: true
    viewportSize?: true
    quizStatus?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    wordListId?: true
    score?: true
    correctWords?: true
    incorrectWords?: true
    correctNonWords?: true
    incorrectNonWords?: true
    npxionTime?: true
    totalQuizDuration?: true
    responses?: true
    createdAt?: true
    deviceType?: true
    deviceOS?: true
    deviceBrowser?: true
    monitorSize?: true
    viewportSize?: true
    quizStatus?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: number
    userId: string
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonValue
    createdAt: Date
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    score?: boolean
    correctWords?: boolean
    incorrectWords?: boolean
    correctNonWords?: boolean
    incorrectNonWords?: boolean
    npxionTime?: boolean
    totalQuizDuration?: boolean
    responses?: boolean
    createdAt?: boolean
    deviceType?: boolean
    deviceOS?: boolean
    deviceBrowser?: boolean
    monitorSize?: boolean
    viewportSize?: boolean
    quizStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    score?: boolean
    correctWords?: boolean
    incorrectWords?: boolean
    correctNonWords?: boolean
    incorrectNonWords?: boolean
    npxionTime?: boolean
    totalQuizDuration?: boolean
    responses?: boolean
    createdAt?: boolean
    deviceType?: boolean
    deviceOS?: boolean
    deviceBrowser?: boolean
    monitorSize?: boolean
    viewportSize?: boolean
    quizStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    score?: boolean
    correctWords?: boolean
    incorrectWords?: boolean
    correctNonWords?: boolean
    incorrectNonWords?: boolean
    npxionTime?: boolean
    totalQuizDuration?: boolean
    responses?: boolean
    createdAt?: boolean
    deviceType?: boolean
    deviceOS?: boolean
    deviceBrowser?: boolean
    monitorSize?: boolean
    viewportSize?: boolean
    quizStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    wordListId?: boolean
    score?: boolean
    correctWords?: boolean
    incorrectWords?: boolean
    correctNonWords?: boolean
    incorrectNonWords?: boolean
    npxionTime?: boolean
    totalQuizDuration?: boolean
    responses?: boolean
    createdAt?: boolean
    deviceType?: boolean
    deviceOS?: boolean
    deviceBrowser?: boolean
    monitorSize?: boolean
    viewportSize?: boolean
    quizStatus?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wordListId" | "score" | "correctWords" | "incorrectWords" | "correctNonWords" | "incorrectNonWords" | "npxionTime" | "totalQuizDuration" | "responses" | "createdAt" | "deviceType" | "deviceOS" | "deviceBrowser" | "monitorSize" | "viewportSize" | "quizStatus", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    wordList?: boolean | WordListDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      wordList: Prisma.$WordListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      wordListId: number
      score: number
      correctWords: number
      incorrectWords: number
      correctNonWords: number
      incorrectNonWords: number
      npxionTime: number
      totalQuizDuration: number
      responses: Prisma.JsonValue
      createdAt: Date
      deviceType: string
      deviceOS: string
      deviceBrowser: string
      monitorSize: string
      viewportSize: string
      quizStatus: string
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttempts and returns the data saved in the database.
     * @param {QuizAttemptCreateManyAndReturnArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts and returns the data updated in the database.
     * @param {QuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many QuizAttempts.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
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
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wordList<T extends WordListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordListDefaultArgs<ExtArgs>>): Prisma__WordListClient<$Result.GetResult<Prisma.$WordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'Int'>
    readonly userId: FieldRef<"QuizAttempt", 'String'>
    readonly wordListId: FieldRef<"QuizAttempt", 'Int'>
    readonly score: FieldRef<"QuizAttempt", 'Float'>
    readonly correctWords: FieldRef<"QuizAttempt", 'Int'>
    readonly incorrectWords: FieldRef<"QuizAttempt", 'Int'>
    readonly correctNonWords: FieldRef<"QuizAttempt", 'Int'>
    readonly incorrectNonWords: FieldRef<"QuizAttempt", 'Int'>
    readonly npxionTime: FieldRef<"QuizAttempt", 'Int'>
    readonly totalQuizDuration: FieldRef<"QuizAttempt", 'Int'>
    readonly responses: FieldRef<"QuizAttempt", 'Json'>
    readonly createdAt: FieldRef<"QuizAttempt", 'DateTime'>
    readonly deviceType: FieldRef<"QuizAttempt", 'String'>
    readonly deviceOS: FieldRef<"QuizAttempt", 'String'>
    readonly deviceBrowser: FieldRef<"QuizAttempt", 'String'>
    readonly monitorSize: FieldRef<"QuizAttempt", 'String'>
    readonly viewportSize: FieldRef<"QuizAttempt", 'String'>
    readonly quizStatus: FieldRef<"QuizAttempt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAttempt createManyAndReturn
   */
  export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt updateManyAndReturn
   */
  export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model DemographicSurvey
   */

  export type AggregateDemographicSurvey = {
    _count: DemographicSurveyCountAggregateOutputType | null
    _min: DemographicSurveyMinAggregateOutputType | null
    _max: DemographicSurveyMaxAggregateOutputType | null
  }

  export type DemographicSurveyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nativeLanguage: string | null
    otherNativeLanguage: string | null
    languageAcquisition: string | null
    otherAcquisitionLanguage: string | null
    familyLanguage: string | null
    otherFamilyLanguage: string | null
    gender: string | null
    age: string | null
    university: string | null
    age_of_acquiring_arabic: string | null
    listening_proficiency: string | null
    reading_proficiency: string | null
    speaking_proficiency: string | null
    writing_proficiency: string | null
    years_living_in_arabic_countries_years: string | null
    years_living_in_arabic_countries_months: string | null
    years_living_in_arabic_environments_years: string | null
    years_living_in_arabic_environments_months: string | null
    highestEducation: string | null
    arabicDialect: string | null
    nationality: string | null
    otherNationality: string | null
    residence: string | null
    otherResidence: string | null
    languages: string | null
    kindergartenLanguage: string | null
    otherKindergartenLanguage: string | null
    primaryLanguage: string | null
    otherPrimaryLanguage: string | null
    middleLanguage: string | null
    otherMiddleLanguage: string | null
    highSchoolLanguage: string | null
    otherHighSchoolLanguage: string | null
    universityLanguage: string | null
    otherUniversityLanguage: string | null
    readingHours: string | null
    listeningHours: string | null
    writingHours: string | null
    speakingHours: string | null
    attentionDisorder: string | null
    readingDisorder: string | null
    vision: string | null
    handedness: string | null
    createdAt: Date | null
  }

  export type DemographicSurveyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nativeLanguage: string | null
    otherNativeLanguage: string | null
    languageAcquisition: string | null
    otherAcquisitionLanguage: string | null
    familyLanguage: string | null
    otherFamilyLanguage: string | null
    gender: string | null
    age: string | null
    university: string | null
    age_of_acquiring_arabic: string | null
    listening_proficiency: string | null
    reading_proficiency: string | null
    speaking_proficiency: string | null
    writing_proficiency: string | null
    years_living_in_arabic_countries_years: string | null
    years_living_in_arabic_countries_months: string | null
    years_living_in_arabic_environments_years: string | null
    years_living_in_arabic_environments_months: string | null
    highestEducation: string | null
    arabicDialect: string | null
    nationality: string | null
    otherNationality: string | null
    residence: string | null
    otherResidence: string | null
    languages: string | null
    kindergartenLanguage: string | null
    otherKindergartenLanguage: string | null
    primaryLanguage: string | null
    otherPrimaryLanguage: string | null
    middleLanguage: string | null
    otherMiddleLanguage: string | null
    highSchoolLanguage: string | null
    otherHighSchoolLanguage: string | null
    universityLanguage: string | null
    otherUniversityLanguage: string | null
    readingHours: string | null
    listeningHours: string | null
    writingHours: string | null
    speakingHours: string | null
    attentionDisorder: string | null
    readingDisorder: string | null
    vision: string | null
    handedness: string | null
    createdAt: Date | null
  }

  export type DemographicSurveyCountAggregateOutputType = {
    id: number
    userId: number
    nativeLanguage: number
    otherNativeLanguage: number
    languageAcquisition: number
    otherAcquisitionLanguage: number
    familyLanguage: number
    otherFamilyLanguage: number
    gender: number
    age: number
    university: number
    age_of_acquiring_arabic: number
    listening_proficiency: number
    reading_proficiency: number
    speaking_proficiency: number
    writing_proficiency: number
    years_living_in_arabic_countries_years: number
    years_living_in_arabic_countries_months: number
    years_living_in_arabic_environments_years: number
    years_living_in_arabic_environments_months: number
    highestEducation: number
    arabicDialect: number
    nationality: number
    otherNationality: number
    residence: number
    otherResidence: number
    languages: number
    kindergartenLanguage: number
    otherKindergartenLanguage: number
    primaryLanguage: number
    otherPrimaryLanguage: number
    middleLanguage: number
    otherMiddleLanguage: number
    highSchoolLanguage: number
    otherHighSchoolLanguage: number
    universityLanguage: number
    otherUniversityLanguage: number
    readingHours: number
    listeningHours: number
    writingHours: number
    speakingHours: number
    attentionDisorder: number
    readingDisorder: number
    vision: number
    handedness: number
    createdAt: number
    _all: number
  }


  export type DemographicSurveyMinAggregateInputType = {
    id?: true
    userId?: true
    nativeLanguage?: true
    otherNativeLanguage?: true
    languageAcquisition?: true
    otherAcquisitionLanguage?: true
    familyLanguage?: true
    otherFamilyLanguage?: true
    gender?: true
    age?: true
    university?: true
    age_of_acquiring_arabic?: true
    listening_proficiency?: true
    reading_proficiency?: true
    speaking_proficiency?: true
    writing_proficiency?: true
    years_living_in_arabic_countries_years?: true
    years_living_in_arabic_countries_months?: true
    years_living_in_arabic_environments_years?: true
    years_living_in_arabic_environments_months?: true
    highestEducation?: true
    arabicDialect?: true
    nationality?: true
    otherNationality?: true
    residence?: true
    otherResidence?: true
    languages?: true
    kindergartenLanguage?: true
    otherKindergartenLanguage?: true
    primaryLanguage?: true
    otherPrimaryLanguage?: true
    middleLanguage?: true
    otherMiddleLanguage?: true
    highSchoolLanguage?: true
    otherHighSchoolLanguage?: true
    universityLanguage?: true
    otherUniversityLanguage?: true
    readingHours?: true
    listeningHours?: true
    writingHours?: true
    speakingHours?: true
    attentionDisorder?: true
    readingDisorder?: true
    vision?: true
    handedness?: true
    createdAt?: true
  }

  export type DemographicSurveyMaxAggregateInputType = {
    id?: true
    userId?: true
    nativeLanguage?: true
    otherNativeLanguage?: true
    languageAcquisition?: true
    otherAcquisitionLanguage?: true
    familyLanguage?: true
    otherFamilyLanguage?: true
    gender?: true
    age?: true
    university?: true
    age_of_acquiring_arabic?: true
    listening_proficiency?: true
    reading_proficiency?: true
    speaking_proficiency?: true
    writing_proficiency?: true
    years_living_in_arabic_countries_years?: true
    years_living_in_arabic_countries_months?: true
    years_living_in_arabic_environments_years?: true
    years_living_in_arabic_environments_months?: true
    highestEducation?: true
    arabicDialect?: true
    nationality?: true
    otherNationality?: true
    residence?: true
    otherResidence?: true
    languages?: true
    kindergartenLanguage?: true
    otherKindergartenLanguage?: true
    primaryLanguage?: true
    otherPrimaryLanguage?: true
    middleLanguage?: true
    otherMiddleLanguage?: true
    highSchoolLanguage?: true
    otherHighSchoolLanguage?: true
    universityLanguage?: true
    otherUniversityLanguage?: true
    readingHours?: true
    listeningHours?: true
    writingHours?: true
    speakingHours?: true
    attentionDisorder?: true
    readingDisorder?: true
    vision?: true
    handedness?: true
    createdAt?: true
  }

  export type DemographicSurveyCountAggregateInputType = {
    id?: true
    userId?: true
    nativeLanguage?: true
    otherNativeLanguage?: true
    languageAcquisition?: true
    otherAcquisitionLanguage?: true
    familyLanguage?: true
    otherFamilyLanguage?: true
    gender?: true
    age?: true
    university?: true
    age_of_acquiring_arabic?: true
    listening_proficiency?: true
    reading_proficiency?: true
    speaking_proficiency?: true
    writing_proficiency?: true
    years_living_in_arabic_countries_years?: true
    years_living_in_arabic_countries_months?: true
    years_living_in_arabic_environments_years?: true
    years_living_in_arabic_environments_months?: true
    highestEducation?: true
    arabicDialect?: true
    nationality?: true
    otherNationality?: true
    residence?: true
    otherResidence?: true
    languages?: true
    kindergartenLanguage?: true
    otherKindergartenLanguage?: true
    primaryLanguage?: true
    otherPrimaryLanguage?: true
    middleLanguage?: true
    otherMiddleLanguage?: true
    highSchoolLanguage?: true
    otherHighSchoolLanguage?: true
    universityLanguage?: true
    otherUniversityLanguage?: true
    readingHours?: true
    listeningHours?: true
    writingHours?: true
    speakingHours?: true
    attentionDisorder?: true
    readingDisorder?: true
    vision?: true
    handedness?: true
    createdAt?: true
    _all?: true
  }

  export type DemographicSurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemographicSurvey to aggregate.
     */
    where?: DemographicSurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemographicSurveys to fetch.
     */
    orderBy?: DemographicSurveyOrderByWithRelationInput | DemographicSurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemographicSurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemographicSurveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemographicSurveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemographicSurveys
    **/
    _count?: true | DemographicSurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemographicSurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemographicSurveyMaxAggregateInputType
  }

  export type GetDemographicSurveyAggregateType<T extends DemographicSurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateDemographicSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemographicSurvey[P]>
      : GetScalarType<T[P], AggregateDemographicSurvey[P]>
  }




  export type DemographicSurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemographicSurveyWhereInput
    orderBy?: DemographicSurveyOrderByWithAggregationInput | DemographicSurveyOrderByWithAggregationInput[]
    by: DemographicSurveyScalarFieldEnum[] | DemographicSurveyScalarFieldEnum
    having?: DemographicSurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemographicSurveyCountAggregateInputType | true
    _min?: DemographicSurveyMinAggregateInputType
    _max?: DemographicSurveyMaxAggregateInputType
  }

  export type DemographicSurveyGroupByOutputType = {
    id: string
    userId: string
    nativeLanguage: string
    otherNativeLanguage: string | null
    languageAcquisition: string
    otherAcquisitionLanguage: string | null
    familyLanguage: string
    otherFamilyLanguage: string | null
    gender: string
    age: string
    university: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality: string | null
    residence: string
    otherResidence: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage: string | null
    primaryLanguage: string
    otherPrimaryLanguage: string | null
    middleLanguage: string
    otherMiddleLanguage: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage: string | null
    universityLanguage: string
    otherUniversityLanguage: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt: Date
    _count: DemographicSurveyCountAggregateOutputType | null
    _min: DemographicSurveyMinAggregateOutputType | null
    _max: DemographicSurveyMaxAggregateOutputType | null
  }

  type GetDemographicSurveyGroupByPayload<T extends DemographicSurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemographicSurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemographicSurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemographicSurveyGroupByOutputType[P]>
            : GetScalarType<T[P], DemographicSurveyGroupByOutputType[P]>
        }
      >
    >


  export type DemographicSurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nativeLanguage?: boolean
    otherNativeLanguage?: boolean
    languageAcquisition?: boolean
    otherAcquisitionLanguage?: boolean
    familyLanguage?: boolean
    otherFamilyLanguage?: boolean
    gender?: boolean
    age?: boolean
    university?: boolean
    age_of_acquiring_arabic?: boolean
    listening_proficiency?: boolean
    reading_proficiency?: boolean
    speaking_proficiency?: boolean
    writing_proficiency?: boolean
    years_living_in_arabic_countries_years?: boolean
    years_living_in_arabic_countries_months?: boolean
    years_living_in_arabic_environments_years?: boolean
    years_living_in_arabic_environments_months?: boolean
    highestEducation?: boolean
    arabicDialect?: boolean
    nationality?: boolean
    otherNationality?: boolean
    residence?: boolean
    otherResidence?: boolean
    languages?: boolean
    kindergartenLanguage?: boolean
    otherKindergartenLanguage?: boolean
    primaryLanguage?: boolean
    otherPrimaryLanguage?: boolean
    middleLanguage?: boolean
    otherMiddleLanguage?: boolean
    highSchoolLanguage?: boolean
    otherHighSchoolLanguage?: boolean
    universityLanguage?: boolean
    otherUniversityLanguage?: boolean
    readingHours?: boolean
    listeningHours?: boolean
    writingHours?: boolean
    speakingHours?: boolean
    attentionDisorder?: boolean
    readingDisorder?: boolean
    vision?: boolean
    handedness?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demographicSurvey"]>

  export type DemographicSurveySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nativeLanguage?: boolean
    otherNativeLanguage?: boolean
    languageAcquisition?: boolean
    otherAcquisitionLanguage?: boolean
    familyLanguage?: boolean
    otherFamilyLanguage?: boolean
    gender?: boolean
    age?: boolean
    university?: boolean
    age_of_acquiring_arabic?: boolean
    listening_proficiency?: boolean
    reading_proficiency?: boolean
    speaking_proficiency?: boolean
    writing_proficiency?: boolean
    years_living_in_arabic_countries_years?: boolean
    years_living_in_arabic_countries_months?: boolean
    years_living_in_arabic_environments_years?: boolean
    years_living_in_arabic_environments_months?: boolean
    highestEducation?: boolean
    arabicDialect?: boolean
    nationality?: boolean
    otherNationality?: boolean
    residence?: boolean
    otherResidence?: boolean
    languages?: boolean
    kindergartenLanguage?: boolean
    otherKindergartenLanguage?: boolean
    primaryLanguage?: boolean
    otherPrimaryLanguage?: boolean
    middleLanguage?: boolean
    otherMiddleLanguage?: boolean
    highSchoolLanguage?: boolean
    otherHighSchoolLanguage?: boolean
    universityLanguage?: boolean
    otherUniversityLanguage?: boolean
    readingHours?: boolean
    listeningHours?: boolean
    writingHours?: boolean
    speakingHours?: boolean
    attentionDisorder?: boolean
    readingDisorder?: boolean
    vision?: boolean
    handedness?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demographicSurvey"]>

  export type DemographicSurveySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nativeLanguage?: boolean
    otherNativeLanguage?: boolean
    languageAcquisition?: boolean
    otherAcquisitionLanguage?: boolean
    familyLanguage?: boolean
    otherFamilyLanguage?: boolean
    gender?: boolean
    age?: boolean
    university?: boolean
    age_of_acquiring_arabic?: boolean
    listening_proficiency?: boolean
    reading_proficiency?: boolean
    speaking_proficiency?: boolean
    writing_proficiency?: boolean
    years_living_in_arabic_countries_years?: boolean
    years_living_in_arabic_countries_months?: boolean
    years_living_in_arabic_environments_years?: boolean
    years_living_in_arabic_environments_months?: boolean
    highestEducation?: boolean
    arabicDialect?: boolean
    nationality?: boolean
    otherNationality?: boolean
    residence?: boolean
    otherResidence?: boolean
    languages?: boolean
    kindergartenLanguage?: boolean
    otherKindergartenLanguage?: boolean
    primaryLanguage?: boolean
    otherPrimaryLanguage?: boolean
    middleLanguage?: boolean
    otherMiddleLanguage?: boolean
    highSchoolLanguage?: boolean
    otherHighSchoolLanguage?: boolean
    universityLanguage?: boolean
    otherUniversityLanguage?: boolean
    readingHours?: boolean
    listeningHours?: boolean
    writingHours?: boolean
    speakingHours?: boolean
    attentionDisorder?: boolean
    readingDisorder?: boolean
    vision?: boolean
    handedness?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demographicSurvey"]>

  export type DemographicSurveySelectScalar = {
    id?: boolean
    userId?: boolean
    nativeLanguage?: boolean
    otherNativeLanguage?: boolean
    languageAcquisition?: boolean
    otherAcquisitionLanguage?: boolean
    familyLanguage?: boolean
    otherFamilyLanguage?: boolean
    gender?: boolean
    age?: boolean
    university?: boolean
    age_of_acquiring_arabic?: boolean
    listening_proficiency?: boolean
    reading_proficiency?: boolean
    speaking_proficiency?: boolean
    writing_proficiency?: boolean
    years_living_in_arabic_countries_years?: boolean
    years_living_in_arabic_countries_months?: boolean
    years_living_in_arabic_environments_years?: boolean
    years_living_in_arabic_environments_months?: boolean
    highestEducation?: boolean
    arabicDialect?: boolean
    nationality?: boolean
    otherNationality?: boolean
    residence?: boolean
    otherResidence?: boolean
    languages?: boolean
    kindergartenLanguage?: boolean
    otherKindergartenLanguage?: boolean
    primaryLanguage?: boolean
    otherPrimaryLanguage?: boolean
    middleLanguage?: boolean
    otherMiddleLanguage?: boolean
    highSchoolLanguage?: boolean
    otherHighSchoolLanguage?: boolean
    universityLanguage?: boolean
    otherUniversityLanguage?: boolean
    readingHours?: boolean
    listeningHours?: boolean
    writingHours?: boolean
    speakingHours?: boolean
    attentionDisorder?: boolean
    readingDisorder?: boolean
    vision?: boolean
    handedness?: boolean
    createdAt?: boolean
  }

  export type DemographicSurveyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nativeLanguage" | "otherNativeLanguage" | "languageAcquisition" | "otherAcquisitionLanguage" | "familyLanguage" | "otherFamilyLanguage" | "gender" | "age" | "university" | "age_of_acquiring_arabic" | "listening_proficiency" | "reading_proficiency" | "speaking_proficiency" | "writing_proficiency" | "years_living_in_arabic_countries_years" | "years_living_in_arabic_countries_months" | "years_living_in_arabic_environments_years" | "years_living_in_arabic_environments_months" | "highestEducation" | "arabicDialect" | "nationality" | "otherNationality" | "residence" | "otherResidence" | "languages" | "kindergartenLanguage" | "otherKindergartenLanguage" | "primaryLanguage" | "otherPrimaryLanguage" | "middleLanguage" | "otherMiddleLanguage" | "highSchoolLanguage" | "otherHighSchoolLanguage" | "universityLanguage" | "otherUniversityLanguage" | "readingHours" | "listeningHours" | "writingHours" | "speakingHours" | "attentionDisorder" | "readingDisorder" | "vision" | "handedness" | "createdAt", ExtArgs["result"]["demographicSurvey"]>
  export type DemographicSurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DemographicSurveyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DemographicSurveyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DemographicSurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemographicSurvey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nativeLanguage: string
      otherNativeLanguage: string | null
      languageAcquisition: string
      otherAcquisitionLanguage: string | null
      familyLanguage: string
      otherFamilyLanguage: string | null
      gender: string
      age: string
      university: string | null
      age_of_acquiring_arabic: string
      listening_proficiency: string
      reading_proficiency: string
      speaking_proficiency: string
      writing_proficiency: string
      years_living_in_arabic_countries_years: string
      years_living_in_arabic_countries_months: string | null
      years_living_in_arabic_environments_years: string
      years_living_in_arabic_environments_months: string | null
      highestEducation: string
      arabicDialect: string
      nationality: string
      otherNationality: string | null
      residence: string
      otherResidence: string | null
      languages: string
      kindergartenLanguage: string
      otherKindergartenLanguage: string | null
      primaryLanguage: string
      otherPrimaryLanguage: string | null
      middleLanguage: string
      otherMiddleLanguage: string | null
      highSchoolLanguage: string
      otherHighSchoolLanguage: string | null
      universityLanguage: string
      otherUniversityLanguage: string | null
      readingHours: string
      listeningHours: string
      writingHours: string
      speakingHours: string
      attentionDisorder: string
      readingDisorder: string
      vision: string
      handedness: string
      createdAt: Date
    }, ExtArgs["result"]["demographicSurvey"]>
    composites: {}
  }

  type DemographicSurveyGetPayload<S extends boolean | null | undefined | DemographicSurveyDefaultArgs> = $Result.GetResult<Prisma.$DemographicSurveyPayload, S>

  type DemographicSurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemographicSurveyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemographicSurveyCountAggregateInputType | true
    }

  export interface DemographicSurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemographicSurvey'], meta: { name: 'DemographicSurvey' } }
    /**
     * Find zero or one DemographicSurvey that matches the filter.
     * @param {DemographicSurveyFindUniqueArgs} args - Arguments to find a DemographicSurvey
     * @example
     * // Get one DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemographicSurveyFindUniqueArgs>(args: SelectSubset<T, DemographicSurveyFindUniqueArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemographicSurvey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemographicSurveyFindUniqueOrThrowArgs} args - Arguments to find a DemographicSurvey
     * @example
     * // Get one DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemographicSurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, DemographicSurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemographicSurvey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyFindFirstArgs} args - Arguments to find a DemographicSurvey
     * @example
     * // Get one DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemographicSurveyFindFirstArgs>(args?: SelectSubset<T, DemographicSurveyFindFirstArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemographicSurvey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyFindFirstOrThrowArgs} args - Arguments to find a DemographicSurvey
     * @example
     * // Get one DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemographicSurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, DemographicSurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemographicSurveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemographicSurveys
     * const demographicSurveys = await prisma.demographicSurvey.findMany()
     * 
     * // Get first 10 DemographicSurveys
     * const demographicSurveys = await prisma.demographicSurvey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demographicSurveyWithIdOnly = await prisma.demographicSurvey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemographicSurveyFindManyArgs>(args?: SelectSubset<T, DemographicSurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemographicSurvey.
     * @param {DemographicSurveyCreateArgs} args - Arguments to create a DemographicSurvey.
     * @example
     * // Create one DemographicSurvey
     * const DemographicSurvey = await prisma.demographicSurvey.create({
     *   data: {
     *     // ... data to create a DemographicSurvey
     *   }
     * })
     * 
     */
    create<T extends DemographicSurveyCreateArgs>(args: SelectSubset<T, DemographicSurveyCreateArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemographicSurveys.
     * @param {DemographicSurveyCreateManyArgs} args - Arguments to create many DemographicSurveys.
     * @example
     * // Create many DemographicSurveys
     * const demographicSurvey = await prisma.demographicSurvey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemographicSurveyCreateManyArgs>(args?: SelectSubset<T, DemographicSurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DemographicSurveys and returns the data saved in the database.
     * @param {DemographicSurveyCreateManyAndReturnArgs} args - Arguments to create many DemographicSurveys.
     * @example
     * // Create many DemographicSurveys
     * const demographicSurvey = await prisma.demographicSurvey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DemographicSurveys and only return the `id`
     * const demographicSurveyWithIdOnly = await prisma.demographicSurvey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemographicSurveyCreateManyAndReturnArgs>(args?: SelectSubset<T, DemographicSurveyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DemographicSurvey.
     * @param {DemographicSurveyDeleteArgs} args - Arguments to delete one DemographicSurvey.
     * @example
     * // Delete one DemographicSurvey
     * const DemographicSurvey = await prisma.demographicSurvey.delete({
     *   where: {
     *     // ... filter to delete one DemographicSurvey
     *   }
     * })
     * 
     */
    delete<T extends DemographicSurveyDeleteArgs>(args: SelectSubset<T, DemographicSurveyDeleteArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemographicSurvey.
     * @param {DemographicSurveyUpdateArgs} args - Arguments to update one DemographicSurvey.
     * @example
     * // Update one DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemographicSurveyUpdateArgs>(args: SelectSubset<T, DemographicSurveyUpdateArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemographicSurveys.
     * @param {DemographicSurveyDeleteManyArgs} args - Arguments to filter DemographicSurveys to delete.
     * @example
     * // Delete a few DemographicSurveys
     * const { count } = await prisma.demographicSurvey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemographicSurveyDeleteManyArgs>(args?: SelectSubset<T, DemographicSurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemographicSurveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemographicSurveys
     * const demographicSurvey = await prisma.demographicSurvey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemographicSurveyUpdateManyArgs>(args: SelectSubset<T, DemographicSurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemographicSurveys and returns the data updated in the database.
     * @param {DemographicSurveyUpdateManyAndReturnArgs} args - Arguments to update many DemographicSurveys.
     * @example
     * // Update many DemographicSurveys
     * const demographicSurvey = await prisma.demographicSurvey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DemographicSurveys and only return the `id`
     * const demographicSurveyWithIdOnly = await prisma.demographicSurvey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DemographicSurveyUpdateManyAndReturnArgs>(args: SelectSubset<T, DemographicSurveyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DemographicSurvey.
     * @param {DemographicSurveyUpsertArgs} args - Arguments to update or create a DemographicSurvey.
     * @example
     * // Update or create a DemographicSurvey
     * const demographicSurvey = await prisma.demographicSurvey.upsert({
     *   create: {
     *     // ... data to create a DemographicSurvey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemographicSurvey we want to update
     *   }
     * })
     */
    upsert<T extends DemographicSurveyUpsertArgs>(args: SelectSubset<T, DemographicSurveyUpsertArgs<ExtArgs>>): Prisma__DemographicSurveyClient<$Result.GetResult<Prisma.$DemographicSurveyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DemographicSurveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyCountArgs} args - Arguments to filter DemographicSurveys to count.
     * @example
     * // Count the number of DemographicSurveys
     * const count = await prisma.demographicSurvey.count({
     *   where: {
     *     // ... the filter for the DemographicSurveys we want to count
     *   }
     * })
    **/
    count<T extends DemographicSurveyCountArgs>(
      args?: Subset<T, DemographicSurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemographicSurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemographicSurvey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemographicSurveyAggregateArgs>(args: Subset<T, DemographicSurveyAggregateArgs>): Prisma.PrismaPromise<GetDemographicSurveyAggregateType<T>>

    /**
     * Group by DemographicSurvey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemographicSurveyGroupByArgs} args - Group by arguments.
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
      T extends DemographicSurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemographicSurveyGroupByArgs['orderBy'] }
        : { orderBy?: DemographicSurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemographicSurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemographicSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemographicSurvey model
   */
  readonly fields: DemographicSurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemographicSurvey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemographicSurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DemographicSurvey model
   */
  interface DemographicSurveyFieldRefs {
    readonly id: FieldRef<"DemographicSurvey", 'String'>
    readonly userId: FieldRef<"DemographicSurvey", 'String'>
    readonly nativeLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherNativeLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly languageAcquisition: FieldRef<"DemographicSurvey", 'String'>
    readonly otherAcquisitionLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly familyLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherFamilyLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly gender: FieldRef<"DemographicSurvey", 'String'>
    readonly age: FieldRef<"DemographicSurvey", 'String'>
    readonly university: FieldRef<"DemographicSurvey", 'String'>
    readonly age_of_acquiring_arabic: FieldRef<"DemographicSurvey", 'String'>
    readonly listening_proficiency: FieldRef<"DemographicSurvey", 'String'>
    readonly reading_proficiency: FieldRef<"DemographicSurvey", 'String'>
    readonly speaking_proficiency: FieldRef<"DemographicSurvey", 'String'>
    readonly writing_proficiency: FieldRef<"DemographicSurvey", 'String'>
    readonly years_living_in_arabic_countries_years: FieldRef<"DemographicSurvey", 'String'>
    readonly years_living_in_arabic_countries_months: FieldRef<"DemographicSurvey", 'String'>
    readonly years_living_in_arabic_environments_years: FieldRef<"DemographicSurvey", 'String'>
    readonly years_living_in_arabic_environments_months: FieldRef<"DemographicSurvey", 'String'>
    readonly highestEducation: FieldRef<"DemographicSurvey", 'String'>
    readonly arabicDialect: FieldRef<"DemographicSurvey", 'String'>
    readonly nationality: FieldRef<"DemographicSurvey", 'String'>
    readonly otherNationality: FieldRef<"DemographicSurvey", 'String'>
    readonly residence: FieldRef<"DemographicSurvey", 'String'>
    readonly otherResidence: FieldRef<"DemographicSurvey", 'String'>
    readonly languages: FieldRef<"DemographicSurvey", 'String'>
    readonly kindergartenLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherKindergartenLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly primaryLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherPrimaryLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly middleLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherMiddleLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly highSchoolLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherHighSchoolLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly universityLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly otherUniversityLanguage: FieldRef<"DemographicSurvey", 'String'>
    readonly readingHours: FieldRef<"DemographicSurvey", 'String'>
    readonly listeningHours: FieldRef<"DemographicSurvey", 'String'>
    readonly writingHours: FieldRef<"DemographicSurvey", 'String'>
    readonly speakingHours: FieldRef<"DemographicSurvey", 'String'>
    readonly attentionDisorder: FieldRef<"DemographicSurvey", 'String'>
    readonly readingDisorder: FieldRef<"DemographicSurvey", 'String'>
    readonly vision: FieldRef<"DemographicSurvey", 'String'>
    readonly handedness: FieldRef<"DemographicSurvey", 'String'>
    readonly createdAt: FieldRef<"DemographicSurvey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemographicSurvey findUnique
   */
  export type DemographicSurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter, which DemographicSurvey to fetch.
     */
    where: DemographicSurveyWhereUniqueInput
  }

  /**
   * DemographicSurvey findUniqueOrThrow
   */
  export type DemographicSurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter, which DemographicSurvey to fetch.
     */
    where: DemographicSurveyWhereUniqueInput
  }

  /**
   * DemographicSurvey findFirst
   */
  export type DemographicSurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter, which DemographicSurvey to fetch.
     */
    where?: DemographicSurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemographicSurveys to fetch.
     */
    orderBy?: DemographicSurveyOrderByWithRelationInput | DemographicSurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemographicSurveys.
     */
    cursor?: DemographicSurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemographicSurveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemographicSurveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemographicSurveys.
     */
    distinct?: DemographicSurveyScalarFieldEnum | DemographicSurveyScalarFieldEnum[]
  }

  /**
   * DemographicSurvey findFirstOrThrow
   */
  export type DemographicSurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter, which DemographicSurvey to fetch.
     */
    where?: DemographicSurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemographicSurveys to fetch.
     */
    orderBy?: DemographicSurveyOrderByWithRelationInput | DemographicSurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemographicSurveys.
     */
    cursor?: DemographicSurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemographicSurveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemographicSurveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemographicSurveys.
     */
    distinct?: DemographicSurveyScalarFieldEnum | DemographicSurveyScalarFieldEnum[]
  }

  /**
   * DemographicSurvey findMany
   */
  export type DemographicSurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter, which DemographicSurveys to fetch.
     */
    where?: DemographicSurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemographicSurveys to fetch.
     */
    orderBy?: DemographicSurveyOrderByWithRelationInput | DemographicSurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemographicSurveys.
     */
    cursor?: DemographicSurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemographicSurveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemographicSurveys.
     */
    skip?: number
    distinct?: DemographicSurveyScalarFieldEnum | DemographicSurveyScalarFieldEnum[]
  }

  /**
   * DemographicSurvey create
   */
  export type DemographicSurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a DemographicSurvey.
     */
    data: XOR<DemographicSurveyCreateInput, DemographicSurveyUncheckedCreateInput>
  }

  /**
   * DemographicSurvey createMany
   */
  export type DemographicSurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemographicSurveys.
     */
    data: DemographicSurveyCreateManyInput | DemographicSurveyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemographicSurvey createManyAndReturn
   */
  export type DemographicSurveyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * The data used to create many DemographicSurveys.
     */
    data: DemographicSurveyCreateManyInput | DemographicSurveyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemographicSurvey update
   */
  export type DemographicSurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a DemographicSurvey.
     */
    data: XOR<DemographicSurveyUpdateInput, DemographicSurveyUncheckedUpdateInput>
    /**
     * Choose, which DemographicSurvey to update.
     */
    where: DemographicSurveyWhereUniqueInput
  }

  /**
   * DemographicSurvey updateMany
   */
  export type DemographicSurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemographicSurveys.
     */
    data: XOR<DemographicSurveyUpdateManyMutationInput, DemographicSurveyUncheckedUpdateManyInput>
    /**
     * Filter which DemographicSurveys to update
     */
    where?: DemographicSurveyWhereInput
    /**
     * Limit how many DemographicSurveys to update.
     */
    limit?: number
  }

  /**
   * DemographicSurvey updateManyAndReturn
   */
  export type DemographicSurveyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * The data used to update DemographicSurveys.
     */
    data: XOR<DemographicSurveyUpdateManyMutationInput, DemographicSurveyUncheckedUpdateManyInput>
    /**
     * Filter which DemographicSurveys to update
     */
    where?: DemographicSurveyWhereInput
    /**
     * Limit how many DemographicSurveys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemographicSurvey upsert
   */
  export type DemographicSurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the DemographicSurvey to update in case it exists.
     */
    where: DemographicSurveyWhereUniqueInput
    /**
     * In case the DemographicSurvey found by the `where` argument doesn't exist, create a new DemographicSurvey with this data.
     */
    create: XOR<DemographicSurveyCreateInput, DemographicSurveyUncheckedCreateInput>
    /**
     * In case the DemographicSurvey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemographicSurveyUpdateInput, DemographicSurveyUncheckedUpdateInput>
  }

  /**
   * DemographicSurvey delete
   */
  export type DemographicSurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
    /**
     * Filter which DemographicSurvey to delete.
     */
    where: DemographicSurveyWhereUniqueInput
  }

  /**
   * DemographicSurvey deleteMany
   */
  export type DemographicSurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemographicSurveys to delete
     */
    where?: DemographicSurveyWhereInput
    /**
     * Limit how many DemographicSurveys to delete.
     */
    limit?: number
  }

  /**
   * DemographicSurvey without action
   */
  export type DemographicSurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemographicSurvey
     */
    select?: DemographicSurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemographicSurvey
     */
    omit?: DemographicSurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemographicSurveyInclude<ExtArgs> | null
  }


  /**
   * Model UserConsent
   */

  export type AggregateUserConsent = {
    _count: UserConsentCountAggregateOutputType | null
    _min: UserConsentMinAggregateOutputType | null
    _max: UserConsentMaxAggregateOutputType | null
  }

  export type UserConsentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    consentedAt: Date | null
    consentVersion: string | null
    createdAt: Date | null
  }

  export type UserConsentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    consentedAt: Date | null
    consentVersion: string | null
    createdAt: Date | null
  }

  export type UserConsentCountAggregateOutputType = {
    id: number
    userId: number
    consentedAt: number
    consentVersion: number
    createdAt: number
    _all: number
  }


  export type UserConsentMinAggregateInputType = {
    id?: true
    userId?: true
    consentedAt?: true
    consentVersion?: true
    createdAt?: true
  }

  export type UserConsentMaxAggregateInputType = {
    id?: true
    userId?: true
    consentedAt?: true
    consentVersion?: true
    createdAt?: true
  }

  export type UserConsentCountAggregateInputType = {
    id?: true
    userId?: true
    consentedAt?: true
    consentVersion?: true
    createdAt?: true
    _all?: true
  }

  export type UserConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConsent to aggregate.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserConsents
    **/
    _count?: true | UserConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserConsentMaxAggregateInputType
  }

  export type GetUserConsentAggregateType<T extends UserConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserConsent[P]>
      : GetScalarType<T[P], AggregateUserConsent[P]>
  }




  export type UserConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConsentWhereInput
    orderBy?: UserConsentOrderByWithAggregationInput | UserConsentOrderByWithAggregationInput[]
    by: UserConsentScalarFieldEnum[] | UserConsentScalarFieldEnum
    having?: UserConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserConsentCountAggregateInputType | true
    _min?: UserConsentMinAggregateInputType
    _max?: UserConsentMaxAggregateInputType
  }

  export type UserConsentGroupByOutputType = {
    id: string
    userId: string
    consentedAt: Date
    consentVersion: string
    createdAt: Date
    _count: UserConsentCountAggregateOutputType | null
    _min: UserConsentMinAggregateOutputType | null
    _max: UserConsentMaxAggregateOutputType | null
  }

  type GetUserConsentGroupByPayload<T extends UserConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserConsentGroupByOutputType[P]>
            : GetScalarType<T[P], UserConsentGroupByOutputType[P]>
        }
      >
    >


  export type UserConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentedAt?: boolean
    consentVersion?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentedAt?: boolean
    consentVersion?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentedAt?: boolean
    consentVersion?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectScalar = {
    id?: boolean
    userId?: boolean
    consentedAt?: boolean
    consentVersion?: boolean
    createdAt?: boolean
  }

  export type UserConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "consentedAt" | "consentVersion" | "createdAt", ExtArgs["result"]["userConsent"]>
  export type UserConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserConsentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserConsent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      consentedAt: Date
      consentVersion: string
      createdAt: Date
    }, ExtArgs["result"]["userConsent"]>
    composites: {}
  }

  type UserConsentGetPayload<S extends boolean | null | undefined | UserConsentDefaultArgs> = $Result.GetResult<Prisma.$UserConsentPayload, S>

  type UserConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserConsentCountAggregateInputType | true
    }

  export interface UserConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserConsent'], meta: { name: 'UserConsent' } }
    /**
     * Find zero or one UserConsent that matches the filter.
     * @param {UserConsentFindUniqueArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserConsentFindUniqueArgs>(args: SelectSubset<T, UserConsentFindUniqueArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserConsent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserConsentFindUniqueOrThrowArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConsent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindFirstArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserConsentFindFirstArgs>(args?: SelectSubset<T, UserConsentFindFirstArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConsent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindFirstOrThrowArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserConsents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserConsents
     * const userConsents = await prisma.userConsent.findMany()
     * 
     * // Get first 10 UserConsents
     * const userConsents = await prisma.userConsent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserConsentFindManyArgs>(args?: SelectSubset<T, UserConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserConsent.
     * @param {UserConsentCreateArgs} args - Arguments to create a UserConsent.
     * @example
     * // Create one UserConsent
     * const UserConsent = await prisma.userConsent.create({
     *   data: {
     *     // ... data to create a UserConsent
     *   }
     * })
     * 
     */
    create<T extends UserConsentCreateArgs>(args: SelectSubset<T, UserConsentCreateArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserConsents.
     * @param {UserConsentCreateManyArgs} args - Arguments to create many UserConsents.
     * @example
     * // Create many UserConsents
     * const userConsent = await prisma.userConsent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserConsentCreateManyArgs>(args?: SelectSubset<T, UserConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserConsents and returns the data saved in the database.
     * @param {UserConsentCreateManyAndReturnArgs} args - Arguments to create many UserConsents.
     * @example
     * // Create many UserConsents
     * const userConsent = await prisma.userConsent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserConsents and only return the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserConsent.
     * @param {UserConsentDeleteArgs} args - Arguments to delete one UserConsent.
     * @example
     * // Delete one UserConsent
     * const UserConsent = await prisma.userConsent.delete({
     *   where: {
     *     // ... filter to delete one UserConsent
     *   }
     * })
     * 
     */
    delete<T extends UserConsentDeleteArgs>(args: SelectSubset<T, UserConsentDeleteArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserConsent.
     * @param {UserConsentUpdateArgs} args - Arguments to update one UserConsent.
     * @example
     * // Update one UserConsent
     * const userConsent = await prisma.userConsent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserConsentUpdateArgs>(args: SelectSubset<T, UserConsentUpdateArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserConsents.
     * @param {UserConsentDeleteManyArgs} args - Arguments to filter UserConsents to delete.
     * @example
     * // Delete a few UserConsents
     * const { count } = await prisma.userConsent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserConsentDeleteManyArgs>(args?: SelectSubset<T, UserConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserConsents
     * const userConsent = await prisma.userConsent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserConsentUpdateManyArgs>(args: SelectSubset<T, UserConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConsents and returns the data updated in the database.
     * @param {UserConsentUpdateManyAndReturnArgs} args - Arguments to update many UserConsents.
     * @example
     * // Update many UserConsents
     * const userConsent = await prisma.userConsent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserConsents and only return the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserConsent.
     * @param {UserConsentUpsertArgs} args - Arguments to update or create a UserConsent.
     * @example
     * // Update or create a UserConsent
     * const userConsent = await prisma.userConsent.upsert({
     *   create: {
     *     // ... data to create a UserConsent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserConsent we want to update
     *   }
     * })
     */
    upsert<T extends UserConsentUpsertArgs>(args: SelectSubset<T, UserConsentUpsertArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentCountArgs} args - Arguments to filter UserConsents to count.
     * @example
     * // Count the number of UserConsents
     * const count = await prisma.userConsent.count({
     *   where: {
     *     // ... the filter for the UserConsents we want to count
     *   }
     * })
    **/
    count<T extends UserConsentCountArgs>(
      args?: Subset<T, UserConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserConsentAggregateArgs>(args: Subset<T, UserConsentAggregateArgs>): Prisma.PrismaPromise<GetUserConsentAggregateType<T>>

    /**
     * Group by UserConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentGroupByArgs} args - Group by arguments.
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
      T extends UserConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserConsentGroupByArgs['orderBy'] }
        : { orderBy?: UserConsentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserConsent model
   */
  readonly fields: UserConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserConsent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserConsent model
   */
  interface UserConsentFieldRefs {
    readonly id: FieldRef<"UserConsent", 'String'>
    readonly userId: FieldRef<"UserConsent", 'String'>
    readonly consentedAt: FieldRef<"UserConsent", 'DateTime'>
    readonly consentVersion: FieldRef<"UserConsent", 'String'>
    readonly createdAt: FieldRef<"UserConsent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserConsent findUnique
   */
  export type UserConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent findUniqueOrThrow
   */
  export type UserConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent findFirst
   */
  export type UserConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConsents.
     */
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent findFirstOrThrow
   */
  export type UserConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConsents.
     */
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent findMany
   */
  export type UserConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsents to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent create
   */
  export type UserConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserConsent.
     */
    data: XOR<UserConsentCreateInput, UserConsentUncheckedCreateInput>
  }

  /**
   * UserConsent createMany
   */
  export type UserConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserConsents.
     */
    data: UserConsentCreateManyInput | UserConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserConsent createManyAndReturn
   */
  export type UserConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * The data used to create many UserConsents.
     */
    data: UserConsentCreateManyInput | UserConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConsent update
   */
  export type UserConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserConsent.
     */
    data: XOR<UserConsentUpdateInput, UserConsentUncheckedUpdateInput>
    /**
     * Choose, which UserConsent to update.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent updateMany
   */
  export type UserConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserConsents.
     */
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyInput>
    /**
     * Filter which UserConsents to update
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to update.
     */
    limit?: number
  }

  /**
   * UserConsent updateManyAndReturn
   */
  export type UserConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * The data used to update UserConsents.
     */
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyInput>
    /**
     * Filter which UserConsents to update
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConsent upsert
   */
  export type UserConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserConsent to update in case it exists.
     */
    where: UserConsentWhereUniqueInput
    /**
     * In case the UserConsent found by the `where` argument doesn't exist, create a new UserConsent with this data.
     */
    create: XOR<UserConsentCreateInput, UserConsentUncheckedCreateInput>
    /**
     * In case the UserConsent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserConsentUpdateInput, UserConsentUncheckedUpdateInput>
  }

  /**
   * UserConsent delete
   */
  export type UserConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter which UserConsent to delete.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent deleteMany
   */
  export type UserConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConsents to delete
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to delete.
     */
    limit?: number
  }

  /**
   * UserConsent without action
   */
  export type UserConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAdmin: 'isAdmin',
    metadata: 'metadata'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    isNonWord: 'isNonWord',
    wordListId: 'wordListId'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const WordListScalarFieldEnum: {
    id: 'id',
    original_id: 'original_id',
    createdAt: 'createdAt',
    timesUsed: 'timesUsed',
    lastUsedAt: 'lastUsedAt'
  };

  export type WordListScalarFieldEnum = (typeof WordListScalarFieldEnum)[keyof typeof WordListScalarFieldEnum]


  export const UserWordListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordListId: 'wordListId',
    assignedAt: 'assignedAt'
  };

  export type UserWordListScalarFieldEnum = (typeof UserWordListScalarFieldEnum)[keyof typeof UserWordListScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordListId: 'wordListId',
    score: 'score',
    correctWords: 'correctWords',
    incorrectWords: 'incorrectWords',
    correctNonWords: 'correctNonWords',
    incorrectNonWords: 'incorrectNonWords',
    npxionTime: 'npxionTime',
    totalQuizDuration: 'totalQuizDuration',
    responses: 'responses',
    createdAt: 'createdAt',
    deviceType: 'deviceType',
    deviceOS: 'deviceOS',
    deviceBrowser: 'deviceBrowser',
    monitorSize: 'monitorSize',
    viewportSize: 'viewportSize',
    quizStatus: 'quizStatus'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const DemographicSurveyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nativeLanguage: 'nativeLanguage',
    otherNativeLanguage: 'otherNativeLanguage',
    languageAcquisition: 'languageAcquisition',
    otherAcquisitionLanguage: 'otherAcquisitionLanguage',
    familyLanguage: 'familyLanguage',
    otherFamilyLanguage: 'otherFamilyLanguage',
    gender: 'gender',
    age: 'age',
    university: 'university',
    age_of_acquiring_arabic: 'age_of_acquiring_arabic',
    listening_proficiency: 'listening_proficiency',
    reading_proficiency: 'reading_proficiency',
    speaking_proficiency: 'speaking_proficiency',
    writing_proficiency: 'writing_proficiency',
    years_living_in_arabic_countries_years: 'years_living_in_arabic_countries_years',
    years_living_in_arabic_countries_months: 'years_living_in_arabic_countries_months',
    years_living_in_arabic_environments_years: 'years_living_in_arabic_environments_years',
    years_living_in_arabic_environments_months: 'years_living_in_arabic_environments_months',
    highestEducation: 'highestEducation',
    arabicDialect: 'arabicDialect',
    nationality: 'nationality',
    otherNationality: 'otherNationality',
    residence: 'residence',
    otherResidence: 'otherResidence',
    languages: 'languages',
    kindergartenLanguage: 'kindergartenLanguage',
    otherKindergartenLanguage: 'otherKindergartenLanguage',
    primaryLanguage: 'primaryLanguage',
    otherPrimaryLanguage: 'otherPrimaryLanguage',
    middleLanguage: 'middleLanguage',
    otherMiddleLanguage: 'otherMiddleLanguage',
    highSchoolLanguage: 'highSchoolLanguage',
    otherHighSchoolLanguage: 'otherHighSchoolLanguage',
    universityLanguage: 'universityLanguage',
    otherUniversityLanguage: 'otherUniversityLanguage',
    readingHours: 'readingHours',
    listeningHours: 'listeningHours',
    writingHours: 'writingHours',
    speakingHours: 'speakingHours',
    attentionDisorder: 'attentionDisorder',
    readingDisorder: 'readingDisorder',
    vision: 'vision',
    handedness: 'handedness',
    createdAt: 'createdAt'
  };

  export type DemographicSurveyScalarFieldEnum = (typeof DemographicSurveyScalarFieldEnum)[keyof typeof DemographicSurveyScalarFieldEnum]


  export const UserConsentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    consentedAt: 'consentedAt',
    consentVersion: 'consentVersion',
    createdAt: 'createdAt'
  };

  export type UserConsentScalarFieldEnum = (typeof UserConsentScalarFieldEnum)[keyof typeof UserConsentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    metadata?: JsonNullableFilter<"User">
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    surveyResponses?: DemographicSurveyListRelationFilter
    consent?: UserConsentListRelationFilter
    wordListAssignments?: UserWordListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    metadata?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
    surveyResponses?: DemographicSurveyOrderByRelationAggregateInput
    consent?: UserConsentOrderByRelationAggregateInput
    wordListAssignments?: UserWordListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    metadata?: JsonNullableFilter<"User">
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
    surveyResponses?: DemographicSurveyListRelationFilter
    consent?: UserConsentListRelationFilter
    wordListAssignments?: UserWordListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"User">
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: IntFilter<"Word"> | number
    word?: StringFilter<"Word"> | string
    isNonWord?: BoolFilter<"Word"> | boolean
    wordListId?: IntFilter<"Word"> | number
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    isNonWord?: SortOrder
    wordListId?: SortOrder
    wordList?: WordListOrderByWithRelationInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    word?: StringFilter<"Word"> | string
    isNonWord?: BoolFilter<"Word"> | boolean
    wordListId?: IntFilter<"Word"> | number
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
  }, "id">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    isNonWord?: SortOrder
    wordListId?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Word"> | number
    word?: StringWithAggregatesFilter<"Word"> | string
    isNonWord?: BoolWithAggregatesFilter<"Word"> | boolean
    wordListId?: IntWithAggregatesFilter<"Word"> | number
  }

  export type WordListWhereInput = {
    AND?: WordListWhereInput | WordListWhereInput[]
    OR?: WordListWhereInput[]
    NOT?: WordListWhereInput | WordListWhereInput[]
    id?: IntFilter<"WordList"> | number
    original_id?: IntFilter<"WordList"> | number
    createdAt?: DateTimeFilter<"WordList"> | Date | string
    timesUsed?: IntFilter<"WordList"> | number
    lastUsedAt?: DateTimeNullableFilter<"WordList"> | Date | string | null
    words?: WordListRelationFilter
    userAssignments?: UserWordListListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }

  export type WordListOrderByWithRelationInput = {
    id?: SortOrder
    original_id?: SortOrder
    createdAt?: SortOrder
    timesUsed?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    words?: WordOrderByRelationAggregateInput
    userAssignments?: UserWordListOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
  }

  export type WordListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WordListWhereInput | WordListWhereInput[]
    OR?: WordListWhereInput[]
    NOT?: WordListWhereInput | WordListWhereInput[]
    original_id?: IntFilter<"WordList"> | number
    createdAt?: DateTimeFilter<"WordList"> | Date | string
    timesUsed?: IntFilter<"WordList"> | number
    lastUsedAt?: DateTimeNullableFilter<"WordList"> | Date | string | null
    words?: WordListRelationFilter
    userAssignments?: UserWordListListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }, "id">

  export type WordListOrderByWithAggregationInput = {
    id?: SortOrder
    original_id?: SortOrder
    createdAt?: SortOrder
    timesUsed?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    _count?: WordListCountOrderByAggregateInput
    _avg?: WordListAvgOrderByAggregateInput
    _max?: WordListMaxOrderByAggregateInput
    _min?: WordListMinOrderByAggregateInput
    _sum?: WordListSumOrderByAggregateInput
  }

  export type WordListScalarWhereWithAggregatesInput = {
    AND?: WordListScalarWhereWithAggregatesInput | WordListScalarWhereWithAggregatesInput[]
    OR?: WordListScalarWhereWithAggregatesInput[]
    NOT?: WordListScalarWhereWithAggregatesInput | WordListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WordList"> | number
    original_id?: IntWithAggregatesFilter<"WordList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WordList"> | Date | string
    timesUsed?: IntWithAggregatesFilter<"WordList"> | number
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"WordList"> | Date | string | null
  }

  export type UserWordListWhereInput = {
    AND?: UserWordListWhereInput | UserWordListWhereInput[]
    OR?: UserWordListWhereInput[]
    NOT?: UserWordListWhereInput | UserWordListWhereInput[]
    id?: IntFilter<"UserWordList"> | number
    userId?: StringFilter<"UserWordList"> | string
    wordListId?: IntFilter<"UserWordList"> | number
    assignedAt?: DateTimeFilter<"UserWordList"> | Date | string
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserWordListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    assignedAt?: SortOrder
    wordList?: WordListOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserWordListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_wordListId?: UserWordListUserIdWordListIdCompoundUniqueInput
    AND?: UserWordListWhereInput | UserWordListWhereInput[]
    OR?: UserWordListWhereInput[]
    NOT?: UserWordListWhereInput | UserWordListWhereInput[]
    userId?: StringFilter<"UserWordList"> | string
    wordListId?: IntFilter<"UserWordList"> | number
    assignedAt?: DateTimeFilter<"UserWordList"> | Date | string
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_wordListId">

  export type UserWordListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    assignedAt?: SortOrder
    _count?: UserWordListCountOrderByAggregateInput
    _avg?: UserWordListAvgOrderByAggregateInput
    _max?: UserWordListMaxOrderByAggregateInput
    _min?: UserWordListMinOrderByAggregateInput
    _sum?: UserWordListSumOrderByAggregateInput
  }

  export type UserWordListScalarWhereWithAggregatesInput = {
    AND?: UserWordListScalarWhereWithAggregatesInput | UserWordListScalarWhereWithAggregatesInput[]
    OR?: UserWordListScalarWhereWithAggregatesInput[]
    NOT?: UserWordListScalarWhereWithAggregatesInput | UserWordListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserWordList"> | number
    userId?: StringWithAggregatesFilter<"UserWordList"> | string
    wordListId?: IntWithAggregatesFilter<"UserWordList"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"UserWordList"> | Date | string
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: IntFilter<"QuizAttempt"> | number
    userId?: StringFilter<"QuizAttempt"> | string
    wordListId?: IntFilter<"QuizAttempt"> | number
    score?: FloatFilter<"QuizAttempt"> | number
    correctWords?: IntFilter<"QuizAttempt"> | number
    incorrectWords?: IntFilter<"QuizAttempt"> | number
    correctNonWords?: IntFilter<"QuizAttempt"> | number
    incorrectNonWords?: IntFilter<"QuizAttempt"> | number
    npxionTime?: IntFilter<"QuizAttempt"> | number
    totalQuizDuration?: IntFilter<"QuizAttempt"> | number
    responses?: JsonFilter<"QuizAttempt">
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    deviceType?: StringFilter<"QuizAttempt"> | string
    deviceOS?: StringFilter<"QuizAttempt"> | string
    deviceBrowser?: StringFilter<"QuizAttempt"> | string
    monitorSize?: StringFilter<"QuizAttempt"> | string
    viewportSize?: StringFilter<"QuizAttempt"> | string
    quizStatus?: StringFilter<"QuizAttempt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
    responses?: SortOrder
    createdAt?: SortOrder
    deviceType?: SortOrder
    deviceOS?: SortOrder
    deviceBrowser?: SortOrder
    monitorSize?: SortOrder
    viewportSize?: SortOrder
    quizStatus?: SortOrder
    user?: UserOrderByWithRelationInput
    wordList?: WordListOrderByWithRelationInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    userId?: StringFilter<"QuizAttempt"> | string
    wordListId?: IntFilter<"QuizAttempt"> | number
    score?: FloatFilter<"QuizAttempt"> | number
    correctWords?: IntFilter<"QuizAttempt"> | number
    incorrectWords?: IntFilter<"QuizAttempt"> | number
    correctNonWords?: IntFilter<"QuizAttempt"> | number
    incorrectNonWords?: IntFilter<"QuizAttempt"> | number
    npxionTime?: IntFilter<"QuizAttempt"> | number
    totalQuizDuration?: IntFilter<"QuizAttempt"> | number
    responses?: JsonFilter<"QuizAttempt">
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    deviceType?: StringFilter<"QuizAttempt"> | string
    deviceOS?: StringFilter<"QuizAttempt"> | string
    deviceBrowser?: StringFilter<"QuizAttempt"> | string
    monitorSize?: StringFilter<"QuizAttempt"> | string
    viewportSize?: StringFilter<"QuizAttempt"> | string
    quizStatus?: StringFilter<"QuizAttempt"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    wordList?: XOR<WordListScalarRelationFilter, WordListWhereInput>
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
    responses?: SortOrder
    createdAt?: SortOrder
    deviceType?: SortOrder
    deviceOS?: SortOrder
    deviceBrowser?: SortOrder
    monitorSize?: SortOrder
    viewportSize?: SortOrder
    quizStatus?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizAttempt"> | number
    userId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    wordListId?: IntWithAggregatesFilter<"QuizAttempt"> | number
    score?: FloatWithAggregatesFilter<"QuizAttempt"> | number
    correctWords?: IntWithAggregatesFilter<"QuizAttempt"> | number
    incorrectWords?: IntWithAggregatesFilter<"QuizAttempt"> | number
    correctNonWords?: IntWithAggregatesFilter<"QuizAttempt"> | number
    incorrectNonWords?: IntWithAggregatesFilter<"QuizAttempt"> | number
    npxionTime?: IntWithAggregatesFilter<"QuizAttempt"> | number
    totalQuizDuration?: IntWithAggregatesFilter<"QuizAttempt"> | number
    responses?: JsonWithAggregatesFilter<"QuizAttempt">
    createdAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    deviceType?: StringWithAggregatesFilter<"QuizAttempt"> | string
    deviceOS?: StringWithAggregatesFilter<"QuizAttempt"> | string
    deviceBrowser?: StringWithAggregatesFilter<"QuizAttempt"> | string
    monitorSize?: StringWithAggregatesFilter<"QuizAttempt"> | string
    viewportSize?: StringWithAggregatesFilter<"QuizAttempt"> | string
    quizStatus?: StringWithAggregatesFilter<"QuizAttempt"> | string
  }

  export type DemographicSurveyWhereInput = {
    AND?: DemographicSurveyWhereInput | DemographicSurveyWhereInput[]
    OR?: DemographicSurveyWhereInput[]
    NOT?: DemographicSurveyWhereInput | DemographicSurveyWhereInput[]
    id?: StringFilter<"DemographicSurvey"> | string
    userId?: StringFilter<"DemographicSurvey"> | string
    nativeLanguage?: StringFilter<"DemographicSurvey"> | string
    otherNativeLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    languageAcquisition?: StringFilter<"DemographicSurvey"> | string
    otherAcquisitionLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    familyLanguage?: StringFilter<"DemographicSurvey"> | string
    otherFamilyLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    gender?: StringFilter<"DemographicSurvey"> | string
    age?: StringFilter<"DemographicSurvey"> | string
    university?: StringNullableFilter<"DemographicSurvey"> | string | null
    age_of_acquiring_arabic?: StringFilter<"DemographicSurvey"> | string
    listening_proficiency?: StringFilter<"DemographicSurvey"> | string
    reading_proficiency?: StringFilter<"DemographicSurvey"> | string
    speaking_proficiency?: StringFilter<"DemographicSurvey"> | string
    writing_proficiency?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    years_living_in_arabic_environments_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_environments_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    highestEducation?: StringFilter<"DemographicSurvey"> | string
    arabicDialect?: StringFilter<"DemographicSurvey"> | string
    nationality?: StringFilter<"DemographicSurvey"> | string
    otherNationality?: StringNullableFilter<"DemographicSurvey"> | string | null
    residence?: StringFilter<"DemographicSurvey"> | string
    otherResidence?: StringNullableFilter<"DemographicSurvey"> | string | null
    languages?: StringFilter<"DemographicSurvey"> | string
    kindergartenLanguage?: StringFilter<"DemographicSurvey"> | string
    otherKindergartenLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    primaryLanguage?: StringFilter<"DemographicSurvey"> | string
    otherPrimaryLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    middleLanguage?: StringFilter<"DemographicSurvey"> | string
    otherMiddleLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    highSchoolLanguage?: StringFilter<"DemographicSurvey"> | string
    otherHighSchoolLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    universityLanguage?: StringFilter<"DemographicSurvey"> | string
    otherUniversityLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    readingHours?: StringFilter<"DemographicSurvey"> | string
    listeningHours?: StringFilter<"DemographicSurvey"> | string
    writingHours?: StringFilter<"DemographicSurvey"> | string
    speakingHours?: StringFilter<"DemographicSurvey"> | string
    attentionDisorder?: StringFilter<"DemographicSurvey"> | string
    readingDisorder?: StringFilter<"DemographicSurvey"> | string
    vision?: StringFilter<"DemographicSurvey"> | string
    handedness?: StringFilter<"DemographicSurvey"> | string
    createdAt?: DateTimeFilter<"DemographicSurvey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DemographicSurveyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nativeLanguage?: SortOrder
    otherNativeLanguage?: SortOrderInput | SortOrder
    languageAcquisition?: SortOrder
    otherAcquisitionLanguage?: SortOrderInput | SortOrder
    familyLanguage?: SortOrder
    otherFamilyLanguage?: SortOrderInput | SortOrder
    gender?: SortOrder
    age?: SortOrder
    university?: SortOrderInput | SortOrder
    age_of_acquiring_arabic?: SortOrder
    listening_proficiency?: SortOrder
    reading_proficiency?: SortOrder
    speaking_proficiency?: SortOrder
    writing_proficiency?: SortOrder
    years_living_in_arabic_countries_years?: SortOrder
    years_living_in_arabic_countries_months?: SortOrderInput | SortOrder
    years_living_in_arabic_environments_years?: SortOrder
    years_living_in_arabic_environments_months?: SortOrderInput | SortOrder
    highestEducation?: SortOrder
    arabicDialect?: SortOrder
    nationality?: SortOrder
    otherNationality?: SortOrderInput | SortOrder
    residence?: SortOrder
    otherResidence?: SortOrderInput | SortOrder
    languages?: SortOrder
    kindergartenLanguage?: SortOrder
    otherKindergartenLanguage?: SortOrderInput | SortOrder
    primaryLanguage?: SortOrder
    otherPrimaryLanguage?: SortOrderInput | SortOrder
    middleLanguage?: SortOrder
    otherMiddleLanguage?: SortOrderInput | SortOrder
    highSchoolLanguage?: SortOrder
    otherHighSchoolLanguage?: SortOrderInput | SortOrder
    universityLanguage?: SortOrder
    otherUniversityLanguage?: SortOrderInput | SortOrder
    readingHours?: SortOrder
    listeningHours?: SortOrder
    writingHours?: SortOrder
    speakingHours?: SortOrder
    attentionDisorder?: SortOrder
    readingDisorder?: SortOrder
    vision?: SortOrder
    handedness?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DemographicSurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DemographicSurveyWhereInput | DemographicSurveyWhereInput[]
    OR?: DemographicSurveyWhereInput[]
    NOT?: DemographicSurveyWhereInput | DemographicSurveyWhereInput[]
    nativeLanguage?: StringFilter<"DemographicSurvey"> | string
    otherNativeLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    languageAcquisition?: StringFilter<"DemographicSurvey"> | string
    otherAcquisitionLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    familyLanguage?: StringFilter<"DemographicSurvey"> | string
    otherFamilyLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    gender?: StringFilter<"DemographicSurvey"> | string
    age?: StringFilter<"DemographicSurvey"> | string
    university?: StringNullableFilter<"DemographicSurvey"> | string | null
    age_of_acquiring_arabic?: StringFilter<"DemographicSurvey"> | string
    listening_proficiency?: StringFilter<"DemographicSurvey"> | string
    reading_proficiency?: StringFilter<"DemographicSurvey"> | string
    speaking_proficiency?: StringFilter<"DemographicSurvey"> | string
    writing_proficiency?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    years_living_in_arabic_environments_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_environments_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    highestEducation?: StringFilter<"DemographicSurvey"> | string
    arabicDialect?: StringFilter<"DemographicSurvey"> | string
    nationality?: StringFilter<"DemographicSurvey"> | string
    otherNationality?: StringNullableFilter<"DemographicSurvey"> | string | null
    residence?: StringFilter<"DemographicSurvey"> | string
    otherResidence?: StringNullableFilter<"DemographicSurvey"> | string | null
    languages?: StringFilter<"DemographicSurvey"> | string
    kindergartenLanguage?: StringFilter<"DemographicSurvey"> | string
    otherKindergartenLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    primaryLanguage?: StringFilter<"DemographicSurvey"> | string
    otherPrimaryLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    middleLanguage?: StringFilter<"DemographicSurvey"> | string
    otherMiddleLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    highSchoolLanguage?: StringFilter<"DemographicSurvey"> | string
    otherHighSchoolLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    universityLanguage?: StringFilter<"DemographicSurvey"> | string
    otherUniversityLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    readingHours?: StringFilter<"DemographicSurvey"> | string
    listeningHours?: StringFilter<"DemographicSurvey"> | string
    writingHours?: StringFilter<"DemographicSurvey"> | string
    speakingHours?: StringFilter<"DemographicSurvey"> | string
    attentionDisorder?: StringFilter<"DemographicSurvey"> | string
    readingDisorder?: StringFilter<"DemographicSurvey"> | string
    vision?: StringFilter<"DemographicSurvey"> | string
    handedness?: StringFilter<"DemographicSurvey"> | string
    createdAt?: DateTimeFilter<"DemographicSurvey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type DemographicSurveyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nativeLanguage?: SortOrder
    otherNativeLanguage?: SortOrderInput | SortOrder
    languageAcquisition?: SortOrder
    otherAcquisitionLanguage?: SortOrderInput | SortOrder
    familyLanguage?: SortOrder
    otherFamilyLanguage?: SortOrderInput | SortOrder
    gender?: SortOrder
    age?: SortOrder
    university?: SortOrderInput | SortOrder
    age_of_acquiring_arabic?: SortOrder
    listening_proficiency?: SortOrder
    reading_proficiency?: SortOrder
    speaking_proficiency?: SortOrder
    writing_proficiency?: SortOrder
    years_living_in_arabic_countries_years?: SortOrder
    years_living_in_arabic_countries_months?: SortOrderInput | SortOrder
    years_living_in_arabic_environments_years?: SortOrder
    years_living_in_arabic_environments_months?: SortOrderInput | SortOrder
    highestEducation?: SortOrder
    arabicDialect?: SortOrder
    nationality?: SortOrder
    otherNationality?: SortOrderInput | SortOrder
    residence?: SortOrder
    otherResidence?: SortOrderInput | SortOrder
    languages?: SortOrder
    kindergartenLanguage?: SortOrder
    otherKindergartenLanguage?: SortOrderInput | SortOrder
    primaryLanguage?: SortOrder
    otherPrimaryLanguage?: SortOrderInput | SortOrder
    middleLanguage?: SortOrder
    otherMiddleLanguage?: SortOrderInput | SortOrder
    highSchoolLanguage?: SortOrder
    otherHighSchoolLanguage?: SortOrderInput | SortOrder
    universityLanguage?: SortOrder
    otherUniversityLanguage?: SortOrderInput | SortOrder
    readingHours?: SortOrder
    listeningHours?: SortOrder
    writingHours?: SortOrder
    speakingHours?: SortOrder
    attentionDisorder?: SortOrder
    readingDisorder?: SortOrder
    vision?: SortOrder
    handedness?: SortOrder
    createdAt?: SortOrder
    _count?: DemographicSurveyCountOrderByAggregateInput
    _max?: DemographicSurveyMaxOrderByAggregateInput
    _min?: DemographicSurveyMinOrderByAggregateInput
  }

  export type DemographicSurveyScalarWhereWithAggregatesInput = {
    AND?: DemographicSurveyScalarWhereWithAggregatesInput | DemographicSurveyScalarWhereWithAggregatesInput[]
    OR?: DemographicSurveyScalarWhereWithAggregatesInput[]
    NOT?: DemographicSurveyScalarWhereWithAggregatesInput | DemographicSurveyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    userId?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    nativeLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherNativeLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    languageAcquisition?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherAcquisitionLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    familyLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherFamilyLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    gender?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    age?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    university?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    age_of_acquiring_arabic?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    listening_proficiency?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    reading_proficiency?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    speaking_proficiency?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    writing_proficiency?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_years?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_months?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    years_living_in_arabic_environments_years?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    years_living_in_arabic_environments_months?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    highestEducation?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    arabicDialect?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    nationality?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherNationality?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    residence?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherResidence?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    languages?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    kindergartenLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherKindergartenLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    primaryLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherPrimaryLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    middleLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherMiddleLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    highSchoolLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherHighSchoolLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    universityLanguage?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    otherUniversityLanguage?: StringNullableWithAggregatesFilter<"DemographicSurvey"> | string | null
    readingHours?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    listeningHours?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    writingHours?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    speakingHours?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    attentionDisorder?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    readingDisorder?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    vision?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    handedness?: StringWithAggregatesFilter<"DemographicSurvey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DemographicSurvey"> | Date | string
  }

  export type UserConsentWhereInput = {
    AND?: UserConsentWhereInput | UserConsentWhereInput[]
    OR?: UserConsentWhereInput[]
    NOT?: UserConsentWhereInput | UserConsentWhereInput[]
    id?: StringFilter<"UserConsent"> | string
    userId?: StringFilter<"UserConsent"> | string
    consentedAt?: DateTimeFilter<"UserConsent"> | Date | string
    consentVersion?: StringFilter<"UserConsent"> | string
    createdAt?: DateTimeFilter<"UserConsent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserConsentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentedAt?: SortOrder
    consentVersion?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserConsentWhereInput | UserConsentWhereInput[]
    OR?: UserConsentWhereInput[]
    NOT?: UserConsentWhereInput | UserConsentWhereInput[]
    consentedAt?: DateTimeFilter<"UserConsent"> | Date | string
    consentVersion?: StringFilter<"UserConsent"> | string
    createdAt?: DateTimeFilter<"UserConsent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserConsentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentedAt?: SortOrder
    consentVersion?: SortOrder
    createdAt?: SortOrder
    _count?: UserConsentCountOrderByAggregateInput
    _max?: UserConsentMaxOrderByAggregateInput
    _min?: UserConsentMinOrderByAggregateInput
  }

  export type UserConsentScalarWhereWithAggregatesInput = {
    AND?: UserConsentScalarWhereWithAggregatesInput | UserConsentScalarWhereWithAggregatesInput[]
    OR?: UserConsentScalarWhereWithAggregatesInput[]
    NOT?: UserConsentScalarWhereWithAggregatesInput | UserConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserConsent"> | string
    userId?: StringWithAggregatesFilter<"UserConsent"> | string
    consentedAt?: DateTimeWithAggregatesFilter<"UserConsent"> | Date | string
    consentVersion?: StringWithAggregatesFilter<"UserConsent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserConsent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateInput = {
    word: string
    isNonWord: boolean
    wordList: WordListCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    word: string
    isNonWord: boolean
    wordListId: number
  }

  export type WordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
    wordList?: WordListUpdateOneRequiredWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
    wordListId?: IntFieldUpdateOperationsInput | number
  }

  export type WordCreateManyInput = {
    id?: number
    word: string
    isNonWord: boolean
    wordListId: number
  }

  export type WordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
    wordListId?: IntFieldUpdateOperationsInput | number
  }

  export type WordListCreateInput = {
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordCreateNestedManyWithoutWordListInput
    userAssignments?: UserWordListCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutWordListInput
  }

  export type WordListUncheckedCreateInput = {
    id?: number
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordUncheckedCreateNestedManyWithoutWordListInput
    userAssignments?: UserWordListUncheckedCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutWordListInput
  }

  export type WordListUpdateInput = {
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUpdateManyWithoutWordListNestedInput
    userAssignments?: UserWordListUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutWordListNestedInput
  }

  export type WordListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUncheckedUpdateManyWithoutWordListNestedInput
    userAssignments?: UserWordListUncheckedUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutWordListNestedInput
  }

  export type WordListCreateManyInput = {
    id?: number
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
  }

  export type WordListUpdateManyMutationInput = {
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WordListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWordListCreateInput = {
    assignedAt?: Date | string
    wordList: WordListCreateNestedOneWithoutUserAssignmentsInput
    user: UserCreateNestedOneWithoutWordListAssignmentsInput
  }

  export type UserWordListUncheckedCreateInput = {
    id?: number
    userId: string
    wordListId: number
    assignedAt?: Date | string
  }

  export type UserWordListUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordList?: WordListUpdateOneRequiredWithoutUserAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutWordListAssignmentsNestedInput
  }

  export type UserWordListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wordListId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordListCreateManyInput = {
    id?: number
    userId: string
    wordListId: number
    assignedAt?: Date | string
  }

  export type UserWordListUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wordListId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateInput = {
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
    wordList: WordListCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: number
    userId: string
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type QuizAttemptUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
    wordList?: WordListUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wordListId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptCreateManyInput = {
    id?: number
    userId: string
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type QuizAttemptUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    wordListId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type DemographicSurveyCreateInput = {
    id?: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSurveyResponsesInput
  }

  export type DemographicSurveyUncheckedCreateInput = {
    id?: string
    userId: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
  }

  export type DemographicSurveyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSurveyResponsesNestedInput
  }

  export type DemographicSurveyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemographicSurveyCreateManyInput = {
    id?: string
    userId: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
  }

  export type DemographicSurveyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemographicSurveyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentCreateInput = {
    id?: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsentInput
  }

  export type UserConsentUncheckedCreateInput = {
    id?: string
    userId: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
  }

  export type UserConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsentNestedInput
  }

  export type UserConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentCreateManyInput = {
    id?: string
    userId: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
  }

  export type UserConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type DemographicSurveyListRelationFilter = {
    every?: DemographicSurveyWhereInput
    some?: DemographicSurveyWhereInput
    none?: DemographicSurveyWhereInput
  }

  export type UserConsentListRelationFilter = {
    every?: UserConsentWhereInput
    some?: UserConsentWhereInput
    none?: UserConsentWhereInput
  }

  export type UserWordListListRelationFilter = {
    every?: UserWordListWhereInput
    some?: UserWordListWhereInput
    none?: UserWordListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemographicSurveyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserConsentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWordListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    metadata?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WordListScalarRelationFilter = {
    is?: WordListWhereInput
    isNot?: WordListWhereInput
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isNonWord?: SortOrder
    wordListId?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isNonWord?: SortOrder
    wordListId?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isNonWord?: SortOrder
    wordListId?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordListCountOrderByAggregateInput = {
    id?: SortOrder
    original_id?: SortOrder
    createdAt?: SortOrder
    timesUsed?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type WordListAvgOrderByAggregateInput = {
    id?: SortOrder
    original_id?: SortOrder
    timesUsed?: SortOrder
  }

  export type WordListMaxOrderByAggregateInput = {
    id?: SortOrder
    original_id?: SortOrder
    createdAt?: SortOrder
    timesUsed?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type WordListMinOrderByAggregateInput = {
    id?: SortOrder
    original_id?: SortOrder
    createdAt?: SortOrder
    timesUsed?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type WordListSumOrderByAggregateInput = {
    id?: SortOrder
    original_id?: SortOrder
    timesUsed?: SortOrder
  }

  export type UserWordListUserIdWordListIdCompoundUniqueInput = {
    userId: string
    wordListId: number
  }

  export type UserWordListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserWordListAvgOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
  }

  export type UserWordListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserWordListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserWordListSumOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
    responses?: SortOrder
    createdAt?: SortOrder
    deviceType?: SortOrder
    deviceOS?: SortOrder
    deviceBrowser?: SortOrder
    monitorSize?: SortOrder
    viewportSize?: SortOrder
    quizStatus?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
    createdAt?: SortOrder
    deviceType?: SortOrder
    deviceOS?: SortOrder
    deviceBrowser?: SortOrder
    monitorSize?: SortOrder
    viewportSize?: SortOrder
    quizStatus?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
    createdAt?: SortOrder
    deviceType?: SortOrder
    deviceOS?: SortOrder
    deviceBrowser?: SortOrder
    monitorSize?: SortOrder
    viewportSize?: SortOrder
    quizStatus?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    wordListId?: SortOrder
    score?: SortOrder
    correctWords?: SortOrder
    incorrectWords?: SortOrder
    correctNonWords?: SortOrder
    incorrectNonWords?: SortOrder
    npxionTime?: SortOrder
    totalQuizDuration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DemographicSurveyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nativeLanguage?: SortOrder
    otherNativeLanguage?: SortOrder
    languageAcquisition?: SortOrder
    otherAcquisitionLanguage?: SortOrder
    familyLanguage?: SortOrder
    otherFamilyLanguage?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    university?: SortOrder
    age_of_acquiring_arabic?: SortOrder
    listening_proficiency?: SortOrder
    reading_proficiency?: SortOrder
    speaking_proficiency?: SortOrder
    writing_proficiency?: SortOrder
    years_living_in_arabic_countries_years?: SortOrder
    years_living_in_arabic_countries_months?: SortOrder
    years_living_in_arabic_environments_years?: SortOrder
    years_living_in_arabic_environments_months?: SortOrder
    highestEducation?: SortOrder
    arabicDialect?: SortOrder
    nationality?: SortOrder
    otherNationality?: SortOrder
    residence?: SortOrder
    otherResidence?: SortOrder
    languages?: SortOrder
    kindergartenLanguage?: SortOrder
    otherKindergartenLanguage?: SortOrder
    primaryLanguage?: SortOrder
    otherPrimaryLanguage?: SortOrder
    middleLanguage?: SortOrder
    otherMiddleLanguage?: SortOrder
    highSchoolLanguage?: SortOrder
    otherHighSchoolLanguage?: SortOrder
    universityLanguage?: SortOrder
    otherUniversityLanguage?: SortOrder
    readingHours?: SortOrder
    listeningHours?: SortOrder
    writingHours?: SortOrder
    speakingHours?: SortOrder
    attentionDisorder?: SortOrder
    readingDisorder?: SortOrder
    vision?: SortOrder
    handedness?: SortOrder
    createdAt?: SortOrder
  }

  export type DemographicSurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nativeLanguage?: SortOrder
    otherNativeLanguage?: SortOrder
    languageAcquisition?: SortOrder
    otherAcquisitionLanguage?: SortOrder
    familyLanguage?: SortOrder
    otherFamilyLanguage?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    university?: SortOrder
    age_of_acquiring_arabic?: SortOrder
    listening_proficiency?: SortOrder
    reading_proficiency?: SortOrder
    speaking_proficiency?: SortOrder
    writing_proficiency?: SortOrder
    years_living_in_arabic_countries_years?: SortOrder
    years_living_in_arabic_countries_months?: SortOrder
    years_living_in_arabic_environments_years?: SortOrder
    years_living_in_arabic_environments_months?: SortOrder
    highestEducation?: SortOrder
    arabicDialect?: SortOrder
    nationality?: SortOrder
    otherNationality?: SortOrder
    residence?: SortOrder
    otherResidence?: SortOrder
    languages?: SortOrder
    kindergartenLanguage?: SortOrder
    otherKindergartenLanguage?: SortOrder
    primaryLanguage?: SortOrder
    otherPrimaryLanguage?: SortOrder
    middleLanguage?: SortOrder
    otherMiddleLanguage?: SortOrder
    highSchoolLanguage?: SortOrder
    otherHighSchoolLanguage?: SortOrder
    universityLanguage?: SortOrder
    otherUniversityLanguage?: SortOrder
    readingHours?: SortOrder
    listeningHours?: SortOrder
    writingHours?: SortOrder
    speakingHours?: SortOrder
    attentionDisorder?: SortOrder
    readingDisorder?: SortOrder
    vision?: SortOrder
    handedness?: SortOrder
    createdAt?: SortOrder
  }

  export type DemographicSurveyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nativeLanguage?: SortOrder
    otherNativeLanguage?: SortOrder
    languageAcquisition?: SortOrder
    otherAcquisitionLanguage?: SortOrder
    familyLanguage?: SortOrder
    otherFamilyLanguage?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    university?: SortOrder
    age_of_acquiring_arabic?: SortOrder
    listening_proficiency?: SortOrder
    reading_proficiency?: SortOrder
    speaking_proficiency?: SortOrder
    writing_proficiency?: SortOrder
    years_living_in_arabic_countries_years?: SortOrder
    years_living_in_arabic_countries_months?: SortOrder
    years_living_in_arabic_environments_years?: SortOrder
    years_living_in_arabic_environments_months?: SortOrder
    highestEducation?: SortOrder
    arabicDialect?: SortOrder
    nationality?: SortOrder
    otherNationality?: SortOrder
    residence?: SortOrder
    otherResidence?: SortOrder
    languages?: SortOrder
    kindergartenLanguage?: SortOrder
    otherKindergartenLanguage?: SortOrder
    primaryLanguage?: SortOrder
    otherPrimaryLanguage?: SortOrder
    middleLanguage?: SortOrder
    otherMiddleLanguage?: SortOrder
    highSchoolLanguage?: SortOrder
    otherHighSchoolLanguage?: SortOrder
    universityLanguage?: SortOrder
    otherUniversityLanguage?: SortOrder
    readingHours?: SortOrder
    listeningHours?: SortOrder
    writingHours?: SortOrder
    speakingHours?: SortOrder
    attentionDisorder?: SortOrder
    readingDisorder?: SortOrder
    vision?: SortOrder
    handedness?: SortOrder
    createdAt?: SortOrder
  }

  export type UserConsentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentedAt?: SortOrder
    consentVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type UserConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentedAt?: SortOrder
    consentVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type UserConsentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentedAt?: SortOrder
    consentVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type DemographicSurveyCreateNestedManyWithoutUserInput = {
    create?: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput> | DemographicSurveyCreateWithoutUserInput[] | DemographicSurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemographicSurveyCreateOrConnectWithoutUserInput | DemographicSurveyCreateOrConnectWithoutUserInput[]
    createMany?: DemographicSurveyCreateManyUserInputEnvelope
    connect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
  }

  export type UserConsentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
  }

  export type UserWordListCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput> | UserWordListCreateWithoutUserInput[] | UserWordListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutUserInput | UserWordListCreateOrConnectWithoutUserInput[]
    createMany?: UserWordListCreateManyUserInputEnvelope
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type DemographicSurveyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput> | DemographicSurveyCreateWithoutUserInput[] | DemographicSurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemographicSurveyCreateOrConnectWithoutUserInput | DemographicSurveyCreateOrConnectWithoutUserInput[]
    createMany?: DemographicSurveyCreateManyUserInputEnvelope
    connect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
  }

  export type UserConsentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
  }

  export type UserWordListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput> | UserWordListCreateWithoutUserInput[] | UserWordListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutUserInput | UserWordListCreateOrConnectWithoutUserInput[]
    createMany?: UserWordListCreateManyUserInputEnvelope
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type DemographicSurveyUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput> | DemographicSurveyCreateWithoutUserInput[] | DemographicSurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemographicSurveyCreateOrConnectWithoutUserInput | DemographicSurveyCreateOrConnectWithoutUserInput[]
    upsert?: DemographicSurveyUpsertWithWhereUniqueWithoutUserInput | DemographicSurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemographicSurveyCreateManyUserInputEnvelope
    set?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    disconnect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    delete?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    connect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    update?: DemographicSurveyUpdateWithWhereUniqueWithoutUserInput | DemographicSurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemographicSurveyUpdateManyWithWhereWithoutUserInput | DemographicSurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemographicSurveyScalarWhereInput | DemographicSurveyScalarWhereInput[]
  }

  export type UserConsentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    upsert?: UserConsentUpsertWithWhereUniqueWithoutUserInput | UserConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    set?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    disconnect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    delete?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    update?: UserConsentUpdateWithWhereUniqueWithoutUserInput | UserConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConsentUpdateManyWithWhereWithoutUserInput | UserConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
  }

  export type UserWordListUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput> | UserWordListCreateWithoutUserInput[] | UserWordListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutUserInput | UserWordListCreateOrConnectWithoutUserInput[]
    upsert?: UserWordListUpsertWithWhereUniqueWithoutUserInput | UserWordListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWordListCreateManyUserInputEnvelope
    set?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    disconnect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    delete?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    update?: UserWordListUpdateWithWhereUniqueWithoutUserInput | UserWordListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWordListUpdateManyWithWhereWithoutUserInput | UserWordListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput> | DemographicSurveyCreateWithoutUserInput[] | DemographicSurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemographicSurveyCreateOrConnectWithoutUserInput | DemographicSurveyCreateOrConnectWithoutUserInput[]
    upsert?: DemographicSurveyUpsertWithWhereUniqueWithoutUserInput | DemographicSurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemographicSurveyCreateManyUserInputEnvelope
    set?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    disconnect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    delete?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    connect?: DemographicSurveyWhereUniqueInput | DemographicSurveyWhereUniqueInput[]
    update?: DemographicSurveyUpdateWithWhereUniqueWithoutUserInput | DemographicSurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemographicSurveyUpdateManyWithWhereWithoutUserInput | DemographicSurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemographicSurveyScalarWhereInput | DemographicSurveyScalarWhereInput[]
  }

  export type UserConsentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    upsert?: UserConsentUpsertWithWhereUniqueWithoutUserInput | UserConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    set?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    disconnect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    delete?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    update?: UserConsentUpdateWithWhereUniqueWithoutUserInput | UserConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConsentUpdateManyWithWhereWithoutUserInput | UserConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
  }

  export type UserWordListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput> | UserWordListCreateWithoutUserInput[] | UserWordListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutUserInput | UserWordListCreateOrConnectWithoutUserInput[]
    upsert?: UserWordListUpsertWithWhereUniqueWithoutUserInput | UserWordListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWordListCreateManyUserInputEnvelope
    set?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    disconnect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    delete?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    update?: UserWordListUpdateWithWhereUniqueWithoutUserInput | UserWordListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWordListUpdateManyWithWhereWithoutUserInput | UserWordListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type WordListCreateNestedOneWithoutWordsInput = {
    create?: XOR<WordListCreateWithoutWordsInput, WordListUncheckedCreateWithoutWordsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutWordsInput
    connect?: WordListWhereUniqueInput
  }

  export type WordListUpdateOneRequiredWithoutWordsNestedInput = {
    create?: XOR<WordListCreateWithoutWordsInput, WordListUncheckedCreateWithoutWordsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutWordsInput
    upsert?: WordListUpsertWithoutWordsInput
    connect?: WordListWhereUniqueInput
    update?: XOR<XOR<WordListUpdateToOneWithWhereWithoutWordsInput, WordListUpdateWithoutWordsInput>, WordListUncheckedUpdateWithoutWordsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WordCreateNestedManyWithoutWordListInput = {
    create?: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput> | WordCreateWithoutWordListInput[] | WordUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: WordCreateOrConnectWithoutWordListInput | WordCreateOrConnectWithoutWordListInput[]
    createMany?: WordCreateManyWordListInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type UserWordListCreateNestedManyWithoutWordListInput = {
    create?: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput> | UserWordListCreateWithoutWordListInput[] | UserWordListUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutWordListInput | UserWordListCreateOrConnectWithoutWordListInput[]
    createMany?: UserWordListCreateManyWordListInputEnvelope
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutWordListInput = {
    create?: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput> | QuizAttemptCreateWithoutWordListInput[] | QuizAttemptUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutWordListInput | QuizAttemptCreateOrConnectWithoutWordListInput[]
    createMany?: QuizAttemptCreateManyWordListInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutWordListInput = {
    create?: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput> | WordCreateWithoutWordListInput[] | WordUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: WordCreateOrConnectWithoutWordListInput | WordCreateOrConnectWithoutWordListInput[]
    createMany?: WordCreateManyWordListInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type UserWordListUncheckedCreateNestedManyWithoutWordListInput = {
    create?: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput> | UserWordListCreateWithoutWordListInput[] | UserWordListUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutWordListInput | UserWordListCreateOrConnectWithoutWordListInput[]
    createMany?: UserWordListCreateManyWordListInputEnvelope
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutWordListInput = {
    create?: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput> | QuizAttemptCreateWithoutWordListInput[] | QuizAttemptUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutWordListInput | QuizAttemptCreateOrConnectWithoutWordListInput[]
    createMany?: QuizAttemptCreateManyWordListInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type WordUpdateManyWithoutWordListNestedInput = {
    create?: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput> | WordCreateWithoutWordListInput[] | WordUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: WordCreateOrConnectWithoutWordListInput | WordCreateOrConnectWithoutWordListInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutWordListInput | WordUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: WordCreateManyWordListInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutWordListInput | WordUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: WordUpdateManyWithWhereWithoutWordListInput | WordUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type UserWordListUpdateManyWithoutWordListNestedInput = {
    create?: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput> | UserWordListCreateWithoutWordListInput[] | UserWordListUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutWordListInput | UserWordListCreateOrConnectWithoutWordListInput[]
    upsert?: UserWordListUpsertWithWhereUniqueWithoutWordListInput | UserWordListUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: UserWordListCreateManyWordListInputEnvelope
    set?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    disconnect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    delete?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    update?: UserWordListUpdateWithWhereUniqueWithoutWordListInput | UserWordListUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: UserWordListUpdateManyWithWhereWithoutWordListInput | UserWordListUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutWordListNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput> | QuizAttemptCreateWithoutWordListInput[] | QuizAttemptUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutWordListInput | QuizAttemptCreateOrConnectWithoutWordListInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutWordListInput | QuizAttemptUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: QuizAttemptCreateManyWordListInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutWordListInput | QuizAttemptUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutWordListInput | QuizAttemptUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutWordListNestedInput = {
    create?: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput> | WordCreateWithoutWordListInput[] | WordUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: WordCreateOrConnectWithoutWordListInput | WordCreateOrConnectWithoutWordListInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutWordListInput | WordUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: WordCreateManyWordListInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutWordListInput | WordUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: WordUpdateManyWithWhereWithoutWordListInput | WordUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type UserWordListUncheckedUpdateManyWithoutWordListNestedInput = {
    create?: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput> | UserWordListCreateWithoutWordListInput[] | UserWordListUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: UserWordListCreateOrConnectWithoutWordListInput | UserWordListCreateOrConnectWithoutWordListInput[]
    upsert?: UserWordListUpsertWithWhereUniqueWithoutWordListInput | UserWordListUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: UserWordListCreateManyWordListInputEnvelope
    set?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    disconnect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    delete?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    connect?: UserWordListWhereUniqueInput | UserWordListWhereUniqueInput[]
    update?: UserWordListUpdateWithWhereUniqueWithoutWordListInput | UserWordListUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: UserWordListUpdateManyWithWhereWithoutWordListInput | UserWordListUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutWordListNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput> | QuizAttemptCreateWithoutWordListInput[] | QuizAttemptUncheckedCreateWithoutWordListInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutWordListInput | QuizAttemptCreateOrConnectWithoutWordListInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutWordListInput | QuizAttemptUpsertWithWhereUniqueWithoutWordListInput[]
    createMany?: QuizAttemptCreateManyWordListInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutWordListInput | QuizAttemptUpdateWithWhereUniqueWithoutWordListInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutWordListInput | QuizAttemptUpdateManyWithWhereWithoutWordListInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type WordListCreateNestedOneWithoutUserAssignmentsInput = {
    create?: XOR<WordListCreateWithoutUserAssignmentsInput, WordListUncheckedCreateWithoutUserAssignmentsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutUserAssignmentsInput
    connect?: WordListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWordListAssignmentsInput = {
    create?: XOR<UserCreateWithoutWordListAssignmentsInput, UserUncheckedCreateWithoutWordListAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordListAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type WordListUpdateOneRequiredWithoutUserAssignmentsNestedInput = {
    create?: XOR<WordListCreateWithoutUserAssignmentsInput, WordListUncheckedCreateWithoutUserAssignmentsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutUserAssignmentsInput
    upsert?: WordListUpsertWithoutUserAssignmentsInput
    connect?: WordListWhereUniqueInput
    update?: XOR<XOR<WordListUpdateToOneWithWhereWithoutUserAssignmentsInput, WordListUpdateWithoutUserAssignmentsInput>, WordListUncheckedUpdateWithoutUserAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutWordListAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutWordListAssignmentsInput, UserUncheckedCreateWithoutWordListAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordListAssignmentsInput
    upsert?: UserUpsertWithoutWordListAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWordListAssignmentsInput, UserUpdateWithoutWordListAssignmentsInput>, UserUncheckedUpdateWithoutWordListAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type WordListCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<WordListCreateWithoutQuizAttemptsInput, WordListUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutQuizAttemptsInput
    connect?: WordListWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type WordListUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<WordListCreateWithoutQuizAttemptsInput, WordListUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: WordListCreateOrConnectWithoutQuizAttemptsInput
    upsert?: WordListUpsertWithoutQuizAttemptsInput
    connect?: WordListWhereUniqueInput
    update?: XOR<XOR<WordListUpdateToOneWithWhereWithoutQuizAttemptsInput, WordListUpdateWithoutQuizAttemptsInput>, WordListUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserCreateNestedOneWithoutSurveyResponsesInput = {
    create?: XOR<UserCreateWithoutSurveyResponsesInput, UserUncheckedCreateWithoutSurveyResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveyResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSurveyResponsesNestedInput = {
    create?: XOR<UserCreateWithoutSurveyResponsesInput, UserUncheckedCreateWithoutSurveyResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveyResponsesInput
    upsert?: UserUpsertWithoutSurveyResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurveyResponsesInput, UserUpdateWithoutSurveyResponsesInput>, UserUncheckedUpdateWithoutSurveyResponsesInput>
  }

  export type UserCreateNestedOneWithoutConsentInput = {
    create?: XOR<UserCreateWithoutConsentInput, UserUncheckedCreateWithoutConsentInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConsentNestedInput = {
    create?: XOR<UserCreateWithoutConsentInput, UserUncheckedCreateWithoutConsentInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsentInput
    upsert?: UserUpsertWithoutConsentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsentInput, UserUpdateWithoutConsentInput>, UserUncheckedUpdateWithoutConsentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizAttemptCreateWithoutUserInput = {
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
    wordList: WordListCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: number
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DemographicSurveyCreateWithoutUserInput = {
    id?: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
  }

  export type DemographicSurveyUncheckedCreateWithoutUserInput = {
    id?: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
  }

  export type DemographicSurveyCreateOrConnectWithoutUserInput = {
    where: DemographicSurveyWhereUniqueInput
    create: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput>
  }

  export type DemographicSurveyCreateManyUserInputEnvelope = {
    data: DemographicSurveyCreateManyUserInput | DemographicSurveyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserConsentCreateWithoutUserInput = {
    id?: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
  }

  export type UserConsentUncheckedCreateWithoutUserInput = {
    id?: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
  }

  export type UserConsentCreateOrConnectWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    create: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput>
  }

  export type UserConsentCreateManyUserInputEnvelope = {
    data: UserConsentCreateManyUserInput | UserConsentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWordListCreateWithoutUserInput = {
    assignedAt?: Date | string
    wordList: WordListCreateNestedOneWithoutUserAssignmentsInput
  }

  export type UserWordListUncheckedCreateWithoutUserInput = {
    id?: number
    wordListId: number
    assignedAt?: Date | string
  }

  export type UserWordListCreateOrConnectWithoutUserInput = {
    where: UserWordListWhereUniqueInput
    create: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput>
  }

  export type UserWordListCreateManyUserInputEnvelope = {
    data: UserWordListCreateManyUserInput | UserWordListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: IntFilter<"QuizAttempt"> | number
    userId?: StringFilter<"QuizAttempt"> | string
    wordListId?: IntFilter<"QuizAttempt"> | number
    score?: FloatFilter<"QuizAttempt"> | number
    correctWords?: IntFilter<"QuizAttempt"> | number
    incorrectWords?: IntFilter<"QuizAttempt"> | number
    correctNonWords?: IntFilter<"QuizAttempt"> | number
    incorrectNonWords?: IntFilter<"QuizAttempt"> | number
    npxionTime?: IntFilter<"QuizAttempt"> | number
    totalQuizDuration?: IntFilter<"QuizAttempt"> | number
    responses?: JsonFilter<"QuizAttempt">
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    deviceType?: StringFilter<"QuizAttempt"> | string
    deviceOS?: StringFilter<"QuizAttempt"> | string
    deviceBrowser?: StringFilter<"QuizAttempt"> | string
    monitorSize?: StringFilter<"QuizAttempt"> | string
    viewportSize?: StringFilter<"QuizAttempt"> | string
    quizStatus?: StringFilter<"QuizAttempt"> | string
  }

  export type DemographicSurveyUpsertWithWhereUniqueWithoutUserInput = {
    where: DemographicSurveyWhereUniqueInput
    update: XOR<DemographicSurveyUpdateWithoutUserInput, DemographicSurveyUncheckedUpdateWithoutUserInput>
    create: XOR<DemographicSurveyCreateWithoutUserInput, DemographicSurveyUncheckedCreateWithoutUserInput>
  }

  export type DemographicSurveyUpdateWithWhereUniqueWithoutUserInput = {
    where: DemographicSurveyWhereUniqueInput
    data: XOR<DemographicSurveyUpdateWithoutUserInput, DemographicSurveyUncheckedUpdateWithoutUserInput>
  }

  export type DemographicSurveyUpdateManyWithWhereWithoutUserInput = {
    where: DemographicSurveyScalarWhereInput
    data: XOR<DemographicSurveyUpdateManyMutationInput, DemographicSurveyUncheckedUpdateManyWithoutUserInput>
  }

  export type DemographicSurveyScalarWhereInput = {
    AND?: DemographicSurveyScalarWhereInput | DemographicSurveyScalarWhereInput[]
    OR?: DemographicSurveyScalarWhereInput[]
    NOT?: DemographicSurveyScalarWhereInput | DemographicSurveyScalarWhereInput[]
    id?: StringFilter<"DemographicSurvey"> | string
    userId?: StringFilter<"DemographicSurvey"> | string
    nativeLanguage?: StringFilter<"DemographicSurvey"> | string
    otherNativeLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    languageAcquisition?: StringFilter<"DemographicSurvey"> | string
    otherAcquisitionLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    familyLanguage?: StringFilter<"DemographicSurvey"> | string
    otherFamilyLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    gender?: StringFilter<"DemographicSurvey"> | string
    age?: StringFilter<"DemographicSurvey"> | string
    university?: StringNullableFilter<"DemographicSurvey"> | string | null
    age_of_acquiring_arabic?: StringFilter<"DemographicSurvey"> | string
    listening_proficiency?: StringFilter<"DemographicSurvey"> | string
    reading_proficiency?: StringFilter<"DemographicSurvey"> | string
    speaking_proficiency?: StringFilter<"DemographicSurvey"> | string
    writing_proficiency?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_countries_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    years_living_in_arabic_environments_years?: StringFilter<"DemographicSurvey"> | string
    years_living_in_arabic_environments_months?: StringNullableFilter<"DemographicSurvey"> | string | null
    highestEducation?: StringFilter<"DemographicSurvey"> | string
    arabicDialect?: StringFilter<"DemographicSurvey"> | string
    nationality?: StringFilter<"DemographicSurvey"> | string
    otherNationality?: StringNullableFilter<"DemographicSurvey"> | string | null
    residence?: StringFilter<"DemographicSurvey"> | string
    otherResidence?: StringNullableFilter<"DemographicSurvey"> | string | null
    languages?: StringFilter<"DemographicSurvey"> | string
    kindergartenLanguage?: StringFilter<"DemographicSurvey"> | string
    otherKindergartenLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    primaryLanguage?: StringFilter<"DemographicSurvey"> | string
    otherPrimaryLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    middleLanguage?: StringFilter<"DemographicSurvey"> | string
    otherMiddleLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    highSchoolLanguage?: StringFilter<"DemographicSurvey"> | string
    otherHighSchoolLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    universityLanguage?: StringFilter<"DemographicSurvey"> | string
    otherUniversityLanguage?: StringNullableFilter<"DemographicSurvey"> | string | null
    readingHours?: StringFilter<"DemographicSurvey"> | string
    listeningHours?: StringFilter<"DemographicSurvey"> | string
    writingHours?: StringFilter<"DemographicSurvey"> | string
    speakingHours?: StringFilter<"DemographicSurvey"> | string
    attentionDisorder?: StringFilter<"DemographicSurvey"> | string
    readingDisorder?: StringFilter<"DemographicSurvey"> | string
    vision?: StringFilter<"DemographicSurvey"> | string
    handedness?: StringFilter<"DemographicSurvey"> | string
    createdAt?: DateTimeFilter<"DemographicSurvey"> | Date | string
  }

  export type UserConsentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    update: XOR<UserConsentUpdateWithoutUserInput, UserConsentUncheckedUpdateWithoutUserInput>
    create: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput>
  }

  export type UserConsentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    data: XOR<UserConsentUpdateWithoutUserInput, UserConsentUncheckedUpdateWithoutUserInput>
  }

  export type UserConsentUpdateManyWithWhereWithoutUserInput = {
    where: UserConsentScalarWhereInput
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserConsentScalarWhereInput = {
    AND?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
    OR?: UserConsentScalarWhereInput[]
    NOT?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
    id?: StringFilter<"UserConsent"> | string
    userId?: StringFilter<"UserConsent"> | string
    consentedAt?: DateTimeFilter<"UserConsent"> | Date | string
    consentVersion?: StringFilter<"UserConsent"> | string
    createdAt?: DateTimeFilter<"UserConsent"> | Date | string
  }

  export type UserWordListUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWordListWhereUniqueInput
    update: XOR<UserWordListUpdateWithoutUserInput, UserWordListUncheckedUpdateWithoutUserInput>
    create: XOR<UserWordListCreateWithoutUserInput, UserWordListUncheckedCreateWithoutUserInput>
  }

  export type UserWordListUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWordListWhereUniqueInput
    data: XOR<UserWordListUpdateWithoutUserInput, UserWordListUncheckedUpdateWithoutUserInput>
  }

  export type UserWordListUpdateManyWithWhereWithoutUserInput = {
    where: UserWordListScalarWhereInput
    data: XOR<UserWordListUpdateManyMutationInput, UserWordListUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWordListScalarWhereInput = {
    AND?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
    OR?: UserWordListScalarWhereInput[]
    NOT?: UserWordListScalarWhereInput | UserWordListScalarWhereInput[]
    id?: IntFilter<"UserWordList"> | number
    userId?: StringFilter<"UserWordList"> | string
    wordListId?: IntFilter<"UserWordList"> | number
    assignedAt?: DateTimeFilter<"UserWordList"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordListCreateWithoutWordsInput = {
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    userAssignments?: UserWordListCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutWordListInput
  }

  export type WordListUncheckedCreateWithoutWordsInput = {
    id?: number
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    userAssignments?: UserWordListUncheckedCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutWordListInput
  }

  export type WordListCreateOrConnectWithoutWordsInput = {
    where: WordListWhereUniqueInput
    create: XOR<WordListCreateWithoutWordsInput, WordListUncheckedCreateWithoutWordsInput>
  }

  export type WordListUpsertWithoutWordsInput = {
    update: XOR<WordListUpdateWithoutWordsInput, WordListUncheckedUpdateWithoutWordsInput>
    create: XOR<WordListCreateWithoutWordsInput, WordListUncheckedCreateWithoutWordsInput>
    where?: WordListWhereInput
  }

  export type WordListUpdateToOneWithWhereWithoutWordsInput = {
    where?: WordListWhereInput
    data: XOR<WordListUpdateWithoutWordsInput, WordListUncheckedUpdateWithoutWordsInput>
  }

  export type WordListUpdateWithoutWordsInput = {
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAssignments?: UserWordListUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutWordListNestedInput
  }

  export type WordListUncheckedUpdateWithoutWordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAssignments?: UserWordListUncheckedUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutWordListNestedInput
  }

  export type WordCreateWithoutWordListInput = {
    word: string
    isNonWord: boolean
  }

  export type WordUncheckedCreateWithoutWordListInput = {
    id?: number
    word: string
    isNonWord: boolean
  }

  export type WordCreateOrConnectWithoutWordListInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput>
  }

  export type WordCreateManyWordListInputEnvelope = {
    data: WordCreateManyWordListInput | WordCreateManyWordListInput[]
    skipDuplicates?: boolean
  }

  export type UserWordListCreateWithoutWordListInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutWordListAssignmentsInput
  }

  export type UserWordListUncheckedCreateWithoutWordListInput = {
    id?: number
    userId: string
    assignedAt?: Date | string
  }

  export type UserWordListCreateOrConnectWithoutWordListInput = {
    where: UserWordListWhereUniqueInput
    create: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput>
  }

  export type UserWordListCreateManyWordListInputEnvelope = {
    data: UserWordListCreateManyWordListInput | UserWordListCreateManyWordListInput[]
    skipDuplicates?: boolean
  }

  export type QuizAttemptCreateWithoutWordListInput = {
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutWordListInput = {
    id?: number
    userId: string
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type QuizAttemptCreateOrConnectWithoutWordListInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput>
  }

  export type QuizAttemptCreateManyWordListInputEnvelope = {
    data: QuizAttemptCreateManyWordListInput | QuizAttemptCreateManyWordListInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithWhereUniqueWithoutWordListInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutWordListInput, WordUncheckedUpdateWithoutWordListInput>
    create: XOR<WordCreateWithoutWordListInput, WordUncheckedCreateWithoutWordListInput>
  }

  export type WordUpdateWithWhereUniqueWithoutWordListInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutWordListInput, WordUncheckedUpdateWithoutWordListInput>
  }

  export type WordUpdateManyWithWhereWithoutWordListInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutWordListInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    id?: IntFilter<"Word"> | number
    word?: StringFilter<"Word"> | string
    isNonWord?: BoolFilter<"Word"> | boolean
    wordListId?: IntFilter<"Word"> | number
  }

  export type UserWordListUpsertWithWhereUniqueWithoutWordListInput = {
    where: UserWordListWhereUniqueInput
    update: XOR<UserWordListUpdateWithoutWordListInput, UserWordListUncheckedUpdateWithoutWordListInput>
    create: XOR<UserWordListCreateWithoutWordListInput, UserWordListUncheckedCreateWithoutWordListInput>
  }

  export type UserWordListUpdateWithWhereUniqueWithoutWordListInput = {
    where: UserWordListWhereUniqueInput
    data: XOR<UserWordListUpdateWithoutWordListInput, UserWordListUncheckedUpdateWithoutWordListInput>
  }

  export type UserWordListUpdateManyWithWhereWithoutWordListInput = {
    where: UserWordListScalarWhereInput
    data: XOR<UserWordListUpdateManyMutationInput, UserWordListUncheckedUpdateManyWithoutWordListInput>
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutWordListInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutWordListInput, QuizAttemptUncheckedUpdateWithoutWordListInput>
    create: XOR<QuizAttemptCreateWithoutWordListInput, QuizAttemptUncheckedCreateWithoutWordListInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutWordListInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutWordListInput, QuizAttemptUncheckedUpdateWithoutWordListInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutWordListInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutWordListInput>
  }

  export type WordListCreateWithoutUserAssignmentsInput = {
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutWordListInput
  }

  export type WordListUncheckedCreateWithoutUserAssignmentsInput = {
    id?: number
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordUncheckedCreateNestedManyWithoutWordListInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutWordListInput
  }

  export type WordListCreateOrConnectWithoutUserAssignmentsInput = {
    where: WordListWhereUniqueInput
    create: XOR<WordListCreateWithoutUserAssignmentsInput, WordListUncheckedCreateWithoutUserAssignmentsInput>
  }

  export type UserCreateWithoutWordListAssignmentsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordListAssignmentsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordListAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordListAssignmentsInput, UserUncheckedCreateWithoutWordListAssignmentsInput>
  }

  export type WordListUpsertWithoutUserAssignmentsInput = {
    update: XOR<WordListUpdateWithoutUserAssignmentsInput, WordListUncheckedUpdateWithoutUserAssignmentsInput>
    create: XOR<WordListCreateWithoutUserAssignmentsInput, WordListUncheckedCreateWithoutUserAssignmentsInput>
    where?: WordListWhereInput
  }

  export type WordListUpdateToOneWithWhereWithoutUserAssignmentsInput = {
    where?: WordListWhereInput
    data: XOR<WordListUpdateWithoutUserAssignmentsInput, WordListUncheckedUpdateWithoutUserAssignmentsInput>
  }

  export type WordListUpdateWithoutUserAssignmentsInput = {
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutWordListNestedInput
  }

  export type WordListUncheckedUpdateWithoutUserAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUncheckedUpdateManyWithoutWordListNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutWordListNestedInput
  }

  export type UserUpsertWithoutWordListAssignmentsInput = {
    update: XOR<UserUpdateWithoutWordListAssignmentsInput, UserUncheckedUpdateWithoutWordListAssignmentsInput>
    create: XOR<UserCreateWithoutWordListAssignmentsInput, UserUncheckedCreateWithoutWordListAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWordListAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWordListAssignmentsInput, UserUncheckedUpdateWithoutWordListAssignmentsInput>
  }

  export type UserUpdateWithoutWordListAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordListAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type WordListCreateWithoutQuizAttemptsInput = {
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordCreateNestedManyWithoutWordListInput
    userAssignments?: UserWordListCreateNestedManyWithoutWordListInput
  }

  export type WordListUncheckedCreateWithoutQuizAttemptsInput = {
    id?: number
    original_id?: number
    createdAt?: Date | string
    timesUsed?: number
    lastUsedAt?: Date | string | null
    words?: WordUncheckedCreateNestedManyWithoutWordListInput
    userAssignments?: UserWordListUncheckedCreateNestedManyWithoutWordListInput
  }

  export type WordListCreateOrConnectWithoutQuizAttemptsInput = {
    where: WordListWhereUniqueInput
    create: XOR<WordListCreateWithoutQuizAttemptsInput, WordListUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordListUpsertWithoutQuizAttemptsInput = {
    update: XOR<WordListUpdateWithoutQuizAttemptsInput, WordListUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<WordListCreateWithoutQuizAttemptsInput, WordListUncheckedCreateWithoutQuizAttemptsInput>
    where?: WordListWhereInput
  }

  export type WordListUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: WordListWhereInput
    data: XOR<WordListUpdateWithoutQuizAttemptsInput, WordListUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type WordListUpdateWithoutQuizAttemptsInput = {
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUpdateManyWithoutWordListNestedInput
    userAssignments?: UserWordListUpdateManyWithoutWordListNestedInput
  }

  export type WordListUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    original_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesUsed?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    words?: WordUncheckedUpdateManyWithoutWordListNestedInput
    userAssignments?: UserWordListUncheckedUpdateManyWithoutWordListNestedInput
  }

  export type UserCreateWithoutSurveyResponsesInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    consent?: UserConsentCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSurveyResponsesInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    consent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSurveyResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurveyResponsesInput, UserUncheckedCreateWithoutSurveyResponsesInput>
  }

  export type UserUpsertWithoutSurveyResponsesInput = {
    update: XOR<UserUpdateWithoutSurveyResponsesInput, UserUncheckedUpdateWithoutSurveyResponsesInput>
    create: XOR<UserCreateWithoutSurveyResponsesInput, UserUncheckedCreateWithoutSurveyResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurveyResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurveyResponsesInput, UserUncheckedUpdateWithoutSurveyResponsesInput>
  }

  export type UserUpdateWithoutSurveyResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    consent?: UserConsentUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSurveyResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    consent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConsentInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsentInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    surveyResponses?: DemographicSurveyUncheckedCreateNestedManyWithoutUserInput
    wordListAssignments?: UserWordListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsentInput, UserUncheckedCreateWithoutConsentInput>
  }

  export type UserUpsertWithoutConsentInput = {
    update: XOR<UserUpdateWithoutConsentInput, UserUncheckedUpdateWithoutConsentInput>
    create: XOR<UserCreateWithoutConsentInput, UserUncheckedCreateWithoutConsentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsentInput, UserUncheckedUpdateWithoutConsentInput>
  }

  export type UserUpdateWithoutConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    surveyResponses?: DemographicSurveyUncheckedUpdateManyWithoutUserNestedInput
    wordListAssignments?: UserWordListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type QuizAttemptCreateManyUserInput = {
    id?: number
    wordListId: number
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type DemographicSurveyCreateManyUserInput = {
    id?: string
    nativeLanguage: string
    otherNativeLanguage?: string | null
    languageAcquisition: string
    otherAcquisitionLanguage?: string | null
    familyLanguage: string
    otherFamilyLanguage?: string | null
    gender: string
    age: string
    university?: string | null
    age_of_acquiring_arabic: string
    listening_proficiency: string
    reading_proficiency: string
    speaking_proficiency: string
    writing_proficiency: string
    years_living_in_arabic_countries_years: string
    years_living_in_arabic_countries_months?: string | null
    years_living_in_arabic_environments_years: string
    years_living_in_arabic_environments_months?: string | null
    highestEducation: string
    arabicDialect: string
    nationality: string
    otherNationality?: string | null
    residence: string
    otherResidence?: string | null
    languages: string
    kindergartenLanguage: string
    otherKindergartenLanguage?: string | null
    primaryLanguage: string
    otherPrimaryLanguage?: string | null
    middleLanguage: string
    otherMiddleLanguage?: string | null
    highSchoolLanguage: string
    otherHighSchoolLanguage?: string | null
    universityLanguage: string
    otherUniversityLanguage?: string | null
    readingHours: string
    listeningHours: string
    writingHours: string
    speakingHours: string
    attentionDisorder: string
    readingDisorder: string
    vision: string
    handedness: string
    createdAt?: Date | string
  }

  export type UserConsentCreateManyUserInput = {
    id?: string
    consentedAt: Date | string
    consentVersion: string
    createdAt?: Date | string
  }

  export type UserWordListCreateManyUserInput = {
    id?: number
    wordListId: number
    assignedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
    wordList?: WordListUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wordListId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wordListId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type DemographicSurveyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemographicSurveyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemographicSurveyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nativeLanguage?: StringFieldUpdateOperationsInput | string
    otherNativeLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    languageAcquisition?: StringFieldUpdateOperationsInput | string
    otherAcquisitionLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    familyLanguage?: StringFieldUpdateOperationsInput | string
    otherFamilyLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    university?: NullableStringFieldUpdateOperationsInput | string | null
    age_of_acquiring_arabic?: StringFieldUpdateOperationsInput | string
    listening_proficiency?: StringFieldUpdateOperationsInput | string
    reading_proficiency?: StringFieldUpdateOperationsInput | string
    speaking_proficiency?: StringFieldUpdateOperationsInput | string
    writing_proficiency?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_countries_months?: NullableStringFieldUpdateOperationsInput | string | null
    years_living_in_arabic_environments_years?: StringFieldUpdateOperationsInput | string
    years_living_in_arabic_environments_months?: NullableStringFieldUpdateOperationsInput | string | null
    highestEducation?: StringFieldUpdateOperationsInput | string
    arabicDialect?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    otherNationality?: NullableStringFieldUpdateOperationsInput | string | null
    residence?: StringFieldUpdateOperationsInput | string
    otherResidence?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: StringFieldUpdateOperationsInput | string
    kindergartenLanguage?: StringFieldUpdateOperationsInput | string
    otherKindergartenLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    primaryLanguage?: StringFieldUpdateOperationsInput | string
    otherPrimaryLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    middleLanguage?: StringFieldUpdateOperationsInput | string
    otherMiddleLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    highSchoolLanguage?: StringFieldUpdateOperationsInput | string
    otherHighSchoolLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    universityLanguage?: StringFieldUpdateOperationsInput | string
    otherUniversityLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    readingHours?: StringFieldUpdateOperationsInput | string
    listeningHours?: StringFieldUpdateOperationsInput | string
    writingHours?: StringFieldUpdateOperationsInput | string
    speakingHours?: StringFieldUpdateOperationsInput | string
    attentionDisorder?: StringFieldUpdateOperationsInput | string
    readingDisorder?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    handedness?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserConsentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordListUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordList?: WordListUpdateOneRequiredWithoutUserAssignmentsNestedInput
  }

  export type UserWordListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wordListId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    wordListId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateManyWordListInput = {
    id?: number
    word: string
    isNonWord: boolean
  }

  export type UserWordListCreateManyWordListInput = {
    id?: number
    userId: string
    assignedAt?: Date | string
  }

  export type QuizAttemptCreateManyWordListInput = {
    id?: number
    userId: string
    score: number
    correctWords: number
    incorrectWords: number
    correctNonWords: number
    incorrectNonWords: number
    npxionTime: number
    totalQuizDuration: number
    responses: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    deviceType: string
    deviceOS: string
    deviceBrowser: string
    monitorSize: string
    viewportSize: string
    quizStatus: string
  }

  export type WordUpdateWithoutWordListInput = {
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WordUncheckedUpdateWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WordUncheckedUpdateManyWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    isNonWord?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserWordListUpdateWithoutWordListInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordListAssignmentsNestedInput
  }

  export type UserWordListUncheckedUpdateWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordListUncheckedUpdateManyWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUpdateWithoutWordListInput = {
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutWordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    correctWords?: IntFieldUpdateOperationsInput | number
    incorrectWords?: IntFieldUpdateOperationsInput | number
    correctNonWords?: IntFieldUpdateOperationsInput | number
    incorrectNonWords?: IntFieldUpdateOperationsInput | number
    npxionTime?: IntFieldUpdateOperationsInput | number
    totalQuizDuration?: IntFieldUpdateOperationsInput | number
    responses?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceType?: StringFieldUpdateOperationsInput | string
    deviceOS?: StringFieldUpdateOperationsInput | string
    deviceBrowser?: StringFieldUpdateOperationsInput | string
    monitorSize?: StringFieldUpdateOperationsInput | string
    viewportSize?: StringFieldUpdateOperationsInput | string
    quizStatus?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}