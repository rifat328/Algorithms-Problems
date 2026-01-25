var topKFrequent = function (nums, k) {
  let map = new Map();

  // 1. Count Frequencies
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 2. Create Buckets
  // The size is nums.length + 1 because a number could appear up to N times.
  // We fill it with empty arrays to start.
  let buckets = Array.from({ length: nums.length + 1 }, () => []);

  // 3. Populate Buckets
  // If '1' appears 3 times, we push '1' into buckets[3]
  for (const [num, freq] of map) {
    buckets[freq].push(num);
  }

  // 4. Collect Results
  // Iterate from the END (highest frequency) down to 1
  let result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      // Add all numbers with this frequency to the result
      result.push(...buckets[i]);

      // If we have reached k elements, stop
      if (result.length >= k) {
        return result.slice(0, k);
      }
    }
  }
};
