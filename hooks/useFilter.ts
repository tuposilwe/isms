import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const useFilter = () => {
  const params = useLocalSearchParams<{ tab?: string }>();
  const [selectedTab, setSelectedTab] = useState(
    params.tab || "NTA Level 7 Year 1"
  );

  useEffect(() => {
    router.setParams({ tab: selectedTab });
  }, []);

  return {
    params,
    selectedTab,
    setSelectedTab,
  };
};

export default useFilter;
