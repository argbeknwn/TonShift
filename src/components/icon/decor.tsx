import { memo } from 'react';
import { Image } from '@chakra-ui/react';
import img from '../../assets/images/diamond.svg';

const DiamondImg = memo(() => (
  <Image
    pos={'absolute'}
    borderRadius="full"
    boxSize={{ base: 16, sm: 24 }}
    src={img}
    alt={'image'}
    left={'50%'}
    top={0}
    transform={{ base: 'translate(-50%,-50%)', sm: 'translate(-50%,-50%)' }}
  />
));

DiamondImg.displayName = 'DiamondImg';

export { DiamondImg };
