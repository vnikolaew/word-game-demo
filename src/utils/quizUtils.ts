'use client'

export function getWordFromStimulus(stimulus: string) {
   const doc = new DOMParser().parseFromString(stimulus, 'text/html');
   return doc?.body?.textContent?.trim();
}