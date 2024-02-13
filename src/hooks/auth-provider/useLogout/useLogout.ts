import authProvider from "../../../app-config/authProvider/authProvider";

const useLogout = () => {
  const logout = async () => {
    await authProvider.logout();
  };

  return { logout };
};

export default useLogout;
