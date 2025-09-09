'use server';
/**
 * @fileOverview A civic engagement prompt generator.
 *
 * - generateCivicEngagementPrompts - A function that handles the generation of civic engagement prompts.
 * - GenerateCivicEngagementPromptsInput - The input type for the generateCivicEngagementPrompts function.
 * - GenerateCivicEngagementPromptsOutput - The return type for the generateCivicEngagementPrompts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCivicEngagementPromptsInputSchema = z.object({
  userAddress: z
    .string()
    .describe('The address of the user to find nearby events.'),
  interests: z
    .string()
    .describe('The interests of the user to tailor the events.'),
});
export type GenerateCivicEngagementPromptsInput = z.infer<
  typeof GenerateCivicEngagementPromptsInputSchema
>;

const GenerateCivicEngagementPromptsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of personalized suggestions for getting involved in the community.'
    ),
});
export type GenerateCivicEngagementPromptsOutput = z.infer<
  typeof GenerateCivicEngagementPromptsOutputSchema
>;

export async function generateCivicEngagementPrompts(
  input: GenerateCivicEngagementPromptsInput
): Promise<GenerateCivicEngagementPromptsOutput> {
  return generateCivicEngagementPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCivicEngagementPromptsPrompt',
  input: {schema: GenerateCivicEngagementPromptsInputSchema},
  output: {schema: GenerateCivicEngagementPromptsOutputSchema},
  prompt: `You are a civic engagement assistant. You will provide a list of personalized suggestions for getting involved in the community based on the user's location and interests.

User Address: {{{userAddress}}}
User Interests: {{{interests}}}

Suggestions:`,
});

const generateCivicEngagementPromptsFlow = ai.defineFlow(
  {
    name: 'generateCivicEngagementPromptsFlow',
    inputSchema: GenerateCivicEngagementPromptsInputSchema,
    outputSchema: GenerateCivicEngagementPromptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
