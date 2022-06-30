import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { InventoryTransferResolver } from './inventory-transfer/resolver';
import { InventoryBatchResolver } from './inventory-batch/resolver';
import { CompanyResolver } from './companies/resolver';
import { ReviewResolver } from './review/resolver';
import { DiscountCodeResolver } from './discount-code/resolver';
import { DiscountRuleResolver } from './discount-rule/resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/schema/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [],
  providers: [
    InventoryTransferResolver,
    InventoryBatchResolver,
    CompanyResolver,
    ReviewResolver,
    DiscountCodeResolver,
    DiscountRuleResolver,
  ],
})
export class AppModule {}
