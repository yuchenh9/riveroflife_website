import { useState, useEffect } from 'react';

const baseUrl = process.env.PUBLIC_URL || '';

function toImageUrl(folder, filename) {
  return `${baseUrl}/${folder}/${filename}`;
}

function filenameToAlt(filename) {
  return filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
}

export function useFolderImages(folder) {
  const [filenames, setFilenames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/images/${folder}`);
        if (!res.ok) {
          throw new Error(`Failed to load images (${res.status})`);
        }
        const files = await res.json();
        if (!cancelled) {
          setFilenames(Array.isArray(files) ? files : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setFilenames([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [folder]);

  const images = filenames.map((filename) => ({
    src: toImageUrl(folder, filename),
    alt: filenameToAlt(filename),
  }));

  const urls = filenames.map((filename) => toImageUrl(folder, filename));

  return { images, urls, filenames, loading, error };
}

export default useFolderImages;
