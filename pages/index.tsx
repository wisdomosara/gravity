import Layout from "../components/Layout";
import { motion } from "framer-motion";

const IndexPage = () => (
  <Layout title="Gravity Template Ministry Writers Test">
    <section className="flex items-center flex-wrap mb-24">
      <motion.div
        initial="hidden"
        animate="visible"
        className="md:w-2/4 w-full order-2 md:order-1"
        variants={{
          hidden: {
            scale: 0.8,
            x: -100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <div>
          <h2 className="xl:text-5xl lg:text-2xl md:text-4xl text-3xl font-normal mt-10 md:mt-0  mb-3 md:mb-5 xl:mb-10">
            Simple time tracking.
          </h2>
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-normal">
            {" "}
            Powerful reporting.
          </h2>
          <p className="text-base  md:text-xl xl:text-2xl font-normal md:pr-16 mb-10 xl:mt-10 mt-5">
            Turn your team on to productivity with Gravity the time tracker.
          </p>
          <button className="rounded-sm btn py-2 md:py-5 text-white">
            Request early access
          </button>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="md:w-2/4 w-full order-1 md:order-2"
        variants={{
          hidden: {
            scale: 0.8,
            x: 100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <div>
          <img
            src="/images/illustration.png"
            width="100%"
            height="100%"
            alt=""
            className="-mt-28"
          />
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default IndexPage;
