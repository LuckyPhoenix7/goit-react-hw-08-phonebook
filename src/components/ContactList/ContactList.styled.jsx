// import styled from 'styled-components';

// export const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   width: 560px;
//   margin: 20px auto;
// `;

// export const Contact = styled.li`
//   background-color: ${p => p.theme.colors.listItemBg};
//   margin-bottom: 8px;
//   padding: 10px;
//   border-radius: 5px;
// `;

import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 560px;
  margin: 20px auto;
  background-color: ${p => p.theme.colors.background}; // Светлый бежевый
`;

export const Contact = styled.li`
  background-color: ${p => p.theme.colors.primary}; // Пыльная роза
  color: ${p => p.theme.colors.text}; // Темно-коричневый
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.secondaryText}; // Бледно-розовый
`;
