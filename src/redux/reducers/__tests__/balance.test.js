import balanceReducer from "../balance";
import balanceReducer2 from "../balance";
import {SET_BALANCE, DEPOSIT, WITHDRAW} from "../../constants";

describe("Balance reducer", () => {
  describe("when initializing", () => {
    const balance = 10;

    it("sets a balance", () => {
      expect(balanceReducer(undefined, {type: SET_BALANCE, balance})).toEqual(balance);
    });

    describe("then re-initializing", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });

  });

  it("deposits into the balance", () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, {type: DEPOSIT, deposit})).toEqual(initialState + deposit);
  });

  it("withdraws from the balance", () => {
    const initialState = 100;
    const withdrawal = 50;

    expect(balanceReducer(initialState, {type: WITHDRAW, withdrawal})).toEqual(initialState - withdrawal);
  });
}); 
