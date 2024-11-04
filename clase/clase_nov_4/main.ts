class TreeNode {
    private key1: number | null = null;
    private key2: number | null = null;
    private leftChild: TreeNode | null = null; 
    private middleChild: TreeNode | null = null;
    private rightChild: TreeNode |null = null; 
    private isLeaf: boolean = true; 

    public getKey1(): number | null {
        return this.key1;
    }

    public getKey2(): number | null {
        return this.key2;
    }

    public getLeftChild(): TreeNode | null {
        return this.leftChild;
    }

    public getMiddleChild(): TreeNode | null { 
        return this.middleChild;
    }

    public getRightChild(): TreeNode | null {
        return this.rightChild;
    }

    public setKey1(key: number): void {
        this.key1 = key;
    }

    public setKey2(key: number): void {
        this.key2 = key;
    }

    public setLeftChild(child: TreeNode | null): void {
        this.leftChild = child;
    }

    public setMiddleChild(child: TreeNode | null): void {
        this.middleChild = child;
    }

    public setRightChild(child: TreeNode | null): void {
        this.rightChild = child;
    }
}

