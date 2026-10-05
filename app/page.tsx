'use client';

import React, { useState, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactStatsSection } from '@/components/sections/ImpactStatsSection';
import { WhyTuriyaSection } from '@/components/sections/WhyTuriyaSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { PassEcosystemSection } from '@/components/sections/PassEcosystemSection';
import { LeaguePreviewSection } from '@/components/sections/LeaguePreviewSection';
import { TournamentSection } from '@/components/sections/TournamentSection';
import { PlayerDiscoverySection } from '@/components/sections/PlayerDiscoverySection';
import { ClubsSection } from '@/components/sections/ClubsSection';
import { AcademiesSection } from '@/components/sections/AcademiesSection';
import { OpportunitiesSection } from '@/components/sections/OpportunitiesSection';
import { CommunityStoriesSection } from '@/components/sections/CommunityStoriesSection';
import { ImpactMovementSection } from '@/components/sections/ImpactMovementSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { AppDownloadSection } from '@/components/sections/AppDownloadSection';
import { JoinRolesSection } from '@/components/sections/JoinRolesSection';

import { JoinModal } from '@/components/modals/JoinModal';
import { RegisterTeamModal } from '@/components/modals/RegisterTeamModal';
import { ApplyOpportunityModal } from '@/components/modals/ApplyOpportunityModal';

import { getLeagues } from '@/lib/api/leagues';
import { getTournaments } from '@/lib/api/tournaments';
import { getPlayers } from '@/lib/api/players';
import { getClubs } from '@/lib/api/clubs';
import { getAcademies } from '@/lib/api/academies';
import { getOpportunities } from '@/lib/api/opportunities';
import { getStories } from '@/lib/api/stories';
import { getNews } from '@/lib/api/news';

import {
  LEAGUES_DATA,
  TOURNAMENTS_DATA,
  PLAYERS_DATA,
  CLUBS_DATA,
  ACADEMIES_DATA,
  OPPORTUNITIES_DATA,
  STORIES_DATA,
  NEWS_DATA,
} from '@/lib/constants/mock-data';
import { Tournament, Opportunity } from '@/types';

export default function HomePage() {
  const [leagues, setLeagues] = useState(LEAGUES_DATA);
  const [tournaments, setTournaments] = useState(TOURNAMENTS_DATA);
  const [players, setPlayers] = useState(PLAYERS_DATA);
  const [clubs, setClubs] = useState(CLUBS_DATA);
  const [academies, setAcademies] = useState(ACADEMIES_DATA);
  const [opportunities, setOpportunities] = useState(OPPORTUNITIES_DATA);
  const [stories, setStories] = useState(STORIES_DATA);
  const [news, setNews] = useState(NEWS_DATA);

  // Modals state
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('player');

  const [registerTournament, setRegisterTournament] = useState<Tournament | null>(null);
  const [applyOpportunity, setApplyOpportunity] = useState<Opportunity | null>(null);

  // Fetch through clean API layer on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [lData, tData, pData, cData, aData, oData, sData, nData] = await Promise.all([
          getLeagues(),
          getTournaments(),
          getPlayers(),
          getClubs(),
          getAcademies(),
          getOpportunities(),
          getStories(),
          getNews(),
        ]);
        if (lData) setLeagues(lData);
        if (tData) setTournaments(tData);
        if (pData) setPlayers(pData);
        if (cData) setClubs(cData);
        if (aData) setAcademies(aData);
        if (oData) setOpportunities(oData);
        if (sData) setStories(sData);
        if (nData) setNews(nData);
      } catch (err) {
        console.warn('Using default client state', err);
      }
    }
    loadData();
  }, []);

  const handleOpenJoin = (role = 'player') => {
    setSelectedRole(role);
    setJoinModalOpen(true);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection onJoinClick={() => handleOpenJoin('player')} />

      {/* 2. IMPACT STATISTICS */}
      <ImpactStatsSection />

      {/* 3. WHY TURIYA */}
      <WhyTuriyaSection />

      {/* 4. FOOTBALL ECOSYSTEM */}
      <EcosystemSection />

      {/* 4B. PASS ECOSYSTEM ROLE TAB SWITCHER (MASTER SPEC) */}
      <PassEcosystemSection />

      {/* 5. LEAGUE SECTION */}
      <LeaguePreviewSection leagues={leagues} />

      {/* 6. TOURNAMENT SECTION */}
      <TournamentSection
        tournaments={tournaments}
        onRegisterTeam={(t) => setRegisterTournament(t)}
      />

      {/* 7. PLAYER DISCOVERY */}
      <PlayerDiscoverySection players={players} />

      {/* 8. CLUBS */}
      <ClubsSection clubs={clubs} />

      {/* 9. ACADEMIES */}
      <AcademiesSection academies={academies} />

      {/* 10. CAREERS & OPPORTUNITIES */}
      <OpportunitiesSection
        opportunities={opportunities}
      />

      {/* 11. COMMUNITY STORIES */}
      <CommunityStoriesSection stories={stories} />

      {/* 12. IMPACT SECTION */}
      <ImpactMovementSection />

      {/* 13. NEWS / UPDATES */}
      <NewsSection news={news} />

      {/* 14. APP DOWNLOAD SECTION */}
      <AppDownloadSection />

      {/* 15. JOIN TURIYA (ROLES) */}
      <JoinRolesSection onSelectRole={(roleId) => handleOpenJoin(roleId)} />

      {/* MODALS */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        defaultRole={selectedRole}
      />

      <RegisterTeamModal
        isOpen={!!registerTournament}
        onClose={() => setRegisterTournament(null)}
        tournament={registerTournament}
      />

      <ApplyOpportunityModal
        isOpen={!!applyOpportunity}
        onClose={() => setApplyOpportunity(null)}
        opportunity={applyOpportunity}
      />
    </>
  );
}
