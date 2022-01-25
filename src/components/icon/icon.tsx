import { Icon as IconChakra, IconProps } from '@chakra-ui/icons';
import { memo } from 'react';
import { icons } from './iconPaths';

interface IconCustomProps extends IconProps {
  iconType: keyof typeof icons;
}

const Icon = memo<IconCustomProps>(({ iconType = 'toncoin', ...props }) => {
  return (
    <IconChakra width="6" height="6" viewBox="0 0 24 24" fill="none" {...props}>
      {icons[iconType]}
    </IconChakra>
  );
});

Icon.displayName = 'Icon';

export { Icon };
