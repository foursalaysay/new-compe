export interface CompanyData {
    id : number,
    image: string;
    company_name: string;
    address: string;
    representative: string;
    contact_number: string;
  }
  
  export const cUsers: CompanyData[] = [
    {
      id : 1,
      image: "https://source.unsplash.com/random/800x600",
      company_name: "ABC Corporation",
      address: "123 Main Street, Cityville, Country",
      representative: "John Doe",
      contact_number: "+1 (555) 123-4567",
    },
    {
      id : 2,
      image: "https://source.unsplash.com/random/800x600",
      company_name: "XYZ Ltd.",
      address: "456 Oak Avenue, Townsville, Country",
      representative: "Jane Smith",
      contact_number: "+1 (555) 987-6543",
    },
    {
      id : 3,
      image: "https://source.unsplash.com/random/800x600",
      company_name: "PQR Industries",
      address: "789 Elm Road, Villagetown, Country",
      representative: "Sam Johnson",
      contact_number: "+1 (555) 321-0987",
    },
    {
      id : 4,
      image: "https://source.unsplash.com/random/800x600",
      company_name: "PQR Industries",
      address: "789 Elm Road, Villagetown, Country",
      representative: "Sam Johnson",
      contact_number: "+1 (555) 321-0987",
    },
  ];
  