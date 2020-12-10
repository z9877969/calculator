export const setResult = (action, prevResult, value) => {
    switch (action) {
      case "plus":
        return +prevResult + +value;
      case "minus":
        return +prevResult - +value;
  
      case "dev":
        return +prevResult / +value;
  
      case "mult":
        return +prevResult * +value;
  
      case "result":
        return +prevResult;
  
      default:
        return;
    }
  };