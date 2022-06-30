import { ReviewDto, CreateReviewDto, UpdateReviewDto } from './review.dtos';
import {
  CreateReviewInput,
  CreateReviewPayload,
  Review,
  DeleteReviewPayload,
  UpdateReviewInput,
  UpdateReviewPayload,
} from 'src/graphql';
import { getMockCreateDateTimes, getNextId } from 'src/db/mock-db';

export const toGQLReview = (review: ReviewDto): Review => {
  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    accountId: review.accountId,
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
    ...getMockCreateDateTimes(),
  };
};

// QUERY

export const fromGQLReview = (review: Review): ReviewDto => {
  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    accountId: review.accountId,
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
  };
};

// MUTATIONS CREATE

export const fromGQLCreateReviewInput = (
  review: CreateReviewInput,
): CreateReviewDto => {
  return {
    text: review.text,
    rating: review.rating,
    accountId: '1', // TODO: accountId missing in CreateReviewInput
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
  };
};

export const fromCreateReviewDto = (review: CreateReviewDto): ReviewDto => {
  return {
    id: getNextId(),
    text: review.text,
    rating: review.rating,
    accountId: review.accountId,
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLCreateReviewPayload = (
  review: ReviewDto,
): CreateReviewPayload => {
  return {
    code: 201,
    message: 'Created Successfully',
    Review: toGQLReview(review),
    success: true,
  };
};

// MUTATIONS UPDATE

export const fromGQLUpdateReviewInput = (
  review: UpdateReviewInput,
): UpdateReviewDto => {
  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    accountId: '1', // TODO: accountId missing in CreateReviewInput
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
  };
};

export const fromUpdateReviewDto = (review: UpdateReviewDto): ReviewDto => {
  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    accountId: review.accountId,
    showName: review.showName,
    orderId: review.orderId,
    productId: review.productId,
    salesChannelId: review.salesChannelId,
    ...getMockCreateDateTimes(),
  };
};

export const toGQLUpdateReviewPayload = (
  review: ReviewDto,
): UpdateReviewPayload => {
  return {
    code: 204,
    message: 'Updated Successfully',
    review: toGQLReview(review),
    success: true,
  };
};

// MUTATIONS DELETE

export const toGQLDeleteReviewPayload = (dto: Review): DeleteReviewPayload => {
  return {
    code: 204,
    message: 'Deleted Successfully',
    review: dto,
    success: true,
  };
};
