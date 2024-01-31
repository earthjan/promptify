/**
 * Interface for user identity
 */
export interface Identity {
  id: string;
  email?: string;
  displayName?: string;
}

/**
 * Interface for auth crendential
 */
export interface UserCredential extends Identity {}
