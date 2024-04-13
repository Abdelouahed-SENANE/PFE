import React, { useEffect } from "react";
import { deleteGig } from "../../data/gigs/GigService";

const Modal = ({ isModal = false, setIsModal, id, getAllMyGigs , setDeletionMessage}) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const result = await deleteGig(id);
            console.log(result);
            if (result.status === 200) {
                setDeletionMessage(result.data.message)
            }
            getAllMyGigs();
            setTimeout(() => {
                setDeletionMessage('')

            }, 3000);
        } catch (error) {
            console.log(error);
        }
        setIsModal(!isModal);
    };

    return (
        <div
            className={`absolute top-0 ${
                isModal ? "block" : "hidden"
            }   left-0  right-0 z-50 w-full h-full`}
        >
            <div
                className="bg-slate-200/40 absolute z-40 inset-0 w-full h-full"
                onClick={setIsModal}
            ></div>
            <div className="w-full h-full relative flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-[600px] z-50 absolute left-[50%] translate-x-[-50%] top-[30%] translate-y-[-50%]">
                    <h2 className="text-xl">
                        Are you sure you want to delete your account?
                    </h2>
                    <p className="text-sm mb-5 mt-2 text-gray-600 ">
                        Are you sure you want to delete your gig? This action
                        cannot be undone.
                    </p>
                    <div className="flex items-center  gap-1">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500/90 text-white text-sm px-5 py-2 rounded-full hover:bg-red-500 transition-all duration-300"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsModal(!isModal);
                            }}
                            className="bg-gray-200/90 text-gray-900 text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
