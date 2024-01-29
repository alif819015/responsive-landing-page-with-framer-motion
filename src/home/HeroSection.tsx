import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <div className="overflow-hidden ">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <MotionConfig.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
            variants={introChildren}
          >
            Welcome to{' '}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>{' '}
            , your one-stop place for all kinds of{' '}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{' '}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </MotionConfig.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
