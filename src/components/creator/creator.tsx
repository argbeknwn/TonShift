import {
  Avatar,
  AvatarGroup,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useNumberInput,
} from '@chakra-ui/react';
import { memo, PropsWithChildren, ReactNode, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoreon } from 'storeon/react';
import { Icon } from '../icon/icon';
import { InputAsset } from '../input/inputAsset';

interface InputLiquidityProps {
  text: string;
}

const InputLiquidity = memo<InputLiquidityProps>(({ text }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 0.1,
    defaultValue: 1,
    min: 1,
    max: 1000000,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Grid gridTemplateColumns={'1fr 2fr'} alignItems={'center'}>
      <Text>{text}</Text>
      <Flex>
        <Button {...dec} variant={'unstyled'}>
          -
        </Button>
        <Input {...input} />
        <Button {...inc} variant={'unstyled'}>
          +
        </Button>
      </Flex>
    </Grid>
  );
});

interface CreatorSettings {
  text: 'fee rate' | 'slippage tolerance';
  sm: number;
  md: number;
}

const CreatorSettings = memo<CreatorSettings>(({ text, sm, md }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const [value, setValue] = useState(sm);
  const handleChange = (value: number) => setValue(value);

  return (
    <>
      <Grid
        templateColumns={'2fr 1fr 1fr 1fr'}
        alignContent={'center'}
        alignItems={'center'}
        gap={4}
      >
        <Text>{t(text)}</Text>
        <Button
          onClick={() => handleChange(sm)}
          variant={'unstyled'}
          border={'1px'}
          h={12}
          p={2}
          borderRadius={20}
          borderColor={`ton${colorMode}.buttons`}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: `ton${colorMode}.buttons` }}
          _active={{ bg: `ton${colorMode}.buttons` }}
        >
          {sm}
        </Button>
        <Button
          onClick={() => handleChange(md)}
          variant={'unstyled'}
          border={'1px'}
          h={12}
          p={2}
          borderRadius={20}
          borderColor={`ton${colorMode}.buttons`}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: `ton${colorMode}.buttons` }}
          _active={{ bg: `ton${colorMode}.buttons` }}
        >
          {md}
        </Button>
        <IconButton
          aria-label={t(text)}
          icon={<Icon iconType="settings" />}
          variant={'unstyled'}
          border={'1px'}
          h={12}
          p={2}
          borderRadius={20}
          borderColor={`ton${colorMode}.buttons`}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: `ton${colorMode}.buttons` }}
          _active={{ bg: `ton${colorMode}.buttons` }}
        />
      </Grid>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
        defaultValue={0.1}
        step={0.1}
        min={0}
        max={1}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          fontSize="sm"
          boxSize="32px"
          children={value}
          color={`ton${colorMode}.white`}
          bg={`ton${colorMode}.accent`}
        />
      </Slider>
    </>
  );
});

const CreatorPrice = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const { input, output } = useStoreon('input', 'output');

  if (!input || !output) return null;

  return (
    <Grid alignContent={'center'} gap={4}>
      <Flex justifyContent={'space-between'}>
        <Text>{t('set price')}</Text>
        <Text
          textTransform={'uppercase'}
          fontWeight={'bold'}
        >{`${input.symbol}/${output.symbol}`}</Text>
        <AvatarGroup size="sm" max={2}>
          <Avatar
            borderRadius="full"
            src={input.image}
            alt={'image'}
            icon={<Icon iconType="toncoin" />}
            color={`ton${colorMode}.text`}
          />
          <Avatar
            borderRadius="full"
            src={output.image}
            alt={'image'}
            icon={<Icon iconType="toncoin" />}
            color={`ton${colorMode}.text`}
          />
        </AvatarGroup>
      </Flex>
      <InputLiquidity text={t('min price')} />
      <InputLiquidity text={t('max price')} />
    </Grid>
  );
});

interface CreatorProps {
  empty?: boolean;
  children?: ReactNode | undefined;
}

const Creator = memo<CreatorProps>(({ empty, children }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const { dispatch } = useStoreon();

  const variant: 'bottom' | 'right' | undefined = useBreakpointValue({
    base: 'bottom',
    sm: 'right',
  });

  const size = useBreakpointValue({ base: 'full', sm: 'sm' });

  const handleAddPool = () => {
    dispatch('addPool');
  };

  const handleClose = useCallback(() => {
    onClose();
  }, []);

  return (
    <>
      <Flex
        w={'50%'}
        gap={8}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        {children}
        <Button
          rounded={20}
          w={'full'}
          bg={`ton${colorMode}.${empty ? 'buttons' : 'hidden'}`}
          onClick={onOpen}
          fontSize={{ sm: 'lg' }}
          color={`ton${colorMode}.${empty ? 'white' : 'accent'}`}
          textTransform={'capitalize'}
          variant={'unstyled'}
          _hover={{
            boxShadow: 'none',
            color: `ton${colorMode}.${empty ? 'white' : 'accent'}`,
            bg: `ton${colorMode}.${empty ? 'accent' : 'hidden'}`,
          }}
          _focus={{ boxShadow: 'none' }}
          transition={'color 0.3s ease-in-out bg 0.3s ease-in-out'}
        >
          {t('add liquidity')}
        </Button>
      </Flex>
      <Drawer placement={variant} size={size} onClose={handleClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent
          h={{ base: '100vh' }}
          color={`ton${colorMode}.text`}
          bgGradient={{
            base: `linear(to-t, ton${colorMode}.gradientFrom, ton${colorMode}.gradientTo)`,
            sm: 'none',
          }}
          boxShadow={'none'}
          bg={'none'}
          p={4}
        >
          <Flex flexDirection={'column'} h="full" bgColor={`ton${colorMode}.box`} borderRadius={20}>
            <DrawerHeader
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              rounded={20}
              gap={4}
            >
              <IconButton
                aria-label={t('return to create')}
                icon={<Icon iconType={!isOpen ? 'arrow' : 'cog'} transform={`rotate(90deg)`} />}
                onClick={onToggle}
              />
              <IconButton
                onClick={onClose}
                aria-label={t('close wallet connect')}
                icon={<Icon iconType="times" />}
                variant={'unstyled'}
              />
            </DrawerHeader>
            <Grid gap={8} p={4}>
              <Grid gap={8}>
                <Grid alignContent={'center'} gap={4}>
                  <InputAsset id="input" boxProps={{ p: { base: 2, sm: 4 } }} />
                  <InputAsset id="output" boxProps={{ p: { base: 2, sm: 4 } }} />
                </Grid>
              </Grid>
              <GridItem textTransform={'capitalize'} display={isOpen ? 'grid' : 'none'} gap={6}>
                <CreatorSettings text="fee rate" sm={0.1} md={0.3} />
                <CreatorSettings text="slippage tolerance" sm={0.3} md={0.5} />
                <CreatorPrice />
              </GridItem>
              <Button
                onClick={handleAddPool}
                size={'lg'}
                rounded={20}
                p={8}
                bgColor={`ton${colorMode}.buttons`}
                textTransform={'capitalize'}
                fontSize={{ sm: 'lg' }}
                color={`ton${colorMode}.white`}
                _focus={{ boxShadow: 'none' }}
                _hover={{ bgColor: `ton${colorMode}.accent` }}
                _active={{ bgColor: 'none' }}
                transition={'background 0.3s ease-in-out ,color 0.3s ease-in-out'}
              >
                {t('add liquidity')}
              </Button>
            </Grid>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
});

Creator.displayName = 'Creator';

export { Creator };
