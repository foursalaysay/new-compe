import { z } from 'zod';

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

export interface CIHistory {
    IDataHistory : CHistory []
}

export const CHistoryData : CHistory [] = [
    {
        donationId: "1",
        product: [
            { pName: "Product A", pQuantity: 5, pExpiration: new Date("2024-12-31") },
            { pName: "Product B", pQuantity: 10, pExpiration: new Date("2025-06-30") }
        ],
        oName: "Organization A",
        oContact: "contact@organizationa.com",
        oAddress: "123 Main St, City, Country",
        oRep: "John Doe",
        donationStatus: "Received"
    },
    {
        donationId: "2",
        product: [
            { pName: "Product X", pQuantity: 3, pExpiration: new Date("2023-09-15") },
            { pName: "Product Y", pQuantity: 8, pExpiration: new Date("2024-03-20") }
        ],
        oName: "Organization B",
        oContact: "contact@organizationb.com",
        oAddress: "456 Elm St, Town, Country",
        oRep: "Jane Smith",
        donationStatus: "Processing"
    },
    {
        donationId: "3",
        product: [
            { pName: "Product M", pQuantity: 7, pExpiration: new Date("2025-01-01") },
            { pName: "Product N", pQuantity: 12, pExpiration: new Date("2025-08-31") }
        ],
        oName: "Organization C",
        oContact: "contact@organizationc.com",
        oAddress: "789 Oak St, Village, Country",
        oRep: "Alice Johnson",
        donationStatus: "Pending"
    },
    {
        donationId: "4",
        product: [
            { pName: "Product Q", pQuantity: 10, pExpiration: new Date("2024-05-31") },
            { pName: "Product R", pQuantity: 20, pExpiration: new Date("2025-02-28") }
        ],
        oName: "Organization D",
        oContact: "contact@organizationd.com",
        oAddress: "101 Pine St, Hamlet, Country",
        oRep: "Bob Williams",
        donationStatus: "Shipped"
    },
    {
        donationId: "5",
        product: [
            { pName: "Product S", pQuantity: 4, pExpiration: new Date("2024-10-15") },
            { pName: "Product T", pQuantity: 6, pExpiration: new Date("2025-09-30") }
        ],
        oName: "Organization E",
        oContact: "contact@organizatione.com",
        oAddress: "202 Cedar St, Borough, Country",
        oRep: "Eva Brown",
        donationStatus: "Delivered"
    },
    {
        donationId: "6",
        product: [
            { pName: "Product U", pQuantity: 15, pExpiration: new Date("2025-03-01") },
            { pName: "Product V", pQuantity: 25, pExpiration: new Date("2025-11-30") }
        ],
        oName: "Organization F",
        oContact: "contact@organizationf.com",
        oAddress: "303 Maple St, City, Country",
        oRep: "Frank Lee",
        donationStatus: "Received"
    },
    {
        donationId: "7",
        product: [
            { pName: "Product W", pQuantity: 8, pExpiration: new Date("2025-06-15") },
            { pName: "Product X", pQuantity: 12, pExpiration: new Date("2025-12-31") }
        ],
        oName: "Organization G",
        oContact: "contact@organizationg.com",
        oAddress: "404 Walnut St, Town, Country",
        oRep: "Grace Taylor",
        donationStatus: "Processing"
    },
    {
        donationId: "8",
        product: [
            { pName: "Product Y", pQuantity: 20, pExpiration: new Date("2025-09-01") },
            { pName: "Product Z", pQuantity: 30, pExpiration: new Date("2026-04-30") }
        ],
        oName: "Organization H",
        oContact: "contact@organizationh.com",
        oAddress: "505 Oak St, Village, Country",
        oRep: "Harry Clark",
        donationStatus: "Pending"
    },
    {
        donationId: "9",
        product: [
            { pName: "Product B", pQuantity: 6, pExpiration: new Date("2024-11-15") },
            { pName: "Product C", pQuantity: 8, pExpiration: new Date("2025-10-31") }
        ],
        oName: "Organization I",
        oContact: "contact@organizationi.com",
        oAddress: "606 Elm St, Hamlet, Country",
        oRep: "Isabel Green",
        donationStatus: "Shipped"
    },
    {
        donationId: "10",
        product: [
            { pName: "Product D", pQuantity: 12, pExpiration: new Date("2025-01-01") },
            { pName: "Product E", pQuantity: 15, pExpiration: new Date("2025-08-31") }
        ],
        oName: "Organization J",
        oContact: "contact@organizationj.com",
        oAddress: "707 Pine St, Borough, Country",
        oRep: "Jack White",
        donationStatus: "Delivered"
    },
];
