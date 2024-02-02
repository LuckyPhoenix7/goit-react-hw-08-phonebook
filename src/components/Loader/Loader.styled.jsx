// import styled from 'styled-components';

// export const LoaderContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; // Full viewport height
  background-color: ${p =>
    p.theme.colors.background}; // Use the background color from the theme
`;
