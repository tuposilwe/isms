import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const useControlNumber = () => {
  const params = useLocalSearchParams<{ controlNumber?: string }>();
  const [selectedTab, setSelectedTab] = useState(
    params.controlNumber || "Tuition Fee Control Number"
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

export default useControlNumber;
