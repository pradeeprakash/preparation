import { useState, useEffect, useRef, useCallback } from "react";

const AutoSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);

  // Dummy API function with a delay (mimics an actual API)
  const fetchSuggestions = async (query, page) => {
    if (!query) return [];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Array.from(
            { length: 10 },
            (_, i) => `${query} suggestion ${i + 1 + (page - 1) * 10}`
          )
        );
      }, 500);
    });
  };

  // Debounce function to prevent excessive API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // API Call with debounce
  const handleSearch = useCallback(
    debounce(async (q, page) => {
      setLoading(true);
      const data = await fetchSuggestions(q, page);
      setSuggestions(page === 1 ? data : (prev) => [...prev, ...data]); // Append results for pagination
      setLoading(false);
    }, 300),
    []
  );

  // Call API when query changes
  useEffect(() => {
    if (query) {
      setPage(1);
      handleSearch(query, 1);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Infinite Scroll using Intersection Observer
  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loading) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [loading]);

  // Fetch more results when page updates
  useEffect(() => {
    if (page > 1) handleSearch(query, page);
  }, [page]);

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {suggestions.map((item, index) => (
          <li
            key={index}
            style={{ padding: "5px", borderBottom: "1px solid #ddd" }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        ref={observerRef}
        style={{ height: "20px", background: "transparent" }}
      />
    </div>
  );
};

export default AutoSearch;
