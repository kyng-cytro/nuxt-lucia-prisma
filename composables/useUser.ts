import type { User } from "lucia";

export const useUser = () => {
  const user = useState<User | null>("user", () => null);
  const loggedIn = user.value?.id ? true : false;
  const signIn = async () => {
    await navigateTo("/login/github/", { external: true });
  };
  const logOut = async () => {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });
    await navigateTo("/login");
  };

  return { loggedIn, user, signIn, logOut };
};
