"use server";

import { suggestDeadlines, type SuggestDeadlinesInput, type SuggestDeadlinesOutput } from "@/ai/flows/suggest-deadlines-from-available-information";

export async function suggestDeadlinesAction(input: SuggestDeadlinesInput): Promise<SuggestDeadlinesOutput> {
    try {
        const output = await suggestDeadlines(input);
        return output;
    } catch (error) {
        console.error("Error in suggestDeadlinesAction:", error);
        throw new Error("Failed to get suggestions from AI. Please try again later.");
    }
}
