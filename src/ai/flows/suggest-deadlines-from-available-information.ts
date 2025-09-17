'use server';

/**
 * @fileOverview An AI tool that suggests optimal deadlines for project components based on available information.
 *
 * - suggestDeadlines - A function that takes project information and suggests deadlines.
 * - SuggestDeadlinesInput - The input type for the suggestDeadlines function.
 * - SuggestDeadlinesOutput - The return type for the suggestDeadlines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDeadlinesInputSchema = z.object({
  projectInfo: z
    .string()
    .describe(
      'Detailed information about the project components, their current status, and any known dependencies.'
    ),
});
export type SuggestDeadlinesInput = z.infer<typeof SuggestDeadlinesInputSchema>;

const SuggestDeadlinesOutputSchema = z.object({
  suggestedDeadlines: z
    .string()
    .describe(
      'A list of suggested deadlines for each project component, based on the provided project information.'
    ),
});
export type SuggestDeadlinesOutput = z.infer<typeof SuggestDeadlinesOutputSchema>;

export async function suggestDeadlines(input: SuggestDeadlinesInput): Promise<SuggestDeadlinesOutput> {
  return suggestDeadlinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDeadlinesPrompt',
  input: {schema: SuggestDeadlinesInputSchema},
  output: {schema: SuggestDeadlinesOutputSchema},
  prompt: `You are an AI assistant that helps users manage their project timelines by suggesting optimal deadlines for each component.

  Analyze the following project information and suggest deadlines for each component. Take into account dependencies between tasks, task complexity and time requirements.

  Project Information: {{{projectInfo}}}
  `,
});

const suggestDeadlinesFlow = ai.defineFlow(
  {
    name: 'suggestDeadlinesFlow',
    inputSchema: SuggestDeadlinesInputSchema,
    outputSchema: SuggestDeadlinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
