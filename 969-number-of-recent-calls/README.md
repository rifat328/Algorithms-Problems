<h2><a href="https://leetcode.com/problems/number-of-recent-calls">Number of Recent Calls</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /><hr><p>You have a <code>RecentCounter</code> class which counts the number of recent requests within a certain time frame.</p>

<p>Implement the <code>RecentCounter</code> class:</p>

<ul>
	<li><code>RecentCounter()</code> Initializes the counter with zero recent requests.</li>
	<li><code>int ping(int t)</code> Adds a new request at time <code>t</code>, where <code>t</code> represents some time in milliseconds, and returns the number of requests that has happened in the past <code>3000</code> milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range <code>[t - 3000, t]</code>.</li>
</ul>

<p>It is <strong>guaranteed</strong> that every call to <code>ping</code> uses a strictly larger value of <code>t</code> than the previous call.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;]
[[], [1], [100], [3001], [3002]]
<strong>Output</strong>
[null, 1, 2, 3, 3]

<strong>Explanation</strong>
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [<u>1</u>], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [<u>1</u>, <u>100</u>], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [<u>1</u>, <u>100</u>, <u>3001</u>], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, <u>100</u>, <u>3001</u>, <u>3002</u>], range is [2,3002], return 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= t &lt;= 10<sup>9</sup></code></li>
	<li>Each test case will call <code>ping</code> with <strong>strictly increasing</strong> values of <code>t</code>.</li>
	<li>At most <code>10<sup>4</sup></code> calls will be made to <code>ping</code>.</li>
</ul>

🔑 The core idea

You’re building a system that tracks how many requests happened in the last 3000 milliseconds (3 seconds) — relative to the time of the current request.

So when a new request comes in at time t:

You add it to your history.

Then you throw away (ignore) all the old requests that happened before t - 3000.

The number of requests left = your answer.

📝 Example walkthrough

Input:
```javascript
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]

```
<ul>
<li></li>
</ul>
Step by step:

1.ping(1)
<ul>
<li>New request at t=1.</li>
<li>Range is [1-3000, 1] = [-2999, 1].</li>
<li>Only [1] fits.</li>
<li>✅ Answer = 1.</li>
</ul>


2.ping(100)
<ul>
<li>New request at t=100.</li>
<li>Range is [-2900, 100]..</li>
<li>Requests so far: [1, 100]. Both are inside range..</li>
<li>✅ Answer = 2.</li>
</ul>


3.ping(3001)
<ul>
<li>New request at t=3001.</li>
<li>Range is [1, 3001].</li>
<li>Requests so far: [1, 100, 3001]. All 3 inside range..</li>
<li>✅ Answer = 3.</li>
</ul>


4.ping(3002)
<ul>
<li>New request at t=3002.</li>
<li>Range is [2, 3002].</li>
<li>Requests so far: [1, 100, 3001, 3002].</li>
	<li>Notice 1 is too old (< 2), so remove it. Remaining: [100, 3001, 3002].</li>
<li>✅ Answer = 3.</li>
</ul>



🛠️ Implementation intuition

We need to:

Store all requests in order (a queue is perfect).

Each time ping(t) is called:

Add t to the queue.

Remove all requests < t-3000 from the front.

Return the size of the queue.





