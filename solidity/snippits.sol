// Count by x
// Create a function with two arguments that will return an array of the first (n) multiples of (x). Return as an array
contract CountByX {

    function countBy(int x, int n) view returns (int[]) {
        int[] z;
        for (int i=1; i <= n; i ++) {
            z.push(i*x);
        }
        return z;
    }
}