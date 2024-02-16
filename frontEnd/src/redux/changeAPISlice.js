import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    myData: "products?populate=*",
    allProductAPI: "products?populate=*",
    menCategoryAPI: "products?populate=*&filters[category][$eq]=men",
    womenCategoryAPI: "products?populate=*&filters[category][$eq]=women",
    jeweleryCategoryAPI: "products?populate=*&filters[category][$eq]=jewelery",
    electronicCategoryAPI: "products?populate=*&filters[category][$eq]=electronics",
}
export const changeAPISlice = createSlice({
    initialState,
    name: "myDataAPI",
    reducers: {
        // dool al actions 2le bna5odhom export n8yr behom state
        changeAPI: (state, action) => {
            state.myData = action.payload;
        },
    }
  })
// al slice feh gwah 7aga asmha reducer & action
export  const {changeAPI} = changeAPISlice.actions;
// da reducer 2le hn7oto gwa configureStore
export default changeAPISlice.reducer;