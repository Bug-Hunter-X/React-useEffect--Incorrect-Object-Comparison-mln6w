```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [someObject, setSomeObject] = useState({ a: 1, b: 2 });
  const previousSomeObject = usePrevious(someObject);

  useEffect(() => {
    // Correct: Compare stringified objects
    if (JSON.stringify(someObject) !== JSON.stringify(previousSomeObject)) {
      console.log('Object changed!');
    }
  }, [someObject]);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeObject({...someObject, a: someObject.a +1})}>Update Object</button>
    </div>
  );
}
```