import React, { useEffect, useRef, useState } from 'react';
import { outsideClickAlert } from '../../helpers/HandleClickOutside';
import { FaChevronDown , FaChevronUp } from "react-icons/fa";

const DropdownSelect = ({ options,onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropRef = useRef();
    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsDropdownOpen(false); 
        setSearchTerm('')
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    outsideClickAlert(dropRef , () => {setIsDropdownOpen(false) , setSearchTerm('')})
    return (
        <div className="relative" ref={dropRef}>
            <div className="flex items-center transition-all duration-300 justify-between border border-gray-300 rounded-md px-3 py-2 mb-1 cursor-pointer" onClick={toggleDropdown}>
                <span className='text-gray-800'>{selectedOption ? selectedOption.name : 'Select Category'}</span>          
                    <FaChevronDown className={` text-gray-500 transition-all duration-300 ${isDropdownOpen ? '' : 'rotate-180'}`} /> 
            </div>
            {isDropdownOpen && (
                <div className="absolute p-2 z-10 border overflow-hidden w-full bg-white rounded-md max-h-[390px] overflow-y-auto   shadow-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full border rounded-md  border-gray-300 px-3 py-2 focus:outline-none"
                    />
                    {filteredOptions.length > 0 ? (
                        <div>
                            {filteredOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => handleSelect(option)}
                                    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${selectedOption === option ? 'bg-gray-200' : ''}`}
                                >
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="px-3 py-2 text-gray-500">No options found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DropdownSelect;
