import { timesTwo } from "./Functions.js";

test("Mulitplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});