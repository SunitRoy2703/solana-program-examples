console.log(pg.PROGRAM_ID.toString());
// Get latest blockhash info
const blockhashInfo = await pg.connection.getLatestBlockhash();
// Create transaction
const tx = new web3.Transaction({
  ...blockhashInfo,
});
// Add our hello world program instruction
tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [],
    data: Buffer.from([]),
  })
);