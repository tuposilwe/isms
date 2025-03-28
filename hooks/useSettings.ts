import { useState } from "react";

const useSettings = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return {
    toggleModal,
    isModalVisible
  };
};

export default useSettings;
