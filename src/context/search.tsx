"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface SearchType {
  searchActive: boolean;
  setSearchActive: Dispatch<SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchType>({
  searchActive: false,
  setSearchActive: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
