import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Printer } from 'lucide-react';

const steps = [
  {
    title: 'Check Your Registration Status',
    description:
      "Before you register, make sure you aren't already registered to vote at your current address.",
    action: 'Check Status Online',
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    title: 'Register Online',
    description:
      "The easiest way to register. You'll need your state driver's license or ID card.",
    action: 'Register at vote.gov',
    icon: <ExternalLink className="h-5 w-5" />,
  },
  {
    title: 'Register by Mail',
    description:
      'You can also register by filling out a national mail-in voter registration form.',
    action: 'Download Form',
    icon: <Printer className="h-5 w-5" />,
  },
];

export default function VoterRegistrationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Voter Registration Assistant
        </h1>
        <p className="text-muted-foreground">
          Follow these steps to get registered and ready to vote.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              <Button>
                {step.icon}
                <span>{step.action}</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
