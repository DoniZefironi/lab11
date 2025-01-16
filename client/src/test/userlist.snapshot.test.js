import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../components/userlist'; // Убедитесь, что путь правильный

const users = [
  { surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', position: 'Engineer', email: 'ivan@example.com', phone_number: '123456789', roles: ['USER'] },
  { surname: 'Petrov', name: 'Petr', patronymic: 'Petrovich', position: 'Manager', email: 'petr@example.com', phone_number: '987654321', roles: ['ADMIN'] }
];

const currentUser = { user: { roles: ['ADMIN'] } };

describe('UserList Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <UserList
        users={users}
        currentUser={currentUser}
        handleToggle={jest.fn()}
        openIndex={null}
        setCurrentUserEdit={jest.fn()}
        setShowEditModal={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
