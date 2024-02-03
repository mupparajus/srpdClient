import "react-toastify/dist/ReactToastify.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getNotesFn } from "../api/noteApi";
import NoteModal from "../components/notes/note.modal";
import CreateNote from "../components/notes/create.note";
import NoteItem from "../components/notes/note.component";
import NProgress from "nprogress";
import useStore from "../store";

function ViewNotes() {
  const store = useStore();
  const [openNoteModal, setOpenNoteModal] = useState(false);

  const {
    data,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["getNotes"],
    queryFn: () => getNotesFn(),
    staleTime: 5 * 1000,
    select: (data) => data.reverse(),
    onSuccess() {
      store.setUserNotes(data);
      NProgress.done();
    },
    onError(error: any) {
      const resMessage =
        error.response.data.message ||
        error.response.data.detail ||
        error.message ||
        error.toString();
      toast(resMessage, {
        type: "error",
        position: "top-right",
      });
      NProgress.done();
    },
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      NProgress.start();
    }
  }, [isLoading, isFetching]);

  return (
    <div className="bg-ct-dark-100 max-w-screen mx-auto">
      <p className="text-3xl font-semibold pl-10 pt-12">Notes Page</p>
      <div className="m-8 grid grid-cols-[repeat(auto-fill,_320px)] gap-7 grid-rows-[1fr]">
        <div className="p-4 min-h-[12rem] bg-ct-dark-200 rounded-lg border border-gray-200 shadow-md flex flex-col items-center justify-center">
          <div
            onClick={() => setOpenNoteModal(true)}
            className="flex items-center justify-center h-20 w-20 border-2 border-dashed border-ct-blue-600 rounded-full text-ct-blue-600 text-5xl cursor-pointer"
          >
            <i className="bx bx-plus"></i>
          </div>
          <h4
            onClick={() => setOpenNoteModal(true)}
            className="text-lg font-medium text-ct-blue-600 mt-5 cursor-pointer"
          >
            Add new Note
          </h4>
        </div>
        {/* Note Items */}

        {data?.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}

        {/* Create Note Modal */}
        <NoteModal
          openNoteModal={openNoteModal}
          setOpenNoteModal={setOpenNoteModal}
        >
          <CreateNote setOpenNoteModal={setOpenNoteModal} />
        </NoteModal>
      </div>
    </div>
  );
}

export default ViewNotes;
