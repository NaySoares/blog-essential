import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Informations = ({ children, position = '55%' }) => {
  return (
    <Flex
      as='div'
      align='flex-start'
      justify='flex-start'
      w='150px'
      mt='34px'
      mr={position}
      lineHeight='6'
    >
      <motion.span
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, type: "easeInOut" }}
        style={{ position: "relative"}}
      >
        {children}
      </motion.span>
    </Flex>
  )
}

export { Informations }; 