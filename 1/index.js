const express = require('express');
const app = express();

const requestCounts = {};
const blockedIPs = {};

const REQUEST_LIMIT = 10;
const BLOCK_DURATION = 60 * 1000; 
app.use((req, res, next) => {
  const clientIP = req.ip;

  if (blockedIPs[clientIP]) {
    const currentTime = Date.now();
    if (blockedIPs[clientIP] > currentTime) {
      return res.status(429).json({ error: 'IP blocked due to excessive requests' });
    } else {
      delete blockedIPs[clientIP];
      delete requestCounts[clientIP];
    }
  }

  if (!requestCounts[clientIP]) {
    requestCounts[clientIP] = {
      count: 1,
      lastRequestTime: Date.now(),
    };
  } else {
    const { count, lastRequestTime } = requestCounts[clientIP];
    const currentTime = Date.now();

    if (currentTime - lastRequestTime > 60000) {
      requestCounts[clientIP] = {
        count: 1,
        lastRequestTime: currentTime,
      };
    } else {
      requestCounts[clientIP].count += 1;

      if (requestCounts[clientIP].count > REQUEST_LIMIT) {
        blockedIPs[clientIP] = currentTime + BLOCK_DURATION;
        return res.status(429).json({ error: 'IP blocked due to excessive requests' });
      }
    }
  }

  next();
});

app.get('/api', (req, res) => {
  res.json({ message: 'API response' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
