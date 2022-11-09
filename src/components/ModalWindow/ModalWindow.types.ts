export interface ModalWindowProps {
  active?: boolean;
  setActive?: (active: boolean) => void;
  children?: React.ReactNode;
}
