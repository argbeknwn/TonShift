import { Container, Grid, GridProps, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';

const Content = memo<GridProps>(props => {
  return (
    <Container h="full">
      <Grid h="full" templateRows={props.templateRows}>
        {props.children}
      </Grid>
    </Container>
  );
});

Content.displayName = 'Content';
export { Content };
