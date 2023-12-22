declare type User = {
  username: String;
  email: String;
  image: String;
  gender: String;
  token: String;
};

declare type userState = {
  user: User | null;
  isLoading: Boolean;
};
