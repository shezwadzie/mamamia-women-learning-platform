import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, BookOpen, Award, Globe, DollarSign } from "lucide-react";

const ImpactDashboard = () => {
  // Sample data - in real implementation, this would come from your analytics API
  const learningData = [
    { month: 'Jan', completed: 120, enrolled: 150 },
    { month: 'Feb', completed: 180, enrolled: 200 },
    { month: 'Mar', completed: 250, enrolled: 280 },
    { month: 'Apr', completed: 320, enrolled: 350 },
    { month: 'May', completed: 420, enrolled: 450 },
    { month: 'Jun', completed: 580, enrolled: 600 },
  ];

  const countryData = [
    { name: 'Kenya', value: 35, color: '#e91e63' },
    { name: 'Nigeria', value: 25, color: '#9c27b0' },
    { name: 'Ghana', value: 15, color: '#673ab7' },
    { name: 'Uganda', value: 12, color: '#3f51b5' },
    { name: 'Others', value: 13, color: '#2196f3' },
  ];

  const impactMetrics = [
    {
      title: "Active Learners",
      value: "1,247",
      change: "+23%",
      icon: Users,
      description: "Women entrepreneurs actively using the platform",
      progress: 75
    },
    {
      title: "Courses Completed",
      value: "3,450",
      change: "+45%",
      icon: BookOpen,
      description: "Total microlearning modules finished",
      progress: 85
    },
    {
      title: "Business Skills Gained",
      value: "8,920",
      change: "+67%",
      icon: Award,
      description: "Individual skills certifications earned",
      progress: 92
    },
    {
      title: "Income Increase",
      value: "$2.3M",
      change: "+156%",
      icon: DollarSign,
      description: "Collective revenue increase reported by users",
      progress: 68
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Impact Monitoring & Results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time tracking of our contribution to SDG targets and learner success
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {metric.change} this month
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
                  <Progress value={metric.progress} className="mt-3 h-2" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Learning Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Learning Progress Over Time
              </CardTitle>
              <CardDescription>
                Monthly enrollment vs completion rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={learningData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="enrolled" fill="hsl(var(--muted))" />
                  <Bar dataKey="completed" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Geographic Reach
              </CardTitle>
              <CardDescription>
                User distribution across African countries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={countryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {countryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* SDG Impact Tracking */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">SDG Target Achievement</CardTitle>
            <CardDescription>Measuring our contribution to UN Sustainable Development Goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded text-white text-xs flex items-center justify-center">5</div>
                  SDG 5: Gender Equality Progress
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Women in Economic Leadership</span>
                      <span>73%</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Financial Literacy Training</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Digital Skills Acquisition</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-accent rounded text-white text-xs flex items-center justify-center">8</div>
                  SDG 8: Decent Work Progress
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Entrepreneurship Support</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Income Generation Improvement</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Decent Work Opportunities</span>
                      <span>62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">2,450</div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">$1.2M</div>
                <div className="text-sm text-muted-foreground">Avg Income Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImpactDashboard;