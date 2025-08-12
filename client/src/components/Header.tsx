'use client';

import {
  Flex,
  Link,
  Heading,
  Button,
  Stack,
  useColorModeValue,
  Avatar,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';
import AuthModal from '@/components/AuthModal';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useLogin, useRegister } from '@/lib/useAuth';

export default function Header() {
  const bg = useColorModeValue('rgba(209, 209, 209, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  const [user, setUser] = useState({
    isAuthenticated: false,
    username: '',
    balance: 0,
    avatarUrl: '',
  });

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleLogin = (username: string, password: string) => {
    loginMutation.mutate(
      { username, password },
      {
        onSuccess: () => {
          setUser({
            isAuthenticated: true,
            username,
            balance: 1250,
            avatarUrl: "https://i.pravatar.cc/300",
          });
          onLoginClose();
        },
      }
    );
  };

  const handleRegister = (username: string, password: string) => {
    registerMutation.mutate(
      { username, password },
      {
        onSuccess: () => {
          setUser({
            isAuthenticated: true,
            username,
            balance: 500,
            avatarUrl: "https://i.pravatar.cc/301",
          });
          onRegisterClose();
        },
      }
    );
  };


  const handleLogout = () => {
    setUser({
      isAuthenticated: false,
      username: '',
      balance: 0,
      avatarUrl: '',
    });
  };

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
      height='74px'
      marginX="auto"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      backdropFilter="blur(8px)"
      zIndex="1000"
      boxShadow="md"
      justifyContent="space-between"
    >
      <Heading size="md">
        <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
          Unblocks
        </Link>
      </Heading>

      <Stack direction='row' spacing={4}>
        <Link as={NextLink} href="/donate" _hover={{ textDecoration: 'underline' }}>
          Донат
        </Link>
        <Link as={NextLink} href="/faq" _hover={{ textDecoration: 'underline' }}>
          FAQ
        </Link>
      </Stack>

      <Stack direction="row" spacing={4} align="center">
        <ThemeToggleButton />

        {user.isAuthenticated ? (
          <Stack direction="row" spacing={3} align="center">
            <Text fontWeight="bold">{user.balance} ₸</Text>
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Button variant="ghost" p={1} height="auto" _hover={{ bg: 'transparent' }}>
                  <Stack direction="row" spacing={2} align="center">
                    <Avatar size="sm" name={user.username} src={user.avatarUrl} />
                    <Text>{user.username}</Text>
                  </Stack>
                </Button>
              </PopoverTrigger>
              <PopoverContent width="150px">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">Меню</PopoverHeader>
                <PopoverBody>
                  <Stack spacing={2}>
                    <Button as={NextLink} href="/profile" size="sm" colorScheme="teal" variant="ghost">
                      Профиль
                    </Button>
                    <Divider />
                    <Button onClick={handleLogout} size="sm" colorScheme="red" variant="ghost">
                      Выйти
                    </Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        ) : (
          <>
            <Button sx={{ height: '28px' }} variant="solid" colorScheme="teal" onClick={onLoginOpen}>
              Вход
            </Button>
            <Button sx={{ height: '28px' }} variant="outline" colorScheme="teal" onClick={onRegisterOpen}>
              Регистрация
            </Button>
          </>
        )}
      </Stack>

      {/* Модалки авторизации */}
      <AuthModal mode="login" isOpen={isLoginOpen} onClose={onLoginClose} onSubmit={handleLogin} />
      <AuthModal mode="register" isOpen={isRegisterOpen} onClose={onRegisterClose} onSubmit={handleRegister} />
    </Flex>
  );
}
