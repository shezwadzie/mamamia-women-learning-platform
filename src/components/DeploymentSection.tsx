import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Smartphone, Globe, Zap, Shield, Monitor, GitBranch, Package } from "lucide-react";

const DeploymentSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Deployment & Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scalable, secure, and sustainable infrastructure supporting thousands of learners
          </p>
        </div>

        <Tabs defaultValue="architecture" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="frameworks">Tools & Frameworks</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Frontend Layer</CardTitle>
                      <CardDescription>User interfaces and experiences</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Progressive Web App (PWA)</li>
                    <li>• WhatsApp Business API Integration</li>
                    <li>• React + TypeScript Dashboard</li>
                    <li>• Responsive Mobile-First Design</li>
                    <li>• Offline Capability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Backend Services</CardTitle>
                      <CardDescription>API and business logic</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Node.js Microservices</li>
                    <li>• RESTful API with GraphQL</li>
                    <li>• OpenAI GPT-4 Integration</li>
                    <li>• Real-time WebSocket Connections</li>
                    <li>• Automated Content Pipeline</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-success/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-success" />
                    <div>
                      <CardTitle>Data & Security</CardTitle>
                      <CardDescription>Storage and protection</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• MongoDB Atlas Database</li>
                    <li>• Redis Caching Layer</li>
                    <li>• End-to-End Encryption</li>
                    <li>• GDPR Compliance</li>
                    <li>• Automated Backups</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Architecture Diagram */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>System Architecture Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">WhatsApp Users</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-muted-foreground"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-2">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">API Gateway</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-muted-foreground"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-success rounded-lg flex items-center justify-center mb-2">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Cloud Services</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>CI/CD Pipeline</CardTitle>
                      <CardDescription>Automated deployment workflow</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                      <div>
                        <div className="font-medium">Code Commit</div>
                        <div className="text-sm text-muted-foreground">GitHub Actions trigger</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">2</div>
                      <div>
                        <div className="font-medium">Automated Testing</div>
                        <div className="text-sm text-muted-foreground">Unit, integration, and E2E tests</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center text-success font-bold">3</div>
                      <div>
                        <div className="font-medium">Build & Deploy</div>
                        <div className="text-sm text-muted-foreground">Docker containers to AWS/GCP</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Package className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Environment Management</CardTitle>
                      <CardDescription>Multi-stage deployment strategy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Development</Badge>
                        <span className="text-sm">Local testing environment</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Staging</Badge>
                        <span className="text-sm">Pre-production validation</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success text-success-foreground">Production</Badge>
                        <span className="text-sm">Live user environment</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <div className="text-sm font-medium mb-1">Current Status</div>
                    <div className="text-sm text-muted-foreground">✅ All environments healthy</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Scalability Features</CardTitle>
                <CardDescription>Built to handle growth from hundreds to millions of users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Auto-Scaling</h4>
                    <p className="text-sm text-muted-foreground">
                      Kubernetes orchestration with horizontal pod autoscaling based on CPU/memory usage
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Load Balancing</h4>
                    <p className="text-sm text-muted-foreground">
                      Geographic load distribution with CDN integration for optimal performance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Microservices</h4>
                    <p className="text-sm text-muted-foreground">
                      Independent service scaling allows targeted resource allocation where needed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Performance Monitoring</CardTitle>
                      <CardDescription>Real-time system health tracking</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Response Time</span>
                      <Badge variant="secondary">&lt; 200ms</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Uptime</span>
                      <Badge className="bg-success text-success-foreground">99.9%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Active Users</span>
                      <Badge variant="outline">1,247 online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Error Rate</span>
                      <Badge variant="secondary">&lt; 0.1%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle>Alerting System</CardTitle>
                      <CardDescription>Proactive issue detection and response</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Slack/Email notifications for critical issues</li>
                    <li>• Automated incident response workflows</li>
                    <li>• Performance threshold monitoring</li>
                    <li>• Model drift detection alerts</li>
                    <li>• Security breach early warning system</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI/ML Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">OpenAI GPT-4</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">NumPy</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">React 18</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Vite</Badge>
                    <Badge variant="outline">PWA</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Backend & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">Redis</Badge>
                    <Badge variant="outline">Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Testing & Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">Jest</Badge>
                    <Badge variant="outline">Playwright</Badge>
                    <Badge variant="outline">ESLint</Badge>
                    <Badge variant="outline">Prettier</Badge>
                    <Badge variant="outline">Husky</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">DevOps & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">AWS/GCP</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">Grafana</Badge>
                    <Badge variant="outline">Prometheus</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">UN Women Data</Badge>
                    <Badge variant="outline">World Bank APIs</Badge>
                    <Badge variant="outline">African Dev Bank</Badge>
                    <Badge variant="outline">Local NGO Partnerships</Badge>
                    <Badge variant="outline">User Analytics</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
              <CardHeader className="text-center">
                <CardTitle>Open Source Contributions</CardTitle>
                <CardDescription>Supporting the global development community</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  MamaMia AI contributes back to the open source ecosystem that made this project possible.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    <GitBranch className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    Read Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DeploymentSection;