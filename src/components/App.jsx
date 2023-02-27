import { Container, Wrapper } from './App.styled';
import { Title } from './Title';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectState } from 'redux/selectors';
import { TailSpin } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectState);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [fetchContacts]);

  return (
    <Container>
      <Title text="Phonebook" />
      <ContactForm />
      <Title text="Contacts" />
      <Filter />
      <ContactList>
        {isLoading && (
          <Wrapper>
            <TailSpin
              height="20"
              width="20"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            Loading...
          </Wrapper>
        )}
        {error && <strong>{error}</strong>}
      </ContactList>
    </Container>
  );
};
