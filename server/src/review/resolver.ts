import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewDto, CreateReviewDto, UpdateReviewDto } from './review.dtos';
import {
  CreateReviewInput,
  CreateReviewPayload,
  DeleteReviewInput,
  DeleteReviewPayload,
  UpdateReviewInput,
  UpdateReviewPayload,
} from '../graphql';

import {
  fromGQLCreateReviewInput,
  toGQLCreateReviewPayload,
  fromCreateReviewDto,
  fromGQLReview,
  toGQLDeleteReviewPayload,
  fromGQLUpdateReviewInput,
  fromUpdateReviewDto,
  toGQLUpdateReviewPayload,
} from './mappings';
import { deleteFromDb, findInDb, storeToDb, updateInDb } from 'src/db/mock-db';

@Resolver('Review')
export class ReviewResolver {
  @Query()
  async getReview(@Args('id') id: string) {
    const review = findInDb<ReviewDto>('REVIEW', id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fromGQLReview(review);
  }

  @Mutation()
  async createReview(
    @Args('input')
    input: CreateReviewInput,
  ): Promise<CreateReviewPayload> {
    const inputDto: CreateReviewDto = fromGQLCreateReviewInput(input);

    const review = fromCreateReviewDto(inputDto);

    storeToDb('REVIEW', review.id, review);

    return toGQLCreateReviewPayload(review);
  }

  @Mutation()
  async updateReview(
    @Args('input')
    input: UpdateReviewInput,
  ): Promise<UpdateReviewPayload> {
    const dto: UpdateReviewDto = fromGQLUpdateReviewInput(input);

    const review = fromUpdateReviewDto(dto);
    updateInDb('REVIEW', review.id, review);

    return toGQLUpdateReviewPayload(review);
  }

  @Mutation()
  async deleteReview(
    @Args('input')
    input: DeleteReviewInput,
  ): Promise<DeleteReviewPayload> {
    const dto = deleteFromDb<ReviewDto>('REVIEW', input.id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return toGQLDeleteReviewPayload(dto);
  }
}
