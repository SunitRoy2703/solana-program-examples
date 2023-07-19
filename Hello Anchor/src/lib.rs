// Import anchor
use anchor_lang::prelude::*;

declare_id!("3B3jqJWJQDig1D8opLKMF2B2Aqs94kWjg3pQrmJ7mjD1");

#[program]
mod hello_world {
    use super::*;

    #[derive(Accounts)]
    pub struct Hello {}

    pub fn hello(_ctx: Context<Hello>) -> Result<()> {
        msg!("Hello, Anchor!");
        Ok(())
    }
}