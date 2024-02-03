export interface IAuthUser {
  name: string;
  email: string;
  role: string;
  photo: string;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
  user:string;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IAuthUser;
  };
}

export type INote = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type INoteResponse = {
  status: string;
  note: INote;
};

export type INotesResponse = {
  status: string;
  results: number;
  notes: INote[];
};