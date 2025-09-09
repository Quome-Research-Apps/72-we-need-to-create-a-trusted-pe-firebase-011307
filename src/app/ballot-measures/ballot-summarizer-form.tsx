'use client';

import { useFlow } from '@genkit-ai/next/client';
import { useState } from 'react';

import { summarizeBallotMeasure } from '@/ai/flows/summarize-ballot-measure';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { BookText, Loader2, Terminal, ThumbsDown, ThumbsUp } from 'lucide-react';

export function BallotSummarizerForm() {
  const [ballotText, setBallotText] = useState('');
  const { run: summarize, result, error, inProgress } = useFlow(
    summarizeBallotMeasure
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ballotText.trim()) {
      summarize({ ballotMeasureText: ballotText });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Paste the full text of the ballot measure here..."
          value={ballotText}
          onChange={e => setBallotText(e.target.value)}
          rows={10}
          disabled={inProgress}
        />
        <Button type="submit" disabled={!ballotText.trim() || inProgress}>
          {inProgress && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {inProgress ? 'Analyzing...' : 'Summarize Measure'}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            An error occurred while summarizing the ballot measure. Please try
            again.
          </AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookText className="h-5 w-5 text-primary" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{result.summary}</p>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <ThumbsUp className="h-5 w-5" />
                  Arguments For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{result.argumentsFor}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <ThumbsDown className="h-5 w-5" />
                  Arguments Against
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {result.argumentsAgainst}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
