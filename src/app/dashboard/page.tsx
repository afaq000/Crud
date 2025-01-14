"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { Input } from "postcss";

function page() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [editData, setEditData] = useState<{ name: string, fatherName: string }>({ name: '', fatherName: '' });

  const tableData = [
    { id: 1, rollNo: "1", name: "Afaq Hussain", fatherName: "Iltaf Hussain" },
  ];

  const handleDelete = (id: number) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (id: number, name: string, fatherName: string) => {
    setSelectedId(id);
    setEditData({ name, fatherName });
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const closeAddModal = () => {
    setIsAddEditModalOpen(false);
  };

  const confirmDelete = () => {
    alert(`Deleted record with ID: ${selectedId}`);
    setIsDeleteModalOpen(false);
  };

  const handleEditSubmit = () => {
    alert(`Updated record with ID: ${selectedId}`);
    setIsEditModalOpen(false);
  };

  const handleAdd = () => {
    setIsAddEditModalOpen(true);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(Input,"inputttt")
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-gray-200 bg-gray-900">
      <h1 className="text-4xl font-semibold text-white mb-6">Data Management</h1>

      <div className="flex justify-end w-full mb-6 px-6">
        <button
          className="bg-gradient-to-r from-yellow-500 to-yellow-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-200"
          onClick={handleAdd}
        >
          Add New Record
        </button>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="table-auto w-full">
          <thead className="bg-gradient-to-r from-yellow-500 to-yellow-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Roll No</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Father Name</th>
              <th className="py-3 px-4 text-center">Edit</th>
              <th className="py-3 px-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{data.rollNo}</td>
                <td className="py-3 px-4">{data.name}</td>
                <td className="py-3 px-4">{data.fatherName}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-gradient-to-r from-green-500 to-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                    onClick={() => handleEdit(data.id, data.name, data.fatherName)}
                  >
                    Edit
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-gradient-to-r from-red-500 to-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isDeleteModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-semibold text-gray-800">Are you sure you want to delete this record?</h2>
        <div className="mt-6 flex justify-end">
          <button
            onClick={confirmDelete}
            className="bg-gradient-to-r from-red-500 to-red-900 text-white px-6 py-3 rounded-lg mr-3 hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-gray-500 to-gray-900  text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <h2 className="text-2xl font-semibold text-gray-800">Edit Record</h2>
        <div className="mt-6">
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            value={editData.fatherName}
            onChange={(e) => setEditData({ ...editData, fatherName: e.target.value })}
            placeholder="Father's Name"
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleEditSubmit}
              className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-6 py-3 rounded-lg mr-3 hover:bg-teal-700 transition duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={closeEditModal}
              className="bg-gradient-to-r from-gray-500 to-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isAddModalOpen} onClose={closeAddModal}>
        <h2 className="text-2xl font-semibold text-gray-800">Add New Record</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            value={editData.fatherName}
            onChange={(e) => setEditData({ ...editData, fatherName: e.target.value })}
            placeholder="Father's Name"
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleEditSubmit}
              className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-6 py-3 rounded-lg mr-3 hover:bg-teal-700 transition duration-200"
            >
              Save Record
            </button>
            <button
              onClick={closeAddModal}
              className="bg-gradient-to-r from-gray-500 to-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default page;
