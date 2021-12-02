export type SubmarineDirection = "forward" | "down" | "up";

export interface SubmarineStep {
  direction: SubmarineDirection;
  unit: number;
}
