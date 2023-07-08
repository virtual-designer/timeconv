# timeconv

Converts short time strings into numeric values representing that time in seconds.

### Documentation

To use `timeconv` in your project, install it using the following command:

```
npm install timeconv
```

And then simply import it in your JS/TS file.

```ts
import timeconv from 'timeconv';
```

#### Functions

```ts
timeconv.stringToTimeInterval(input: string): { error: string | undefined, seconds: number }
```

This function takes a string input containing numbers and units, that represents time interval, and calculates the total seconds. If the calculation is successful, `seconds` will be a normal number and `error` will be `undefined`. Otherwise, `error` will be a string and `seconds` will be `NaN`.

##### Example

```ts
import timeconv from 'timeconv';

console.log(timeconv.stringToTimeInterval("1h45m30s")); // { error: undefined, seconds: 6330 }
```