export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useUser();
  if (!user.value) return navigateTo("/login");
  if (user.value.role === "admin") return navigateTo("/admin");
});
