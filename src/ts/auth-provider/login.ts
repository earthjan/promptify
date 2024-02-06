import { UserCredential } from "./identity";

export type Login = () => Promise<UserCredential>;
