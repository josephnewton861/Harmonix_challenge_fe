import React, { useState, useEffect } from "react";

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

  function useData() {
    useEffect(() => {
      axios
        .get(
          "https://0r00rlj7cb.execute-api.eu-west-2.amazonaws.com/prod/items"
        )
        .then((res) => {
          let response = res.data;
          setPalindromeList(response);
        });
    }, []);
    return palindromeList;
  }

  return (
    <div>
      <input type="text" onChange={handlesPalindromeChange} />
      <button>Log Palindrome</button>
      {isPalindrome(palindromeInput) === false ? <p>False</p> : <p>True</p>}
    </div>
  );
};

export default PalindromeForm;
