import React from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  children: React.ReactNode;
  image: string;
  alt: string;
}

function Layout({ children, image, alt }: Props) {
  const theme = useTheme();
  const aboveMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box display="flex" height="100%">
      <Box component="img" src={image} alt={alt} hidden={!aboveMedium} />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default Layout;
