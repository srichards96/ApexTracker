import { UserStats } from './UserStats';

export interface UserSegment {
  attributes: object;
  expiryData: string;
  metadata: {
    name?: string,
    imageUrl?: string,
    tallImageUrl?: string,
    bgImageUrl?: string,
    isActive?: boolean
  };
  stats: UserStats;
  type: string;
}
