import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecialityMethodologicalModal from '../components/specialityMethodologicalModal'; // Убедитесь, что путь правильный

const specialityMethodologicals = [
  {
    id: 1,
    Speciality: { code: '001' },
    Methodological_rec: { title: 'Methodology 1' }
  },
  {
    id: 2,
    Speciality: { code: '002' },
    Methodological_rec: { title: 'Methodology 2' }
  }
];

describe('SpecialityMethodologicalModal Snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <SpecialityMethodologicalModal
        show={true}
        onHide={jest.fn()}
        specialityMethodologicals={specialityMethodologicals}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
