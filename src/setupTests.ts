import "@testing-library/jest-dom";

// Mock IntersectionObserver
class IntersectionObserver {
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {}

  observe(target: Element) {
    // Mock implementation
  }

  unobserve(target: Element) {
    // Mock implementation
  }

  disconnect() {
    // Mock implementation
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
