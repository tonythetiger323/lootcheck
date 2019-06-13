import {SET_BALANCE, DEPOSIT, WITHDRAW} from "../../constants";
import * as actions from "../balance";

it("creates an action to set the balance", () => {
  const balance = 0;

  const expectedAction = {type: SET_BALANCE, balance};

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates an action to deposit into balance", () => {
  const deposit = 10;

  const expectedAction = {type: DEPOSIT, deposit};

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to withdraw from balance", () => {
  const withdrawal = 50;

  const expectedAction = {type: WITHDRAW, withdrawal};

  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});
