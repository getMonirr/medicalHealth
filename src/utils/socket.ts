import { io } from "socket.io-client";

// export const socket = io("http://localhost:5000");
export const socket = io("https://medical-health-snowy.vercel.app");

socket.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
