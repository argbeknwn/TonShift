import {
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/icon';
import { InputAsset } from '../input/inputAsset';

interface InputLiquidityProps {
  text: string;
}

const InputLiquidity = memo<InputLiquidityProps>(({ text }) => {
  return (
    <InputGroup rounded={8} display={'grid'} gridTemplateColumns={'2fr 3fr'}>
      <InputLeftAddon>
        <Text>{text}</Text>
      </InputLeftAddon>
      <NumberInput w={'full'}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  );
});

const Creator = memo(() => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Grid gap={8} p={4}>
      <Button>{t('connect wallet')}</Button>
      <GridItem>
        <IconButton
          aria-label={t('return to create')}
          icon={<Icon iconType={isOpen ? 'arrow' : 'cog'} transform={`rotate(90deg)`} />}
          onClick={onToggle}
        />
      </GridItem>
      <Grid gap={8} display={isOpen ? 'none' : 'grid'}>
        <Grid alignContent={'center'} gap={4}>
          <InputAsset id="input" />
          <InputAsset id="output" />
        </Grid>
        <Grid templateColumns={'2fr 1fr 1fr 1fr'} alignContent={'center'} gap={4}>
          <Text>{t('fee rate')}</Text>
          <Button>0.1</Button>
          <Button>0.3</Button>
          <IconButton aria-label={t('fee rate')} icon={<Icon iconType="settings" />} />
        </Grid>
      </Grid>
      <GridItem display={isOpen ? 'grid' : 'none'} gap={4}>
        <Grid templateColumns={'2fr 1fr 1fr 1fr'} alignContent={'center'} gap={4}>
          <Text>{t('fee rate')}</Text>
          <Button>0.1</Button>
          <Button>0.3</Button>
          <IconButton aria-label={t('fee rate')} icon={<Icon iconType="settings" />} />
        </Grid>
        <Grid templateColumns={'2fr 1fr 1fr 1fr'} alignContent={'center'} gap={4}>
          <Text>{t('slippage tolerance')}</Text>
          <Button>0.1</Button>
          <Button>0.3</Button>
          <IconButton aria-label={t('slippage tolerance')} icon={<Icon iconType="settings" />} />
        </Grid>
        <Grid alignContent={'center'} gap={4}>
          <Flex justifyContent={'space-between'}>
            <Text>{t('set price')}</Text>
            <Text>{t('set price')}</Text>
          </Flex>
          <InputLiquidity text={t('min price')} />
          <InputLiquidity text={t('max price')} />
        </Grid>
      </GridItem>
    </Grid>
  );
});

Creator.displayName = 'Creator';

export { Creator };
