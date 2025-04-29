'use client';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

interface AuthModalProps {
  mode: 'login' | 'register';
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}

export default function AuthModal({ mode, isOpen, onClose, onSubmit }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) return; // можно базовую валидацию
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{mode === 'login' ? 'Вход' : 'Регистрация'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {mode === 'register' && (
              <>
                <Input
                  type="password"
                  placeholder="Повторите пароль"
                />
                <Input
                  type="code"
                  placeholder="Код приглашения (не обязательно)"
                />
              </>
            )}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
