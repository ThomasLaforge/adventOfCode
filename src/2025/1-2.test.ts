import { describe, expect, test } from "vitest";
import { exoOnePartTwo } from "./1";

const exampleData = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82"
];

describe("exercice 1 part 2", () => {
  test("training data", () => {
    expect(exoOnePartTwo(exampleData)).toBe(6);
  });

  describe("not complete turn", () => {
    test("right", () => {
      const data = ["R49"];
      expect(exoOnePartTwo(data)).toBe(0);
    });
    test("left", () => {
      const data = ["L49"];
      expect(exoOnePartTwo(data)).toBe(0);
    });
  });

  describe("complete turn (value < 100", () => {
    test("only one turn right exact", () => {
      const data = ["R50"];
      expect(exoOnePartTwo(data)).toBe(1);
    });

    test("only one turn right more", () => {
      const data = ["R99"];
      expect(exoOnePartTwo(data)).toBe(1);
    });
  });

  describe("complete turns (value > 100)", () => {
    test("only one turn right", () => {
      const data = ["R100"];
      expect(exoOnePartTwo(data)).toBe(1);
    });

    test("only one turn left", () => {
      const data = ["L100"];
      expect(exoOnePartTwo(data)).toBe(1);
    });

    test("two turns right (value > 100 && < 200", () => {
      const data = ["R160"];
      expect(exoOnePartTwo(data)).toBe(2);
    });

    test("two turns left (value > 100 && < 200", () => {
      const data = ["L160"];
      expect(exoOnePartTwo(data)).toBe(2);
    });
  });
});
