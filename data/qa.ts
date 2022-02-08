import { Faq } from './../models/faq';

export const allFaqs: Faq[] = [
  {
    question: 'What is SWC?',
    answer: `SWC can be used for compilation, minification, bundling, and more – and is designed to be extended. It's something you can call to perform code transformations (either built-in or custom). Running those transformations happens through higher-level tools like Next.js.`,
  },
  {
    question: 'What is Preview Mode?',
    answer: `Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately on your page. You’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.`,
  },
];
