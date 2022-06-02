import {AppDispatch} from "../store";
import {post} from "../../services/crud";
import {registerSuccess} from "./userSlice";
import {IRegisterForm} from "../../types/IUser";

export const registerUserAction = (user: IRegisterForm) => async (dispatch: AppDispatch) => {
    try {
        const answer = await post("/register", user);
        console.log("---post---answer---", answer)
        dispatch(registerSuccess());
    } catch (err: any) {
        console.log("---post---error---", err)
    }
};



