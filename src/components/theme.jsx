// import { extendTheme } from '@chakra-ui/react';

// export const theme = extendTheme({
//   breakpoints: {
//     sm: '320px',
//     md: '768px',
//     lg: '960px',
//     xl: '1200px',
//   },

//   components: {
//     Divider: {
//       baseStyle: ({ colorMode }) => ({
//         borderColor: colorMode === 'dark' ? 'teal.700' : 'teal.200',
//       }),
//     },
//     Button: {
//       baseStyle: ({ colorMode }) => ({
//         bg: colorMode === 'dark' ? 'teal.600' : 'teal.200',
//         color: colorMode === 'dark' ? 'white' : 'teal.800',
//         _hover: {
//           bg: colorMode === 'dark' ? 'teal.700' : 'teal.300',
//         },
//       }),
//       variants: {
//         solid: ({ colorMode }) => ({
//           bg: colorMode === 'dark' ? 'teal.600' : 'teal.200',
//           color: colorMode === 'dark' ? 'white' : 'teal.800',
//           _hover: {
//             bg: colorMode === 'dark' ? 'teal.700' : 'teal.300',
//           },
//         }),
//       },
//     },
//     Input: {
//       baseStyle: ({ colorMode }) => ({
//         field: {
//           bg: colorMode === 'dark' ? 'teal.700' : 'white',
//           color: colorMode === 'dark' ? 'white' : 'teal.800',
//         },
//       }),
//     },
//     Heading: {
//       baseStyle: ({ colorMode }) => ({
//         color: colorMode === 'dark' ? 'teal.300' : 'teal.700',
//       }),
//     },
//     Flex: {
//       baseStyle: ({ colorMode }) => ({
//         bg: colorMode === 'dark' ? 'teal.700' : 'teal.50',
//       }),
//     },
//     FormControl: {
//       baseStyle: ({ colorMode }) => ({
//         label: {
//           color: colorMode === 'dark' ? 'teal.300' : 'teal.600',
//         },
//       }),
//     },
//   },
//   styles: {
//     global: props => ({
//       body: {
//         bg: props.colorMode === 'dark' ? 'teal.800' : 'teal.50',
//         color: props.colorMode === 'dark' ? 'teal.50' : 'teal.900',
//       },
//     }),
//   },
// });

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
        borderColor: colorMode === 'dark' ? '#b6a6a6' : '#d5c7bc', // Пыльная роза и Бледно-розовый
      }),
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? '#b6a6a6' : '#d5c7bc', // Пыльная роза и Бледно-розовый
        color: colorMode === 'dark' ? '#f0ebe8' : '#504945', // Светлый бежевый и Темно-коричневый
        _hover: {
          bg: colorMode === 'dark' ? '#c9b2b2' : '#f0ebe8', // Розовато-коричневый и Светлый бежевый
        },
      }),
      variants: {
        solid: ({ colorMode }) => ({
          bg: colorMode === 'dark' ? '#b6a6a6' : '#d5c7bc', // Пыльная роза и Бледно-розовый
          color: colorMode === 'dark' ? '#f0ebe8' : '#504945', // Светлый бежевый и Темно-коричневый
          _hover: {
            bg: colorMode === 'dark' ? '#c9b2b2' : '#f0ebe8', // Розовато-коричневый и Светлый бежевый
          },
        }),
      },
    },
    Input: {
      baseStyle: ({ colorMode }) => ({
        field: {
          bg: colorMode === 'dark' ? '#b6a6a6' : '#f0ebe8', // Пыльная роза и Светлый бежевый
          color: colorMode === 'dark' ? '#f0ebe8' : '#504945', // Светлый бежевый и Темно-коричневый
        },
      }),
    },
    Heading: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === 'dark' ? '#d5c7bc' : '#504945', // Бледно-розовый и Темно-коричневый
      }),
    },
    Flex: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? '#b6a6a6' : '#f0ebe8', // Пыльная роза и Светлый бежевый
      }),
    },
    FormControl: {
      baseStyle: ({ colorMode }) => ({
        label: {
          color: colorMode === 'dark' ? '#d5c7bc' : '#504945', // Бледно-розовый и Темно-коричневый
        },
      }),
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#504945' : '#f0ebe8', // Темно-коричневый и Светлый бежевый
        color: props.colorMode === 'dark' ? '#f0ebe8' : '#504945', // Светлый бежевый и Темно-коричневый
      },
    }),
  },
});
