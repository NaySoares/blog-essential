import NextLink from "next/link";
import { Heading, Box, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const SubTitle = ({ children, path, truePath }) => (
  <Box>
    <NextLink href={`/${truePath}`}>
      <Link>{path}</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading as="h3" display="inline-block" fontSize={18}>
      {children}
    </Heading>
  </Box>
);