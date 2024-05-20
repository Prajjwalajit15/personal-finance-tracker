import React from "react";
import Header from "../components/Header";
import SignupSignin from "../components/SignUpSignIn";
function SignUp(){
    return <div>
        <Header/>
        <div className="weapper">
            <SignupSignin/>
        </div>
    </div>
}
export default SignUp