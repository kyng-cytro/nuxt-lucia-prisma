export default defineNuxtRouteMiddleware(() => {
  const { user } = useUser();
  //NOTE: might want to change this
  if (!user.value) return navigateTo("/login");
  if (user.value.role === "admin") return navigateTo("/admin");
});
