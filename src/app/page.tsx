import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Welcome, Citizen!
        </h1>
        <p className="text-muted-foreground">
          Here's your personalized guide for upcoming civic duties.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Elections &amp; Deadlines
            </CardTitle>
            <CardDescription>Based on your registered address.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-secondary p-2">
                  <span className="text-sm font-bold text-primary">NOV</span>
                  <span className="text-2xl font-bold">05</span>
                </div>
                <div>
                  <h3 className="font-semibold">General Election</h3>
                  <p className="text-sm text-muted-foreground">
                    Presidential, Senate, House of Representatives
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Voter Registration Deadline: Oct 15, 2024
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-secondary p-2">
                  <span className="text-sm font-bold text-primary">DEC</span>
                  <span className="text-2xl font-bold">10</span>
                </div>
                <div>
                  <h3 className="font-semibold">Local Runoff Election</h3>
                  <p className="text-sm text-muted-foreground">
                    City Council District 3
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Early Voting: Dec 1 - Dec 7, 2024
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Your Polling Place
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/600/400"
                alt="Map to polling place"
                fill
                className="object-cover"
                data-ai-hint="map location"
              />
            </div>
            <div>
              <h3 className="font-semibold">Main Street Elementary School</h3>
              <p className="text-sm text-muted-foreground">
                123 Main St, Anytown, USA 12345
              </p>
              <p className="text-sm text-muted-foreground">
                Hours: 7:00 AM - 7:00 PM
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Get Directions <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
