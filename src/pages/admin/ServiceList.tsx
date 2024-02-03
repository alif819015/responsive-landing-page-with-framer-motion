import { getServices } from "@/api/admin/service/services.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  console.log({isLoading, data, isError})
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }
  return (
    <div>
      <h1>ServiceList</h1>
    </div>
  );
};

export default ServiceList;
