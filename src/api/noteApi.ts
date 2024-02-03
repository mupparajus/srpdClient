import axios from "axios";
import formatISO from "date-fns/formatISO";

import { CreateNoteInput } from "../components/notes/create.note";
import { UpdateNoteInput } from "../components/notes/update.note";
import { INote, INoteResponse, INotesResponse } from "./types";

const BASE_URL = "http://localhost:8080/";

export const noteApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

noteApi.defaults.headers.common["Content-Type"] = "application/json";

export const createNoteFn = async (note: CreateNoteInput) => {
    const newNote = {
      ...note,
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date()),
    };
  const response = await noteApi.post<INoteResponse>("notes/", newNote);
  return response.data;
};

export const updateNoteFn = async (noteId: string, note: UpdateNoteInput) => {
  const response = await noteApi.patch<INoteResponse>(`notes/${noteId}`, note);
  return response.data;
};

export const deleteNoteFn = async (noteId: string) => {
  return noteApi.delete<null>(`notes/${noteId}`);
};

export const getSingleNoteFn = async (noteId: string) => {
  const response = await noteApi.get<INoteResponse>(`notes/${noteId}`);
  return response.data;
};

export const getNotesFn = async (page = 1, limit = 10) => {
  const response = await noteApi.get<INotesResponse>(
    `notes?page=${page}&limit=${limit}`
  );
    console.log("getNotesFn data: ", response);
    // console.log("getMeResponse: ", getMeResponse);
  return response.data;
};
