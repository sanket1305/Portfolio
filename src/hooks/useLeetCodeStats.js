import { useState, useEffect } from 'react';

/**
 * Reads LeetCode stats from the locally bundled /leetcode-stats.json.
 * That file is auto-updated daily by the GitHub Actions workflow
 * (.github/workflows/update-leetcode-stats.yml), so no external API
 * call is needed at runtime — zero CORS issues, zero cold-start delays.
 *
 * Falls back to `fallbackStats` (from portfolio.json) if the fetch fails.
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
        // BASE_URL = '/Portfolio/' on GitHub Pages, '/' in local dev
        const url = `${import.meta.env.BASE_URL}leetcode-stats.json`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!cancelled) {
          setStats({
            easy:   data.easy   ?? fallbackStats.easy,
            medium: data.medium ?? fallbackStats.medium,
            hard:   data.hard   ?? fallbackStats.hard,
          });
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          // fallbackStats already set as the initial state
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
