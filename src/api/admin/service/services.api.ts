import axios from "axios";
export const getServices = async () => {
  return await axios.get("url").then((res) => res.json());
};

// export const getServices = async () => {
//     const res = await fetch("url").then((res) => res.json());
//     if (!res.success) {
//       throw new Error("Something went wrong");
//     }
//     return res;
//   };
