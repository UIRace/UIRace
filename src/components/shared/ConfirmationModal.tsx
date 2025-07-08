import OverlayPortal from "@/app/new-portal/OverlayModalPortal";
import SimpleCard from "@components/shared/SimpleCard";
import PrimaryButton from "@components/shared/PrimaryButton";
import SecondaryButton from "@components/shared/SecondaryButton";
import { useState, useRef, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";

type Props = {
  heading: string;
  children: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  danger?: boolean;
  handleCancel: () => void;
  handelConfirm: () => void;
  className?: string;
};

type ModalProps = {
  heading: string;
  children: React.ReactNode;
  cancelText: string;
  confirmText: string;
  danger: boolean;
  handleCancel: () => void;
  handelConfirm: () => void;
  className: string;
};

function ConfirmationModal({
  heading,
  children,
  handleCancel,
  handelConfirm,
  danger = false,
  cancelText = "Cancel",
  confirmText = "Confirm",
  className = "",
}: Props) {
  return (
    <OverlayPortal>
      <Modal
        heading={heading}
        handelConfirm={handelConfirm}
        handleCancel={handleCancel}
        danger={danger}
        cancelText={cancelText}
        confirmText={confirmText}
        className={className}
      >
        {children}
      </Modal>
    </OverlayPortal>
  );
}

export default ConfirmationModal;

// new component to prevent re render the overlayportal
function Modal({
  heading,
  children,
  handleCancel,
  handelConfirm,
  danger,
  cancelText,
  confirmText,
  className,
}: ModalProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  function handleCancelClick() {
    if (!clicked) {
      handleCancel();
    }
  }

  function handleConfirmClick() {
    if (!clicked) {
      setClicked(true);
      handelConfirm();
    }
  }

  function handleKeys(key: string) {
    if (key === "Escape") handleCancelClick();
    if (key === "Enter") handleConfirmClick();
  }

  useEffect(() => {
    divRef.current?.focus();
  }, []);

  return (
    <div
      tabIndex={0}
      autoFocus
      ref={divRef}
      onKeyDown={(e) => handleKeys(e.key)}
      onClick={handleCancelClick}
      className={`flex items-center justify-center h-full dark:bg-bt-primary/50 backdrop-blur-md `}
    >
      <SimpleCard
        handleClick={(e) => e.stopPropagation()}
        className={`max-w-md w-full mx-5 dark:bg-wt-primary/15 bg-wt-primary/70 ${className}`}
      >
        <h4 className="font-semibold text-xl mb-2">{heading}</h4>
        {children}
        <div className="flex gap-3 mt-5 ml-auto w-fit">
          <SecondaryButton handleClick={handleCancelClick}>
            {cancelText}
          </SecondaryButton>
          <PrimaryButton
            className={`${danger && "!bg-warning"}`}
            handleClick={() => {
              handleConfirmClick();
            }}
          >
            {clicked ? <VscLoading className="animate-spin" /> : confirmText}
          </PrimaryButton>
        </div>
      </SimpleCard>
    </div>
  );
}
