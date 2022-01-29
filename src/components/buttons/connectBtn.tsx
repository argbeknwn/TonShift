import {
  Button,
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorMode,
  useDisclosure,
  Text,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { wallets } from '../../constants/wallets';
import { Card } from '../card/card';
import { Icon } from '../icon/icon';

const ConnectBtn = memo<ButtonProps>(props => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const variant: 'bottom' | 'right' | undefined = useBreakpointValue({
    base: 'bottom',
    sm: 'right',
  });

  return (
    <>
      <Button
        onClick={onToggle}
        rounded={20}
        textTransform={'capitalize'}
        fontSize={{ sm: '2xl' }}
        rightIcon={<Icon iconType="wallet" />}
        bgColor={`ton${colorMode}.${isOpen ? 'accent' : 'hidden'}`}
        color={`ton${colorMode}.${isOpen ? 'white' : 'accent'}`}
        transition={'background 0.3s ease-in-out ,color 0.3s ease-in-out'}
        _focus={{ boxShadow: 'none' }}
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
        {...props}
      >
        {t('connect')}
      </Button>
      <Drawer placement={variant} size={'md'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          h={{ base: '85vh', sm: '100vh' }}
          color={`ton${colorMode}.text`}
          boxShadow={'none'}
          bg={'none'}
          p={4}
        >
          <Flex
            rounded={20}
            bgColor={`ton${colorMode}.box`}
            flexDirection={'column'}
            w={'full'}
            h={'full'}
          >
            <DrawerHeader display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Text>{t('connect wallet')}</Text>
              <IconButton
                onClick={onClose}
                aria-label={t('close wallet connect')}
                icon={<Icon iconType="times" />}
                variant={'unstyled'}
              />
            </DrawerHeader>
            <DrawerBody
              display={'grid'}
              gridTemplateColumns={`1fr 1fr`}
              gridTemplateRows={`1fr 1fr 8fr`}
              gap={16}
            >
              {wallets.map(({ id, name, image }) => {
                return <Card key={id} text={name} src={image} />;
              })}
            </DrawerBody>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
});

ConnectBtn.displayName = 'ConnectBtn';

export { ConnectBtn };
