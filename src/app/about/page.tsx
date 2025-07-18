"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
} from "@/utils/animations";

const AboutPage = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto py-20">
        <motion.h1
          {...fadeInDown}
          className="text-4xl font-bold mb-8 text-center"
        >
          About me
        </motion.h1>

        {/*Bio section*/}
        <motion.section {...fadeInUp} className="mb-16">
          <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
            Hey there! I’m Mohan Kumar, a passionate and curious Full Stack
            Developer who loves turning ideas into reality through clean code
            and creative design. I may be early in my journey, but my ambition
            is sky-high—fueled by a deep desire to learn, build, and grow every
            single day. Inspired by tech heroes like Iron Man, I dream of
            inventing tools that help people and make the world better. When I’m
            not coding, I’m either leveling up my skills, geeking out over
            futuristic tech, or planning my next big idea. Let’s build something
            amazing together!
          </p>
        </motion.section>

        {/*skill section*/}
        <motion.section
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <motion.h2 {...fadeInUp} className="section-title">
            Skills
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/*1.fontend card*/}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            >
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Fontend</h3>
              <ul className="text-secondary space-y-2">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Taiwind CSS</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </motion.div>
            {/*2.backend card*/}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            >
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="text-secondary space-y-2">
                <li>Java</li>
                <li>node / Express.js</li>
                <li>MySQL</li>
                <li>PostgresSQL</li>
              </ul>
            </motion.div>
            {/*3.tools*/}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            >
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="text-secondary space-y-2">
                <li>Git / GitHub</li>
                <li>Postman</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
        {/*education section*/}
        <section className="mb-16">
          <h2 className="section-title">Education</h2>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary mb-2">
                {" "}
                Madras University • 2021 - 2024
              </p>
              <p className="text-secondary">
                Graduated with honors. Focused on Full stack and web
                development.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
