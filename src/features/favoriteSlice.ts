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
    }
  }
})

export default favoritesSlice.reducer

export const {addFavObject} = favoritesSlice.actions