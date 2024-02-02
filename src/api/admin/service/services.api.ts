export const getServices = async () => {
    return await fetch("url").then((res) => res.json());
  };