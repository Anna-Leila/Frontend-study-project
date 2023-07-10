import UserInfoInput from "./UserInfoInput";

function UserInputs() {
    return <>
        <h4>Customer information:</h4> {/* Customer information headline */}
        <UserInfoInput name = "firstname" label = "First name" type = "text" placeholder = "John" />
        <UserInfoInput name = "lastName" label = "Last name" type = "text" placeholder = "Smith" />
        <UserInfoInput name = "phone" label = "Phone" type = "tel" placeholder = "+492224123060" />
        <UserInfoInput name = "email" label = "Email" type = "email" placeholder = "johnsmith@gmail.com" />
        <UserInfoInput name = "address" label = "Address" type = "text" placeholder = "Mülheimer Str. 38, 53604 Bad Honnef, Germany" />
    </>
}

export default UserInputs;