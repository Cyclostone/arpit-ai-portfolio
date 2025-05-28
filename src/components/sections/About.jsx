import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  FaPython,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiJupyter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiHuggingface,
  SiOpenai,
  SiGit,
  SiDocker,
} from "react-icons/si";

export const About = () => {
  const mlSkills = [
    { label: "TensorFlow", icon: <SiTensorflow /> },
    { label: "PyTorch", icon: <SiPytorch /> },
    { label: "Scikit-Learn", icon: <SiScikitlearn /> },
    { label: "Keras", icon: <SiKeras /> },
    { label: "HuggingFace", icon: <SiHuggingface /> },
    { label: "LLMs" },
    { label: "BERT Models" },
    { label: "Gemini API" },
    { label: "OpenAI", icon: <SiOpenai /> },
    { label: "NLP" },
    { label: "Deep Learning" },
    { label: "Computer Vision" },
    { label: "Sentiment Analysis" },
    { label: "Chatbot Development" },
  ];

  const dataSkills = [
    { label: "Python", icon: <FaPython /> },
    { label: "Pandas", icon: <SiPandas /> },
    { label: "NumPy", icon: <SiNumpy /> },
    { label: "SQL", icon: <FaDatabase /> },
    { label: "PostgreSQL", icon: <SiPostgresql /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "ETL Pipelines" },
    { label: "Data Mining" },
    { label: "Data Visualization" },
    { label: "Jupyter", icon: <SiJupyter /> },
    { label: "Feature Engineering" },
    { label: "OCR" },
    { label: "Data Preprocessing" },
    { label: "Statistical Analysis" },
  ];

  const devOpsSkills = [
    { label: "AWS", icon: <FaAws /> },
    { label: "Google Cloud", icon: <SiGooglecloud /> },
    { label: "Docker", icon: <SiDocker /> },
    { label: "Git", icon: <SiGit /> },
    { label: "CI/CD" },
    { label: "Flask", icon: <SiFlask /> },
    { label: "Streamlit", icon: <SiStreamlit /> },
    { label: "REST APIs" },
    { label: "JavaScript", icon: <FaJs /> },
    { label: "HTML/CSS", icon: <FaHtml5 /> },
    { label: "BigQuery" },
    { label: "SAP HANA" },
    { label: "Model Deployment" },
    { label: "MLOps" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-theme text-theme"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 shadow-lg bg-section text-center">
          <p className="text-muted text-lg mb-6 leading-relaxed">
            I thrive at the nexus of <strong>data engineering</strong> and <strong>AI innovation</strong>. Beyond building <strong>production ETL workflows</strong> and designing <strong>resilient databases</strong>, I craft <strong>end-user tools</strong>—from <strong>conversational AI assistants</strong> to <strong>analytics dashboards</strong>—using modern frameworks like <strong>Streamlit</strong> and <strong>LangChain</strong>.
          </p>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            I design every solution with <strong>scalability</strong> in mind, integrating <strong>CI/CD</strong>, <strong>observability</strong>, and <strong>fault-tolerance</strong> so teams can trust and extend my work. When I'm not coding, you'll find me contributing to <strong>open-source</strong>, mentoring peers in mock interviews and data literacy, or recharging with a swim or bike ride.
          </p>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            My aim is simple: to empower organizations with <strong>AI-driven insights</strong> and <strong>automation</strong> that fuel growth and positive impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <RevealOnScroll>
              <div className="rounded-xl p-6 border hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">Machine Learning & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {mlSkills.map(({ label, icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="rounded-xl p-6 border hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">Data Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {dataSkills.map(({ label, icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="mt-6">
            <RevealOnScroll>
              <div className="rounded-xl p-6 border hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">DevOps & Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map(({ label, icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section">
              <h3 className="text-3xl font-bold mb-4 text-theme flex justify-center items-center gap-2">
                <FaGraduationCap className="text-accent" /> Education
              </h3>
              <ul className="list-inside text-theme space-y-2">
                <li>
                  <h4 className="font-semibold text-theme">
                    <strong>M.S. in Computer Science</strong> -
                    New Jersey Institute of Technology
                    <span className="block text-accent italic">
                      Sep 2024 - May 2026
                    </span>
                  </h4>

                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 text-muted font-medium italic">
                    <li>Data Structures & Algorithms</li>
                    <li>Reinforcement Learning</li>
                    <li>Machine Learning</li>
                    <li>Intro To Big Data</li>
                    <li>Data Management System Design</li>
                    <li>Data Mining</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold text-theme">
                    <strong>B.Tech in Computer Science</strong> - Guru Gobind Singh Indraprastha University
                    <span className="block text-accent italic">
                      Aug 2017 - Sep 2021
                    </span>
                  </h4>
                  <p>
                    <strong>CGPA - 7.69 / 10.00</strong>
                  </p>
                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 font-medium text-muted italic">
                    <li>Data Structures and Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Web Technology</li>
                    <li>Java Programming</li>
                    <li>Database Management Systems</li>
                    <li>Advanced DBMS</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Compiler Design</li>
                    <li>Microprocessor and Microcontroller</li>
                    <li>Software Testing and Quality Assurance</li>
                    <li>Mobile Computing</li>
                    <li>Machine Learning</li>
                    <li>Switching Theory and Logic Design</li>
                    <li>Computer Graphics and Multimedia</li>
                  </ul>
                </li>
                {/* <li>
                  <h4 className="font-semibold text-theme">
                    <strong>Senior Secondary School Certificate</strong> -
                    Springdales School
                    <span className="block text-accent italic">
                      April 2004 - May 2017
                    </span>
                  </h4>

                  <p>
                    <strong>Percentage - 88.00% / 100.00</strong>
                  </p>
                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 text-muted font-medium italic">
                    <li>Computer Science Fundamentals</li>
                    <li>Mathematics</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>English</li>
                  </ul>
                </li> */}
              </ul>
            </div>

            {/* Work Experience */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section"
            >
              <h3 className="text-3xl font-bold mb-4 text-theme flex items-center justify-center gap-2">
                <FaBriefcase className="text-accent" /> Work Experience
              </h3>
              <div className="space-y-4 text-muted">
                <div>
                  <h4 className="font-semibold text-theme">
                    Associate Data Scientist - Veeyo Tech
                    <span className="block text-accent italic">
                      Jul 2023 - Aug 2024
                    </span>
                    <span className="block text-sm text-muted italic">
                      New Delhi, India
                    </span>
                  </h4>
                  <p>
                    • Developed and launched <strong>three distinct LLM-powered chatbots</strong> by integrating <strong>Gemini APIs</strong> and fine-tuning <strong>BERT models</strong>, effectively addressing <strong>65% of basic customer support inquiries</strong> and demonstrating proficiency in Natural Language Processing and LLMs.
                    <br />• Designed and optimized <strong>ETL workflows</strong> for both structured and unstructured data, reducing processing times by <strong>40%</strong> and accelerating model training and deployment cycles.
                    <br />• Constructed and optimized a <strong>large-scale NLP pipeline</strong> for text classification and sentiment analysis that achieved an <strong>85% accuracy rate</strong> on production data, showcasing applied Deep Learning techniques.
                    <br />• Engineered scalable data pipelines with <strong>Python, SQL, and AWS</strong>, automating the ingestion of over <strong>1M records daily</strong> to enhance overall workflow efficiency.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Data Engineer - Sail Analytics
                    <span className="block text-accent italic">
                      Jun 2022 - Jun 2023
                    </span>
                    <span className="block text-sm text-muted italic">
                      New Delhi, India
                    </span>
                  </h4>
                  <p>
                    • Automated client reporting by creating data pipelines using <strong>Python and HTML</strong> to generate Excel files and schedule email deliveries, resulting in a <strong>30% reduction</strong> in manual report generation.
                    <br />• Utilized <strong>Python OCR packages</strong> to extract key information from over <strong>1,000 receipt images</strong> with <strong>95% accuracy</strong>, thereby expediting the data collection process.
                    <br />• Delivered <strong>40% increase</strong> in report generation efficiency by architecting stable, clean <strong>ETL pipelines</strong> for master and transactional data to support enhanced data consolidation in visualization tools like <strong>Power BI and Tableau</strong>.
                    <br />• Streamlined secure data transfer between <strong>SAP HANA and Google BigQuery</strong> to facilitate the deployment of ETL workflows, achieving a <strong>20% reduction</strong> in data transfer time.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
