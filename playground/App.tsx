import { ReactElement } from 'react';
import toast from 'react-hot-toast';

import { Box, Provider, Stack, Text, View, Button, Input } from '../src/index';

export function App(): ReactElement {
  return (
    <Provider>
      <View top='6' bottom='6'>
        <Stack direction='row' flex='center'>
          <Stack direction='column' width={50}>
            <Text as='h1'>Hello world</Text>
            <Text as='h1' top='2'>
              Hello world
            </Text>
            <Text as='h1'>Hello world</Text>
          </Stack>
          <Stack direction='column' width={50}>
            <Box>
              <Button onClick={(): string => toast('yo')}>hey</Button>
            </Box>
          </Stack>
        </Stack>
        <Stack direction='row' top='8'>
          <Stack direction='column'>
            <Input />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
