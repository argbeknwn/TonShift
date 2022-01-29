import { Grid, GridProps, Image } from '@chakra-ui/react';
import { memo } from 'react';
import img from '../../assets/images/diamond.svg';

const Content = memo<GridProps>(props => {
  return (
    <Grid h="full" templateRows={props.templateRows}>
      <Image
        pos={'absolute'}
        borderRadius="full"
        boxSize={{ base: 16, sm: 24 }}
        src={img}
        alt={'image'}
        left={'50%'}
        top={'15%'}
        transform={{ base: 'translateX(-50%)', sm: 'translateX(-50%)' }}
      />
      {props.children}
    </Grid>
  );
});

Content.displayName = 'Content';
export { Content };
