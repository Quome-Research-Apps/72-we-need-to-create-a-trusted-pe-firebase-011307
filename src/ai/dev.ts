import { config } from 'dotenv';
config();

import '@/ai/flows/generate-civic-engagement-prompts.ts';
import '@/ai/flows/summarize-ballot-measure.ts';