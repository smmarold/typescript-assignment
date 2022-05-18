export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    rating: Rating;
  }

  export interface Rating {
      rate: number;
      count: number;
  }