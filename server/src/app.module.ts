import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { InventoryTransferResolver } from './inventory-transfer/resolver';
import { InventoryBatchResolver } from './inventory-batch/resolver';
import { CompanyResolver } from './companies/resolver';

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
  ],
})
export class AppModule {}
