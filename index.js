class MerkleTree {
    constructor(leaves, hasher) {
        this.leaves = leaves;
        this.hasher = hasher;
    }

    getRoot() {
        let leaves = this.leaves;
        while (leaves.length > 1) {
            leaves = this.getNextLevel(leaves);
        } 
        return leaves[0];
    }

    getProof(index) {
        let leaves = this.leaves;
        let hashList = [];
        let newIndex = index;

        while (leaves.length > 1) {
            if ((newIndex == leaves.length -1) && (this.odd(leaves.length))) {
                // wait for next level
            } else {
                if (this.even(newIndex)) {
                    hashList.push({
                        data: leaves[newIndex + 1],
                        left: false,
                    });
                } else {
                    hashList.push({
                        data: leaves[newIndex - 1],
                        left: true,
                    });
                }
            }
            newIndex = Math.floor(newIndex / 2);

            leaves = this.getNextLevel(leaves)
        }

        return hashList;
    }

    even(n) {
        return (n % 2) == 0;
    }

    odd(n) {
        return !this.even(n);
    }

    getNextLevel(leaves) {
        let newLevel = [];
        // Add even length items
        let evenLength = (leaves.length % 2 == 0) ? leaves.length : leaves.length - 1;

        for (let i = 0; i < evenLength; i+=2) {
            newLevel.push(this.hasher(leaves[i], leaves[i+1]));
        }

        // If the original length is not even, add the last item
        if (evenLength !== leaves.length) {
            newLevel.push(leaves[leaves.length - 1]);
        }

        return newLevel;
    }
}

module.exports = MerkleTree;
