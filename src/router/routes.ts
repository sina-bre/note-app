import ViewNotes from "@/views/ViewNotes.vue";

const routes = [
  { path: "/", name: "notes", component: ViewNotes },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/ViewStats.vue"),
  },
];

export default routes;
