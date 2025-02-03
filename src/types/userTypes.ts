export interface UserData {
  userId: number;
  email: string;
  username: string;
  profileImageUrl: string | null;
}

export interface OutletContextType {
  data: UserData;
}
