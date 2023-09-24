import { create } from 'zustand';

const initialState = {
  notification: null,
};

const useNotification = create((set) => ({
  ...initialState,
  showNotification: (notification) =>
    set((state) => ({
      ...state,
      notification,
    })),
  hideNotification: () => set(initialState),
}));

export default useNotification;
