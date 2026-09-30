import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  review(diff: string) {
    return {
      summary: 'Review completed',
      riskLevel: 'medium',
      issues: [
        {
          severity: 'high',
          category: 'security',
          file: 'example.ts',
          line: 12,
          title: 'Potential security issue',
          explanation: 'This is currently a fake AI review.',
        },
      ],
    };
  }
}
