import { useState, useEffect } from 'react';
import { GitHubEvent, GitHubActivity } from '../types';
import { GITHUB_USERNAME } from '../utils/constants';

export const useGitHubActivity = (): GitHubActivity => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check cache first
        const cacheKey = `github-activity-${GITHUB_USERNAME}`;
        const cached = localStorage.getItem(cacheKey);
        const cacheTime = localStorage.getItem(`${cacheKey}-time`);
        
        if (cached && cacheTime && Date.now() - parseInt(cacheTime) < 300000) { // 5 minutes cache
          setEvents(JSON.parse(cached));
          setLoading(false);
          return;
        }
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=5`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
            signal: controller.signal,
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub activity: ${response.status}`);
        }

        const data = await response.json();
        const events = data.slice(0, 5);
        
        // Cache the results
        localStorage.setItem(cacheKey, JSON.stringify(events));
        localStorage.setItem(`${cacheKey}-time`, Date.now().toString());
        
        setEvents(events);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          setError('Request timeout - please try again');
        } else {
          setError(err instanceof Error ? err.message : 'Failed to fetch GitHub activity');
        }
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  return { events, loading, error };
};
