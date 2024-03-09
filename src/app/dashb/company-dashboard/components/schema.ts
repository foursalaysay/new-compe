import { z } from 'zod'

export const donationSchema = z
    .object({
        product : z.array(
            z.object({
                pName : z.string(),
                pQuantity : z.number(),
                pExpiration : z.date()
            })
        ),
        cName : z.string(),
        cContact : z.string(),
        cAddress : z.string(),
        cRep : z.string(),

        oName : z.string(),
        oContact : z.string(),
        oAddress : z.string(),
        oRep : z.string()

    })

// --------- DELIVERY  DETAILS -----------

// NOTE: ARRAY OF OBJECTS FOR THE PRODUCT SECTION
// ----- PRODUCT SECTION -----
// PRODUCT NAME
// PRODUCT QUANTITY
// PRODUCT EXPIRATION

// NOTE : DONATOR DETAILS INCLUDED IN DELIVERY DETAILS FOR ORGANIZATION VIEWING


// COMPANY NAME 
// COMPANY ADDRESS
// COMPANY REPRESENTATIVE
// COMPANY CONTACT NUMBER


// NOTE : ORGANIZATION DETAILS IS INCLUDED IN DELIVERY DETAILS FOR COMPANY VIEWING 

// ORGANIZATION NAME
// ORGANIZATION ADDRESS
// ORGANIZATION REPRESENTATIVE
// ORGANIZATION CONTACT NUMBER


