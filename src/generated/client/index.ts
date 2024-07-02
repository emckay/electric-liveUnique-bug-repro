import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';
import pgMigrations from './pg-migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const CategoriesScalarFieldEnumSchema = z.enum(['id','slug','account_id']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CATEGORIES SCHEMA
/////////////////////////////////////////

export const CategoriesSchema = z.object({
  id: z.string(),
  slug: z.string(),
  account_id: z.string(),
})

export type Categories = z.infer<typeof CategoriesSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CATEGORIES
//------------------------------------------------------

export const CategoriesSelectSchema: z.ZodType<Prisma.CategoriesSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  account_id: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const CategoriesWhereInputSchema: z.ZodType<Prisma.CategoriesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesWhereInputSchema),z.lazy(() => CategoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesWhereInputSchema),z.lazy(() => CategoriesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CategoriesOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoriesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesWhereUniqueInputSchema: z.ZodType<Prisma.CategoriesWhereUniqueInput> = z.object({
  id: z.string().optional(),
  slug_account_id: z.lazy(() => CategoriesSlugAccount_idCompoundUniqueInputSchema).optional()
}).strict();

export const CategoriesOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoriesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoriesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoriesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoriesMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoriesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoriesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  account_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CategoriesCreateInputSchema: z.ZodType<Prisma.CategoriesCreateInput> = z.object({
  id: z.string(),
  slug: z.string(),
  account_id: z.string()
}).strict();

export const CategoriesUncheckedCreateInputSchema: z.ZodType<Prisma.CategoriesUncheckedCreateInput> = z.object({
  id: z.string(),
  slug: z.string(),
  account_id: z.string()
}).strict();

export const CategoriesUpdateInputSchema: z.ZodType<Prisma.CategoriesUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoriesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesCreateManyInputSchema: z.ZodType<Prisma.CategoriesCreateManyInput> = z.object({
  id: z.string(),
  slug: z.string(),
  account_id: z.string()
}).strict();

export const CategoriesUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoriesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoriesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoriesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const CategoriesSlugAccount_idCompoundUniqueInputSchema: z.ZodType<Prisma.CategoriesSlugAccount_idCompoundUniqueInput> = z.object({
  slug: z.string(),
  account_id: z.string()
}).strict();

export const CategoriesCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoriesMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  account_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const CategoriesFindFirstArgsSchema: z.ZodType<Prisma.CategoriesFindFirstArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOrderByWithRelationInputSchema.array(),CategoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const CategoriesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoriesFindFirstOrThrowArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOrderByWithRelationInputSchema.array(),CategoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const CategoriesFindManyArgsSchema: z.ZodType<Prisma.CategoriesFindManyArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOrderByWithRelationInputSchema.array(),CategoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoriesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const CategoriesAggregateArgsSchema: z.ZodType<Prisma.CategoriesAggregateArgs> = z.object({
  where: CategoriesWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOrderByWithRelationInputSchema.array(),CategoriesOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoriesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const CategoriesGroupByArgsSchema: z.ZodType<Prisma.CategoriesGroupByArgs> = z.object({
  where: CategoriesWhereInputSchema.optional(),
  orderBy: z.union([ CategoriesOrderByWithAggregationInputSchema.array(),CategoriesOrderByWithAggregationInputSchema ]).optional(),
  by: CategoriesScalarFieldEnumSchema.array(),
  having: CategoriesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const CategoriesFindUniqueArgsSchema: z.ZodType<Prisma.CategoriesFindUniqueArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereUniqueInputSchema,
}).strict() 

export const CategoriesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoriesFindUniqueOrThrowArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereUniqueInputSchema,
}).strict() 

export const CategoriesCreateArgsSchema: z.ZodType<Prisma.CategoriesCreateArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  data: z.union([ CategoriesCreateInputSchema,CategoriesUncheckedCreateInputSchema ]),
}).strict() 

export const CategoriesUpsertArgsSchema: z.ZodType<Prisma.CategoriesUpsertArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereUniqueInputSchema,
  create: z.union([ CategoriesCreateInputSchema,CategoriesUncheckedCreateInputSchema ]),
  update: z.union([ CategoriesUpdateInputSchema,CategoriesUncheckedUpdateInputSchema ]),
}).strict() 

export const CategoriesCreateManyArgsSchema: z.ZodType<Prisma.CategoriesCreateManyArgs> = z.object({
  data: CategoriesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const CategoriesDeleteArgsSchema: z.ZodType<Prisma.CategoriesDeleteArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  where: CategoriesWhereUniqueInputSchema,
}).strict() 

export const CategoriesUpdateArgsSchema: z.ZodType<Prisma.CategoriesUpdateArgs> = z.object({
  select: CategoriesSelectSchema.optional(),
  data: z.union([ CategoriesUpdateInputSchema,CategoriesUncheckedUpdateInputSchema ]),
  where: CategoriesWhereUniqueInputSchema,
}).strict() 

export const CategoriesUpdateManyArgsSchema: z.ZodType<Prisma.CategoriesUpdateManyArgs> = z.object({
  data: z.union([ CategoriesUpdateManyMutationInputSchema,CategoriesUncheckedUpdateManyInputSchema ]),
  where: CategoriesWhereInputSchema.optional(),
}).strict() 

export const CategoriesDeleteManyArgsSchema: z.ZodType<Prisma.CategoriesDeleteManyArgs> = z.object({
  where: CategoriesWhereInputSchema.optional(),
}).strict() 

interface CategoriesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.CategoriesArgs
  readonly type: Omit<Prisma.CategoriesGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  categories: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "slug",
        "TEXT"
      ],
      [
        "account_id",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (CategoriesCreateInputSchema as any)
      .partial()
      .or((CategoriesUncheckedCreateInputSchema as any).partial()),
    createSchema: CategoriesCreateArgsSchema,
    createManySchema: CategoriesCreateManyArgsSchema,
    findUniqueSchema: CategoriesFindUniqueArgsSchema,
    findSchema: CategoriesFindFirstArgsSchema,
    updateSchema: CategoriesUpdateArgsSchema,
    updateManySchema: CategoriesUpdateManyArgsSchema,
    upsertSchema: CategoriesUpsertArgsSchema,
    deleteSchema: CategoriesDeleteArgsSchema,
    deleteManySchema: CategoriesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof CategoriesUncheckedCreateInputSchema>,
    Prisma.CategoriesCreateArgs['data'],
    Prisma.CategoriesUpdateArgs['data'],
    Prisma.CategoriesFindFirstArgs['select'],
    Prisma.CategoriesFindFirstArgs['where'],
    Prisma.CategoriesFindUniqueArgs['where'],
    never,
    Prisma.CategoriesFindFirstArgs['orderBy'],
    Prisma.CategoriesScalarFieldEnum,
    CategoriesGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations, pgMigrations)
export type Electric = ElectricClient<typeof schema>
