const txHash = await pg.program.methods.hello().rpc();
console.log(txHash);
