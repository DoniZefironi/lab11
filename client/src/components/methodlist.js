import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FaFileDownload, FaPlus, FaMinus, FaEdit, FaTrash, FaUserPlus, FaUsers, FaClipboardList, FaClipboard } from 'react-icons/fa';

const MethodList = ({ methods, handleToggle, openIndex, handleEdit, handleDelete, currentUser, handleDownload, handleCreateUserMethodological, handleViewUserMethodological, handleCreateSpecialityMethodological, handleViewSpecialityMethodological }) => {
  return (
    <div className="content-box list-box">
      {methods.map((method, index) => (
        <div key={index} className='contentiks'>
          <div className="list-item">
            <div>
              <h6>{method.title}</h6>
              <p>{method.author} ({method.university}, {method.year_create})</p>
            </div>
            <div className='iconochke'>
              <Button data-testid={`toggle-button-${index}`} variant="light" className="plus-button" onClick={() => handleToggle(index)}>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </Button>
              <Button data-testid={`download-button-${index}`} variant="link" onClick={() => handleDownload(method.url)}>
                <FaFileDownload />
              </Button>
              {currentUser.user.roles.includes("ADMIN") && (
                <>
                  <Button data-testid={`edit-button-${index}`} variant="primary" className="mx-2" onClick={() => handleEdit(method)}>
                    <FaEdit />
                  </Button>
                  <Button data-testid={`delete-button-${index}`} variant="danger" onClick={() => handleDelete(method.id)}>
                    <FaTrash />
                  </Button>
                </>
              )}
            </div>
          </div>
          <Collapse in={openIndex === index}>
            <div className="additional-info" data-testid={`details-${index}`}>
              <p>{method.description}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default MethodList;
