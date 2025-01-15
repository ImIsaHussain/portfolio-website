import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (containerRef, sectionsRef) => {
  const [scrollY, setScrollY] = useState(0);

  const getSectionHeights = useCallback(
    (sections) => Array.from(sections.children).map((section) => section.offsetHeight),
    []
  );

  const getTotalHeight = useCallback(
    (sectionHeights) => sectionHeights.reduce((total, height) => total + height, 0),
    []
  );

  const updateSections = useCallback((sections, sectionHeights, totalHeight, scrollPos) => {
    const sectionElements = Array.from(sections.children);
    requestAnimationFrame(() => {
      sectionElements.forEach((section, i) => {
        const prevHeight = sectionHeights
          .slice(0, i)
          .reduce((sum, height) => sum + height, 0);
        const y = ((prevHeight + scrollPos) % totalHeight);
        const finalY = y > totalHeight - sectionHeights[i] ? y - totalHeight : y;
        const el = section;
        el.style.transform = `translate3d(0, ${finalY}px, 0)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !sectionsRef.current) {
      return undefined;
    }

    const container = containerRef.current;
    const sections = sectionsRef.current;
    const sectionHeights = getSectionHeights(sections);
    const totalHeight = getTotalHeight(sectionHeights);

    const handleScroll = (e) => {
      e.preventDefault();
      setScrollY((prev) => {
        const newScroll = prev - e.deltaY * 0.5;
        const wrapped = ((newScroll % totalHeight) + totalHeight) % totalHeight;
        updateSections(sections, sectionHeights, totalHeight, wrapped);
        return wrapped;
      });
    };

    // Initial setup
    updateSections(sections, sectionHeights, totalHeight, scrollY);

    // Add event listeners
    container.addEventListener('wheel', handleScroll, { passive: false });

    // Handle window resize
    const handleResize = () => {
      const newSectionHeights = getSectionHeights(sections);
      const newTotalHeight = getTotalHeight(newSectionHeights);
      updateSections(sections, newSectionHeights, newTotalHeight, scrollY);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef, sectionsRef, scrollY, updateSections, getSectionHeights, getTotalHeight]);

  return scrollY;
};

export default useInfiniteScroll;
