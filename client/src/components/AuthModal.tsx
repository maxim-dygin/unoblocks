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
  onSubmit: (username: string, password: string) => void;
}

export default function AuthModal({ mode, isOpen, onClose, onSubmit }: AuthModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!username || !password) return;
    onSubmit(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{mode === "login" ? "Вход" : "Регистрация"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4">
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {mode === 'register' && (
              <>
                <Input
                  type="password"
                  placeholder="Повторите пароль"
                />
                <InputAdded auth requests
                  type="code"
                  placeholder="Код приглашения (не обязательно)"
                />
              </>
            )} */}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
