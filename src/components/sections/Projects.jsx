import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaPython,
  FaAws,
  FaGithub,
  FaDatabase,
  FaCode,
  FaRust,
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
  Rust: <FaRust />,
  LangChain: <FaCode />,
  "Groq API": <FaCode />,
  "Wikipedia API": <FaDatabase />,
  "HuggingFace": <SiHuggingface />,
  OpenAI: <SiOpenai />,
  SQL: <FaDatabase />,
};

export const Projects = () => {
  const projects = [
    {
      title: "Rusty-Playground",
      description:
        "A step-by-step adventure through Rust programming with practical mini-projects. Follow along as I build small applications from simple calculators to more complex systems, documenting my learning process.",
      tech: [
        "Rust"
      ],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/Rusty-Playground",
        },
      ],
    },
    {
      title: "MathSolveX",
      description:
        "An intelligent, AI-powered mathematical problem-solving assistant built with Streamlit and LangChain. Helps users solve complex math problems with step-by-step explanations and visualizations.",
      tech: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq API",
        "Wikipedia API",
      ],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/MathSolveX",
        },
      ],
    },
    {
      title: "AI Research Assistant",
      description:
        "A powerful AI-powered research assistant that combines ArXiv papers, Wikipedia articles, and web search capabilities to help you explore and understand complex topics. Features natural conversation interface with streaming responses and a clean, intuitive UI.",
      tech: [
        "Python", 
        "Streamlit", 
        "LangChain", 
        "Groq API", 
        "Wikipedia API",
        "ArXiv Integration"
      ],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/Search-Engine-With-LLM",
        },
      ],
    },
    {
      title: "Customer Churn Prediction App",
      description:
        "A machine learning-powered application for predicting customer churn using a custom-trained Artificial Neural Network model. This project demonstrates the efficient use of serialized model components to enhance reusability and deployment, offering an interactive interface via Streamlit for real-time predictions and data-driven decision-making.",
      tech: [
        "Python", 
        "Jupyter", 
        "TensorFlow", 
        "Streamlit", 
        "Scikit-learn", 
        "Pandas"
      ],
      links: [
        // {
        //   label: "🚀 Live Demo",
        //   href: "https://customerchuurnpredictionapp-6bsrwlk337ypfmya.streamlit.app/",
        // },
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/Customer_Churn_Prediction_App",
        },
      ],
    },
    {
      title: "Skill Recommender With Azure Open AI",
      description:
        "A simple yet intuitive application which takes resume and dream job title, extracts skills from resume and compares them with trending skills from the current market and recommends the skills needed to achieve that dream job title. Uses Azure OpenAI API and YouTube Data API to generate recommendations.",
      tech: [
        "Python", 
        "Flask", 
        "TensorFlow", 
        "Azure",
        "YouTube API"
      ],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/skill_recommender_with_azure",
        },
      ],
    },
    {
      title: "Zomato Data Analysis",
      description:
        "This project analyzes restaurant data from multiple countries to provide insights and recommendations for opening new restaurants and improving existing ones. The Excel dashboard analyzes Zomato Historical Data and suggests untapped markets based on a plethora of parameters, providing insights into restaurant performance, customer preferences, and market opportunities.",
      tech: [
        "Excel",
        "NumPy",
        "Data Analysis",
        "Python", 
        "SQL", 
        "Pandas", 
      ],
      links: [
        {
          label: "💻 GitHub Repository",
          href: "https://github.com/cyclostone/Zomato-Data-Analysis",
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
