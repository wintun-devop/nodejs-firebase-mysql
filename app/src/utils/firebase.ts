import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./firebaseClient";


export const signInUser = async (
    email: string,
    password: string
): Promise<UserCredential> => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential;
    } catch (error: any) {
        throw new Error(error.message || "Failed to sign in");
    }
}