// import styled from 'styled-components';

// export const FilterContainer = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   width: 300px;
// `;

// export const FilterInput = styled.input`
//   padding: 8px;
//   margin-top: 5px;
// `;

import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  background-color: ${p => p.theme.colors.background}; // Светлый бежевый
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid ${p => p.theme.colors.secondaryText}; // Бледно-розовый
  border-radius: 4px;
  color: ${p => p.theme.colors.primaryText}; // Темно-коричневый
  background-color: ${p => p.theme.colors.background}; // Светлый бежевый
`;
