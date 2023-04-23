export interface Item {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

export interface Comment extends Item {
  name: string;
  email: string;
}
