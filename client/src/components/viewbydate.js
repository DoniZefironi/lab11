import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const ViewByDate = observer(() => {
  const { syllabus } = useContext(Context);

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    if (selectedYear) {
      syllabus.fetchSyllabusesByYear(selectedYear);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 25 }, (_, i) => currentYear - i);

  return (
    <Form.Select onChange={handleYearChange} defaultValue="">
      <option value="" disabled>Выберите год</option>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </Form.Select>
  );
});

export default ViewByDate;
