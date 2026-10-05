import { 
  Player, 
  Club, 
  Academy, 
  Tournament, 
  League, 
  Opportunity, 
  Story, 
  NewsItem,
  EcosystemStage 
} from '@/types';

export const IMPACT_STATS = [
  { value: '20+', label: 'Clubs', description: 'Affiliated grassroots community clubs' },
  { value: '500+', label: 'Players', description: 'Registered village & youth athletes' },
  { value: '16+', label: 'Tournaments', description: 'Competitive cups & seasonal tournaments' },
  { value: '50+', label: 'Opportunities', description: 'Scouting trials, coaching jobs & clinics' },
  { value: '20+', label: 'Coaches', description: 'Licensed mentors & grassroots developers' },
  { value: '10+', label: 'Communities', description: 'Rural football districts and tribal hubs' },
];

export const HERO_FLOATING_CARDS = [
  { count: '20+', label: 'Clubs', icon: 'Shield' },
  { count: '500+', label: 'Players', icon: 'Users' },
  { count: '50+', label: 'Opportunities', icon: 'Sparkles' },
  { count: '16+', label: 'Tournaments', icon: 'Trophy' },
];

export const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    step: '01',
    title: 'PLAY',
    tagline: 'Develop Players & Create Exposure',
    description: 'Providing boots, structured age-category training, and match exposure to talented kids playing in village fields.',
    iconName: 'PlayCircle',
    color: '#0B6B3A'
  },
  {
    step: '02',
    title: 'COACH',
    tagline: 'Run Academies & Develop Talent',
    description: 'Empowering local community coaches with AIFF grassroots certification, training curriculum, and digital tactics kits.',
    iconName: 'Award',
    color: '#19C463'
  },
  {
    step: '03',
    title: 'ORGANISE',
    tagline: 'Operate Tournaments & Leagues',
    description: 'Digital scheduling, real-time match scores, licensed referees, and verified player registration for village cups.',
    iconName: 'CalendarCheck',
    color: '#0B6B3A'
  },
  {
    step: '04',
    title: 'EARN',
    tagline: 'Create Livelihood Opportunities',
    description: 'Transforming weekend village games into economic engines—match fees, coaching stipends, and fair tournament prize pools.',
    iconName: 'TrendingUp',
    color: '#19C463'
  },
  {
    step: '05',
    title: 'BUILD',
    tagline: 'Invest in Clubs, Players & Grounds',
    description: 'Mobilizing community sponsors, panchayat grounds revitalization, goalposts, floodlights, and youth kits.',
    iconName: 'Hammer',
    color: '#0B6B3A'
  },
  {
    step: '06',
    title: 'GROW',
    tagline: 'Build Stronger, Healthier Youth',
    description: 'Fostering disciplined community leadership, drug-free youth spaces, and generational pride across rural heartlands.',
    iconName: 'HeartHandshake',
    color: '#19C463'
  }
];

