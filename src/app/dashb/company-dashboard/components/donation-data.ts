import { z } from 'zod';

export const CDonation = z
.object({
    donationId : z.string(),
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
    })

export type TCDonation  = z.infer<typeof CDonation>

export const donationDataArray : TCDonation [] = [
    // Existing donations
    {
      donationId: "1",
      product: [
        { pName: "Canned Soup", pQuantity: 50, pExpiration: new Date("2024-06-01") },
        { pName: "Rice", pQuantity: 100, pExpiration: new Date("2025-01-15") },
      ],
      cName: "Community Food Bank",
      cContact: "+1 (555) 123-4567",
      cAddress: "123 Main Street, Cityville, State, ZIP",
      cRep: "Jane Smith",
    },
    {
      donationId: "2",
      product: [
        { pName: "Canned Vegetables", pQuantity: 30, pExpiration: new Date("2024-07-10") },
      ],
      cName: "City Rescue Mission",
      cContact: "+1 (555) 987-6543",
      cAddress: "456 Oak Avenue, Townsville, State, ZIP",
      cRep: "Bob Johnson",
    },
    // Additional donations
    {
      donationId: "3",
      product: [
        { pName: "Pasta", pQuantity: 75, pExpiration: new Date("2024-09-20") },
        { pName: "Canned Fruit", pQuantity: 40, pExpiration: new Date("2024-08-15") },
      ],
      cName: "County Food Pantry",
      cContact: "+1 (555) 876-5432",
      cAddress: "789 Elm Street, Villagetown, State, ZIP",
      cRep: "Susan Davis",
    },
    {
      donationId: "4",
      product: [
        { pName: "Beans", pQuantity: 60, pExpiration: new Date("2024-10-05") },
        { pName: "Peanut Butter", pQuantity: 25, pExpiration: new Date("2024-11-30") },
      ],
      cName: "Neighborly Aid Center",
      cContact: "+1 (555) 234-5678",
      cAddress: "101 Pine Lane, Hamletville, State, ZIP",
      cRep: "John Miller",
    },
    {
      donationId: "5",
      product: [
        { pName: "Oatmeal", pQuantity: 35, pExpiration: new Date("2024-12-10") },
        { pName: "Cereal", pQuantity: 50, pExpiration: new Date("2025-02-28") },
      ],
      cName: "Hopeful Hearts Foundation",
      cContact: "+1 (555) 345-6789",
      cAddress: "202 Maple Avenue, Uptown, State, ZIP",
      cRep: "Emily White",
    },
    {
      donationId: "6",
      product: [
        { pName: "Macaroni and Cheese", pQuantity: 40, pExpiration: new Date("2024-11-15") },
      ],
      cName: "Helping Hands Shelter",
      cContact: "+1 (555) 567-8901",
      cAddress: "303 Cedar Street, Downtown, State, ZIP",
      cRep: "Michael Turner",
    },
    {
      donationId: "7",
      product: [
        { pName: "Canned Meat", pQuantity: 20, pExpiration: new Date("2025-03-01") },
        { pName: "Quinoa", pQuantity: 30, pExpiration: new Date("2024-10-20") },
      ],
      cName: "Unity Outreach Center",
      cContact: "+1 (555) 789-0123",
      cAddress: "404 Birch Road, Suburbia, State, ZIP",
      cRep: "Linda Brown",
    },
    {
      donationId: "8",
      product: [
        { pName: "Granola Bars", pQuantity: 50, pExpiration: new Date("2025-04-15") },
      ],
      cName: "Family Support Services",
      cContact: "+1 (555) 901-2345",
      cAddress: "505 Pine Street, Countryside, State, ZIP",
      cRep: "Mark Wilson",
    },
    {
      donationId: "9",
      product: [
        { pName: "Soup Mix", pQuantity: 25, pExpiration: new Date("2025-05-10") },
        { pName: "Instant Noodles", pQuantity: 40, pExpiration: new Date("2024-12-31") },
      ],
      cName: "Neighbors in Need Organization",
      cContact: "+1 (555) 123-4567",
      cAddress: "606 Cedar Avenue, Suburbville, State, ZIP",
      cRep: "Karen Taylor",
    },
    {
      donationId: "10",
      product: [
        { pName: "Breakfast Bars", pQuantity: 30, pExpiration: new Date("2025-06-20") },
        { pName: "Dried Fruits", pQuantity: 25, pExpiration: new Date("2025-01-01") },
      ],
      cName: "Local Assistance Network",
      cContact: "+1 (555) 987-6543",
      cAddress: "707 Oak Lane, Metropolis, State, ZIP",
      cRep: "Alex Rodriguez",
    },
    // Add more donation objects as needed
  ];
  