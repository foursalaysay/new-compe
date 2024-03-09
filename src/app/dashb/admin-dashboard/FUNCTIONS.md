FUNCTION FOR ADMIN DASHBOARD

HAS VIEWS OF LIST OF ALL COMPANY AND ORGANIZAION FOR VERIFICATION PURPOSES



SCHEMA

- COMPANY DETAILS
- ORGANIZATION DETAILS

- ADMIN CHECKER DETAILS
SCHEMA DETAILS
--------------------------------------
export const checkerSchema = z.
    .object({
        checkerName :  z.string({
            150, "fullname is required."
        }),
        checkerCNumber : z.string(),
        checkerAddress : z.string({
            "Address is required"
        }),
        checkerDocs : z.string()
    })

THERE IS A BUTTON IN CHECKING THE VALIDITY OF THE ORGANIZATION OR A COMPANY AND DOCUMENTATION IS ALSO REQUIRED



