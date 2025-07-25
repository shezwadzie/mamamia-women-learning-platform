import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, Database, Shield, Zap, TestTube } from "lucide-react";

const TechnicalSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI & Software Engineering Implementation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern software engineering practices and ethical AI principles
          </p>
        </div>

        <Tabs defaultValue="ai-approach" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ai-approach">AI Approach</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="testing">Testing & QA</TabsTrigger>
            <TabsTrigger value="ethics">Ethics & Sustainability</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-approach" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Natural Language Processing</CardTitle>
                      <CardDescription>Personalized learning content generation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• GPT-4 integration for adaptive content creation</li>
                    <li>• Multilingual support (English, Swahili, French)</li>
                    <li>• Sentiment analysis for engagement tracking</li>
                    <li>• Automated quiz generation based on learning progress</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Database className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Machine Learning Pipeline</CardTitle>
                      <CardDescription>Automated data processing and insights</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Recommendation engine for learning paths</li>
                    <li>• Predictive analytics for completion rates</li>
                    <li>• Real-time personalization algorithms</li>
                    <li>• Automated A/B testing for content optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <p>React + TypeScript<br/>Tailwind CSS<br/>PWA Support</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <p>Node.js + Express<br/>WhatsApp Business API<br/>OpenAI GPT-4</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Infrastructure</h4>
                    <p>AWS/Google Cloud<br/>MongoDB Atlas<br/>Redis Caching</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engineering" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Software Engineering Practices</CardTitle>
                      <CardDescription>Industry-standard development workflow</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Git</Badge>
                      <span className="text-sm">Version control with feature branching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">CI/CD</Badge>
                      <span className="text-sm">Automated deployment pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Docker</Badge>
                      <span className="text-sm">Containerized microservices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Agile</Badge>
                      <span className="text-sm">Sprint-based development cycle</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Automation & Scalability</CardTitle>
                      <CardDescription>Built for growth and efficiency</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated content delivery scheduling</li>
                    <li>• Auto-scaling infrastructure based on usage</li>
                    <li>• Automated user onboarding workflows</li>
                    <li>• Performance monitoring and alerting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TestTube className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Comprehensive Testing Strategy</CardTitle>
                    <CardDescription>Ensuring reliability and quality</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Automated Testing</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Unit tests (Jest) - 90% coverage</li>
                      <li>• Integration tests for API endpoints</li>
                      <li>• End-to-end testing (Playwright)</li>
                      <li>• Performance testing with load simulation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">AI Model Validation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Content quality assessment metrics</li>
                      <li>• Bias detection in recommendation algorithms</li>
                      <li>• A/B testing for learning effectiveness</li>
                      <li>• Model drift monitoring and alerts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ethics" className="space-y-6">
            <Card className="border-2 border-success/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-success" />
                  <div>
                    <CardTitle>Ethical AI & Sustainability</CardTitle>
                    <CardDescription>Responsible AI development for social good</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-success">Bias Mitigation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Diverse training data from 15+ African countries</li>
                      <li>• Regular algorithmic bias audits</li>
                      <li>• Inclusive content review process</li>
                      <li>• Cultural sensitivity validation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-success">Environmental Impact</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Optimized AI models for energy efficiency</li>
                      <li>• Edge computing to reduce server load</li>
                      <li>• Green hosting with renewable energy</li>
                      <li>• Carbon footprint tracking and offsetting</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-success/10 rounded-lg">
                  <h4 className="font-semibold mb-2 text-success">Data Privacy & Security</h4>
                  <p className="text-sm">
                    GDPR-compliant data handling, end-to-end encryption for WhatsApp messages, 
                    user consent management, and transparent data usage policies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnicalSection;