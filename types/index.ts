export type RoleCategory = 
  | 'Player' 
  | 'Coach' 
  | 'Club' 
  | 'Academy' 
  | 'Organiser' 
  | 'Referee' 
  | 'Physiotherapist' 
  | 'Fan';

export interface PlayerStats {
  pace?: number;
  finishing?: number;
  passing?: number;
  dribbling?: number;
  physical?: number;
  matches: number;
  goals: number;
  assists: number;
  appearances: number;
  cleanSheets?: number;
}

export interface Player {
  id: string;
  slug: string;
  name: string;
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper' | 'Winger';
  age: number;
  location: string;
  state: string;
  club: string;
  clubSlug: string;
  photoUrl: string;
  coverUrl?: string;
  stats: PlayerStats;
  biography: string;
  achievements: string[];
  tournamentHistory: {
    tournament: string;
    year: string;
    award?: string;
    role: string;
  }[];
  gallery: string[];
  preferredFoot: 'Right' | 'Left' | 'Both';
  height: string;
  weight: string;
  jerseyNumber: number;
}

export interface Club {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  logoUrl: string;
  coverUrl: string;
  location: string;
  state: string;
  foundedYear: number;
  playersCount: number;
  coach: string;
  coachTitle: string;
  league: string;
  leagueSlug: string;
  achievements: string[];
  about: string;
  homeGround: string;
  squadSummary: {
    forwards: number;
    midfielders: number;
    defenders: number;
    goalkeepers: number;
  };
  gallery: string[];
}

export interface AcademyProgram {
  title: string;
  ageGroup: string;
  duration: string;
  frequency: string;
  focus: string;
  priceMonthly: string;
}

export interface Academy {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  image: string;
  coverImage?: string;
  ageGroups: string[];
  headCoach: string;
  coachLicense: string;
  trainingDays: string;
  facilities: string[];
  about: string;
  programs: AcademyProgram[];
  gallery: string[];
  contact: {
    phone: string;
    email: string;
    groundAddress: string;
  };
  upcomingBatches: {
    batchName: string;
    startDate: string;
    capacity: string;
    status: 'Open' | 'Filling Fast' | 'Closed';
  }[];
}

export interface Tournament {
  id: string;
  slug: string;
  name: string;
  location: string;
  venue: string;
  state: string;
  dates: string;
  teamsCount: number;
  prizePool: string;
  status: 'Registration Open' | 'Upcoming' | 'Completed' | 'Ongoing';
  image: string;
  category: 'U-17' | 'U-19' | 'Open Category' | 'Grassroots Cup';
  entryFee: string;
  registrationDeadline: string;
  description: string;
  rules: string[];
  organiser: {
    name: string;
    contact: string;
    verificationBadge: boolean;
  };
  fixtures: {
    matchNumber: number;
    teamA: string;
    teamB: string;
    date: string;
    time: string;
    venue: string;
    score?: string;
    isFinished: boolean;
  }[];
}

export interface Match {
  id: string;
  leagueSlug?: string;
  tournamentSlug?: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  venue: string;
  status: 'Finished' | 'Live' | 'Scheduled';
  round: string;
}

export interface Standing {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export interface League {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  state: string;
  teamsCount: number;
  currentSeason: string;
  matchesPlayed: number;
  totalMatches: number;
  status: 'Active' | 'Upcoming' | 'Completed';
  image: string;
  coverImage?: string;
  description: string;
  standings: Standing[];
  upcomingMatches: Match[];
  recentResults: Match[];
  participatingTeams: {
    name: string;
    slug: string;
    location: string;
  }[];
}

export interface Opportunity {
  id: string;
  slug: string;
  category: 'Player' | 'Coach' | 'Referee' | 'Physiotherapist' | 'Organiser';
  title: string;
  organization: string;
  location: string;
  state: string;
  date: string;
  deadline: string;
  eligibility: string;
  status: 'Active' | 'Closing Soon' | 'Completed';
  compensation?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  contactEmail: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Player Story' | 'Coach Story' | 'Club Story' | 'Tournament Story' | 'Community Story';
  author: string;
  date: string;
  readTime: string;
  location: string;
  image: string;
  excerpt: string;
  content: string[];
  quote: {
    text: string;
    author: string;
  };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
}

export interface EcosystemStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
}
