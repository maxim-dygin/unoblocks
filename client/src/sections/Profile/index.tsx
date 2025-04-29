'use client';

import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

export default function ProfilePage() {
  return (
    <Box maxW="1200px" mx="auto" mt='100px' p={6}>
      {/* Блок пользователя */}
      <Flex align="center" mb={8}>
        <Avatar size="xl" name="User Name" src="/path-to-avatar.png" mr={6} />
        <Box>
          <Heading size="lg">UserName123</Heading>
          <Flex align="center" mt={2}>
            <Text mr={4}>user@example.com</Text>
            <Button size="sm" colorScheme="teal">Подтвердить почту</Button>
          </Flex>
        </Box>
      </Flex>

      <Divider mb={8} />

      {/* Настройки аккаунта */}
      <Box mb={10}>
        <Heading size="md" mb={4}>Настройки аккаунта</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Никнейм</FormLabel>
            <Input placeholder="Введите новый ник" />
          </FormControl>
          <FormControl>
            <FormLabel>Сменить аватар</FormLabel>
            <Input type="file" />
          </FormControl>
          <FormControl>
            <FormLabel>Пол</FormLabel>
            <Select placeholder="Выберите пол">
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
              <option value="other">Другое</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" w="fit-content">Сохранить изменения</Button>
        </Stack>
      </Box>

      <Divider mb={8} />

      {/* Баланс */}
      <Box mb={10}>
        <Heading size="md" mb={4}>Баланс</Heading>
        <Text fontSize="xl" fontWeight="bold">1,250 монет</Text>
      </Box>

      <Divider mb={8} />

      {/* История транзакций */}
      <Box mb={10}>
        <Heading size="md" mb={4}>История транзакций</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Дата</Th>
              <Th>Описание</Th>
              <Th>Сумма</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2025-04-29</Td>
              <Td>Покупка донат-услуги</Td>
              <Td>-500 монет</Td>
            </Tr>
            <Tr>
              <Td>2025-04-27</Td>
              <Td>Пополнение баланса</Td>
              <Td>+1000 монет</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Divider mb={8} />

      {/* История серверов */}
      <Box>
        <Heading size="md" mb={4}>История посещенных серверов</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Сервер</Th>
              <Th>Наиграно часов</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Overworld</Td>
              <Td>120 ч</Td>
            </Tr>
            <Tr>
              <Td>Mining World</Td>
              <Td>45 ч</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text mt={4} fontWeight="bold">Всего наиграно: 165 часов</Text>
      </Box>
    </Box>
  );
}
