import { Card, CardTitle } from '@/components/ui/card';
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Live chatting e-commerce platform",
            description: "Developed a modern e-commerce platform with user authentication, live chat functionality, and a shopping cart system. Built using React, TypeScript, Tailwind CSS, and Supabase for seamless backend integration.",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            githubLink: "#",
            featured: true
        },
        {
            title: "Live chatting e-commerce platform",
            description: "Developed a modern e-commerce platform with user authentication, live chat functionality, and a shopping cart system. Built using React, TypeScript, Tailwind CSS, and Supabase for seamless backend integration.",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            githubLink: "#",
            featured: true
        },
        {
            title: "Live chatting e-commerce platform",
            description: "Developed a modern e-commerce platform with user authentication, live chat functionality, and a shopping cart system. Built using React, TypeScript, Tailwind CSS, and Supabase for seamless backend integration.",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            githubLink: "#",
            featured: true
        },
    ]

    const featuredProjects = projects.filter(projects => projects.featured);
    const otherProjects = projects.filter(projects => !projects.featured)
  return (
    <section id='projects'>
        <div className="container mx-auto px-4">
            <div className='mx-auto max-w-6xl'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        Featured <span className='bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent'>Projects</span>
                    </h2>
                    <p className='text-xl font-semibold max-w-2xl mx-auto'>
                    A showcase of my recent work, featuring diverse projects that demonstrate my skills in modern web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <Card key={index} className='overflow-hidden hover-scale transition-smooth shadow-soft hover:shadow-large group'>
                            <div className='relative overflow-hidden'>
                                <CardTitle>
                                    {project.title}
                                </CardTitle>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects