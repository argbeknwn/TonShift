import { Text, Flex, Image, ImageProps } from '@chakra-ui/react';
import { memo } from 'react';

interface CardProps extends ImageProps {
  text: string;
}

const Card = memo<CardProps>(props => {
  return (
    <Flex
      cursor={'pointer'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={4}
    >
      <Image
        borderRadius="full"
        boxSize={{ base: 100, sm: 150 }}
        src="#"
        alt={'image'}
        fallbackSrc="https://via.placeholder.com/150"
        {...props}
      />
      <Text>{props.text}</Text>
    </Flex>
  );
});

Card.displayName = 'Card';

export { Card };
