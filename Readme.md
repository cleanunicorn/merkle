# Simple implementation of Merkle trees

To understand how things work you need to build them, hence this repo.

## Run tests

Install [mocha](https://mochajs.org/)
```
npm i -g mocha
```

Install the dependencies
```
npm i
```

Run test file
```
$ mocha test/testVerify.js

  merkle proof verification
    a given merkle tree
      untampered proofs
        ✓ should verify the proof for leaf index 0
        ✓ should verify the proof for leaf index 1
        ✓ should verify the proof for leaf index 2
        ✓ should verify the proof for leaf index 3
        ✓ should verify the proof for leaf index 4
        ✓ should verify the proof for leaf index 5
        ✓ should verify the proof for leaf index 6
        ✓ should verify the proof for leaf index 7
        ✓ should verify the proof for leaf index 8
        ✓ should verify the proof for leaf index 9
        ✓ should verify the proof for leaf index 10
      tampered proofs
        verifying a different node with a proof
          ✓ should not verify the proof
        verifying a different root
          ✓ should not verify the proof
        flipping a nodes position
          ✓ should not verify the proof
        editing a hash
          ✓ should not verify the proof
```

Tests are taken from [ChainShot](https://www.chainshot.com/)