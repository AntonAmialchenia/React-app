import { useState } from "react";

export const useFetching = (callback: (...args) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error] as const;
};
