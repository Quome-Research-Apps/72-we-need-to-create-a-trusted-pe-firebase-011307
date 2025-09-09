'use server';

/**
 * @fileOverview Summarizes ballot measures and provides arguments for and against them.
 *
 * - summarizeBallotMeasure - A function that summarizes a ballot measure.
 * - SummarizeBallotMeasureInput - The input type for the summarizeBallotMeasure function.
 * - SummarizeBallotMeasureOutput - The return type for the summarizeBallotMeasure function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBallotMeasureInputSchema = z.object({
  ballotMeasureText: z
    .string()
    .describe('The full text of the ballot measure to be summarized.'),
});
export type SummarizeBallotMeasureInput = z.infer<
  typeof SummarizeBallotMeasureInputSchema
>;

const SummarizeBallotMeasureOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the ballot measure.'),
  argumentsFor: z
    .string()
    .describe('Arguments in favor of the ballot measure.'),
  argumentsAgainst: z
    .string()
    .describe('Arguments against the ballot measure.'),
});
export type SummarizeBallotMeasureOutput = z.infer<
  typeof SummarizeBallotMeasureOutputSchema
>;

export async function summarizeBallotMeasure(
  input: SummarizeBallotMeasureInput
): Promise<SummarizeBallotMeasureOutput> {
  return summarizeBallotMeasureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBallotMeasurePrompt',
  input: {schema: SummarizeBallotMeasureInputSchema},
  output: {schema: SummarizeBallotMeasureOutputSchema},
  prompt: `You are an expert in summarizing complex legal and policy documents.

  Given the following ballot measure text, provide a concise summary of the measure, along with arguments for and against it.

  Ballot Measure Text: {{{ballotMeasureText}}}

  Summary:
  Arguments For:
  Arguments Against: `,
});

const summarizeBallotMeasureFlow = ai.defineFlow(
  {
    name: 'summarizeBallotMeasureFlow',
    inputSchema: SummarizeBallotMeasureInputSchema,
    outputSchema: SummarizeBallotMeasureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
