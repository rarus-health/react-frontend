import { create } from "zustand";

interface StoreState {
  firstOnboardingComplited: boolean;
  completeOnboarding: () => void;
}

const useStore = create<StoreState>((set) => ({
  firstOnboardingComplited:
    Boolean(localStorage.getItem("firstOnboardingComplited")) || false,
  firstOnboardingCompleted: false, // State variable to track onboarding completion
  completeOnboarding: () => {
    localStorage.setItem("firstOnboardingComplited", "true"); // Save to localStorage
    set({ firstOnboardingComplited: true }); // Update state
  },
}));
export default useStore;
