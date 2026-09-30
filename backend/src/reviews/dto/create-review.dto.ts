import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString({ message: 'The diff must be a string.' })
  @IsNotEmpty({ message: 'The diff cannot be empty.' })
  diff: string;
}