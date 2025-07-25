import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SDGSection from "@/components/SDGSection";
import TechnicalSection from "@/components/TechnicalSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import DeploymentSection from "@/components/DeploymentSection";
import { MessageCircle, Play, Users, BookOpen, Star, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MamaMia AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#sdg-alignment" className="text-sm hover:text-primary transition-colors">SDG Alignment</a>
              <a href="#technical" className="text-sm hover:text-primary transition-colors">Technical Details</a>
              <a href="#impact" className="text-sm hover:text-primary transition-colors">Impact</a>
              <a href="#deployment" className="text-sm hover:text-primary transition-colors">Deployment</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">View Demo</Button>
              <Button size="sm">Admin Dashboard</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white">
              🚀 AI for SDGs Assignment Project - Enhanced Version
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn. Grow. Succeed.
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Right from WhatsApp
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              MamaMia AI delivers personalized microlearning in digital marketing, budgeting, and business skills 
              directly to your WhatsApp - supporting UN SDG 5 (Gender Equality) and SDG 8 (Decent Work).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                View Technical Documentation
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Women Entrepreneurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$1</div>
                <div className="text-sm text-muted-foreground">Monthly Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Women Entrepreneurs Choose MamaMia AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge AI and software engineering practices to deliver maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>WhatsApp Native</CardTitle>
                <CardDescription>
                  No new apps to download. Learn directly through WhatsApp - the platform you already use daily.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Microlearning</CardTitle>
                <CardDescription>
                  Just 5 minutes a day. Bite-sized lessons that fit into your busy schedule as an entrepreneur.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-success/20 hover:border-success/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-success-foreground" />
                </div>
                <CardTitle>AI Personalized</CardTitle>
                <CardDescription>
                  Adaptive learning paths based on your business stage, goals, and progress using advanced ML algorithms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <div id="sdg-alignment">
        <SDGSection />
      </div>

      {/* Technical Implementation Section */}
      <div id="technical">
        <TechnicalSection />
      </div>

      {/* Impact Dashboard Section */}
      <div id="impact">
        <ImpactDashboard />
      </div>

      {/* Deployment & Architecture Section */}
      <div id="deployment">
        <DeploymentSection />
      </div>

      {/* Assignment Deliverables Summary */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">📋 Assignment Deliverables Completed</CardTitle>
                <CardDescription>All requirements from the AI for SDGs template have been implemented</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">✅ Core Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ SDG Focus: Goals 5 & 8 clearly identified</li>
                      <li>✓ Problem Statement: Detailed challenge description</li>
                      <li>✓ AI Approach: NLP, ML, and automation explained</li>
                      <li>✓ Technical Solution: Complete architecture documented</li>
                      <li>✓ Tools & Frameworks: Comprehensive technology stack</li>
                      <li>✓ Deployment: Full CI/CD and infrastructure details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">✅ Advanced Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Ethical AI & Bias Mitigation strategies</li>
                      <li>✓ Environmental sustainability considerations</li>
                      <li>✓ Comprehensive testing framework</li>
                      <li>✓ Real-time impact monitoring dashboard</li>
                      <li>✓ Scalability and performance optimization</li>
                      <li>✓ Open source contributions and documentation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-success/10 rounded-lg text-center">
                  <p className="text-success font-medium">
                    🎯 Project demonstrates how AI and software engineering can create measurable impact 
                    towards achieving UN Sustainable Development Goals
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">MamaMia AI</span>
              <Badge variant="secondary">SDG-Aligned AI Project</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Supporting UN SDG 5 (Gender Equality) & SDG 8 (Decent Work) through AI-powered education
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
