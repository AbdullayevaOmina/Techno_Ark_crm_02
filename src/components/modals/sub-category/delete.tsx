"use client";
import { useSubCategoryStore } from "@store";
import { deleteIcon } from "@global-icons";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteSubCategoryModal({ id }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { deleteSubCategory } = useSubCategoryStore();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      const responseStatus = await deleteSubCategory(id);
      if (responseStatus === 200) {
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Delete category error:", error);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="hover:text-red-600">
        {deleteIcon}
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this sub category?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
