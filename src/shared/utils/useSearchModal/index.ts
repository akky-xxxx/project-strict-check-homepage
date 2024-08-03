import { create } from "zustand"

type State = {
  isShown: boolean
}

type Action = {
  handleCloseModal: () => void
  handleOpenModal: () => void
}

type Store = Action & State

export const useSearchModal = create<Store>((set) => ({
  isShown: false,

  handleCloseModal: () => {
    set({ isShown: false })
  },
  handleOpenModal: () => {
    set({ isShown: true })
  },
}))
