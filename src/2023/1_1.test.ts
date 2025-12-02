import { describe, expect, test } from "vitest";
import { exerciseOnePartOneForStudents } from "./1";

describe("exercice 1", () => {
  describe("one line", () => {
    test("should be true", () => {
      const data = ["12"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });

    test("with element between", () => {
      const data = ["1___2"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });

    test("with other numbers", () => {
      const data = ["1992"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });

    test("with one number", () => {
      const data = ["1"];
      expect(exerciseOnePartOneForStudents(data)).toBe(11);
    });

    test("starting with a letter", () => {
      const data = ["a12"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });

    test("ending with a letter", () => {
      const data = ["12a"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });

    test("strating and ending with a letter", () => {
      const data = ["a12a"];
      expect(exerciseOnePartOneForStudents(data)).toBe(12);
    });
  });

  describe("multi numbers", () => {
    test("with simple numbers", () => {
      const data = ["10", "20"];
      expect(exerciseOnePartOneForStudents(data)).toBe(30);
    });

    test("with complex numbers", () => {
      const data = ["1----0", "2aaaaa0aaa", "2"];
      expect(exerciseOnePartOneForStudents(data)).toBe(10 + 20 + 22);
    });
  });

  describe("consign example", () => {
    test("with other numbers", () => {
      const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
      expect(exerciseOnePartOneForStudents(data)).toBe(142);
    });
  });
});
