'use client';

import { SimpleGrid, Container, Heading, VStack } from '@chakra-ui/react';
import DonateCard from '@/components/DonateCard';

export default function DonatePage() {
  return (
    <Container maxW="6xl" py="12">
      <VStack spacing="8" mb="12">
        <Heading as="h1" size="2xl" textAlign="center">
          Поддержи сервер Unblocks
        </Heading>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
        <DonateCard
          title="Starter Pack"
          price="₸1000"
          features={[
            'Ранг Starter',
            'Доступ к базовому набору команд',
            'Еженедельные бонусы'
          ]}
        />
        <DonateCard
          title="VIP Pack"
          price="₸2500"
          features={[
            'Ранг VIP',
            'Эксклюзивные команды',
            'Премиум скин в игре'
          ]}
        />
        <DonateCard
          title="Legend Pack"
          price="₸5000"
          features={[
            'Ранг Legend',
            'Доступ к секретным зонам',
            'Особый префикс в чате'
          ]}
        />
      </SimpleGrid>
    </Container>
  );
}
