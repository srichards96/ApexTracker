import { UserStat } from './UserStat';

export interface UserStats {
  damage: UserStat;
  kills: UserStat;
  level: UserStat;
  lmgKills: UserStat;
  matchesPlayed: UserStat;
  rankScore: UserStat;
  seasonWins: UserStat;
  season2Wins: UserStat;
  season3Wins: UserStat;
}
