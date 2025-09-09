'use client';

import { useFlow } from '@genkit-ai/next/client';
import { useState } from 'react';

import { generateCivicEngagementPrompts } from '@/ai/flows/generate-civic-engagement-prompts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Lightbulb, Loader2, Sparkles, Terminal } from 'lucide-react';

export function CivicEngagementForm() {
  const [address, setAddress] = useState('Anytown, USA');
  const [interests, setInterests] = useState('environment, education');
  const { run: generatePrompts, result, error, inProgress } = useFlow(
    generateCivicEngagementPrompts
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim() && interests.trim()) {
      generatePrompts({ userAddress: address, interests: interests });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="address" className="text-sm font-medium">
                  Your Address
                </label>
                <Input
                  id="address"
                  placeholder="e.g., Anytown, USA"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  disabled={inProgress}
                />
              </div>
              <div>
                <label htmlFor="interests" className="text-sm font-medium">
                  Your Interests
                </label>
                <Input
                  id="interests"
                  placeholder="e.g., environment, education"
                  value={interests}
                  onChange={e => setInterests(e.target.value)}
                  disabled={inProgress}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={!address.trim() || !interests.trim() || inProgress}
            >
              {inProgress && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {inProgress ? (
                'Generating...'
              ) : (
                <>
                  {' '}
                  <Sparkles className="mr-2" /> Generate Ideas
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            An error occurred while generating suggestions. Please try again.
          </AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Your Personalized Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-3 text-muted-foreground">
              {result.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
