import { useState, useEffect } from 'react';

const API_BASE = 'https://alfa-leetcode-api.onrender.com';

/**
 * Fetches live LeetCode stats for a given username.
 * Falls back to `fallbackStats` if the request fails.
 */
export function useLeetCodeStats(username, fallbackStats) {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await fetch(`${API_BASE}/${username}/solved`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!cancelled) {
          setStats({
            easy:   data.easySolved   ?? fallbackStats.easy,
            medium: data.mediumSolved ?? fallbackStats.medium,
            hard:   data.hardSolved   ?? fallbackStats.hard,
          });
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          // keep fallbackStats already set as default
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStats();
    return () => { cancelled = true; };
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  return { stats, loading, error };
}
