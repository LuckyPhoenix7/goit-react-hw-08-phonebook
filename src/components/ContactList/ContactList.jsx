import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { Box, VStack } from '@chakra-ui/react';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = useSelector(selectVisibleContacts);
  return (
    <Box>
      {isLoading && <Loader />}

      <VStack spacing={4} align="stretch">
        {filteredContacts.map(contact => (
          <Box
            key={contact.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="base"
          >
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
