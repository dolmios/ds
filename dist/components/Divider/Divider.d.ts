/// <reference types="react" />
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    theme?: 'red' | 'orange' | 'pink' | 'purple' | 'blue';
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
}
export default function Divider(props: Props): JSX.Element;
//# sourceMappingURL=Divider.d.ts.map