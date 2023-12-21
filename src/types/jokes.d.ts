declare type Joke = {
  fallback: string;
  footer: string;
  text: string;
};

declare type JokeResponse = {
  attachments: Joke[];
  response_type: string;
  username: string;
}

declare type jokesState = {
  joke: JokeResponse | null;
  isLoading: Boolean;
}