export const PLAYERS_DATA: Player[] = [
  {
    id: 'p-1',
    slug: 'rahul-das',
    name: 'Rahul Das',
    position: 'Forward',
    age: 18,
    location: 'Guwahati, Assam',
    state: 'Assam',
    club: 'Turiya FC',
    clubSlug: 'turiya-fc',
    photoUrl: '/assets/IMG_9681.JPG',
    coverUrl: '/assets/0A6A0673.JPG',
    stats: {
      pace: 89,
      finishing: 86,
      passing: 74,
      dribbling: 82,
      physical: 76,
      matches: 24,
      goals: 28,
      assists: 11,
      appearances: 24
    },
    biography: 'Discovered during the Kamrup Rural Panchayat Cup, Rahul displayed lightning sprint bursts and a natural instinct inside the penalty box. In just two seasons with Turiya FC, he has led the district scoring charts.',
    achievements: [
      'Top Scorer - North East Village Cup 2025 (14 Goals)',
      'Most Valuable Player - Brahmaputra Youth League 2024',
      'Assam State U-17 Camp Selectee'
    ],
    tournamentHistory: [
      { tournament: 'North East Village Cup', year: '2025', award: 'Golden Boot', role: 'Starting Striker' },
      { tournament: 'Kamrup Rural Championship', year: '2025', award: 'Champions', role: 'Starting Striker' },
      { tournament: 'Brahmaputra Youth League', year: '2024', award: 'Best Forward', role: 'Forward' }
    ],
    gallery: [
      '/assets/IMG_9681.JPG',
      '/assets/0A6A0673.JPG',
      '/assets/0A6A0422.JPG'
    ],
    preferredFoot: 'Right',
    height: "5'9\"",
    weight: '66 kg',
    jerseyNumber: 9
  },
  {
    id: 'p-2',
    slug: 'samuel-lalhruaitluanga',
    name: 'Samuel Lalhruaitluanga',
    position: 'Midfielder',
    age: 19,
    location: 'Aizawl, Mizoram',
    state: 'Mizoram',
    club: 'Highland United FC',
    clubSlug: 'highland-united-fc',
    photoUrl: '/assets/0A6A0422.JPG',
    coverUrl: '/assets/IMG_9613.JPG',
    stats: {
      pace: 81,
      finishing: 72,
      passing: 88,
      dribbling: 84,
      physical: 79,
      matches: 28,
      goals: 12,
      assists: 21,
      appearances: 28
    },
    biography: 'Known for his pin-point long passes and box-to-box stamina in steep hilly terrains, Samuel is the engine of Highland United. He was scouted from a local church fellowship tournament.',
    achievements: [
      'Playmaker of the Season - Mizoram Grassroots Cup 2025',
      'Highest Assist Provider - North East Rural Shield',
      'AIFF D-License aspirant'
    ],
    tournamentHistory: [
      { tournament: 'North East Rural Shield', year: '2025', award: 'Top Assist Maker', role: 'Central Midfield' },
      { tournament: 'Aizawl District League', year: '2024', award: 'Runners-up', role: 'Captain' }
    ],
    gallery: [
      '/assets/0A6A0422.JPG',
      '/assets/IMG_9613.JPG'
    ],
    preferredFoot: 'Both',
    height: "5'8\"",
    weight: '64 kg',
    jerseyNumber: 8
  },
  {
    id: 'p-3',
    slug: 'bikash-bodo',
    name: 'Bikash Bodo',
    position: 'Winger',
    age: 17,
    location: 'Kokrajhar, Assam',
    state: 'Assam',
    club: 'Bodoland Grassroots FC',
    clubSlug: 'bodoland-grassroots-fc',
    photoUrl: '/assets/0A6A5102.JPG',
    coverUrl: '/assets/0A6A0422.JPG',
    stats: {
      pace: 93,
      finishing: 80,
      passing: 75,
      dribbling: 89,
      physical: 70,
      matches: 19,
      goals: 16,
      assists: 14,
      appearances: 19
    },
    biography: 'Lightning fast with explosive 1-on-1 dribbling skills, Bikash honed his touch playing barefoot on rain-soaked village grounds in Kokrajhar.',
    achievements: [
      'Fastest Sprint Record (Grassroots Combine 2025)',
      'Man of the Match - Bodoland Youth Derby'
    ],
    tournamentHistory: [
      { tournament: 'Bodoland Youth Trophy', year: '2025', award: 'Best Young Talent', role: 'Right Winger' }
    ],
    gallery: [
      '/assets/0A6A5102.JPG'
    ],
    preferredFoot: 'Right',
    height: "5'7\"",
    weight: '61 kg',
    jerseyNumber: 11
  },
  {
    id: 'p-4',
    slug: 'tsering-norbu',
    name: 'Tsering Norbu',
    position: 'Defender',
    age: 20,
    location: 'Tawang, Arunachal Pradesh',
    state: 'Arunachal Pradesh',
    club: 'Himalayan Strikers',
    clubSlug: 'himalayan-strikers',
    photoUrl: '/assets/IMG_9610.JPG',
    coverUrl: '/assets/IMG_9613.JPG',
    stats: {
      pace: 75,
      finishing: 42,
      passing: 78,
      dribbling: 68,
      physical: 89,
      matches: 31,
      goals: 4,
      assists: 5,
      appearances: 31,
      cleanSheets: 14
    },
    biography: 'A towering central defender built for high-altitude physical battles. Commanding in the air and calm under pressure.',
    achievements: [
      'Best Defender - Arunachal Mountain Cup 2025',
      'Captain - Tawang District XI'
    ],
    tournamentHistory: [
      { tournament: 'Arunachal Mountain Cup', year: '2025', award: 'Best Defender', role: 'Centre Back' }
    ],
    gallery: [
      '/assets/IMG_9610.JPG'
    ],
    preferredFoot: 'Right',
    height: "6'1\"",
    weight: '75 kg',
    jerseyNumber: 4
  }
];

