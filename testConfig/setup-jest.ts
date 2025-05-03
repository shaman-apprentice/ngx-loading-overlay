import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone/index.mjs';
import '@testing-library/jest-dom';

setupZoneTestEnv();

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver;
