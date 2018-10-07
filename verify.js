function verifyProof(proof, node, root, concat) {
    let currentHash = node;

    for (let i = 0; i < proof.length; i++) {
        let p = proof[i];

        if (p.left) {
            currentHash = concat(p.data, currentHash);
        } else {
            currentHash = concat(currentHash, p.data);
        }
    }

    return currentHash.equals(root);
}

module.exports = verifyProof;
