import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../../types/IUser";


const token = localStorage.getItem("token");

type initialStateType = {
    isLoggedIn: boolean;
    currentUser: IUser;
    isLoading: boolean;
    token: string | null;
    registerSuccess: boolean | null;
    error: string | null;
    loadUserLoading: boolean;
};

const initialState: initialStateType = {
    isLoggedIn: false,
    currentUser: null as unknown as IUser,
    isLoading: false,
    token: token,
    registerSuccess: null,
    error: null,
    loadUserLoading: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        registerSuccess: state => {
            state.isLoading = false;
            state.registerSuccess = true as any;
        },
    },
});

export const {
    registerSuccess
} = userSlice.actions;

export const {reducer: userReducer} =  userSlice;
