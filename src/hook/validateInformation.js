export default function validateInformation (values){
    let errors ={}

    if (!values.username.trim()){
        errors.username = "username required"; 
    }

    // for email
    if (!values.email){
        errors.email = "email required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email adress is invalid"

    }

    //for password
    if(!values.password){
        errors.password = "password is required"
    }
    else if(values.password.lenght < 8){
        errors.password = "password need to be 8 character or more"
    }

    //for password confirmation
    if(!values.password2){
        errors.password2 = "password is required"
    }
    else if(values.password2 != values.password){
        errors.password2 = "password does not match"
    }

  return errors; 
}