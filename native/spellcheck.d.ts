export type SpellCheckEvent = "spellcheck-result";

export type SpellCheckListener = (
    misspelledWord: string,
    dictionarySuggestions: string[],
) => void;

export interface SpellCheck {
    getAvailableDictionaries(): Promise<string[]>;

    on(event: SpellCheckEvent, listener: SpellCheckListener): void;

    removeListener(event: SpellCheckEvent, listener: SpellCheckListener): void;

    replaceMisspelling(text: string): Promise<void>;

    setLearnedWords(words: string[]): Promise<void>;

    setLocale(locale: string): Promise<boolean>;
}
