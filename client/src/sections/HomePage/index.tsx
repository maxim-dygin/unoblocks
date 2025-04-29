'use client';

import { Box} from '@chakra-ui/react';
import HeroSection from '@/components/HomePage/HeroSection';
import NewsBlock from '@/components/HomePage/NewsBlock';
import FeaturesBlock from '@/components/HomePage/FeaturesBlock';
import JoinBanner from '@/components/HomePage/JoinBanner';
import ServersBlock from '@/components/HomePage/ServersBlock';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Box maxW="1200px" py='64px' mx="auto">
        <NewsBlock />
        <ServersBlock />
        <FeaturesBlock />
        <JoinBanner />
      </Box>
    </>
  );
}
