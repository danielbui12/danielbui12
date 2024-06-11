<alert type="info">
➡️ If you've ever used an Ethereum wallet, you might have found the address system a bit confusing. Ethereum addresses are 42 characters long, starting with '0x' and followed by 40 alphanumeric characters like **0x3D2...415**. This can be overwhelming, especially when you're dealing with multiple ERC20 tokens. But don't worry, Solana offers a more user-friendly approach.
</alert>

## Creating a Solana Wallet

Creating a Solana wallet is straightforward. Several browser and mobile app-based wallets support Solana. For advanced users or developers, command-line wallets may be more appropriate⁶. 

## Customizing Your Solana Wallet Address

Have you ever noticed that some Solana account addresses have defining prefixes or suffixes? That's not random. Solana's CLI has powerful tools to generate your own custom wallet address⁷. You can create a vanity wallet address, one that starts with a specific string. 


Let's dive into it.

- Make sure you've installed [Rust](https://solanacookbook.com/getting-started/installation.html#install-rust) and [Solana CLI](https://solanacookbook.com/getting-started/installation.html#install-cli)

- Once you complete install, run:

```shell
$ solana-keygen --version

solana-keygen 1.16.3 (src:bc7870f3; feat:2891131721, client:SolanaLabs)
```

- Now, this is the main part. We're going to use `solana-keygen grind` to create a new Solana wallet. Before it, let's read the doc by running

```shell
$ solana-keygen grind --help


...
        --starts-and-ends-with <PREFIX:SUFFIX:COUNT>
            Saves specified number of keypairs whos public key starts and ends with the indicated
            perfix and suffix
            Example: --starts-and-ends-with sol:ana:4
            PREFIX and SUFFIX type is Base58
            COUNT type is u64

        --starts-with <PREFIX:COUNT>
            Saves specified number of keypairs whos public key starts with the indicated prefix
            Example: --starts-with sol:4
            PREFIX type is Base58
            COUNT type is u64

...
```

As you can see `solana-keygen grind` allows you to customize address by passing `--starts-and-ends-with` or `--starts-with`

Now, I want to create my own wallet with prefix **"dani"** by running

```shell
$ solana-keygen grind --starts-with dani:1 --ignore-case
```

<alert type="warning">
⚠️  Solana addresses are represented in Base58 encoding. Base58 encoding is a modified version of Base64 encoding and made popular by Bitcoin.

As compared to Base64, it removes 6 characters which may cause confusion due to the similar look i.e. capital i [I], lowercase L [l], capital o [O], zero [0], plus [+] and slash [/]. This is done to remove any kind of ambiguity because addresses are a sensitive information and even single character if typed mistakenly can lead to the permanent loss of the funds.
</alert>


<alert type="secondary">
⚠️  Some custom text passing might be not matched in base58 address as I previously mentioned above.

```shell
Searching with 8 threads for:
        1 pubkey that starts with 'dani' and ends with ''
Searched 1000000 keypairs in 4s. 0 matches found.
Searched 2000000 keypairs in 9s. 0 matches found.
Searched 3000000 keypairs in 14s. 0 matches found.
Searched 4000000 keypairs in 19s. 0 matches found.
Searched 5000000 keypairs in 23s. 0 matches found.
Searched 6000000 keypairs in 28s. 0 matches found.
Searched 7000000 keypairs in 33s. 0 matches found.
Searched 8000000 keypairs in 39s. 0 matches found.
Searched 9000000 keypairs in 44s. 0 matches found.
Searched 10000000 keypairs in 50s. 0 matches found.
```
</alert>

Let's try a different one, starting with `ani`

```sh
$ solana-keygen grind --starts-with ani:1 --ignore-case

Searching with 8 threads for:
        1 pubkey that starts with 'ani' and ends with ''
Wrote keypair to aNi7a7dbuMSgSyaypUA5RYQ5isWWCgphtYFmmFhCbjk.json
```

You can see that it has found an address starting with **"ani"**. Because its format must be in base58, so the prefix is **"aNi"**.


Finally, you can use it for many purposes, for a wallet, for deploying a smart contract, ...

Solana address is much more powerful than Ethereum, you can read [this](https://solanacookbook.com/core-concepts/pdas.html#program-derived-addresses-pdas) or research it on Internet by "Solana PDA" keyword to understand more about it.

## Conclusion

Customizing your own wallet on Solana not only gives you a unique identity on the blockchain but also offers a more organized and user-friendly approach compared to Ethereum. However, always remember to keep your private keys secure and enjoy your journey in the Solana ecosystem!

---


## Reference:
[(1) The Ethereum address format and why it matters when using ... - MetaMask.](https://support.metamask.io/hc/en-us/articles/4702972178459-The-Ethereum-address-format-and-why-it-matters-when-using-MetaMask)

[(2) Solana Wallet Guide | Solana Docs.](https://docs.solana.com/wallet-guide)

[(3) How to Create a Custom Vanity Wallet Address using Solana CLI.](https://www.quicknode.com/guides/solana-development/getting-started/how-to-create-a-custom-vanity-wallet-address-using-solana-cli)

[(4) Ethereum Address vs Public Key - Ethereum Stack Exchange.](https://ethereum.stackexchange.com/questions/33171/ethereum-address-vs-public-key)

