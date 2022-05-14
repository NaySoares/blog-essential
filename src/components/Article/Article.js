import { Flex, Heading, Text } from '@chakra-ui/react';

const Article = ({ title, description, href, fakeIndex = 'eⁱˣ+2' }) => {
  return (
    <Flex
      as='a'
      align='flex-start'
      justify='flex-start'
      borderTop='2px solid #000'
      w='100%'
      px={6}
      py={4}
      mb={4}
      href={href}
    >
        <Heading
          as='h2'
          fontWeight={500}
          size='xl'
          w={250}
          mx={2}
          lineHeight='1'
        >
          {title}
        </Heading>

      <Text
        as='span'
        fontWeight={300}
        fontSize='18px'
        lineHeight='1'
        w='120px'
      >
        {description}
      </Text>

      <Flex
        as="div"
        align='flex-end'
        justify='flex-end'
        flex='1'
        mx={{base: 2, md: 10}}
      >
        <Heading
          as='h2'
          fontSize={{base: '60px', md:'80px'}}
          fontWeight={400}
          align='right'
        >
          {fakeIndex}
        </Heading>
      </Flex>

    </Flex>
  )
}

export { Article }