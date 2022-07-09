import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "v6GVasCmjcoJpKZhA57bGQ",  // ID of a project you are using
      token: "sLH8MeSr42nkCdt2CBW0ZfZr6cKkilWESe5O6B9yirPYkDlWMLlattSynGB6DdyZrjJYWxxYeKoBVJe81Q"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
