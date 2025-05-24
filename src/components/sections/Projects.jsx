import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaPython,
  FaAws,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiHuggingface,
  SiGooglecloud,
  SiFlask,
  SiDocker,
} from "react-icons/si";

const techIcons = {
  Python: <FaPython />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  Streamlit: <SiStreamlit />,
  Jupyter: <SiJupyter />,
  "Scikit-learn": <SiScikitlearn />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  AWS: <FaAws />,
  "Google Cloud": <SiGooglecloud />,
  Flask: <SiFlask />,
  Docker: <SiDocker />,
  "HuggingFace": <SiHuggingface />,
  OpenAI: <SiOpenai />,
  SQL: <FaDatabase />,
};

export const Projects = () => {
  const projects = [
    {
      title: "Search Engine with LLM",
      description:
        "Architected an AI research assistant utilizing Streamlit and LangChain, enabling natural language searches across ArXiv, Wikipedia, and web content. Reduced research time for data scientists by 30% through intelligent semantic search capabilities.",
      tech: [
        "Python",
        "Streamlit",
        "HuggingFace",
        "LangChain",
        "OpenAI",
        "Google Cloud",
      ],
      links: [
        {
          label: "🔗 Live Demo",
          href: "https://github.com/cyclostone/search-engine-with-llm",
        },
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/search-engine-with-llm",
        },
      ],
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Developed and deployed an interactive churn prediction tool using TensorFlow and Streamlit, empowering business users to forecast churn risk with 95% accuracy based on user behavior patterns. Implemented a user-friendly interface for non-technical stakeholders.",
      tech: ["Python", "TensorFlow", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/customer-churn-prediction",
        },
      ],
    },
    {
      title: "NLP Pipeline for Text Classification",
      description:
        "Constructed and optimized a large-scale NLP pipeline for text classification and sentiment analysis that achieved an 85% accuracy rate on production data. Showcased applied Deep Learning techniques and built a scalable solution that processes millions of records daily.",
      tech: ["Python", "TensorFlow", "PyTorch", "BERT", "AWS", "Docker"],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/nlp-classification-pipeline",
        },
      ],
    },
    {
      title: "LLM-Powered Chatbot System",
      description:
        "Developed and launched three distinct LLM-powered chatbots by integrating Gemini APIs and fine-tuning BERT models, effectively addressing 65% of basic customer support inquiries. Demonstrated proficiency in Natural Language Processing and Large Language Models.",
      tech: ["Python", "HuggingFace", "TensorFlow", "Flask", "AWS", "Docker"],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/llm-chatbot-system",
        },
      ],
    },
    {
      title: "Salary Estimator Dashboard",
      description:
        "Developed an interactive salary estimation dashboard using Streamlit, enabling users to input skills and experience for instant salary projections. Achieved high user satisfaction rating of 4.8/5 stars through intuitive design and accurate predictions.",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "SHAP"],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/salary-estimator",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-theme text-theme"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 gradient-accent text-center">
          Featured AI/ML Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div
                className="p-6 rounded-xl border border-theme hover:-translate-y-1 transition hover:border-[var(--accent-color)]/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] bg-card"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {techIcons[tech] && (
                        <span className="text-inherit text-lg">
                          {techIcons[tech]}
                        </span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  {project.links.map((link, key) => (
                    <a
                      key={key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-[var(--link-hover)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
