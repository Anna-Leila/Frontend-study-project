function UserInfoInput({name, label, type, placeholder}) {
    return <>
        {/* single user input */}
        <div className="row mb-3"> {/* row with margin3  at the bottom */}
            <label htmlFor={name} className="col-sm-1 col-form-label">{label}</label> {/* label for input field, 1 column */}
            <div className="col-sm-5"> {/* 5 columns */}
                {/* input field for customer information */}
                <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} />
            </div>
        </div>
    </>
}

export default UserInfoInput;