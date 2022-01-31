import {
  Menu,
  MenuButton,
  IconButton,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  MenuList,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/icon';

const Settings = memo(({ children }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label={t('settings')}
        icon={
          <Icon
            iconType="cog"
            transformOrigin={'50% 50%'}
            transition={'transform 0.3s ease-in-out'}
            transform={`rotate(${isOpen ? 180 : 0}deg)`}
          />
        }
        variant="unstyled"
        color={`ton${colorMode}.accent`}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          w={{ base: '100vw' }}
          bg={'transparent'}
          p={2}
          boxShadow={'none'}
          border={'none'}
          left={'0'}
        >
          {children}
        </ModalContent>
      </Modal>
    </>
  );
});

Settings.displayName = 'Settings';

export { Settings };
