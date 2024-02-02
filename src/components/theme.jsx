import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },

  components: {
    Divider: {
      baseStyle: ({ colorMode }) => ({
        borderColor: colorMode === 'dark' ? 'teal.700' : 'teal.200',
      }),
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'teal.600' : 'teal.200',
        color: colorMode === 'dark' ? 'white' : 'teal.800',
        _hover: {
          bg: colorMode === 'dark' ? 'teal.700' : 'teal.300',
        },
      }),
      variants: {
        solid: ({ colorMode }) => ({
          bg: colorMode === 'dark' ? 'teal.600' : 'teal.200',
          color: colorMode === 'dark' ? 'white' : 'teal.800',
          _hover: {
            bg: colorMode === 'dark' ? 'teal.700' : 'teal.300',
          },
        }),
      },
    },
    Input: {
      baseStyle: ({ colorMode }) => ({
        field: {
          bg: colorMode === 'dark' ? 'teal.700' : 'white',
          color: colorMode === 'dark' ? 'white' : 'teal.800',
        },
      }),
    },
    Heading: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? 'teal.300' : 'teal.700',
      }),
    },
    Flex: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'teal.700' : 'teal.50',
      }),
    },
    FormControl: {
      baseStyle: ({ colorMode }) => ({
        label: {
          color: colorMode === 'dark' ? 'teal.300' : 'teal.600',
        },
      }),
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? 'teal.800' : 'teal.50',
        color: props.colorMode === 'dark' ? 'teal.50' : 'teal.900',
      },
    }),
  },
});
