import { GitHub } from "arctic";

const { github: githubEnv } = useRuntimeConfig();

export const github = new GitHub(githubEnv.clientId, githubEnv.clientSecret);
