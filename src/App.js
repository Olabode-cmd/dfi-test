// import logo from './logo.svg';
import DFILOGO from './assets/dfi-logo.png';
import Coworkers from './assets/co-workers.svg';
import './App.css';
import { ReactTyped } from "react-typed";
import { FiSearch } from 'react-icons/fi'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  FaCode,
  FaBrush,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaLock,
} from "react-icons/fa";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const courses = [
    {
      icon: <FaCode className="text-red-600 text-4xl" />,
      title: "Web Development",
      description: "Learn to build websites with HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaBrush className="text-red-600 text-4xl" />,
      title: "UI/UX Design",
      description: "Design beautiful and user-friendly interfaces.",
    },
    {
      icon: <FaDatabase className="text-red-600 text-4xl" />,
      title: "Data Analytics",
      description: "Analyze and visualize data to make informed decisions.",
    },
    {
      icon: <FaCloud className="text-red-600 text-4xl" />,
      title: "Cloud Computing",
      description: "Master the cloud to manage and deploy applications.",
    },
    {
      icon: <FaMobileAlt className="text-red-600 text-4xl" />,
      title: "Mobile Development",
      description: "Create mobile apps for Android and iOS platforms.",
    },
    {
      icon: <FaLock className="text-red-600 text-4xl" />,
      title: "Cybersecurity",
      description: "Protect systems and data from digital threats.",
    },
  ];

  return (
    <div className="App mb-0">
      <nav className="px-4 md:px-8 lg:px-16 py-10">
        <img src={DFILOGO} alt="logo" className="w-[150px]" />
      </nav>

      <section className="mt-8 md:mt-16 lg:mt-20 text-center px-3 md:px-8 pb-10">
        <h1
          className="text-3xl md:text-6xl font-bold px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ReactTyped
            strings={[
              "Hello, welcome to DFI!",
              "¡Hola, bienvenido a DFI!",
              "Bonjour, bienvenue à DFI!",
              "Hallo, willkommen bei DFI!",
              "Ciao, benvenuto a DFI!",
              "Shalom, bruchim haba'im le-DFI!",
            ]}
            typeSpeed={55}
            backSpeed={80}
            loop
          />
        </h1>

        <p
          class="text-md md:text-lg text-gray-700 mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We have professional tutors from the best bootcamps all
          <br /> over West Africa.
        </p>

        <div
          class="form-group relative mx-auto w-[98%] md:w-[55%] lg:w-[45%] mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            className="px-4 py-4 bg-gray-100 rounded-full w-full border focus:border-red-600"
            placeholder="What do you want to learn?"
            type="text"
          />
          <div className="px-2.5 py-2.5 rounded-full bg-red-600 absolute right-3 top-3">
            <FiSearch className="text-white" />
          </div>
        </div>

        <div
          className="mt-10 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={Coworkers} alt="coworkers" />
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-red-600">
        <div data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-center text-2xl md:text-4xl text-white font-semibold">
            Upskill to stay relevant in the digital age
          </h1>
          <p className="text-center text-base text-white mt-3">
            Here are some of our most taken and recommended courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={`${200 * index}`}
            >
              {course.icon}
              <h2 className="text-lg font-semibold mt-4">{course.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} DFI - All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="/"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.897v-2.89h2.541V9.577c0-2.507 1.493-3.89 3.788-3.89 1.099 0 2.245.195 2.245.195v2.473h-1.264c-1.243 0-1.631.772-1.631 1.561v1.869h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.001.974-3.127 1.196-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.13 1.124C7.69 8.094 4.067 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.316 0-.626-.031-.929-.089.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.069C2.905 19.328 5.648 20 8.548 20c10.263 0 15.867-8.504 15.867-15.868 0-.241-.006-.482-.016-.722A11.366 11.366 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.732-.778-1.732-1.732s.766-1.732 1.732-1.732c.966 0 1.732.778 1.732 1.732s-.766 1.732-1.732 1.732zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.865-3.058-1.865 0-2.151 1.459-2.151 2.967v5.695h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.565 2.843-1.565 3.039 0 3.601 2.001 3.601 4.604v5.594z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
