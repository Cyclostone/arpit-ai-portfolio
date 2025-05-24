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
          I'm an <strong>AI/ML Engineer</strong> with{" "}
          <strong>3+ years of experience</strong> designing and deploying NLP models and LLM-powered chatbots using Python and cloud technologies. I've demonstrated success in{" "}
          <strong>reducing processing times by 40%</strong> and{" "}
          <strong>resolving 65% of customer inquiries</strong> via automated systems.
          <br />
          <br />
          My expertise spans <strong>Machine Learning</strong>, <strong>Natural Language Processing</strong>, and <strong>Deep Learning</strong> with proficiency in frameworks like <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>Streamlit</strong>, and <strong>HuggingFace Transformers</strong>. I've built and fine-tuned <strong>BERT models</strong> and integrated <strong>Gemini APIs</strong> to create intelligent solutions.
          <br />
          <br />
          From developing <strong>large-scale NLP pipelines</strong> with 85% accuracy to engineering <strong>scalable data systems</strong> that automate ML record integration, I transform complex data challenges into elegant, production-ready solutions that drive business value.
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
            href="/Rishik_Gupta_Developer_Resume.pdf"
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
