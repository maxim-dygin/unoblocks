'use client';

import { Box, Flex, Link, Spacer, Heading, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      as="header"
      p="4"
      mx="2"
      mt="4"
      bg={bg}
      color="inherit"
      align="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      maxW="1200px"
      marginX="auto"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      backdropFilter="blur(10px)"
      zIndex="1000"
      boxShadow="md"
    >
      <Heading size="md">
        <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
          Unblocks
        </Link>
      </Heading>
      <Spacer />
      <Stack direction='row' spacing={4}>
        <Link as={NextLink} href="/donate" _hover={{ textDecoration: 'underline' }}>
          Донат
        </Link>
        <Link as={NextLink} href="/faq" _hover={{ textDecoration: 'underline' }}>
          FAQ
        </Link>
      </Stack>
      <Spacer />
      <Stack direction='row' spacing={2} align="center">
        <ThemeToggleButton />
        <Button sx={{ height: '28px' }} variant='solid' colorScheme='teal'>
          Вход
        </Button>
        <Button sx={{ height: '28px' }} variant='outline' colorScheme='teal'>
          Регистрация
        </Button>
      </Stack>
    </Flex>
  );
}
