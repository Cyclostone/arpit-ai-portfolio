import { FaLinkedin, FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      aria-label="Arpit Shrotriya Portfolio Introduction"
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-theme text-theme mt-20"
    >
      <header className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-accent leading-tight">
          Hi, I'm Arpit Shrotriya
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-muted">
          I'm an <strong>AI/ML & Data Engineer</strong> with{" "}
          <strong>3+ years of experience</strong> and currently <strong>pursuing my M.S. in Computer Science at NJIT</strong>. I architect <strong>end-to-end ETL pipelines</strong> and manage <strong>relational and NoSQL databases</strong> to ingest, clean, and transform <strong>millions of records daily</strong>.
          <br />
          <br />
          Leveraging <strong>Python</strong>, <strong>SQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Terraform</strong>, and cloud platforms (<strong>AWS/GCP/Azure</strong>), I build <strong>scalable ML-powered APIs</strong> and <strong>AI applications</strong>—powered by <strong>LangChain</strong> and <strong>FastAPI</strong>—complete with centralized logging, error reporting, snapshot backups, and automated monitoring.
          <br />
          <br />
          My mission is to deliver <strong>robust, maintainable systems</strong> that turn complex data into <strong>actionable intelligence at scale</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/arpit-shrotriya/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/Arpit_Shrotriya_CV_2025_mk7.pdf"
            download
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </header>
    </section>
  );
};
