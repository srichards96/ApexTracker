import { UserSegment } from './UserSegment';

export interface UserData {
  expiryDate: string;
  metadata: {
    activeLegend: string,
    activeLegendName: string,
    currentSeason: number
  };
  platformInfo: {
    additionalParameters: string,
    avatarUrl: string,
    platformSlug: string,
    platformUserHandle: string
    platformUserId: string;
    platformUserIdentifier: string;
  };
  segments: UserSegment[];
  userInfo: {
    countryCode: string,
    customAvatarUrl: string,
    isInfluencer: boolean,
    isPremium: false,
    isVerified: false,
    socialAccounts: object    // TODO...
  }
}
