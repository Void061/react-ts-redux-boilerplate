export const addUserToLocalStorage = (user : string) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result : string | null = localStorage.getItem("user") || null;
  const user : User = result ? JSON.parse(result) : null;
  return user;
};
