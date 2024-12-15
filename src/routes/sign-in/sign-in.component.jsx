import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // Create logGoogleUser function
    const logGoogleUser = async () => { 
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>I'm the sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn;