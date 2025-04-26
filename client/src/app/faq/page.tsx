'use client';

import { Box, Heading, VStack, Text } from '@chakra-ui/react';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Как подключиться к серверу?',
      answer: 'Просто добавьте наш IP в список серверов Minecraft и заходите играть!',
    },
    {
      question: 'Что даёт донат?',
      answer: 'Донат даёт доступ к уникальным командам, зонам и плюшкам, поддерживая развитие проекта.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Вы можете написать в наш Discord-сервер или на почту, указанную на сайте.',
    },
  ];

  return (
    <Box maxW="4xl" mx="auto" py="12">
      <Heading as="h1" size="2xl" textAlign="center" mb="8">
        Часто задаваемые вопросы
      </Heading>

      <VStack spacing="6" align="stretch">
        {faqs.map((faq, index) => (
          <Box key={index}>
            <Heading as="h2" size="md" mb="2">
              {faq.question}
            </Heading>
            <Text color="gray.500">{faq.answer}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
