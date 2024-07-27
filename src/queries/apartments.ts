export const GET_APARTMENTS = `
  query FindAllApartments {
    findAll {
      id
      numberOfBedrooms
      numberOfBathrooms
      area
      hasParking
      price
      description
    }
  }
`;

export type Apartment = {
  id: string,
  numberOfBedrooms: number,
  numberOfBathrooms: number,
  area: number,
  hasParking: boolean,
  price: number,
  description: string
};

export type AllApartments = {
  data: {
    findAll: Apartment[]
  }
};
