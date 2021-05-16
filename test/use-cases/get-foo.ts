import { getFoo } from "../../src/use-cases/get-foo";

test('should return foo', () => {
  expect(getFoo()).toEqual('GET foo');
})