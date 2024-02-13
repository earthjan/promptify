const routes = {
  get login() {
    return "login";
  },
  get main() {
    return "main";
  },
  get default() {
    return "*";
  },
  get myPrompts() {
    return "my-prompts";
  },
  get promptList() {
    return "list";
  },
  get createPrompt() {
    return "create";
  },
  get showPrompt() {
    return "show";
  },
  get editPrompt() {
    return "edit";
  },
};

export default routes;
