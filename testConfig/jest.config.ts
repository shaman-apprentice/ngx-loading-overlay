import type { Config } from 'jest';
import { createEsmPreset } from 'jest-preset-angular/presets';

export default {
  ...createEsmPreset({
    tsconfig: "<rootDir>/testConfig/tsconfig.test.json",
  }),
  rootDir: "..",
  setupFilesAfterEnv: ["<rootDir>/testConfig/setup-jest.ts"],
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
} satisfies Config;
