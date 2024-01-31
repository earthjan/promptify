import TemplateLogin from "../../components/templates/Login/Login";

const Login = () => {
  // const nav = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       nav("/" + routes.main);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const signInWithGoogle = async () => {
  //   await signInWithPopup(auth, GoogleProviderSingleton)
  //     .then(() => {
  //       nav(routes.main);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const signOut = async () => {
  //   await firebaseSignOut(auth).catch((error) => {
  //     console.error(error);
  //   });
  // };

  return <TemplateLogin />;
};

export default Login;
