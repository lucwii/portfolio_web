import { Card, CardTitle, CardHeader, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';
import { CardContent, CardFooter } from './Card';
import { Github, ExternalLink, Eye, Star, Calendar, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Live Chatting E-commerce Platform",
      description: "A modern, full-stack e-commerce platform featuring real-time chat, secure authentication, and seamless shopping experience. Built with cutting-edge technologies for optimal performance.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Socket.io"],
      githubLink: "https://github.com/lucwii/renova",
      liveLink: "#",
      featured: true,
      status: "Completed",
      date: "2024",
      category: "Full Stack"
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for managing portfolio content with analytics, project tracking, and content management system. Features responsive design and dark mode support.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      status: "In Progress",
      date: "2024",
      category: "Dashboard"
    },
    {
      title: "AI Task Management App",
      description: "Intelligent task management application with AI-powered suggestions, priority optimization, and team collaboration features. Includes advanced filtering and analytics.",
      technologies: ["React.js", "Node.js", "MongoDB", "OpenAI API"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      status: "Completed",
      date: "2023",
      category: "AI & Productivity"
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id='projects' className="py-20 bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/10">
      <div className="container mx-auto px-4">
        <div className='mx-auto max-w-7xl'>
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              My Latest{' '}
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent'>
                Projects
              </span>
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Explore my recent work showcasing modern web development, innovative solutions, 
              and cutting-edge technologies. Each project represents a unique challenge solved with creativity and technical expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className='overflow-hidden group relative border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm'>
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 mt-5 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-16 text-white">
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </div>
                  
                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    {/* <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button> */}
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                        <Github />
                        Github Repo
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex justify-between items-center border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground p-2"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground p-2"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button
              href='https://github.com/lucwii' 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;