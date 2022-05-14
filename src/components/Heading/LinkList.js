import { Flex } from '@chakra-ui/react';

const LinkList = ({ children }) => {
  return (
    <Flex
    as='section'
    align='center'
    justify='center'
    >
      {children}
    </Flex>
  )
}

export { LinkList };