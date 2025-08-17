"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box border-1 border-[#EFA531]">
        <h3 className="font-bold text-[#EFA531] text-lg">{props.title}</h3>
        <div className="py-4 text-white font-semibold">{props.children}</div>
        <div className="modal-action">
          <button
            type="button"
            className="btn btn-outline bg-[#EFA531] text-white border-[#EFA531] hover:bg-white hover:text-[#EFA531] px-10"
            onClick={() => dialogRef.current?.close()}
          >
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
});

Modal.displayName = "Modal";
export default Modal;
