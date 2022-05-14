import { Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: -20, },
  enter: { opacity: 1, x: 0, y: 0, },
  exit: { opacity: 0, x: 0, y: -20 },
};

const H1variants = {
  hidden: { opacity: 0, x: 0, y: 0, },
  enter: { opacity: 1, x: 0, y: 0, },
  exit: { opacity: 0, x: 0, y: 0 },
};
const TextAnimation = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8, type: "easeInOut" }}
      style={{ position: "relative", fontSize: '35px', fontWeight: '300'}}
    >
      <Text
        as='p'
        css={{ transform: 'rotate(3deg)' }}
      >
        {children}
      </Text>
    </motion.div>
  )
}

const H1Animation = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={H1variants}
      transition={{ duration: 1.5, type: "easeInOut" }}
    >
      <Heading
        as='h1'
        fontSize={{ base: '120px', md: '140px' }}
        fontWeight={400}
        align='center'
        m={8}
        lineHeight='0.8'
        _hover={{ 'color': `#fff`, 'cursor': 'default' }}
      >
        {children}
      </Heading>
    </motion.div>
  )
}

export { TextAnimation, H1Animation }