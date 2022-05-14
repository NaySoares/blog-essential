import { Link, Text, useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const colorTheme = useColorModeValue('#000', '#fff')
  return (
    <Link
      as='a'
      href={'/'}
      color={colorTheme}
      _hover={{ decorate: 'false' }}
    >
      <Text
        as='span'
        fontWeight={500}
      >
        Essential
      </Text>
    </Link>
  )
}

export { Logo };