export const CLUBS_DATA: Club[] = [
  {
    id: 'c-1',
    slug: 'turiya-fc',
    name: 'Turiya Football Club',
    shortName: 'Turiya FC',
    logoUrl: '/assets/0A6A0673.JPG',
    coverUrl: '/assets/0A6A0673.JPG',
    location: 'Kamrup Rural, Guwahati',
    state: 'Assam',
    foundedYear: 2022,
    playersCount: 42,
    coach: 'Pranab Saikia',
    coachTitle: 'AIFF C-License Head Coach',
    league: 'Brahmaputra Valley League',
    leagueSlug: 'brahmaputra-valley-league',
    achievements: [
      'Champions - Assam Rural League 2025',
      'Winners - North East Village Cup 2025',
      'Fair Play Award 2024'
    ],
    about: 'Formed by village teachers, local youth, and football veterans, Turiya FC provides free boots, nutrition, and training to over 40 village kids across Kamrup district.',
    homeGround: 'Chaygaon Community Ground, Kamrup',
    squadSummary: {
      forwards: 8,
      midfielders: 14,
      defenders: 12,
      goalkeepers: 4
    },
    gallery: [
      '/assets/0A6A0673.JPG',
      '/assets/IMG_9613.JPG'
    ]
  },
  {
    id: 'c-2',
    slug: 'baradi-fc',
    name: 'Baradi Football Club',
    shortName: 'Baradi FC',
    logoUrl: '/assets/0A6A0422.JPG',
    coverUrl: '/assets/0A6A0422.JPG',
    location: 'Baradi, Kamrup Rural',
    state: 'Assam',
    foundedYear: 2021,
    playersCount: 36,
    coach: 'Lalremruata Ralte',
    coachTitle: 'Technical Director',
    league: 'Brahmaputra Valley League',
    leagueSlug: 'brahmaputra-valley-league',
    achievements: [
      'Village Championship Winners 2024',
      'District Knockout Finalists'
    ],
    about: 'Baradi FC is a powerhouse grassroots football club rooted in rural Assam, competing passionately in local tournaments with spirited village support.',
    homeGround: 'Baradi Village Football Ground',
    squadSummary: {
      forwards: 6,
      midfielders: 12,
      defenders: 10,
      goalkeepers: 3
    },
    gallery: [
      '/assets/0A6A0422.JPG'
    ]
  },
  {
    id: 'c-3',
    slug: 'bodoland-grassroots-fc',
    name: 'Bodoland Grassroots FC',
    shortName: 'Bodoland FC',
    logoUrl: '/assets/IMG_9613.JPG',
    coverUrl: '/assets/IMG_9681.JPG',
    location: 'Kokrajhar',
    state: 'Assam',
    foundedYear: 2023,
    playersCount: 38,
    coach: 'Maneswar Basumatary',
    coachTitle: 'Grassroots Coordinator',
    league: 'Brahmaputra Valley League',
    leagueSlug: 'brahmaputra-valley-league',
    achievements: [
      'Runners-up - Bodoland Gold Trophy 2025',
      'Top Youth Academy Designation 2024'
    ],
    about: 'Dedicated to channeling energy and sports passion among Bodo youth through football clinics, matches, and regional tournaments.',
    homeGround: 'Kokrajhar District Stadium Turf',
    squadSummary: {
      forwards: 7,
      midfielders: 11,
      defenders: 11,
      goalkeepers: 4
    },
    gallery: [
      '/assets/IMG_9613.JPG',
      '/assets/IMG_9681.JPG'
    ]
  },
  {
    id: 'c-4',
    slug: 'himalayan-strikers',
    name: 'Himalayan Strikers',
    shortName: 'Himalayan FC',
    logoUrl: '/assets/0A6A5102.JPG',
    coverUrl: '/assets/0A6A5102.JPG',
    location: 'Tawang & Bomdila',
    state: 'Arunachal Pradesh',
    foundedYear: 2022,
    playersCount: 30,
    coach: 'Dorjee Khandu',
    coachTitle: 'Head Coach',
    league: 'Arunachal Mountain League',
    leagueSlug: 'arunachal-mountain-league',
    achievements: [
      'High Altitude Cup Champions 2025',
      'Clean Sheet Record Holder'
    ],
    about: 'A tight-knit community club representing border villages with resilience, discipline, and stamina.',
    homeGround: 'Tawang High-Altitude Ground',
    squadSummary: {
      forwards: 5,
      midfielders: 10,
      defenders: 10,
      goalkeepers: 3
    },
    gallery: [
      '/assets/0A6A5102.JPG'
    ]
  }
];

export const ACADEMIES_DATA: Academy[] = [
  {
    id: 'aca-1',
    slug: 'kaziranga-grassroots-academy',
    name: 'Kaziranga Grassroots Football Academy',
    location: 'Bokakhat, Golaghat',
    state: 'Assam',
    image: '/assets/0A6A5102.JPG',
    coverImage: '/assets/0A6A0422.JPG',
    ageGroups: ['U-10', 'U-13', 'U-16', 'U-19'],
    headCoach: 'Diganta Borah',
    coachLicense: 'AIFF B-License',
    trainingDays: 'Mon, Wed, Fri & Sat (Morning & Evening Batches)',
    facilities: ['Natural Grass Full Pitch', 'Fitness & Agility Zone', 'Changing Rooms', 'Drinking Water & First Aid'],
    about: 'Kaziranga Grassroots Football Academy provides professional football training to children from tea garden estates and neighboring villages. We combine tactical discipline with joyful village football spirit.',
    programs: [
      {
        title: 'Grassroots Foundation (U-10 & U-13)',
        ageGroup: 'Ages 7 to 13',
        duration: '12 Months Continuous',
        frequency: '3 Sessions / Week',
        focus: 'Ball Mastery, Coordination, Fun Games, Teamwork',
        priceMonthly: '₹350 / month (Scholarships Available)'
      },
      {
        title: 'Youth Development Elite (U-16 & U-19)',
        ageGroup: 'Ages 14 to 19',
        duration: '10 Months Seasonal',
        frequency: '5 Sessions / Week + Weekend Matches',
        focus: 'Tactical Formations, Video Review, Match Fitness & Scouting Trials',
        priceMonthly: '₹500 / month (Free for Village Talent)'
      }
    ],
    gallery: [
      '/assets/0A6A5102.JPG',
      '/assets/0A6A0422.JPG'
    ],
    contact: {
      phone: '+91 94350 12890',
      email: 'kaziranga.academy@turiyafootball.org',
      groundAddress: 'Near Bokakhat Stadium, Golaghat District, Assam 785612'
    },
    upcomingBatches: [
      {
        batchName: 'Summer Talent Batch 2026',
        startDate: '15 April 2026',
        capacity: '30 Seats',
        status: 'Open'
      },
      {
        batchName: 'Tea Estate Youth Trial Batch',
        startDate: '1 May 2026',
        capacity: '40 Seats',
        status: 'Filling Fast'
      }
    ]
  },
  {
    id: 'aca-2',
    slug: 'meghalaya-cloud-academy',
    name: 'Meghalaya Cloud Football Academy',
    location: 'Mawkyrwat & Shillong',
    state: 'Meghalaya',
    image: '/assets/IMG_9613.JPG',
    coverImage: '/assets/0A6A0673.JPG',
    ageGroups: ['U-12', 'U-15', 'U-18'],
    headCoach: 'Banteilang Lyngdoh',
    coachLicense: 'AIFF A-License',
    trainingDays: 'Tuesday to Sunday',
    facilities: ['High-Altitude Natural Turf', 'Gym & Recovery Room', 'Physiotherapy Center', 'Hostel Facility'],
    about: 'Situated in the football heartland of Meghalaya, Cloud Academy develops high-endurance, technically proficient players primed for national and ISL reserve squads.',
    programs: [
      {
        title: 'Hills High-Performance Program',
        ageGroup: 'Ages 15 to 18',
        duration: 'Year-Round',
        frequency: '6 Days / Week',
        focus: 'Endurance, Tactical Agility, Set Pieces, Mental Resilience',
        priceMonthly: '₹800 / month'
      }
    ],
    gallery: [
      '/assets/IMG_9613.JPG'
    ],
    contact: {
      phone: '+91 98620 44512',
      email: 'meghalaya.cloud@turiyafootball.org',
      groundAddress: 'South West Khasi Hills Ground, Mawkyrwat, Meghalaya'
    },
    upcomingBatches: [
      {
        batchName: 'Pre-Monsoon Monsoon League Intake',
        startDate: '20 April 2026',
        capacity: '25 Seats',
        status: 'Open'
      }
    ]
  }
];

