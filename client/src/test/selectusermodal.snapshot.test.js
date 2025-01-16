import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectUserModal from '../components/selectUserModal'; // Убедитесь, что путь правильный

const users = [
  { id: 1, name: 'Ivan', surname: 'Ivanov' },
  { id: 2, name: 'Petr', surname: 'Petrov' }
];

describe('SelectUserModal Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <SelectUserModal
        show={true}
        onHide={jest.fn()}
        users={users}
        onSelectUser={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
