import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode;
    loading?: boolean;
    image?: string;
    imageCTA?: string;
    imageHeight?: string;
    imageTarget?: '_blank' | '_self';
    imageAlt?: string;
    micro?: boolean;
    hover?: boolean;
    theme?: 'default' | 'success' | 'error';
}
export default function Box(props: Props): JSX.Element;
//# sourceMappingURL=Box.d.ts.map