export const TOURNAMENTS_DATA: Tournament[] = [
  {
    id: 't-1',
    slug: 'north-east-village-cup',
    name: 'NORTH EAST VILLAGE CUP',
    location: 'Guwahati, Assam',
    venue: 'Nehru Stadium & Judges Field',
    state: 'Assam',
    dates: '12–15 December 2026',
    teamsCount: 16,
    prizePool: '₹50,000 Prize Pool',
    status: 'Registration Open',
    image: '/assets/0A6A0673.JPG',
    category: 'Grassroots Cup',
    entryFee: '₹1,500 per team',
    registrationDeadline: '25 November 2026',
    description: 'The premier grassroots tournament uniting 16 village and rural clubs across Assam, Meghalaya, and Nagaland. Matches are streamed locally, officiated by certified referees, and monitored by talent scouts.',
    rules: [
      '11-a-side regulation match rules (35 min halves)',
      'All players must be registered on Turiya digital system',
      'Maximum 18 players per squad',
      'Proof of age / grassroots club affiliation required'
    ],
    organiser: {
      name: 'Turiya Grassroots Foundation & Assam District FA',
      contact: 'tournaments@turiyafootball.org',
      verificationBadge: true
    },
    fixtures: [
      {
        matchNumber: 1,
        teamA: 'Turiya FC',
        teamB: 'Bodoland Grassroots FC',
        date: '12 Dec 2026',
        time: '09:00 AM',
        venue: 'Pitch 1, Nehru Stadium',
        score: 'Upcoming',
        isFinished: false
      },
      {
        matchNumber: 2,
        teamA: 'Highland United FC',
        teamB: 'Himalayan Strikers',
        date: '12 Dec 2026',
        time: '01:30 PM',
        venue: 'Pitch 2, Judges Field',
        score: 'Upcoming',
        isFinished: false
      }
    ]
  },
  {
    id: 't-2',
    slug: 'brahmaputra-youth-cup',
    name: 'BRAHMAPUTRA YOUTH CUP',
    location: 'Tezpur, Assam',
    venue: 'Polo Field, Tezpur',
    state: 'Assam',
    dates: '5–8 January 2027',
    teamsCount: 12,
    prizePool: '₹35,000 Prize Pool',
    status: 'Upcoming',
    image: '/assets/0A6A0422.JPG',
    category: 'U-17',
    entryFee: '₹1,000 per team',
    registrationDeadline: '15 December 2026',
    description: 'Focusing exclusively on U-17 grassroots teams along the Brahmaputra banks. Designed to unearth young wingers and midfielders.',
    rules: [
      'Strict U-17 verification (Birth certificate / Aadhaar)',
      'Substitutions: 5 players rolling',
      'Fair play points contribute to tie-breaker'
    ],
    organiser: {
      name: 'Tezpur Football Association',
      contact: 'tezpur.cup@turiyafootball.org',
      verificationBadge: true
    },
    fixtures: []
  },
  {
    id: 't-3',
    slug: 'khasi-hills-challenge-shield',
    name: 'KHASI HILLS CHALLENGE SHIELD',
    location: 'Shillong, Meghalaya',
    venue: 'Polo Grounds, Shillong',
    state: 'Meghalaya',
    dates: '18–22 November 2026',
    teamsCount: 20,
    prizePool: '₹75,000 Prize Pool',
    status: 'Registration Open',
    image: '/assets/IMG_9613.JPG',
    category: 'Open Category',
    entryFee: '₹2,000 per team',
    registrationDeadline: '5 November 2026',
    description: 'A historic weekend knockout cup featuring the toughest rural clubs in Meghalaya battling in high tempo, rain-proof excitement.',
    rules: [
      'Knockout format with penalty shootouts on tie',
      'Official FIFA match balls provided',
      'Full medical support team stationed on pitch'
    ],
    organiser: {
      name: 'Shillong Sports Association Partner Guild',
      contact: 'khasi.shield@turiyafootball.org',
      verificationBadge: true
    },
    fixtures: []
  },
  {
    id: 't-4',
    slug: 'kamrup-rural-autumn-cup',
    name: 'KAMRUP RURAL AUTUMN CUP',
    location: 'Chaygaon, Assam',
    venue: 'Chaygaon Sports Ground',
    state: 'Assam',
    dates: '10–14 October 2025',
    teamsCount: 16,
    prizePool: '₹40,000 Prize Pool',
    status: 'Completed',
    image: '/assets/IMG_9681.JPG',
    category: 'Grassroots Cup',
    entryFee: '₹1,200 per team',
    registrationDeadline: 'Finished',
    description: 'Completed last autumn with over 4,000 spectators attending the grand finale won by Turiya FC in a thrilling 3-2 extra-time encounter.',
    rules: [
      'Grassroots club verified players only',
      'Local panchayat referee panel'
    ],
    organiser: {
      name: 'Chaygaon Youth Club',
      contact: 'kamrup.rural@turiyafootball.org',
      verificationBadge: true
    },
    fixtures: []
  }
];

