// Benchmark: Pre-allocate vs Dynamic push

const ITERATIONS = 9999999;

// Test 1: Dynamic push (no pre-allocation)
console.time("⏱️  Dynamic push");
const arr1: number[] = [];
for (let i = 0; i < ITERATIONS; i++) {
  arr1.push(i);
}
console.timeEnd("⏱️  Dynamic push");

// Test 2: Pre-allocated with index assignment
console.time("⏱️  Pre-allocated [index]");
const arr2 = new Array(ITERATIONS);
for (let i = 0; i < ITERATIONS; i++) {
  arr2[i] = i;
}
console.timeEnd("⏱️  Pre-allocated [index]");

// Test 3: Pre-allocated but still use push (WORST)

console.log("\nArray lengths:");
console.log("arr1 (dynamic):", arr1.length);
console.log("arr2 (pre-alloc [i]):", arr2.length);
