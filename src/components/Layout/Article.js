import Head from 'next/head';
import NavBar from '../Heading/Navbar';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 30 },
};

const ArticleLayout = ({ children }) => {
  return (
    <Box as='main'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Thinking more, thinking essential" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Thinking</title>
      </Head>

      <NavBar />

      <motion.section
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, type: "easeInOut" }}
      >
        <Flex
          display='flex'
          align='center'
          justify='center'
          direction='column'
          pt={44}
          w="100wh"
        >
          {children}
        </Flex>
      </motion.section>
    </Box>
  )
}

export default ArticleLayout