export const LEAGUES_DATA: League[] = [
  {
    id: 'l-1',
    slug: 'brahmaputra-valley-league',
    name: 'Brahmaputra Valley League',
    tagline: 'The Heartbeat of Rural Assam Football',
    location: 'Guwahati & Lower Assam',
    state: 'Assam',
    teamsCount: 10,
    currentSeason: 'Season 2026–27',
    matchesPlayed: 36,
    totalMatches: 90,
    status: 'Active',
    image: '/assets/0A6A0673.JPG',
    coverImage: '/assets/0A6A0673.JPG',
    description: 'The Brahmaputra Valley League is our flagship weekend grassroots league spanning 10 community clubs. Played across rural grounds, every match offers live points tracking and digital stats for scouts.',
    standings: [
      { rank: 1, team: 'Turiya FC', played: 8, won: 6, drawn: 2, lost: 0, goalsFor: 22, goalsAgainst: 7, goalDifference: 15, points: 20, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 2, team: 'Bodoland Grassroots FC', played: 8, won: 5, drawn: 2, lost: 1, goalsFor: 18, goalsAgainst: 9, goalDifference: 9, points: 17, form: ['W', 'D', 'W', 'W', 'L'] },
      { rank: 3, team: 'Highland United FC', played: 8, won: 4, drawn: 3, lost: 1, goalsFor: 16, goalsAgainst: 10, goalDifference: 6, points: 15, form: ['W', 'W', 'D', 'D', 'W'] },
      { rank: 4, team: 'Kamrup Strikers', played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 14, goalsAgainst: 12, goalDifference: 2, points: 13, form: ['L', 'W', 'W', 'L', 'W'] },
      { rank: 5, team: 'Sonitpur Rovers', played: 8, won: 3, drawn: 2, lost: 3, goalsFor: 11, goalsAgainst: 11, goalDifference: 0, points: 11, form: ['D', 'L', 'W', 'D', 'W'] },
      { rank: 6, team: 'Himalayan Strikers', played: 8, won: 2, drawn: 3, lost: 3, goalsFor: 9, goalsAgainst: 12, goalDifference: -3, points: 9, form: ['L', 'D', 'L', 'W', 'D'] }
    ],
    upcomingMatches: [
      {
        id: 'm-101',
        leagueSlug: 'brahmaputra-valley-league',
        homeTeam: 'Turiya FC',
        awayTeam: 'Bodoland Grassroots FC',
        date: 'Sunday, 12 Oct 2026',
        time: '03:30 PM',
        venue: 'Chaygaon Community Ground',
        status: 'Scheduled',
        round: 'Matchday 9'
      },
      {
        id: 'm-102',
        leagueSlug: 'brahmaputra-valley-league',
        homeTeam: 'Highland United FC',
        awayTeam: 'Kamrup Strikers',
        date: 'Saturday, 18 Oct 2026',
        time: '03:00 PM',
        venue: 'Champhai Ground',
        status: 'Scheduled',
        round: 'Matchday 9'
      }
    ],
    recentResults: [
      {
        id: 'm-98',
        leagueSlug: 'brahmaputra-valley-league',
        homeTeam: 'Turiya FC',
        awayTeam: 'Sonitpur Rovers',
        homeScore: 3,
        awayScore: 1,
        date: '5 Oct 2026',
        time: '03:30 PM',
        venue: 'Chaygaon Ground',
        status: 'Finished',
        round: 'Matchday 8'
      },
      {
        id: 'm-99',
        leagueSlug: 'brahmaputra-valley-league',
        homeTeam: 'Bodoland Grassroots FC',
        awayTeam: 'Himalayan Strikers',
        homeScore: 2,
        awayScore: 0,
        date: '4 Oct 2026',
        time: '03:00 PM',
        venue: 'Kokrajhar Stadium',
        status: 'Finished',
        round: 'Matchday 8'
      }
    ],
    participatingTeams: [
      { name: 'Turiya FC', slug: 'turiya-fc', location: 'Kamrup, Assam' },
      { name: 'Bodoland Grassroots FC', slug: 'bodoland-grassroots-fc', location: 'Kokrajhar, Assam' },
      { name: 'Highland United FC', slug: 'highland-united-fc', location: 'Aizawl, Mizoram' },
      { name: 'Himalayan Strikers', slug: 'himalayan-strikers', location: 'Tawang, Arunachal' }
    ]
  },
  {
    id: 'l-2',
    slug: 'mizoram-grassroots-premier',
    name: 'Mizoram Grassroots Premier',
    tagline: 'High-Altitude Fast-Paced Football',
    location: 'Aizawl & Lunglei',
    state: 'Mizoram',
    teamsCount: 8,
    currentSeason: 'Season 2026',
    matchesPlayed: 24,
    totalMatches: 56,
    status: 'Active',
    image: '/assets/0A6A0422.JPG',
    coverImage: '/assets/IMG_9613.JPG',
    description: 'Renowned for intense physical stamina, technical prowess on mountain turf, and deep village loyalty.',
    standings: [
      { rank: 1, team: 'Highland United FC', played: 6, won: 5, drawn: 1, lost: 0, goalsFor: 17, goalsAgainst: 4, goalDifference: 13, points: 16, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 2, team: 'Champhai Mountain Boys', played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 12, goalsAgainst: 6, goalDifference: 6, points: 13, form: ['W', 'D', 'W', 'W', 'L'] }
    ],
    upcomingMatches: [],
    recentResults: [],
    participatingTeams: [
      { name: 'Highland United FC', slug: 'highland-united-fc', location: 'Champhai' },
      { name: 'Champhai Mountain Boys', slug: 'champhai-boys', location: 'Champhai' }
    ]
  }
];

