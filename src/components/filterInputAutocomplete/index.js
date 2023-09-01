import React, {useEffect, useState} from "react";
import styles from "./filterInputAutocompl.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchKeywordsAsync, selectSearchKeyword,
    selectSearchKeywords, setSearchParam
} from "../../app/reducers/searchParamSlice";
import {useCombobox} from "downshift";
import Form from "react-bootstrap/Form";
import useDebounce from "../../hooks/useDebounce";

export default function FilterInputAutocomplete(){

    const openItem = {
        cursor: 'pointer',
        color: '#323f90',
        backgroundColor: '#dfe0ff'
    }

    const dispatch = useDispatch();
    const debounceDispatch = useDebounce(dispatch, 500);
    const keywordList = useSelector(selectSearchKeywords);
    const keywordItem = useSelector(selectSearchKeyword);
    const [selectedItem, setSelectedItem] = useState(keywordItem);

    const stateReducer = React.useCallback((state, actionAndChanges) => {
        const {type, changes} = actionAndChanges

        switch (type) {
            case useCombobox.stateChangeTypes.InputChange:
                debounceDispatch(fetchKeywordsAsync(changes.inputValue));

                return {...changes,}

            case useCombobox.stateChangeTypes.ItemClick:
                return {...changes,}

            case useCombobox.stateChangeTypes.InputBlur:
                return changes.selectedItem ? {...changes,} : {inputValue: " "}

            default:
                return changes
        }
    }, [])

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
            if (!inputValue.trim().length) setSelectedItem(null);
        },
        itemToString(item) {
            return item ? item.name : ''
        },
        selectedItem,
        onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
            setSelectedItem(newSelectedItem);
            dispatch(setSearchParam({keyword: newSelectedItem}))
        },
        stateReducer,
    })

    useEffect(() => {
        if (selectedItem && keywordItem === null) {
            setSelectedItem(null);
        }
    }, [keywordItem])

    return (
        <div className={styles.wrap}>

            <Form.Label htmlFor="inputMovieName" {...getLabelProps()}>Enter the keyword </Form.Label>

            <Form.Control type="text"
                          id="inputMovieName"
                          {...getInputProps({refKey: 'ref'})}
            />

            <ul className={`dropdown-menu ${isOpen ? (styles.menuOpen) : ''}`} {...getMenuProps()} >
                {isOpen &&
                    keywordList.map((item, index) => (
                        <li style={
                            //(keywordItem && item.id === keywordItem.id) ? {...openItem} : {}
                                highlightedIndex === index ? {...openItem} : {}
                            }
                            key={`${item.id}${index}`}
                            {...getItemProps({item, index})}
                        >
                            <span>{item.name}</span>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
