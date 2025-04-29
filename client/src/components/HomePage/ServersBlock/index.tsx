'use client';

import { Box, Heading, SimpleGrid, Text, Card, CardBody, Badge, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const servers = [
  { name: 'Overworld', emoji: '🌍', online: 265, link: '/overworld', active: true },
  { name: 'Mining World', emoji: '⛏️', online: 78, link: '/mining', active: true },
  { name: 'PvP Zone', emoji: '🔥', online: 0, link: '/pvp', active: false },
  { name: 'Creative World', emoji: '🏡', online: 19, link: '/creative', active: true },
  { name: 'Event Arena', emoji: '⚔️', online: 0, link: '/event', active: false },
];

export default function ServersBlock() {
  const router = useRouter();

  const handleClick = (link : string) => {
    router.push(link);
  };

  return (
    <Box mt={6}>
      <Heading as="h2" size="lg" mb={4}>
        Сервера
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {servers.map((server) => (
          <Card
            key={server.name}
            role="button"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            onClick={() => handleClick(server.link)}
          >
            <CardBody>
              <Badge colorScheme={server.active ? 'green' : 'red'} mb={2}>
                {server.active ? 'Активен' : 'Неактивен'}
              </Badge>
              <Stack spacing={2}>
                <Text fontSize="xl">
                  {server.emoji} {server.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Онлайн {server.online}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}