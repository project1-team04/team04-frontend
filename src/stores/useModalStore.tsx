import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean; // 모달 오픈 여부
  modalType: string; // 모달 종류
  open: (modalType: string) => void; // 모달 열 때 호출
  close: () => void; // 모달 닫을 때 호출
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: '',
  open: (modalType) => set({ isOpen: true, modalType }),
  close: () => set({ isOpen: false, modalType: '' }),
}));
