import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, Globe } from "lucide-react";

const SDGSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">UN Sustainable Development Goals Alignment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MamaMia AI directly contributes to achieving the UN's 2030 Agenda for Sustainable Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* SDG 5 - Gender Equality */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">SDG 5</Badge>
                  <CardTitle className="text-xl">Gender Equality</CardTitle>
                </div>
              </div>
              <CardDescription>
                Empowering women and girls through economic opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 5.5: Ensure women's full participation in economic life</p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 5.A: Give women equal rights to economic resources</p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 5.B: Promote technology for women's empowerment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SDG 8 - Decent Work */}
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">SDG 8</Badge>
                  <CardTitle className="text-xl">Decent Work & Economic Growth</CardTitle>
                </div>
              </div>
              <CardDescription>
                Promoting sustained, inclusive economic growth and productive employment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 8.3: Support entrepreneurship and job creation</p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 8.5: Achieve full employment and decent work for all</p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm">Target 8.9: Promote sustainable tourism and local culture</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problem Statement */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">The Problem We're Solving</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed">
                <strong>70% of African women entrepreneurs</strong> lack access to quality business education and 
                digital literacy programs. Traditional training requires physical presence, costs money, and 
                doesn't fit into busy schedules of women managing businesses and families.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Lack business training access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">85%</div>
                  <div className="text-sm text-muted-foreground">Use WhatsApp daily</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">95%</div>
                  <div className="text-sm text-muted-foreground">Prefer mobile learning</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;