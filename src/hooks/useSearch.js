import {useDispatch, useSelector} from "react-redux";
import {
    fetchAllMoviesAsync1,
    searchByTitleAsync1,
    searchUseFiltersAsync1,
    selectSearchCurrentPage, selectSearchType
} from "../app/reducers/searchSlice";
import {selectSearchParam} from "../app/reducers/searchParamSlice";

export default function useSearch(){

    const dispatch = useDispatch();
    const searchType = useSelector(selectSearchType);
    const searchParam  = useSelector(selectSearchParam);
    const searchCurrentPage = useSelector(selectSearchCurrentPage);

    return function (){
        switch (searchType) {
            case "all":
                dispatch(fetchAllMoviesAsync1(searchCurrentPage));
                break;
            case "title":
                dispatch(searchByTitleAsync1({title: searchParam.title,page: searchCurrentPage}));
                break;
            case "filters":
                dispatch(searchUseFiltersAsync1({param: searchParam,page: searchCurrentPage}));
                break;
        }
    }
}
