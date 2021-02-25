import { expect } from "chai";
import { ethers } from "hardhat";


describe("Greeter", function(): void {
  it("Should return the new greeting once it's changed", async function() {
    const greeterFactory = await ethers.getContractFactory("Greeter");
    const greeter = await greeterFactory.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
