'use client';

import { Button, Card, Heading, Image, Grid, Stack, Text, GridItem, HStack, VStack, Divider, Box } from '@chakra-ui/react';
import { FaTelegramPlane, FaVk, FaDiscord, FaYoutube, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function NewsBlock() {
  return (
    <>
      <Heading as="h2" size="lg">
        Новости и Сообщество
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        <GridItem colSpan={1}>
          <VStack align='stretch'>
            <Button leftIcon={<FaTelegramPlane />} colorScheme="telegram" variant="solid">
              Новости Telegram
            </Button>
            <Button leftIcon={<FaVk />} colorScheme="blue" variant="solid">
              Новости VK
            </Button>
            <Button leftIcon={<FaDiscord />} colorScheme="purple" variant="solid">
              Сервер Discord
            </Button>
            <Button leftIcon={<FaYoutube />} colorScheme="red" variant="solid">
              YouTube-канал
            </Button>
            <Button leftIcon={<FaInstagram />} colorScheme="pink" variant="solid">
              Instagram
            </Button>
            <Button leftIcon={<FaTwitter />} colorScheme="gray" variant="solid">
              X (Twitter)
            </Button>
          </VStack>
        </GridItem>

        <GridItem colSpan={3} mt={12}>
          <VStack spacing={4}>
            <Card p={6}>
              <VStack spacing={4} align="start">
                <Image
                  src="/your-news-image.png"
                  borderRadius="md"
                  alt="Новость Unblocks"
                />
                <Text fontSize="sm" color="gray.400">
                  2025-04-28 15:00
                </Text>
                <Heading as="h3" size="md">
                  ✨ Новый сезон открыт!
                </Heading>
                <Text>
                  Построй свой мир заново! Обновления, новые локации, квесты и награды уже ждут тебя на Unblocks!
                </Text>
              </VStack>
            </Card>
            
            <Stack spacing={6} mt={4}>
              <VStack spacing={2} align="start">
                <Stack direction='row' spacing={2}>
                  <Heading as="h3" size="sm">
                    ✨ Новый сезон открыт!
                  </Heading>

                  <Text fontSize="sm" color="gray.400">
                    2025-04-28 15:00
                  </Text>
                </Stack>
                <Text>
                  Построй свой мир заново! Обновления, новые локации, квесты и награды уже ждут тебя на Unblocks!
                </Text>
              </VStack>

              <Divider />

              <VStack spacing={2} align="start">
                <Stack direction='row' spacing={2}>
                  <Heading as="h3" size="sm">
                    ✨ Новый сезон открыт!
                  </Heading>

                  <Text fontSize="sm" color="gray.400">
                    2025-04-28 15:00
                  </Text>
                </Stack>
                <Text>
                  Построй свой мир заново! Обновления, новые локации, квесты и награды уже ждут тебя на Unblocks!
                </Text>
              </VStack>

              <Button
                size='sm'
                variant='ghost'
                rightIcon={<FaArrowRight />}
              >
                Больше новостей
              </Button>
            </Stack>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
