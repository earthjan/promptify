/**
 * Interface for user identity
 */
export interface Identity {
  id: string;
  profilePicture?: string;
  email?: string;
  displayName?: string;
}

/**
 * Interface for auth credential
 */
export interface UserCredential extends Identity {}
