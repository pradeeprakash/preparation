import { useState, useEffect, useRef, useCallback } from "react";

const fetchMoreData = async (page) => {
  // Simulate API call (replace with actual API)
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        Array.from({ length: 10 }, (_, i) => `Item ${page * 10 + i + 1}`)
      );
    }, 1000)
  );
};

export default function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const newItems = await fetchMoreData(page);
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [page, loading]);

  useEffect(() => {
    loadMore(); // Load initial data
  }, []);

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMore]
  );

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Infinite Scrolling</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            ref={index === items.length - 1 ? lastItemRef : null}
            style={{
              padding: "10px",
              margin: "5px",
              background: "#f3f3f3",
              borderRadius: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

// Why This Approach is Great?
// ✅ Uses Intersection Observer API → Detects when the last item is visible.
// ✅ Efficient Memory Usage → Only loads data when needed.
// ✅ Minimal Re-renders → Uses useCallback & useRef to avoid unnecessary updates.
// ✅ Clean & Scalable → Can be plugged into any API.

// 🚀 This is the best way to handle infinite scrolling efficiently in React!
// Let me know if you want further enhancements (e.g., Virtualization). 😃
