import React, {useState} from "react";
import {useCombobox} from "downshift";
import Form from "react-bootstrap/Form";
import style from "./filterInputAutocompl.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchKeywordsAsync,
        selectSearchKeywords
} from "../../app/reducers/searchParamSlice";

export default function FilterInputAutocomplete(){

    const dispatch = useDispatch();
    const keywordList = useSelector(selectSearchKeywords);
    const [selectedItem, setSelectedItem] = useState(null);

    const {
        isOpen,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: keywordList,
        onInputValueChange: ({inputValue}) => {
            dispatch(fetchKeywordsAsync(inputValue));
            console.log(keywordList)
        },
        itemToString(item) {
            return item ? item.name : ''
        },
        selectedItem,
        onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
            console.log(selectedItem);
            setSelectedItem(newSelectedItem);
        }

    })

    return (
        <div className={style.wrap}>

            <Form.Label htmlFor="inputMovieName" {...getLabelProps()}>Enter the keyword </Form.Label>


            <Form.Control type="text"
                          id="inputMovieName"
                          {...getInputProps({refKey: 'ref'})}
            />



                <ul className={`dropdown-menu ${isOpen ? (style.menuOpen) : ''}`} {...getMenuProps()} >
                {isOpen &&
                    keywordList.map((item, index) => (
                        <li
                            style={
                                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                            }
                            key={`${item.id}${index}`}
                            {...getItemProps({item, index})}
                        >
                            <span>{item.name}</span>
                            <span >{item.id}</span>
                        </li>
                    ))}
                </ul>

            <p >
                {selectedItem
                    ? `You have selected ${selectedItem.name} by ${selectedItem.id}.`
                    : 'Keyword is not selected!'}
            </p>

        </div>
    )
}

/*

 */