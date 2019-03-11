export interface User {
  token: string;
  accountLink: object;
  userName: string;
  userPreferredName: string;
  sessionState: string;
}

export type OptionalUser = User | undefined;

export interface AuthenticationApi {
  readonly user: OptionalUser;
  readonly enabled: boolean;
  init(): Promise<OptionalUser>;
  login(): void;
  logout(): void;
  openAccountManagement(): void;
  refreshToken(): Promise<OptionalUser>;
  generateAuthorizationLink(provider?: string, redirect?: string): string;
  setOnUserChangeListener(listener: (user: OptionalUser) => void);
}
