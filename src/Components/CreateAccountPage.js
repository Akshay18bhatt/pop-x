import React, { useReducer } from "react";




const initialValue = {

    myName: null,
    myPhone: null,
    myEmail: null,
    myPass: null,
    myCompany: null,
    agency: null
}
const actionTypes = {
    UPDATE_FORM: "UPDATE_FORM",
}

function reducer(state, action) {

    switch (action.type) {
        case actionTypes.UPDATE_FORM: {
            state = {
                ...state, [action.payload.name]: action.payload.value,
            }
            console.log(state);
            return state;
        }
    }
}

const CreateAccountPage = () => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <div className="createAccount-page container">

            <div>
                <h1>Create your<br />PopX account</h1>
            </div>
            <form className="creat-account-form">
                <fieldset>
                    <legend>Full Name<span>*</span></legend>
                    <input
                        type="text"
                        name="myName"
                        onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM, payload: { name: e.target.name, value: e.target.value } })}
                        placeholder="Enter your full name" />
                </fieldset>
                <fieldset>
                    <legend>Phone Number<span>*</span></legend>
                    <input 
                        type="number" 
                        name="myPhone"
                        onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })} 
                        placeholder="Enter your phone number" />
                </fieldset>
                <fieldset>
                    <legend>Email Address<span>*</span></legend>
                    <input 
                        type="email" 
                        name="myEmail"
                        onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })} 
                        placeholder="Enter your email" />
                </fieldset>
                <fieldset>
                    <legend>Password<span>*</span></legend>
                    <input 
                        type="password" 
                        name="myPass" 
                        onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })}
                        placeholder="Create new password" />
                </fieldset>
                <fieldset>
                    <legend>Company Name<span>*</span></legend>
                    <input 
                        type="text" 
                        name="myCompany" 
                        onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })}
                        placeholder="Enter company name" />
                </fieldset>
                <fieldset>
                    <legend>Are you an Agency?<span>*</span></legend>
                    <div>
                        <input 
                            type="radio" 
                            id="yes" 
                            name="agency"
                            value="Yes" 
                            onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })}
                            placeholder="Enter your full name" />
                        <label htmlFor="yes" >Yes</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="no"
                            value="No" 
                            name="agency" 
                            onChange={(e) => dispatch({ type: actionTypes.UPDATE_FORM,payload:{name:e.target.name , value:e.target.value} })}
                            placeholder="Enter your full name" />
                        <label htmlFor="no" >No</label>
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default CreateAccountPage