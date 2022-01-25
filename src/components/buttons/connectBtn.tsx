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
  const variant = useBreakpointValue({ base: 'bottom', sm: 'right' }) as DrawerPlacement;

  return (
    <>
      <Button
        onClick={onToggle}
        rounded={20}
        p={4}
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
          rounded={{ base: '20px 20px 0 0', sm: '20px 0 0 20px' }}
          color={`ton${colorMode}.text`}
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
            {wallets.map(({ id, name }) => {
              return <Card key={id} text={name} />;
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

ConnectBtn.displayName = 'ConnectBtn';

export { ConnectBtn };
