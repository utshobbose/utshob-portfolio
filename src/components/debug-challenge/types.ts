export type ChallengeState =
  | "idle"
  | "stage-1"
  | "stage-2"
  | "deploying"
  | "success";

export interface ChoiceOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
}
