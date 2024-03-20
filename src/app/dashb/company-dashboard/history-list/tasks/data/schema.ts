import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>




export const CHistorySchema = z
.object({
    donationId : z.string(),
    product : z.array(
        z.object({
            pName : z.string(),
            pQuantity : z.number(),
            pExpiration : z.date()
        })
    ),
    oName : z.string(),
    oContact : z.string(),
    oAddress : z.string(),
    oRep : z.string(),
    donationStatus : z.string()
    })

export type CHistory = z.infer<typeof CHistorySchema>