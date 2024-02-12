import { Identity } from "./identity";

export type GetCurrentUser = () => Promise<Identity | null>;
