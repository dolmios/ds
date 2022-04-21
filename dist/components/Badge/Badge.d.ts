import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    loading?: boolean;
    theme?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green';
    onClick?: any;
    icon?: ReactNode;
    inline?: DefaultProps['spacing'] | 'auto';
}
export default function Badge(props: Props): JSX.Element;
//# sourceMappingURL=Badge.d.ts.map