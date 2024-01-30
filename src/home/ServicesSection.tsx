import BattaryReplacement from "@/components/serviceStyle/BattaryReplacement";
import ChipsetReplacement from "@/components/serviceStyle/ChipsetReplacement";
import DataRecovery from "@/components/serviceStyle/DataRecovery";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1> Services that we provide. </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          All our technicians are fully qualified and licensed. Moreover,
          theyare incredibly skillful and proficient in various aspects of
          computer repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BattaryReplacement />
        <ChipsetReplacement />
        <DataRecovery />
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12">D</div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
