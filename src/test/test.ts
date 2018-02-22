import "mocha";
import "should";
import * as jetpack from "../taskbutt";

const initialState = {
  networks: [
    { type: "ssb", count: 1000 },
    { type: "ipfs", count: 100 },
    { type: "dat", count: 10 }
  ],
  user: {
    name: "jeswin"
  }
};

describe("taskbutt", async () => {
  it("Gets state", async () => {
  });
});
