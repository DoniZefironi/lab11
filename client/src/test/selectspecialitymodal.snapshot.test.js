import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectSpecialityModal from '../components/selectSpecialityModal'; // Убедитесь, что путь правильный

const specialities = [
  { id: 1, code: '001', qualification: 'Engineer' },
  { id: 2, code: '002', qualification: 'Manager' }
];

describe('SelectSpecialityModal Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <SelectSpecialityModal
        show={true}
        onHide={jest.fn()}
        specialities={specialities}
        onSelectSpeciality={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
