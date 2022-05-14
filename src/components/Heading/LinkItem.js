import { Link, useColorModeValue } from '@chakra-ui/react';

const LinkItem = ({ children, link }) => {
  const colorThemeLink = useColorModeValue('#000', '#ffff');
  return (
    <Link
      as='a'
      href={link}
      mx={4}
      color={colorThemeLink}
    >
      { children }
    </Link>
  )
}

export { LinkItem };