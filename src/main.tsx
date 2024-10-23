import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

async function startMSW() {
  if (process.env.NODE_ENV === 'development') {
    try {
      const { worker } = await import('../mocks/browser');
      await worker.start({
        onUnhandledRequest: 'bypass', // for assets o.l.
      });
    } catch (error) {
      console.error('Failed to start MSW', error);
    }
  }
}

startMSW().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
);
