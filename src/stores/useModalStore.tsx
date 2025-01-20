import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean; // 모달 오픈 여부
  open: () => void; // 모달 열 때 호출
  close: () => void; // 모달 닫을 때 호출
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
