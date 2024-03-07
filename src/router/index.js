import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import VideoDetails from "@/views/VideoDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    children: [
      {
        path: ":id",
        name: "VideoDetails",
        component: VideoDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
