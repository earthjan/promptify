import { PropsWithChildren, createContext, useContext } from "react";
import { Identity } from "../../ts/auth-provider/identity";
import { useCurrentUser } from "../../hooks/main";

interface CurrentUserContext {
  currentUser?: Identity;
}

const Context = createContext<CurrentUserContext>({});
export const useCurrentUserContext = () => useContext(Context);

const CurrentUserContext = (props: PropsWithChildren) => {
  const { children } = props;

  const { currentUser } = useCurrentUser();

  return (
    <Context.Provider
      value={{
        currentUser: currentUser ?? undefined,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CurrentUserContext;
