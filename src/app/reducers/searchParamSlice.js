import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getKeywordForSearch1} from "../movieSearchAPI";


const initialState = {
    data: {
        title: null,
        keyword: null,
        keywords: [],
        selectKeyword: null,
        genres: [],
        sortBy: "vote_average.desc"
    },
    status: 'idle'
}

export const fetchKeywordsAsync = createAsyncThunk(
    "searchParam/fetchKeywordsAsync",
    async function(keyword){
        let response = await getKeywordForSearch1(keyword);
        //console.log(response);
        if (response.total_results) return response.results;
        else throw new Error("Nothing found for this  keyword.");
    }
)

export const searchParamSlice = createSlice({
    name: "searchParam",
    initialState,
    reducers: {
        setSearchParam(state,action){
            let data = action.payload;
            if (data.title) state.data.title = data.title;
            if (data.keyword) state.data.keyword = data.keyword;
            if (data.genres) state.data.genres.push(data.genres);
            if (data.sortBy) state.data.sortBy = data.sortBy;
        },
        removeSearchGenres(state, action){
            let index = state.data.genres.indexOf(action.payload);
            state.data.genres.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchKeywordsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchKeywordsAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                state.data.keywords = action.payload;
            })
            .addCase(fetchKeywordsAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const {setSearchParam, removeSearchGenres} = searchParamSlice.actions;

export const selectSearchParam = (state) => state.searchParam.data;
export const selectSearchKeywords = (state) => state.searchParam.data.keywords;

export default searchParamSlice.reducer;