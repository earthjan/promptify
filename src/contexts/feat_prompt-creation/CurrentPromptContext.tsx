import { createContext, useContext, PropsWithChildren, useState } from "react";
import { Prompt } from "../../ts/data-provider/main";

type PromptWithReadOnlyAuthor = Omit<Prompt, "author">;

interface CurrentPromptContext {
  currentPrompt?: Partial<Prompt>;
  setCurrentPrompt?: (data: Partial<Prompt>) => void;
}

const Context = createContext<CurrentPromptContext>({});
export const useCurrentPromptContext = () => useContext(Context);

// TODO: Needs the current user context to set prompt author
function CurrentPromptContext(props: PropsWithChildren) {
  const { children } = props;

  const [currentPrompt, _setCurrentPrompt] = useState<
    Partial<Prompt> | undefined
  >(undefined);

  const setCurrentPrompt = (data: Partial<PromptWithReadOnlyAuthor>) => {
    _setCurrentPrompt((currState) => ({
      ...currState,
      ...data,
    }));
  };

  return (
    <Context.Provider
      value={{
        currentPrompt,
        setCurrentPrompt,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default CurrentPromptContext;
