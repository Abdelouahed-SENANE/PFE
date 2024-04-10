import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const DropDownContainer = styled.div`
    width: 100%;
`;

const DropDownHeader = styled.div`
    padding: 8px 14px;
    border: 2px solid #eee;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    cursor: pointer;
    border-radius: 8px;
    background: #ffffff;
`;

const DropDownListContainer = styled.div`
    position: relative;
`;

const DropDownList = styled.ul`
    margin: 0;
    border-radius: 8px;
    position: absolute;
    left: 0;
    padding: 8px;
    width: 100%;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 15px;
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background: #eee;
    }
    ${(props) =>
        props.isSelected &&
        `
      background-color: #eee;
    `}
`;

const DropdownSearch = ({ label, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("Select Category");
    const [searchInput, setSearchInput] = useState("");
    const [filterdData, setFilterdData] = useState(data);

    // Filter Array
    const handleKeyUp = (e) => {
        const value = e.target.value.trim().toLowerCase(); // Trim and convert to lowercase
        const updateFilter = data.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        setFilterdData(updateFilter);
    };
    const handleSelectOption = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        setSearchInput("");
        setFilterdData(data);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (listRef.current && !listRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [listRef]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {label && <h1>{label}</h1>}
            <div>
                <DropDownContainer>
                    <DropDownHeader onClick={toggleDropdown}>
                        {selectedValue}
                        {isOpen ? (
                            <IoChevronUp className="transition-all duration-300" />
                        ) : (
                            <IoChevronDown className="transition-all duration-300" />
                        )}
                    </DropDownHeader>
                    {isOpen && (
                        <DropDownListContainer ref={listRef}>
                            <DropDownList>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onKeyUp={handleKeyUp}
                                    value={searchInput}
                                    onChange={(e) =>
                                        setSearchInput(e.target.value)
                                    }
                                    className="py-[10px] px-[20px] w-full outline-none rounded border-2"
                                />

                                {filterdData.length > 0 ? (
                                    filterdData.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            className={`${item.name === selectedValue ? 'bg-gray-100' : ''}`}
                                            onClick={() =>
                                                handleSelectOption(item.name)
                                            }
                                        >
                                            {item.name}
                                        </ListItem>
                                    ))
                                ) : (
                                    <div className="px-2 py-2 text-gray-500">No results found</div>
                                )}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
            </div>
        </div>
    );
};

export default DropdownSearch;
