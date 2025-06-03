export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black max-w-5xl mx-auto px-6 py-24 text-white"
      aria-labelledby="skills-title"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Foto con borde sutil */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Texto */}
        <div className="max-w-xl text-center md:text-left">
          <h2
            id="skills-title"
            className="text-4xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md"
          >
            Habilidades
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Aquí están algunas de las habilidades que he adquirido a lo largo de
            mi carrera como desarrollador web.
          </p>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>HTML</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>React</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>Node.js</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>TypeScript</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-code"
              >
                <path d="M16 18l2-2V6l-2-2"></path>
                <path d="M6 18V6l2-2"></path>
              </svg>
              <span>Node.js</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