export const OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: 'op-1',
    slug: 'u18-football-trial-guwahati',
    category: 'Player',
    title: 'U-18 Football Trial',
    organization: 'Turiya Football Development Cell',
    location: 'Guwahati, Assam',
    state: 'Assam',
    date: '20 October 2026',
    deadline: '15 October 2026',
    eligibility: 'Age: 15–18 years (Born between 2008 & 2011)',
    status: 'Active',
    compensation: 'Selected players receive 100% kit sponsor, travel stipend & academy seat',
    description: 'Open scouting trials to identify 25 young players for the upcoming regional youth tournament and national academy exposure camps.',
    responsibilities: [
      'Attend mandatory morning fitness and speed test (07:30 AM)',
      'Participate in small-sided 4v4 and 7v7 possession drills',
      'Compete in full 11v11 match scenario under supervision of AIFF A/B-License evaluators'
    ],
    requirements: [
      'Valid birth certificate / School ID / Aadhaar card',
      'Own football boots and shin pads',
      'Medical clearance certificate / self-declaration of fitness'
    ],
    contactEmail: 'scouting@turiyafootball.org'
  },
  {
    id: 'op-2',
    slug: 'grassroots-head-coach-kokrajhar',
    category: 'Coach',
    title: 'Grassroots Head Coach',
    organization: 'Bodoland Grassroots FC',
    location: 'Kokrajhar, Assam',
    state: 'Assam',
    date: '1 November 2026',
    deadline: '22 October 2026',
    eligibility: 'AIFF D-License or higher / Physical Education Graduate',
    status: 'Active',
    compensation: '₹18,000 – ₹25,000 / month + Accommodation & match bonus',
    description: 'Bodoland Grassroots FC is seeking an energetic coach to lead our U-13 and U-15 grassroots youth academy squads.',
    responsibilities: [
      'Plan and execute 4 weekly training sessions',
      'Manage team during weekend league fixtures',
      'Maintain player attendance and technical progress on Turiya app'
    ],
    requirements: [
      'AIFF D-License minimum, C-License preferred',
      'Fluency in Assamese or Bodo or Hindi',
      'Minimum 1 year grassroots youth coaching experience'
    ],
    contactEmail: 'bodoland.fc@turiyafootball.org'
  },
  {
    id: 'op-3',
    slug: 'referee-certification-clinic',
    category: 'Referee',
    title: 'District Match Referee Certification Clinic',
    organization: 'Assam Football Referee Guild',
    location: 'Tezpur, Assam',
    state: 'Assam',
    date: '28 October 2026',
    deadline: '24 October 2026',
    eligibility: 'Men & Women aged 18–35 with basic football knowledge',
    status: 'Closing Soon',
    compensation: 'Certified referees earn ₹800 - ₹1,500 per official league match',
    description: 'A 3-day practical and theoretical clinic covering modern IFAB Laws of the Game, positioning, whistle technique, and match card reporting.',
    responsibilities: [
      'Complete 15 hours of classroom law modules',
      'Pass physical sprint and fitness trial',
      'Officiate practical 30-minute practice game'
    ],
    requirements: [
      'Age 18 to 35',
      'Basic physical fitness',
      'Commitment to officiate weekend village matches'
    ],
    contactEmail: 'referees@turiyafootball.org'
  },
  {
    id: 'op-4',
    slug: 'sports-physiotherapist-fellowship',
    category: 'Physiotherapist',
    title: 'Sports Physiotherapist Fellowship',
    organization: 'Turiya Health & Performance',
    location: 'Guwahati & Shillong',
    state: 'Assam / Meghalaya',
    date: '10 November 2026',
    deadline: '30 October 2026',
    eligibility: 'BPT / MPT Graduates',
    status: 'Active',
    compensation: '₹22,000 / month stipend + on-field sports trauma certification',
    description: 'Provide pitch-side acute trauma management, taping, rehabilitation, and injury prevention education to grassroots players.',
    responsibilities: [
      'Staff tournament medical tents during weekend cups',
      'Perform pre-season movement screening for youth players',
      'Conduct hamstring and ankle injury prevention workshops'
    ],
    requirements: [
      'Bachelor or Master of Physiotherapy',
      'Passionate about sports medicine and rural community healthcare'
    ],
    contactEmail: 'health@turiyafootball.org'
  },
  {
    id: 'op-5',
    slug: 'village-tournament-organiser-partner',
    category: 'Organiser',
    title: 'Village Tournament Organiser Partner',
    organization: 'Turiya Football Platform',
    location: 'Any District (Assam, Meghalaya, Mizoram, Tripura)',
    state: 'All States',
    date: 'Rolling Basis 2026',
    deadline: 'Open Year-Round',
    eligibility: 'Local youth clubs, sports committees, or village panchayats',
    status: 'Active',
    compensation: 'Turiya provides software, fixture manager, match balls, referee fee grant & trophies',
    description: 'Host your village tournament using Turiya’s digital engine. Get automated bracket generation, online team registrations, and scout attendance.',
    responsibilities: [
      'Provide local pitch logistics and security',
      'Input live match scores into the Turiya organizer portal',
      'Distribute medals and celebrate community football'
    ],
    requirements: [
      'Must have access to a playable football ground',
      'Minimum 8 local teams committed to participate'
    ],
    contactEmail: 'organise@turiyafootball.org'
  }
];

