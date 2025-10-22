import React, { useState } from 'react';
import { CheckCircle, Circle, Youtube, Database, Code, LayoutGrid as Layout, Server, Wrench, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const FullStackRoadmap = () => {
  const [completedItems, setCompletedItems] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedStack, setSelectedStack] = useState('all');

  const toggleComplete = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const stacks = {
    mern: {
      name: "MERN Stack",
      description: "MongoDB, Express.js, React, Node.js",
      color: "from-green-400 to-cyan-500",
      icon: "🟢"
    },
    python: {
      name: "Python Stack",
      description: "MongoDB/PostgreSQL, Django/Flask, React",
      color: "from-blue-400 to-yellow-400",
      icon: "🐍"
    },
    java: {
      name: "Java Stack",
      description: "MySQL/PostgreSQL, Spring Boot, React",
      color: "from-orange-400 to-red-500",
      icon: "☕"
    }
  };

  const roadmapData: any = {
    mern: {
      title: "MERN Stack",
      subtitle: "MongoDB + Express.js + React + Node.js",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-400 to-cyan-500",
      sections: [
        {
          category: "Frontend",
          icon: <Layout className="w-5 h-5" />,
          items: [
            {
              id: "mern-html-css",
              title: "HTML & CSS",
              description: "Structure & Styling - Foundation",
              videos: [
                { title: "Complete HTML & CSS Course", url: "https://youtu.be/G3e-cpL7ofc" },
                { title: "HTML CSS Tutorial", url: "https://youtu.be/HGTJBPNC-Gw" },
                { title: "CSS Masterclass", url: "https://youtu.be/HcOc7P5BMi4" },
                { title: "Advanced Styling", url: "https://youtu.be/ESnrn1kAD4E" }
              ]
            },
            {
              id: "mern-javascript",
              title: "JavaScript (Essential)",
              description: "Core language for MERN stack",
              videos: [
                { title: "JavaScript Complete Course", url: "https://youtu.be/EerdGm-ehJQ" },
                { title: "JS Fundamentals", url: "https://youtu.be/lfmg-EJ8gm4" },
                { title: "Modern JavaScript", url: "https://youtu.be/cpoXLj24BDY" }
              ]
            },
            {
              id: "mern-react",
              title: "React.js",
              description: "Frontend library (R in MERN)",
              videos: [
                { title: "React Complete Course", url: "https://youtu.be/TtPXvEcE11E" },
                { title: "React Tutorial", url: "https://youtu.be/CgkZ7MvWUAA" },
                { title: "React Projects", url: "https://youtu.be/eILUmCJhl64" }
              ]
            },
            {
              id: "mern-tailwind",
              title: "Tailwind CSS (Optional)",
              description: "Modern utility-based CSS",
              videos: [
                { title: "Tailwind Complete Guide", url: "https://youtu.be/6biMWgD6_JY" },
                { title: "Tailwind Tutorial", url: "https://youtu.be/-g969furGik" }
              ]
            }
          ]
        },
        {
          category: "Backend",
          icon: <Server className="w-5 h-5" />,
          items: [
            {
              id: "mern-nodejs",
              title: "Node.js & Express.js",
              description: "Backend runtime & framework (E & N in MERN)",
              videos: [
                { title: "Node.js Complete Course", url: "https://youtu.be/Oe421EPjeBE" }
              ]
            }
          ]
        },
        {
          category: "Database",
          icon: <Database className="w-5 h-5" />,
          items: [
            {
              id: "mern-mongodb",
              title: "MongoDB",
              description: "NoSQL Database (M in MERN)",
              videos: [
                { title: "MongoDB Tutorial", url: "https://youtu.be/c2M-rlkkT5o" }
              ]
            }
          ]
        }
      ]
    },
    python: {
      title: "Python Full Stack",
      subtitle: "Django/Flask + React + MongoDB/PostgreSQL",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-yellow-400",
      sections: [
        {
          category: "Frontend",
          icon: <Layout className="w-5 h-5" />,
          items: [
            {
              id: "python-html-css",
              title: "HTML & CSS",
              description: "Structure & Styling - Foundation",
              videos: [
                { title: "Complete HTML & CSS Course", url: "https://youtu.be/G3e-cpL7ofc" },
                { title: "HTML CSS Tutorial", url: "https://youtu.be/HGTJBPNC-Gw" },
                { title: "CSS Masterclass", url: "https://youtu.be/HcOc7P5BMi4" },
                { title: "Advanced Styling", url: "https://youtu.be/ESnrn1kAD4E" }
              ]
            },
            {
              id: "python-javascript",
              title: "JavaScript",
              description: "Frontend logic & interactivity",
              videos: [
                { title: "JavaScript Complete Course", url: "https://youtu.be/EerdGm-ehJQ" },
                { title: "JS Fundamentals", url: "https://youtu.be/lfmg-EJ8gm4" },
                { title: "Modern JavaScript", url: "https://youtu.be/cpoXLj24BDY" }
              ]
            },
            {
              id: "python-react",
              title: "React.js",
              description: "Modern frontend library",
              videos: [
                { title: "React Complete Course", url: "https://youtu.be/TtPXvEcE11E" },
                { title: "React Tutorial", url: "https://youtu.be/CgkZ7MvWUAA" },
                { title: "React Projects", url: "https://youtu.be/eILUmCJhl64" }
              ]
            },
            {
              id: "python-bootstrap",
              title: "Bootstrap (Optional)",
              description: "Quick UI components",
              videos: [
                { title: "Bootstrap Course", url: "https://youtu.be/-qfEOE4vtxE" },
                { title: "Bootstrap Tutorial", url: "https://youtu.be/Jd4SKMugUQ8" }
              ]
            }
          ]
        },
        {
          category: "Backend",
          icon: <Server className="w-5 h-5" />,
          items: [
            {
              id: "python-django",
              title: "Django",
              description: "Full-featured Python web framework with admin panel",
              videos: [
                { title: "Django Complete Course", url: "https://youtu.be/o0XbHvKxw7Y" }
              ]
            }
          ]
        },
        {
          category: "Database",
          icon: <Database className="w-5 h-5" />,
          items: [
            {
              id: "python-mongodb",
              title: "MongoDB",
              description: "NoSQL Database option",
              videos: [
                { title: "MongoDB Tutorial", url: "https://youtu.be/c2M-rlkkT5o" }
              ]
            },
            {
              id: "python-mysql",
              title: "MySQL / PostgreSQL",
              description: "SQL Database (works great with Django)",
              videos: [
                { title: "MySQL Complete Course", url: "https://youtu.be/5OdVJbNCSso" },
                { title: "MySQL Tutorial", url: "https://youtu.be/hlGoQC332VM" }
              ]
            }
          ]
        }
      ]
    },
    java: {
      title: "Java Full Stack",
      subtitle: "Spring Boot + React + MySQL/PostgreSQL",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      sections: [
        {
          category: "Frontend",
          icon: <Layout className="w-5 h-5" />,
          items: [
            {
              id: "java-html-css",
              title: "HTML & CSS",
              description: "Structure & Styling - Foundation",
              videos: [
                { title: "Complete HTML & CSS Course", url: "https://youtu.be/G3e-cpL7ofc" },
                { title: "HTML CSS Tutorial", url: "https://youtu.be/HGTJBPNC-Gw" },
                { title: "CSS Masterclass", url: "https://youtu.be/HcOc7P5BMi4" },
                { title: "Advanced Styling", url: "https://youtu.be/ESnrn1kAD4E" }
              ]
            },
            {
              id: "java-javascript",
              title: "JavaScript",
              description: "Frontend logic & interactivity",
              videos: [
                { title: "JavaScript Complete Course", url: "https://youtu.be/EerdGm-ehJQ" },
                { title: "JS Fundamentals", url: "https://youtu.be/lfmg-EJ8gm4" },
                { title: "Modern JavaScript", url: "https://youtu.be/cpoXLj24BDY" }
              ]
            },
            {
              id: "java-react",
              title: "React.js",
              description: "Modern frontend library",
              videos: [
                { title: "React Complete Course", url: "https://youtu.be/TtPXvEcE11E" },
                { title: "React Tutorial", url: "https://youtu.be/CgkZ7MvWUAA" },
                { title: "React Projects", url: "https://youtu.be/eILUmCJhl64" }
              ]
            },
            {
              id: "java-bootstrap",
              title: "Bootstrap (Optional)",
              description: "Enterprise UI components",
              videos: [
                { title: "Bootstrap Course", url: "https://youtu.be/-qfEOE4vtxE" },
                { title: "Bootstrap Tutorial", url: "https://youtu.be/Jd4SKMugUQ8" }
              ]
            }
          ]
        },
        {
          category: "Backend",
          icon: <Server className="w-5 h-5" />,
          items: [
            {
              id: "java-springboot",
              title: "Spring Boot",
              description: "Enterprise-level Java backend framework",
              videos: [
                { title: "Spring Boot Tutorial", url: "https://youtu.be/-Fe0zk-F4OA" }
              ]
            }
          ]
        },
        {
          category: "Database",
          icon: <Database className="w-5 h-5" />,
          items: [
            {
              id: "java-mysql",
              title: "MySQL / PostgreSQL",
              description: "SQL Database (standard for enterprise Java apps)",
              videos: [
                { title: "MySQL Complete Course", url: "https://youtu.be/5OdVJbNCSso" },
                { title: "MySQL Tutorial", url: "https://youtu.be/hlGoQC332VM" }
              ]
            }
          ]
        }
      ]
    },
    common: {
      title: "Essential Tools (All Stacks)",
      subtitle: "Required skills for any full stack developer",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      items: [
        {
          id: "git",
          title: "Git & GitHub",
          description: "Version control - ESSENTIAL for all developers",
          videos: [{ title: "Git & GitHub", url: "https://www.youtube.com/watch?v=zTjRZNkhiEU" }]
        },
        {
          id: "apis",
          title: "REST APIs / GraphQL",
          description: "Backend-Frontend communication",
          videos: [{ title: "REST APIs / GraphQL", url: "https://www.youtube.com/watch?v=ZQL7tL2S0oQ" }]
        },
        {
          id: "auth",
          title: "Authentication",
          description: "JWT, OAuth, Session management",
          videos: [{ title: "Authentication", url: "https://www.youtube.com/watch?v=nI8PYZNFtac" }]
        },
        {
          id: "deployment",
          title: "Deployment",
          description: "Render, Vercel, Netlify, Heroku",
          videos: [{ title: "Deployment", url: "https://www.youtube.com/watch?v=YFTu3WDuYLs" }]
        },
        {
          id: "docker",
          title: "Docker (Optional)",
          description: "Containerization & DevOps basics",
          videos: [{ title: "Docker", url: "https://www.youtube.com/watch?v=GFgJkfScVNU" }]
        }
      ]
    }
  };

  const fullCourse = {
    title: "Complete Full Stack Course",
    url: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"
  };

  const ProgressBar = () => {
    const totalItems = selectedStack === 'all'
      ? Object.values(roadmapData).reduce((acc: number, stack: any) => {
          if (stack.sections) {
            return acc + stack.sections.reduce((sum: number, section: any) => sum + section.items.length, 0);
          }
          return acc + (stack.items?.length || 0);
        }, 0)
      : (roadmapData[selectedStack]?.sections?.reduce((sum: number, section: any) => sum + section.items.length, 0) || 0) +
        (selectedStack !== 'common' ? roadmapData.common.items.length : 0);

    const completed = Object.keys(completedItems).filter(key => completedItems[key]).length;
    const percentage = totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;

    return (
      <div className="mb-8 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-700">Your Progress</span>
          <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{completed} of {totalItems} topics completed</p>
      </div>
    );
  };

  const renderStackSection = (stackKey: string, stackData: any) => {
    if (stackData.sections) {
      return stackData.sections.map((section: any, idx: number) => (
        <div key={idx} className="mb-4">
          <div className="flex items-center gap-2 mb-3 text-gray-700">
            {section.icon}
            <h3 className="text-lg font-bold">{section.category}</h3>
          </div>
          <div className="space-y-3">
            {section.items.map((item: any) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-gray-50">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleComplete(item.id)}
                    className="mt-1 flex-shrink-0"
                  >
                    {completedItems[item.id] ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300" />
                    )}
                  </button>

                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                    {item.videos.length > 0 && (
                      <div className="space-y-2">
                        {item.videos.map((video: any, idx: number) => (
                          <a
                            key={idx}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm group"
                          >
                            <Youtube className="w-4 h-4" />
                            <span className="group-hover:underline">{video.title}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    } else if (stackData.items) {
      return (
        <div className="space-y-3">
          {stackData.items.map((item: any) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-gray-50">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleComplete(item.id)}
                  className="mt-1 flex-shrink-0"
                >
                  {completedItems[item.id] ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300" />
                  )}
                </button>

                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                  {item.videos.length > 0 && (
                    <div className="space-y-2">
                      {item.videos.map((video: any, idx: number) => (
                        <a
                          key={idx}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm group"
                        >
                          <Youtube className="w-4 h-4" />
                          <span className="group-hover:underline">{video.title}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Full Stack Developer Roadmap
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Choose your stack and master the complete path
          </p>
          <p className="text-sm text-gray-500 italic">
            "Every expert was once a beginner. Happy learning!"
          </p>
        </div>

        <div className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Complete Full Stack Course (Recommended)</h3>
              <p className="text-blue-100">Start here for a comprehensive learning path</p>
            </div>
            <a
              href={fullCourse.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              Watch Course
            </a>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Choose Your Learning Path:</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedStack('all')}
              className={`p-4 rounded-lg border-2 transition ${
                selectedStack === 'all'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-gray-800">All Stacks</div>
              <div className="text-xs text-gray-600 mt-1">View Everything</div>
            </button>

            {Object.entries(stacks).map(([key, stack]) => (
              <button
                key={key}
                onClick={() => setSelectedStack(key)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedStack === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{stack.icon}</div>
                <div className="font-semibold text-gray-800">{stack.name}</div>
                <div className="text-xs text-gray-600 mt-1">{stack.description}</div>
              </button>
            ))}
          </div>
        </div>

        <ProgressBar />

        <div className="space-y-6">
          {selectedStack === 'all' ? (
            Object.entries(roadmapData).map(([key, stackData]: [string, any]) => (
              <div key={key}>
                <div
                  className={`bg-gradient-to-r ${stackData.color} rounded-t-lg p-4 cursor-pointer`}
                  onClick={() => toggleSection(key)}
                >
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      {stackData.icon}
                      <div>
                        <h2 className="text-2xl font-bold">{stackData.title}</h2>
                        <p className="text-sm opacity-90">{stackData.subtitle}</p>
                      </div>
                    </div>
                    {expandedSections[key] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </div>

                {expandedSections[key] !== false && (
                  <div className="bg-white rounded-b-lg shadow-lg p-6">
                    {renderStackSection(key, stackData)}
                  </div>
                )}
              </div>
            ))
          ) : (
            <>
              <div>
                <div className={`bg-gradient-to-r ${roadmapData[selectedStack].color} rounded-lg p-4`}>
                  <div className="flex items-center gap-3 text-white">
                    {roadmapData[selectedStack].icon}
                    <div>
                      <h2 className="text-2xl font-bold">{roadmapData[selectedStack].title}</h2>
                      <p className="text-sm opacity-90">{roadmapData[selectedStack].subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-b-lg shadow-lg p-6 mt-2">
                  {renderStackSection(selectedStack, roadmapData[selectedStack])}
                </div>
              </div>

              {selectedStack !== 'common' && (
                <div>
                  <div className={`bg-gradient-to-r ${roadmapData.common.color} rounded-lg p-4`}>
                    <div className="flex items-center gap-3 text-white">
                      {roadmapData.common.icon}
                      <div>
                        <h2 className="text-2xl font-bold">{roadmapData.common.title}</h2>
                        <p className="text-sm opacity-90">{roadmapData.common.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-b-lg shadow-lg p-6 mt-2">
                    {renderStackSection('common', roadmapData.common)}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-8 text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Tips:</h3>
          <div className="text-gray-600 space-y-2">
            <p>Build projects after each step to reinforce learning</p>
            <p>Choose ONE backend stack and master it completely</p>
            <p>Don't rush - quality learning takes time</p>
            <p className="mt-4 text-sm text-gray-500">
              Follow <strong className="text-blue-600">Vamsi Journey</strong> for more updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackRoadmap;
