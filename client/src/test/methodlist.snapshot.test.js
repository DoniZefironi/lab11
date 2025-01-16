import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MethodList from '../components/methodlist'; // Убедитесь, что путь правильный

const methods = [
  { id: 1, title: 'Method 1', author: 'Author 1', university: 'University 1', year_create: '2023', description: 'Description 1', url: 'url1.pdf' },
  { id: 2, title: 'Method 2', author: 'Author 2', university: 'University 2', year_create: '2022', description: 'Description 2', url: 'url2.pdf' }
];

const currentUser = { user: { roles: ['ADMIN'] } };

describe('MethodList Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={jest.fn()}
        openIndex={null}
        handleEdit={jest.fn()}
        handleDelete={jest.fn()}
        handleDownload={jest.fn()}
        handleCreateUserMethodological={jest.fn()}
        handleViewUserMethodological={jest.fn()}
        handleCreateSpecialityMethodological={jest.fn()}
        handleViewSpecialityMethodological={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
