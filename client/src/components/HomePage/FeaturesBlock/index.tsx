'use client';

import { Box, SimpleGrid, Heading, Text, Icon, Card, Flex } from '@chakra-ui/react';
import { FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';

export default function FeaturesBlock() {
  return (
    <Box mt={10}>
      <Heading as="h2" size="lg" mb={6}>
        Наши фишки
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Card p="16px" minHeight="180px">
          <Flex direction="column" align="center" justify="center" height="100%">
            <Icon as={FaShieldAlt} boxSize={10} mb={4} />
            <Text fontWeight="bold" textAlign="center">
              Защита от гриферов
            </Text>
          </Flex>
        </Card>
        <Card p="16px" minHeight="180px">
          <Flex direction="column" align="center" justify="center" height="100%">
            <Icon as={FaGlobe} boxSize={10} mb={4} />
            <Text fontWeight="bold" textAlign="center">
              Поддержка разных языков
            </Text>
          </Flex>
        </Card>
        <Card p="16px" minHeight="180px">
          <Flex direction="column" align="center" justify="center" height="100%">
            <Icon as={FaUsers} boxSize={10} mb={4} />
            <Text fontWeight="bold" textAlign="center">
              Дружелюбное комьюнити
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
