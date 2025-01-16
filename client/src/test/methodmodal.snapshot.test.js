import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MethodModal from '../components/methodmodal'; // Убедитесь, что путь правильный

const method = {
  title: '',
  description: '',
  language: '',
  year_create: '',
  date_realese: '',
  quantity_pages: '',
  subjectId: '',
  TypeMethodId: ''
};

describe('MethodModal Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MethodModal
        show={true}
        onHide={jest.fn()}
        method={method}
        handleChange={jest.fn()}
        handleFileChange={jest.fn()}
        handleSave={jest.fn()}
        title="Test Modal"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
