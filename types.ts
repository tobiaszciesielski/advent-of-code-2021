export type SubmarineDirection = "forward" | "down" | "up";

export type Bit = "1" | "0";

export interface SubmarineStep {
  direction: SubmarineDirection;
  unit: number;
}
