export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address in invalid!";
    }

    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 12) {
        errors.password = "Password must be more that 12 characters";
    }

    if (!values.password2) {
        errors.password2 = "Password confirmation required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match!";
    }

    return errors;
}
