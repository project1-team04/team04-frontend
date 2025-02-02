import { ButtonProps } from '@/components/Button';
import { create } from 'zustand';

interface ModalButton extends Omit<ButtonProps, 'children'> {
  text: string;
  onClick?: () => void;
}

interface CustomModalState {
  isOpen: boolean;
  icon?: React.ReactNode;
  title: string;
  content?: React.ReactNode;
  buttons: ModalButton[];
  showModal: (config: {
    icon?: React.ReactNode;
    title: string;
    content?: React.ReactNode;
    buttons: ModalButton[];
  }) => void;
  closeModal: () => void;
}

export const useCustomModalStore = create<CustomModalState>((set) => ({
  isOpen: false,
  icon: undefined,
  title: '',
  content: undefined,
  buttons: [],
  showModal: (config: {
    icon?: React.ReactNode;
    title: string;
    content?: React.ReactNode;
    buttons: ModalButton[];
  }) =>
    set(() => ({
      isOpen: true,
      icon: config.icon || undefined,
      title: config.title,
      content: config.content || '',
      buttons: config.buttons,
    })),
  closeModal: () =>
    set({
      isOpen: false,
      icon: undefined,
      title: '',
      content: undefined,
      buttons: [],
    }),
}));
