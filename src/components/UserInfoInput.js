// reusable function component for a single user input
// accepts parameters id/name of input field, label to print out, type of input field and placeholder text
function UserInfoInput({name, label, type, placeholder}) {
    return <div className="row mb-3"> {/* row with margin3  at the bottom */}
        <label htmlFor={name} className="col-sm-1 col-form-label">{label}</label> {/* label for input field, 1 column */}
        <div className="col-sm-5"> {/* 5 columns */}
            {/* input field for customer information, input should not be empty */}
            <input required type={type} className="form-control" id={name} name={name} placeholder={placeholder} />
        </div>
    </div>
}

export default UserInfoInput; // export UserInfoInput component as default