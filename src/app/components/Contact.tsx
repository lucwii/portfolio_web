"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const DURATION = 0.25;
const STAGGER = 0.025;

// FlipLink komponenta
const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase transition-colors"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-blue-600 dark:text-blue-400"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/10' id='contact'>
      <div className='container mx-auto px-4'>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Let's Connect
            </div>
            <h2 className='text-4xl md:text-6xl leading-tight mb-6 font-bold'>
              Get In{' '}
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent'>
                Touch
              </span>
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Let's discuss your next project or explore opportunities to work together. 
              I'm always excited to hear about new challenges and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info & Social Links */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a 
                          href="mailto:your.email@example.com" 
                          className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          milanoviclukaa23@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a 
                          href="tel:+1234567890" 
                          className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
                          +381 69 2700450
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                        <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Belgrade, Serbia</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Links with FlipLink */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  Follow Me
                </h3>
                <div className="space-y-4 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl">
                  <FlipLink href="https://github.com/yourusername">GitHub</FlipLink>
                  <FlipLink href="https://linkedin.com/in/yourusername">LinkedIn</FlipLink>
                  <FlipLink href="https://twitter.com/yourusername">Twitter</FlipLink>
                  <FlipLink href="https://instagram.com/yourusername">Instagram</FlipLink>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Send a Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex-col items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                  asChild
                >
                  <a href="mailto:milanoviclukaa23@gmail.com">
                    <Mail className="w-6 h-6" />
                    <span className="text-sm font-medium">Quick Email</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-auto p-4 flex-col items-center gap-2 hover:bg-green-50 dark:hover:bg-green-950/50 hover:border-green-300 dark:hover:border-green-700 transition-all"
                  asChild
                >
                  <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-6 h-6" />
                    <span className="text-sm font-medium">Schedule Call</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-20 pt-12 border-t border-border/50">
            <p className="text-muted-foreground">
              Currently available for new projects and collaborations.{' '}
              <span className="text-green-500 font-medium">● Available</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;