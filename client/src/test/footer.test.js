import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/footer'; // Убедитесь, что путь правильный

describe('Footer Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct links and images', () => {
    const { getAllByAltText, getByText } = render(<Footer />);

    // Проверка наличия изображений
    const images = getAllByAltText('Report');
    expect(images).toHaveLength(6); // Убедитесь, что у вас 6 изображений с таким alt текстом

    // Проверка наличия ссылок
    expect(getByText('г. Могилев, ул. Ленинская 89, ауд. 322, корпус №2')).toBeInTheDocument();
    expect(getByText('+375-22-629-447')).toBeInTheDocument();
    expect(getByText('poit@bru.by')).toBeInTheDocument();
  });

  it('contains correct href attributes for links', () => {
    const { getAllByAltText } = render(<Footer />);

    // Проверка правильности ссылок
    const images = getAllByAltText('Report');
    expect(images[0].closest('a')).toHaveAttribute('href', 'http://bru.by/');
    expect(images[1].closest('a')).toHaveAttribute('href', 'http://bru.by/content/departments/softinformtechnology');
    expect(images[2].closest('a')).toHaveAttribute('href', 'http://biblio.bru.by/');
    expect(images[3].closest('a')).toHaveAttribute('href', 'https://maps.google.com?q=г.+Могилев,+ул.+Ленинская+89,+ауд.+322,+корпус+№2');
    expect(images[4].closest('a')).toHaveAttribute('href', 'tel:+37522629447');
    expect(images[5].closest('a')).toHaveAttribute('href', 'mailto:poit@bru.by');
  });
});
