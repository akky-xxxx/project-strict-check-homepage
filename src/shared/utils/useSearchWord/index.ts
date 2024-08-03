import { create } from "zustand"

type State = {
  searchWord: string
}

type Action = {
  setSearchWord: (searchWord: string) => void
}

type Store = Action & State

export const useSearchWord = create<Store>((set) => ({
  searchWord: "",
  setSearchWord: (searchWord) => {
    set({ searchWord })
  },
}))
