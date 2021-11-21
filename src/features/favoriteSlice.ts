import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
  name: string;
  id: string;
  image: string;
  gender: string;
  species: string;
  episode: Episode[]
};

interface Episode {
  episode: string
};

interface characterObject {
  value: Character[]
};

const initialState: characterObject = {
  value: []
};


export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavObject: (state, action: PayloadAction<Character>) => {

      state.value.push(action.payload);
    },
    removeFavObject:(state, action: PayloadAction<Character>) => {
      // here I need to do some logic of removing object by id or something else
    }
  }
})

export default favoritesSlice.reducer

export const {addFavObject,removeFavObject} = favoritesSlice.actions