'use client';

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const BLOCKS = [
  'stone',
  'coal_ore',
  'iron_ore',
  'gold_ore',
  'diamond_ore',
  'emerald_ore',
  'redstone_ore',
  'coarse_dirt',
] as const;
type BlockType = typeof BLOCKS[number];

const BLOCK_IMAGES: Record<BlockType, string> = {
  stone: '/images/blocks/stone.png',
  coal_ore: '/images/blocks/coal_ore.png',
  iron_ore: '/images/blocks/iron_ore.png',
  gold_ore: '/images/blocks/gold_ore.png',
  diamond_ore: '/images/blocks/diamond_ore.png',
  emerald_ore: '/images/blocks/emerald_ore.png',
  redstone_ore: '/images/blocks/redstone_ore.png',
  coarse_dirt: '/images/blocks/coarse_dirt.png',
};

const BLOCK_WEIGHTS: { block: BlockType; weight: number }[] = [
  { block: 'stone', weight: 800 },
  { block: 'coal_ore', weight: 50 },
  { block: 'iron_ore', weight: 50 },
  { block: 'redstone_ore', weight: 10 },
  { block: 'gold_ore', weight: 10 },
  { block: 'diamond_ore', weight: 2 },
  { block: 'emerald_ore', weight: 1 },
  { block: 'coarse_dirt', weight: 30 },
];


function getRandomBlock(): BlockType {
  const totalWeight = BLOCK_WEIGHTS.reduce((sum, item) => sum + item.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;

  for (const item of BLOCK_WEIGHTS) {
    cumulative += item.weight;
    if (random < cumulative) {
      return item.block;
    }
  }
  return 'stone';
}


const GRID_SIZE = 40;

function generateGrid(): BlockType[][] {
  const grid: BlockType[][] = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    const row: BlockType[] = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      let block = getRandomBlock();

      if (x > 1 && row[x - 1] === block && row[x - 2] === block) {
        block = getRandomBlock();
      }
      if (y > 1 && grid[y - 1][x] === block && grid[y - 2][x] === block) {
        block = getRandomBlock();
      }

      row.push(block);
    }
    grid.push(row);
  }
  return grid;
}


export default function HeroSection() {
  const [grid, setGrid] = useState<BlockType[][]>([]);
  const torchRef = useRef<HTMLDivElement>(null);
  const BLOCK_SIZE = 64;
  const GRID_COLUMNS = 40;
  const GRID_ROWS = 20;


  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (torchRef.current) {
      const bounds = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      torchRef.current.style.setProperty('--x', `${x}px`);
      torchRef.current.style.setProperty('--y', `${y}px`);
    }
  };


  return (
    <Box
      as="section"
      height="90vh"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseMove={handleMouseMove}
    >
      {/* Фон блоков */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={`${GRID_COLUMNS * BLOCK_SIZE}px`}
        height={`${GRID_ROWS * BLOCK_SIZE}px`}
        display="grid"
        gridTemplateColumns={`repeat(${GRID_COLUMNS}, ${BLOCK_SIZE}px)`}
        gridAutoRows={`${BLOCK_SIZE}px`}
        zIndex={0}
      >
        {grid.flatMap((row, rowIndex) =>
          row.map((block, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              backgroundImage={`url(${BLOCK_IMAGES[block]})`}
              backgroundSize="cover"
              backgroundPosition="center"
              width="64px"
              height="64px"
            />
          ))
        )}
      </Box>

      {/* Факел */}
      <Box
        ref={torchRef}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,200,0.8) 0px, rgba(0,0,0,0.3) 150px, rgba(0,0,0,0.8) 300px)"
        pointerEvents="none"
        zIndex={1}
      />


      {/* Контент */}
      <VStack
        spacing={6}
        textAlign="center"
        zIndex={2}
        position="relative"
        color="white"
      >
        <Heading as="h1" size="2xl">
          Добро пожаловать в Unblocks
        </Heading>
        <Text fontSize="xl" maxW="600px">
          Построй свой мир без границ!
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          _hover={{ transform: 'scale(1.05)' }}
        >
          Присоединяйся
        </Button>
      </VStack>
    </Box>
  );
}
