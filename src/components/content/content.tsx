import { Grid, GridProps } from '@chakra-ui/react';
import { memo } from 'react';

const Content = memo<GridProps>(props => {
  return (
    <Grid h="full" {...props}>
      {props.children}
    </Grid>
  );
});

Content.displayName = 'Content';
export { Content };
