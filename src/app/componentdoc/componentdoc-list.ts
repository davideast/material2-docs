import { mdButton, mdCard } from './componentdocs';

export interface ComponentDoc {
  name: string;
  content: string;
}

export interface ComponentDocHash {
  [name: string]: string
}

export let componentDocHash = {
  "md-card": mdCard,
  "md-button": mdButton
};