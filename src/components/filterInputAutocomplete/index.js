import React, {useEffect, useState} from "react";
import {useCombobox} from "downshift";
import Form from "react-bootstrap/Form";
import style from "./filterInputAutocompl.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchKeywordsAsync, selectSearchKeyword,
    selectSearchKeywords, setSearchParam
} from "../../app/reducers/searchParamSlice";

export default function FilterInputAutocomplete(){

    const dispatch = useDispatch();
    const keywordList = useSelector(selectSearchKeywords);
    const keywordItem = useSelector(selectSearchKeyword)
    const [selectedItem, setSelectedItem] = useState(keywordItem);

    const stateReducer = React.useCallback((state, actionAndChanges) => {
        const {type, changes} = actionAndChanges

        switch (type) {
            case useCombobox.stateChangeTypes.InputChange:
                dispatch(fetchKeywordsAsync(changes.inputValue));
                return {...changes,}

            case useCombobox.stateChangeTypes.ItemClick:
                return {...changes,}

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
        if (keywordItem === null) setSelectedItem(null);
    }, [keywordItem])

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