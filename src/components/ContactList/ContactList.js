import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { List, Text, Button, Item } from './ContactList.styled';

export const ContactList = props => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {props.children}
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <Button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
