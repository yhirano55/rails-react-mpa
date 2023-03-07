export interface Errors {
  full_messages?: string[];
}

export interface Flash {
  type: string;
  message: string;
}

export interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
  created_at: Date;
  updated_at: Date;
  errors?: Errors;
}
