import { CivicEngagementForm } from './civic-engagement-form';

export default function CivicEngagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Civic Engagement Prompts
        </h1>
        <p className="text-muted-foreground">
          Discover personalized ways to get involved in your community.
        </p>
      </div>
      <CivicEngagementForm />
    </div>
  );
}
