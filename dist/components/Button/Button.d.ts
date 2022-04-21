import { HTMLAttributes, ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends HTMLAttributes<HTMLButtonElement>, Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    solid?: boolean;
    block?: boolean;
    icon?: ReactNode;
    inline?: DefaultProps['spacing'] | 'auto';
}
export default function Button(props: Props): JSX.Element;
//# sourceMappingURL=Button.d.ts.map