export const STORIES_DATA: Story[] = [
  {
    id: 'st-1',
    slug: 'from-barefoot-to-organised-football',
    title: 'From playing barefoot in the village to organised competitive football.',
    subtitle: 'How 18-year-old Rahul Das found his path from Chaygaon paddy fields to leading the regional goal tally.',
    category: 'Player Story',
    author: 'Ananya Sharma',
    date: '18 September 2026',
    readTime: '4 min read',
    location: 'Kamrup Rural, Assam',
    image: '/assets/IMG_9681.JPG',
    excerpt: 'Until two years ago, Rahul wore cut-up canvas shoes with rubber ties. Today, on a verified Turiya league pitch, his acceleration has caught the eye of national club scouts.',
    content: [
      'In many villages across Lower Assam, football is not a hobby—it is evening prayer. After helping at family fields or finishing school, young boys run barefoot onto uneven grassy clearings, using bamboo posts as goals.',
      'Rahul was no different. His father, a local carpenter, struggled to spare money for specialized football studs. "We played until sunset blinded us. If the ball punctured, the whole village waited two days to repair it," recalls Rahul.',
      'Everything shifted when the Kamrup Rural Championship joined the Turiya platform. For the first time, Rahul was registered with a verified player ID, his 14 goals were logged on a public digital leaderboard, and certified referees ensured fair play.',
      'Today, Rahul captains the Turiya FC youth squad, equipped with proper kit and nutrition guidelines. "Talent is born in our villages," says his coach Pranab. "All we needed was a system to make sure nobody gets left behind."'
    ],
    quote: {
      text: 'Talent is born in our villages. All we needed was a system to make sure nobody gets left behind.',
      author: 'Coach Pranab Saikia'
    }
  },
  {
    id: 'st-2',
    slug: 'how-a-village-teacher-built-a-girls-academy',
    title: 'How a village teacher built a thriving girls football academy in Golaghat.',
    subtitle: 'Breaking social barriers through the beautiful game among tea garden communities.',
    category: 'Community Story',
    author: 'Bikramjit Phukan',
    date: '10 September 2026',
    readTime: '5 min read',
    location: 'Golaghat, Assam',
    image: '/assets/0A6A5102.JPG',
    excerpt: 'Starting with four deflated balls and eight skeptical parents, Master Diganta created a sanctuary of discipline, self-belief, and athletic excellence.',
    content: [
      'When schoolteacher Diganta Borah first marked white chalk lines on an abandoned pasture near Bokakhat, few believed young girls would show up.',
      'Within eighteen months, over 65 girls from surrounding tea garden estates walk three kilometers every evening for practice.',
      'Turiya provided footballs, training cones, and connected the academy with AIFF D-License educator mentors.',
      '"When our girls step onto the pitch in clean jerseys with their names on the back, they stand two inches taller. Football gives them dignity and a voice that cannot be silenced," says Diganta.'
    ],
    quote: {
      text: 'Football gives our girls dignity and a voice that cannot be silenced.',
      author: 'Master Diganta Borah'
    }
  },
  {
    id: 'st-3',
    slug: 'the-weekend-economy-of-village-cups',
    title: 'The weekend economy: Turning village matches into sustainable livelihoods.',
    subtitle: 'From ground caretakers to local tea stalls and certified referees, football breathes commerce into rural towns.',
    category: 'Tournament Story',
    author: 'Ranjit Baruah',
    date: '28 August 2026',
    readTime: '3 min read',
    location: 'Kokrajhar, Assam',
    image: '/assets/IMG_9613.JPG',
    excerpt: 'A grassroots tournament is never just 90 minutes. It is sound system operators, tent makers, local street vendors, and ticket revenue that stays in the village.',
    content: [
      'During the Bodoland Gold Trophy, an estimated 8,000 spectators gathered around the bamboo barricades across four matchdays.',
      'Turiya’s digital ticket pass and sponsor coordination helped the local sports committee generate over ₹1.8 lakhs in direct revenue, which was reinvested into leveling the pitch and buying youth kit sets.',
      'Grassroots football is not an expenditure; when organised properly, it is an authentic economic engine.'
    ],
    quote: {
      text: 'When organized with transparency, grassroots football sustains both athletes and their home communities.',
      author: 'Maneswar Basumatary'
    }
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'n-1',
    slug: 'north-east-village-cup-2026-announced',
    title: 'North East Village Cup 2026 officially announced with 16 village teams',
    category: 'Tournament Announced',
    date: '28 Sep 2026',
    image: '/assets/0A6A0673.JPG',
    excerpt: 'Registration opens across three Northeast states with ₹50,000 cash prize pool and direct scouting access for top performers.',
    readTime: '2 min read'
  },
  {
    id: 'n-2',
    slug: 'three-new-academies-join-turiya-network',
    title: 'Match Officials & Referees Clinic under Floodlights for Turiya Leagues',
    category: 'Referee Development',
    date: '21 Sep 2026',
    image: '/assets/IMG_9610.JPG',
    excerpt: 'Certified Indian referees lead immersive training modules on fair play, disciplinary rules, and digital match reporting.',
    readTime: '3 min read'
  },
  {
    id: 'n-3',
    slug: 'four-village-players-selected-for-national-trials',
    title: 'Baradi FC village players scouted from Brahmaputra League selected for National Trials',
    category: 'Player Selected',
    date: '15 Sep 2026',
    image: '/assets/0A6A0422.JPG',
    excerpt: 'Rahul Das and Baradi FC village youngsters receive invitations to national academy combine after outstanding village cup showings.',
    readTime: '3 min read'
  },
  {
    id: 'n-4',
    slug: 'rural-ground-revitalization-project-launched',
    title: 'Community Ground Revitalization Project launches with Solar Floodlights',
    category: 'Community Football',
    date: '02 Sep 2026',
    image: '/assets/IMG_9681.JPG',
    excerpt: 'New drainage, durable goalposts, and perimeter solar floodlighting installed across rural pitches for evening play.',
    readTime: '4 min read'
  }
];

