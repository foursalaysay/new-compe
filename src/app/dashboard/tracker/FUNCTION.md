HERE IN THE TRACKER VIEW


BUSINESS OWNER AND ORGANIZATION CAN VIEW THE STATUS OF DELIVERY

export const trackingSchema = z.
    object({
        cSchema : z.
            object({
                cName : z.string(),
                cRep : z.string(),
                cContact : z.string(),
                cAddress : z.string()
            }),
        productSchema : z.array(
            z.object({
                pName : z.string(),
                pQuantity : z.number(),
                pExpiration : z.date()
            })
        ),
        deliveryStatus : z.enum(["Packing", "Ongoing", "Delivered" ]),
        deliveryDocs : z.string({
            "Documentation is required."
        })
    })