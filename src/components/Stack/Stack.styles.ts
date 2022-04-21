import { styled } from '../../stitches.config';

export const StackRowStyled = styled('div', {
  '*': {
    boxSizing: 'border-box',
  },
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'row wrap',
  maxWidth: '100%',
  minWidth: '100%',
  width: '100%',
});

export const StackColumnStyled = styled('div', {
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingLeft: '$3',
  paddingRight: '$3',
  width: '100%',
});

export default StackRowStyled;
