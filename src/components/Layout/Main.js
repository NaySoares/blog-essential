import Head from 'next/head'
import NavBar from '../Heading/Navbar'
import { Box, Flex } from '@chakra-ui/react'

const Main = ({ children, title }) => {
  return (
    <Box as='main'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Thinking more, thinking essential" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>{title}</title>
      </Head>

      <NavBar />

      <Flex
        display='flex'
        align='center'
        justify='center'
        direction='column'
        w="100wh"
        h='100vh'
      >
        {children}
      </Flex>
    </Box>
  )
}

export default Main