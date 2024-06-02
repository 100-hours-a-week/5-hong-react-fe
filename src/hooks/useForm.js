import { useCallback, useEffect, useState } from 'react';

const useForm = ({ initialValues, onSubmit, validateFn }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);

      if (Object.keys(errors).length === 0 && onSubmit) {
        const result = onSubmit();
        if (result instanceof Promise) await result;
      }
      setIsLoading(false);
    },
    [errors, onSubmit],
  );

  useEffect(() => {
    (async () => {
      const newError = validateFn ? await validateFn(values) : {};
      setErrors(newError);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return {
    // 5
    values,
    errors,
    isLoading,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useForm;
