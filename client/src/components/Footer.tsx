'use client';

import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" p="4" bg="gray.900" color="gray.400" textAlign="center">
      <Text fontSize="sm">
        © {new Date().getFullYear()} Unblocks. All rights reserved.
      </Text>
    </Box>
  );
}
