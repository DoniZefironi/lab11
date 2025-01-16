import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Подключение методов для проверки видимости
import MethodList from '../components/methodlist'; // Убедитесь, что путь правильный

const methods = [
  { id: 1, title: 'Method 1', author: 'Author 1', university: 'University 1', year_create: '2023', description: 'Description 1', url: 'url1.pdf' },
  { id: 2, title: 'Method 2', author: 'Author 2', university: 'University 2', year_create: '2022', description: 'Description 2', url: 'url2.pdf' }
];

const currentUser = { user: { roles: ['ADMIN'] } };

const handleToggle = jest.fn();
const handleEdit = jest.fn();
const handleDelete = jest.fn();
const handleDownload = jest.fn();
const handleCreateUserMethodological = jest.fn();
const handleViewUserMethodological = jest.fn();
const handleCreateSpecialityMethodological = jest.fn();
const handleViewSpecialityMethodological = jest.fn();

describe('MethodList Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct method information', () => {
    const { getByText, queryByText } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Проверка наличия методов
    expect(getByText('Method 1')).toBeInTheDocument();
    expect(getByText('Author 1 (University 1, 2023)')).toBeInTheDocument();
    expect(getByText('Method 2')).toBeInTheDocument();
    expect(getByText('Author 2 (University 2, 2022)')).toBeInTheDocument();

    // Проверка наличия кнопок
    expect(queryByText('No methods available')).not.toBeInTheDocument();
  });

  it('handles toggle correctly', () => {
    const { getByTestId } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Проверка вызова handleToggle
    const toggleButton = getByTestId('toggle-button-1');
    fireEvent.click(toggleButton); // Нажимаем на кнопку toggle для второго метода
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  it('shows and hides additional information on toggle', async () => {
    const { queryByTestId, rerender } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={-1}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Проверка начального состояния
    let element = queryByTestId('details-0');
    expect(element).toHaveClass('collapse');
    expect(element).not.toHaveClass('show');

    // Обновляем рендеринг компонента с openIndex = 0
    rerender(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={0}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Ожидаем завершения анимации
    await waitFor(() => {
      expect(element).toHaveClass('collapse show');
    });

    // Скрываем информацию снова
    rerender(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={-1}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Ожидаем завершения анимации
    await waitFor(() => {
      expect(element).toHaveClass('collapse');
      expect(element).not.toHaveClass('show');
    });
  });

  it('handles download correctly', () => {
    const { getByTestId } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Проверка вызова handleDownload
    const downloadButton = getByTestId('download-button-0');
    fireEvent.click(downloadButton);
    expect(handleDownload).toHaveBeenCalledWith('url1.pdf');
  });

  it('handles edit and delete correctly', () => {
    const { getByTestId } = render(
      <MethodList
        methods={methods}
        currentUser={currentUser}
        handleToggle={handleToggle}
        openIndex={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
        handleCreateUserMethodological={handleCreateUserMethodological}
        handleViewUserMethodological={handleViewUserMethodological}
        handleCreateSpecialityMethodological={handleCreateSpecialityMethodological}
        handleViewSpecialityMethodological={handleViewSpecialityMethodological}
      />
    );

    // Проверка вызова handleEdit
    const editButton = getByTestId('edit-button-0');
    fireEvent.click(editButton);
    expect(handleEdit).toHaveBeenCalledWith(methods[0]);

    // Проверка вызова handleDelete
    const deleteButton = getByTestId('delete-button-0');
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
