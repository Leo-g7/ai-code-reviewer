import { Body, Controller, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    @Post()
    review(@Body() body: { diff: string }) {
        return this.reviewsService.review(body.diff);
    }
}
