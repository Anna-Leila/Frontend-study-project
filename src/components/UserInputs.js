import UserInfoInput from "./UserInfoInput"; // import UserInfoInput component

function UserInputs() { // function component with inputs for customer/user information
    return <> {/* return multiple elements */}
        <h4>Customer information:</h4> {/* Customer information headline */}
        <UserInfoInput name = "first-name" label = "First name" type = "text" placeholder = "John" /> {/* Input for first name */}
        <UserInfoInput name = "last-name" label = "Last name" type = "text" placeholder = "Smith" /> {/* Input for last name */}
        <UserInfoInput name = "phone" label = "Phone" type = "tel" placeholder = "+492224123060" /> {/* Input for phone number */}
        <UserInfoInput name = "email" label = "Email" type = "email" placeholder = "johnsmith@gmail.com" /> {/* Input for email */}
        {/* Input for address */}
        <UserInfoInput name = "address" label = "Address" type = "text" placeholder = "Mülheimer Str. 38, 53604 Bad Honnef, Germany" />
    </>
}

export default UserInputs; // expose component UserInput to other files