import React, { useState } from "react";

const PalindromeForm = () => {
  const [palindromeInput, setPalindromeInput] = useState([]);

  const isPalindrome = (str) => {
    if (typeof str !== "string") return "Input requires a string";

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  const handlesPalindromeChange = (event) => {
    setPalindromeInput(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handlesPalindromeChange} />
      <button>Log Palindrome</button>
      {isPalindrome(palindromeInput) === false ? <p>False</p> : <p>True</p>}
    </div>
  );
};

export default PalindromeForm;
