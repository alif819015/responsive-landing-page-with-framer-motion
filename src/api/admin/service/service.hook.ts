import { useQuery } from "@tanstack/react-query";
import { getServices } from "./services.api";

export const useGetServices = () =>{
    const servicesData = useQuery({
        queryKey: ["services"],
        queryFn: getServices,
        select: (data) => {
          const users = data.data.map((item) => ({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
          }));
          console.log(users);
          return users;
        },
      });
return servicesData
}