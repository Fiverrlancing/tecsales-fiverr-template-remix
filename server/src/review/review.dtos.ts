export class ReviewDto {
  id: string;
  text: string;
  rating: number; // (out of 5)
  accountId: string;
  showName: boolean;
  orderId: string;
  productId: string;
  salesChannelId: string;
}

export class CreateReviewDto {
  text: string;
  rating: number; // (out of 5)
  accountId: string;
  showName: boolean;
  orderId: string;
  productId: string;
  salesChannelId: string;
}

export class UpdateReviewDto {
  id: string;
  text: string;
  rating: number; // (out of 5)
  accountId: string;
  showName: boolean;
  orderId: string;
  productId: string;
  salesChannelId: string;
}

export class DeleteReviewDto {
  id: string;
}
