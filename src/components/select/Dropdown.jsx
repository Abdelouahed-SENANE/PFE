import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const DropDownContainer = styled.div`
    width: 250px;
    margin: 0 auto;
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
`;

const Dropdown = ({ label, children, selected, active }) => {
    const [isOpen, setIsOpen] = useState(active);
    const listRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState(selected);
    const handleSelectOption = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
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
                                {React.Children.map(children, (child) => {
                                    if (React.isValidElement(child)) {
                                        const value = child.props.value; 
                                        return (
                                            <ListItem
                                                key={value}
                                                onClick={() =>
                                                    handleSelectOption(value)
                                                }
                                            >
                                                {child.props.children}
                                            </ListItem>
                                        );
                                    }
                                    return null;
                                })}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
            </div>
        </div>
    );
};

export default Dropdown;
