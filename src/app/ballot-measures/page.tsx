import { BallotSummarizerForm } from './ballot-summarizer-form';

export default function BallotMeasuresPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Ballot Measure Summarizer
        </h1>
        <p className="text-muted-foreground">
          Paste the text of a ballot measure to get a clear, concise summary
          and analysis.
        </p>
      </div>
      <BallotSummarizerForm />
    </div>
  );
}
