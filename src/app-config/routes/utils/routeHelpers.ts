import routes from "../routes";

interface HelperOptions {
  isRelative?: boolean;
}

const routeHelpers = {
  toDefaultPublicPage: (options?: HelperOptions) => {
    const { isRelative } = options ?? {};

    if (isRelative) return routes.default;

    return `/${routes.default}`;
  },
  toLoginPage: (options?: HelperOptions) => {
    const { isRelative } = options ?? {};

    if (isRelative) return routes.login;

    return `/${routes.login}`;
  },
  toMainPage: (options?: HelperOptions) => {
    const { isRelative } = options ?? {};

    if (isRelative) return routes.main;

    return `/${routes.main}`;
  },
};

export default routeHelpers;
