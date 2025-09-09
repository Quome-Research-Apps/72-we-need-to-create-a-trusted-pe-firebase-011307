import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const candidates = [
  {
    name: 'Jane Doe',
    party: 'Independent',
    office: 'City Council, District 3',
    avatar: 'https://picsum.photos/200/200?random=1',
    platform:
      'Focus on improving public transportation, funding for parks and recreation, and promoting small businesses.',
    endorsements: ['Local Teachers Union', 'Downtown Business Association'],
  },
  {
    name: 'John Smith',
    party: 'Green Party',
    office: 'City Council, District 3',
    avatar: 'https://picsum.photos/200/200?random=2',
    platform:
      'Prioritizing environmental protection, renewable energy initiatives, and expanding community gardens.',
    endorsements: ['Sierra Club', 'Sunrise Movement'],
  },
];

export default function CandidatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Candidate Information Hub
        </h1>
        <p className="text-muted-foreground">
          Learn about the candidates running in your upcoming elections.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {candidates.map((candidate, index) => (
          <Card key={index}>
            <AccordionItem value={`item-${index}`} className="border-b-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={candidate.avatar}
                        alt={candidate.name}
                        data-ai-hint="person portrait"
                      />
                      <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{candidate.name}</CardTitle>
                      <CardDescription>{candidate.office}</CardDescription>
                      <Badge variant="secondary" className="mt-1">
                        {candidate.party}
                      </Badge>
                    </div>
                  </div>
                  <AccordionTrigger className="w-auto p-2 hover:no-underline" />
                </div>
              </CardHeader>
              <AccordionContent>
                <CardContent className="space-y-4 pt-0">
                  <div>
                    <h4 className="font-semibold">Platform</h4>
                    <p className="text-sm text-muted-foreground">
                      {candidate.platform}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Endorsements</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.endorsements.map(endorsement => (
                        <Badge key={endorsement} variant="outline">
                          {endorsement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
