// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Setup the Service Worker
export const worker = setupWorker(...handlers);