export const APP_FEATURES = [
  'Discover upcoming village tournaments & local cups',
  'Find and track talented grassroots players with stats',
  'Manage your club roster, line-ups, and match fees',
  'Apply for scouting trials, coaching courses & referee clinics',
  'Follow live scores, match notifications & league tables',
  'Connect directly with verified football organizers & scouts'
];

export const WHY_TURIYA_PROBLEMS = [
  {
    title: 'Players need visibility',
    description: 'Talented kids in remote villages play brilliant football with zero scouting records, digital stats, or video highlights.',
    icon: 'Eye'
  },
  {
    title: 'Coaches need opportunities',
    description: 'Passionate local mentors lack formal AIFF licensing pathways, structured curriculums, and steady income.',
    icon: 'Compass'
  },
  {
    title: 'Clubs need talent & support',
    description: 'Grassroots village clubs run on shoestring budgets without kit sponsorship, digital registrations, or medical back-up.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Organisers need teams & structure',
    description: 'Cup organisers struggle with manual paper schedules, team no-shows, disputed referee calls, and sponsorship trust.',
    icon: 'ClipboardList'
  }
];

export const ROLES_LIST = [
  {
    id: 'player',
    title: 'Player',
    description: 'Build your verified player card, track match stats, and get discovered by regional academies and club scouts.',
    icon: 'UserCheck',
    badge: 'Youth & Senior'
  },
  {
    id: 'coach',
    title: 'Coach',
    description: 'Access coaching education materials, register your academy squads, and manage tactical lineups digitally.',
    icon: 'Award',
    badge: 'Mentorship'
  },
  {
    id: 'club',
    title: 'Club',
    description: 'Onboard your village club, manage player registrations, schedule friendlies, and enter official leagues.',
    icon: 'Shield',
    badge: 'Ecosystem'
  },
  {
    id: 'academy',
    title: 'Academy',
    description: 'Publish training batches, collect community fees transparently, and track player developmental progression.',
    icon: 'GraduationCap',
    badge: 'Development'
  },
  {
    id: 'organiser',
    title: 'Organiser',
    description: 'Host village tournaments with automated bracket generation, digital fixtures, and public standings.',
    icon: 'Trophy',
    badge: 'Tournaments'
  },
  {
    id: 'referee',
    title: 'Referee',
    description: 'Get verified by match referee associations, accept paid officiating duties, and record official cards.',
    icon: 'Flag',
    badge: 'Officiating'
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    description: 'Provide on-field trauma care, support player rehabilitation, and lead injury prevention workshops.',
    icon: 'HeartPulse',
    badge: 'Medical'
  },
  {
    id: 'fan',
    title: 'Community Supporter',
    description: 'Cheer for your village club, sponsor boots or balls for kids, and attend local cup matches.',
    icon: 'Users',
    badge: 'Community'
  }
];
