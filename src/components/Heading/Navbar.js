import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { LinkList } from './LinkList';
import { LinkItem } from './LinkItem';

const Navbar = () => {
  return (
    <Flex
      as='nav'
      position='fixed'
      z-index={1}
      maxW='100wh'
      w='100%'
      my={2}
      px={10}
      justify='space-between'
    >
      <Logo />

      <LinkList>
        <LinkItem link={`/`}>
          Home
        </LinkItem>
        <LinkItem link={`/thinking`}>
          Thinking
        </LinkItem>
        <LinkItem link={`/journal`}>
          Journal
        </LinkItem>
      </LinkList>
    </Flex>
  )
}

export default Navbar;